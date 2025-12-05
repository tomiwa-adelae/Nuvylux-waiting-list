import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactConfirmationEmail, sendContactAdminNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate subject is one of the allowed values
    const validSubjects = ["general", "creator", "partnership", "press", "support", "feedback"];
    if (!validSubjects.includes(subject)) {
      return NextResponse.json(
        { error: "Invalid subject" },
        { status: 400 }
      );
    }

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    // Send confirmation email to user
    await sendContactConfirmationEmail({
      name,
      email,
      subject,
      message,
    });

    // Send notification email to admin
    await sendContactAdminNotificationEmail({
      name,
      email,
      subject,
      message,
      id: contactMessage.id,
      createdAt: contactMessage.createdAt,
    });

    return NextResponse.json(
      { success: true, id: contactMessage.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
