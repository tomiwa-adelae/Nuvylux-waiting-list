import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { UserType } from "@prisma/client";
import {
  sendWaitlistConfirmationEmail,
  sendAdminNotificationEmail,
} from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { firstName, lastName, email, phone, userType } = body;
    if (!firstName || !lastName || !email || !phone || !userType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate userType
    const validUserTypes: UserType[] = ["customer", "creator", "brand", "investor"];
    if (!validUserTypes.includes(userType)) {
      return NextResponse.json(
        { error: "Invalid user type" },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingEntry = await prisma.waitlist.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    // Create new entry
    const newEntry = await prisma.waitlist.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        phone,
        userType: userType as UserType,
        brandName: body.brandName || null,
        instagram: body.instagram || null,
        message: body.message || null,
      },
    });

    // Get position (count of entries)
    const position = await prisma.waitlist.count();

    console.log("New waitlist signup:", {
      name: `${firstName} ${lastName}`,
      email,
      userType,
    });

    // Prepare email data
    const emailData = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      userType,
      brandName: body.brandName || null,
      instagram: body.instagram || null,
      message: body.message || null,
      position,
    };

    // Send emails in parallel (don't block the response)
    Promise.all([
      sendWaitlistConfirmationEmail(emailData),
      sendAdminNotificationEmail(emailData),
    ]).catch((error) => {
      console.error("Email sending failed:", error);
    });

    return NextResponse.json(
      {
        success: true,
        message: "Successfully added to waitlist",
        id: newEntry.id,
        position,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await prisma.waitlist.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        userType: true,
        createdAt: true,
      },
    });

    return NextResponse.json({
      count: entries.length,
      entries: entries.map((entry) => ({
        id: entry.id,
        name: `${entry.firstName} ${entry.lastName}`,
        userType: entry.userType,
        createdAt: entry.createdAt,
      })),
    });
  } catch (error) {
    console.error("Waitlist fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
