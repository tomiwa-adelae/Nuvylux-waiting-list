import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_PUBLIC_KEY!,
  apiSecret: process.env.MAILJET_API_PRIVATE_KEY!,
});

interface WaitlistData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  brandName?: string | null;
  instagram?: string | null;
  message?: string | null;
  position: number;
}

const userTypeLabels: Record<string, string> = {
  customer: "Customer",
  creator: "Creator",
  brand: "Brand Partner",
  investor: "Investor",
};

export async function sendWaitlistConfirmationEmail(data: WaitlistData) {
  const userTypeLabel = userTypeLabels[data.userType] || data.userType;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #0a0a0a; padding: 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: 2px;">NUVYLUX</h1>
                  <p style="color: #2E8B57; margin: 10px 0 0; font-size: 14px; letter-spacing: 1px;">THE NEW LIGHT OF LUXURY</p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="color: #0a0a0a; margin: 0 0 20px; font-size: 24px;">Welcome to the Future of Beauty, ${data.firstName}!</h2>

                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                    Thank you for joining the NUVYLUX waitlist as a <strong>${userTypeLabel}</strong>. You're now part of an exclusive community that's redefining luxury beauty through innovation.
                  </p>

                  <div style="background-color: #f8f8f8; border-left: 4px solid #2E8B57; padding: 20px; margin: 30px 0;">
                    <p style="color: #0a0a0a; font-size: 18px; margin: 0; font-weight: 600;">Your Waitlist Position: #${data.position}</p>
                  </div>

                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                    As a member of our waitlist, you'll be among the first to:
                  </p>

                  <ul style="color: #333333; font-size: 16px; line-height: 1.8; padding-left: 20px;">
                    <li>Experience our AI-powered skin analysis technology</li>
                    <li>Access exclusive product launches</li>
                    <li>Receive special member-only offers</li>
                    <li>Get early access to our marketplace</li>
                  </ul>

                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 30px 0 0;">
                    We'll keep you updated on our progress and let you know as soon as we're ready to welcome you fully into the NUVYLUX experience.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #0a0a0a; padding: 30px; text-align: center;">
                  <p style="color: #888888; font-size: 14px; margin: 0 0 10px;">
                    &copy; ${new Date().getFullYear()} NUVYLUX. All rights reserved.
                  </p>
                  <p style="color: #666666; font-size: 12px; margin: 0;">
                    Where Innovation Meets Luxury
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const textContent = `
Welcome to NUVYLUX, ${data.firstName}!

Thank you for joining the NUVYLUX waitlist as a ${userTypeLabel}.

Your Waitlist Position: #${data.position}

As a member of our waitlist, you'll be among the first to:
- Experience our AI-powered skin analysis technology
- Access exclusive product launches
- Receive special member-only offers
- Get early access to our marketplace

We'll keep you updated on our progress and let you know as soon as we're ready to welcome you fully into the NUVYLUX experience.

© ${new Date().getFullYear()} NUVYLUX. All rights reserved.
Where Innovation Meets Luxury
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: process.env.SENDER_EMAIL_NAME || "NUVYLUX",
          },
          To: [
            {
              Email: data.email,
              Name: `${data.firstName} ${data.lastName}`,
            },
          ],
          Subject: `Welcome to NUVYLUX - You're #${data.position} on the Waitlist!`,
          TextPart: textContent,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send confirmation email:", error);
    return { success: false, error };
  }
}

// Contact form email types
interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactAdminEmailData extends ContactEmailData {
  id: string;
  createdAt: Date;
}

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  creator: "Become a Creator",
  partnership: "Brand Partnership",
  press: "Press & Media",
  support: "Customer Support",
  feedback: "Feedback & Suggestions",
};

export async function sendContactConfirmationEmail(data: ContactEmailData) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const firstName = data.name.split(" ")[0];

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #0a0a0a; padding: 40px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: 2px;">NUVYLUX</h1>
                  <p style="color: #339999; margin: 10px 0 0; font-size: 14px; letter-spacing: 1px;">THE NEW LIGHT OF LUXURY</p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="color: #0a0a0a; margin: 0 0 20px; font-size: 24px;">Thank You for Reaching Out, ${firstName}!</h2>

                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                    We've received your message regarding <strong>${subjectLabel}</strong> and our team will get back to you as soon as possible.
                  </p>

                  <div style="background-color: #f8f8f8; border-left: 4px solid #339999; padding: 20px; margin: 30px 0;">
                    <p style="color: #666666; font-size: 14px; margin: 0 0 10px; font-weight: 600;">Your Message:</p>
                    <p style="color: #333333; font-size: 16px; margin: 0; line-height: 1.6;">${data.message}</p>
                  </div>

                  <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0;">
                    We typically respond within 24-48 hours. In the meantime, feel free to explore our website or follow us on social media for updates.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #0a0a0a; padding: 30px; text-align: center;">
                  <p style="color: #888888; font-size: 14px; margin: 0 0 10px;">
                    &copy; ${new Date().getFullYear()} NUVYLUX. All rights reserved.
                  </p>
                  <p style="color: #666666; font-size: 12px; margin: 0;">
                    Where Innovation Meets Luxury
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const textContent = `
Thank You for Reaching Out, ${firstName}!

We've received your message regarding ${subjectLabel} and our team will get back to you as soon as possible.

Your Message:
${data.message}

We typically respond within 24-48 hours. In the meantime, feel free to explore our website or follow us on social media for updates.

© ${new Date().getFullYear()} NUVYLUX. All rights reserved.
Where Innovation Meets Luxury
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: process.env.SENDER_EMAIL_NAME || "NUVYLUX",
          },
          To: [
            {
              Email: data.email,
              Name: data.name,
            },
          ],
          Subject: `Thank You for Contacting NUVYLUX - ${subjectLabel}`,
          TextPart: textContent,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact confirmation email:", error);
    return { success: false, error };
  }
}

export async function sendContactAdminNotificationEmail(data: ContactAdminEmailData) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #339999; padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <div style="background-color: #f0fdfa; border: 1px solid #339999; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                    <p style="color: #339999; font-size: 18px; margin: 0; font-weight: 600;">Subject: ${subjectLabel}</p>
                    <p style="color: #666666; font-size: 14px; margin: 10px 0 0;">ID: ${data.id}</p>
                  </div>

                  <h2 style="color: #0a0a0a; margin: 0 0 20px; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Contact Details</h2>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="margin-bottom: 30px;">
                    <tr>
                      <td style="color: #666666; width: 120px; font-weight: 600;">Name:</td>
                      <td style="color: #0a0a0a;">${data.name}</td>
                    </tr>
                    <tr>
                      <td style="color: #666666; font-weight: 600;">Email:</td>
                      <td style="color: #0a0a0a;"><a href="mailto:${data.email}" style="color: #339999;">${data.email}</a></td>
                    </tr>
                    <tr>
                      <td style="color: #666666; font-weight: 600;">Date:</td>
                      <td style="color: #0a0a0a;">${data.createdAt.toLocaleString()}</td>
                    </tr>
                  </table>

                  <h2 style="color: #0a0a0a; margin: 0 0 15px; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Message</h2>
                  <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px;">
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                  </div>

                  <div style="margin-top: 30px; text-align: center;">
                    <a href="mailto:${data.email}?subject=Re: ${subjectLabel}" style="display: inline-block; background-color: #339999; color: #ffffff; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply to ${data.name}</a>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f8f8; padding: 20px; text-align: center;">
                  <p style="color: #888888; font-size: 12px; margin: 0;">
                    NUVYLUX Admin Notification System
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission - NUVYLUX

Subject: ${subjectLabel}
ID: ${data.id}

CONTACT DETAILS
---------------
Name: ${data.name}
Email: ${data.email}
Date: ${data.createdAt.toLocaleString()}

MESSAGE
-------
${data.message}

---
Reply to this message by emailing: ${data.email}

NUVYLUX Admin Notification System
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: process.env.SENDER_EMAIL_NAME || "NUVYLUX",
          },
          To: [
            {
              Email: process.env.ADMIN_EMAIL_ADDRESS!,
              Name: "NUVYLUX Admin",
            },
          ],
          Subject: `[NUVYLUX Contact] ${subjectLabel} from ${data.name}`,
          TextPart: textContent,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact admin notification email:", error);
    return { success: false, error };
  }
}

export async function sendAdminNotificationEmail(data: WaitlistData) {
  const userTypeLabel = userTypeLabels[data.userType] || data.userType;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #2E8B57; padding: 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Waitlist Signup!</h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <div style="background-color: #f0fdf4; border: 1px solid #2E8B57; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                    <p style="color: #2E8B57; font-size: 18px; margin: 0; font-weight: 600;">Waitlist Position: #${data.position}</p>
                  </div>

                  <h2 style="color: #0a0a0a; margin: 0 0 20px; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Contact Details</h2>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="8" style="margin-bottom: 30px;">
                    <tr>
                      <td style="color: #666666; width: 140px; font-weight: 600;">Name:</td>
                      <td style="color: #0a0a0a;">${data.firstName} ${data.lastName}</td>
                    </tr>
                    <tr>
                      <td style="color: #666666; font-weight: 600;">Email:</td>
                      <td style="color: #0a0a0a;"><a href="mailto:${data.email}" style="color: #2E8B57;">${data.email}</a></td>
                    </tr>
                    <tr>
                      <td style="color: #666666; font-weight: 600;">Phone:</td>
                      <td style="color: #0a0a0a;"><a href="tel:${data.phone}" style="color: #2E8B57;">${data.phone}</a></td>
                    </tr>
                    <tr>
                      <td style="color: #666666; font-weight: 600;">User Type:</td>
                      <td style="color: #0a0a0a;"><span style="background-color: #2E8B57; color: white; padding: 4px 12px; border-radius: 4px; font-size: 14px;">${userTypeLabel}</span></td>
                    </tr>
                    ${data.brandName ? `
                    <tr>
                      <td style="color: #666666; font-weight: 600;">Brand Name:</td>
                      <td style="color: #0a0a0a;">${data.brandName}</td>
                    </tr>
                    ` : ""}
                    ${data.instagram ? `
                    <tr>
                      <td style="color: #666666; font-weight: 600;">Instagram:</td>
                      <td style="color: #0a0a0a;"><a href="https://instagram.com/${data.instagram.replace("@", "")}" style="color: #2E8B57;">${data.instagram}</a></td>
                    </tr>
                    ` : ""}
                  </table>

                  ${data.message ? `
                  <h2 style="color: #0a0a0a; margin: 0 0 15px; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Message</h2>
                  <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px;">
                    <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0;">${data.message}</p>
                  </div>
                  ` : ""}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f8f8f8; padding: 20px; text-align: center;">
                  <p style="color: #888888; font-size: 12px; margin: 0;">
                    NUVYLUX Admin Notification System
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const textContent = `
New Waitlist Signup - NUVYLUX

Waitlist Position: #${data.position}

CONTACT DETAILS
---------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
User Type: ${userTypeLabel}
${data.brandName ? `Brand Name: ${data.brandName}` : ""}
${data.instagram ? `Instagram: ${data.instagram}` : ""}

${data.message ? `MESSAGE\n-------\n${data.message}` : ""}

---
NUVYLUX Admin Notification System
  `;

  try {
    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL_ADDRESS!,
            Name: process.env.SENDER_EMAIL_NAME || "NUVYLUX",
          },
          To: [
            {
              Email: process.env.ADMIN_EMAIL_ADDRESS!,
              Name: "NUVYLUX Admin",
            },
          ],
          Subject: `[NUVYLUX] New ${userTypeLabel} Signup: ${data.firstName} ${data.lastName} (#${data.position})`,
          TextPart: textContent,
          HTMLPart: htmlContent,
        },
      ],
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
    return { success: false, error };
  }
}
