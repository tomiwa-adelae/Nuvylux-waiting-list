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
    const validUserTypes: UserType[] = [
      "customer",
      "creator",
      "brand",
      "investor",
    ];
    if (!validUserTypes.includes(userType)) {
      return NextResponse.json({ error: "Invalid user type" }, { status: 400 });
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
    // Fetch all waitlist entries, ordered by most recent
    const waitlistEntries = await prisma.waitlist.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get statistics
    const stats = {
      total: waitlistEntries.length,
      byUserType: {
        customer: waitlistEntries.filter((e) => e.userType === "customer")
          .length,
        creator: waitlistEntries.filter((e) => e.userType === "creator").length,
        brand: waitlistEntries.filter((e) => e.userType === "brand").length,
        investor: waitlistEntries.filter((e) => e.userType === "investor")
          .length,
      },
      recentSignups: waitlistEntries.filter((e) => {
        const dayAgo = new Date();
        dayAgo.setDate(dayAgo.getDate() - 1);
        return new Date(e.createdAt) > dayAgo;
      }).length,
    };

    return NextResponse.json({
      entries: waitlistEntries,
      stats,
    });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return NextResponse.json(
      { error: "Failed to fetch waitlist data" },
      { status: 500 }
    );
  }
}

// Optional: Add DELETE endpoint to remove entries
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.waitlist.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting waitlist entry:", error);
    return NextResponse.json(
      { error: "Failed to delete entry" },
      { status: 500 }
    );
  }
}
