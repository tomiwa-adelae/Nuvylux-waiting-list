import { signIn } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Attempt to sign in with credentials
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // If we get here without error, login was successful
    return NextResponse.json({ success: true });
  } catch (error) {
    // Handle authentication errors
    if (error) {
      switch (error.type) {
        case "CredentialsSignin":
          return NextResponse.json(
            { error: "Invalid email or password" },
            { status: 401 }
          );
        default:
          return NextResponse.json(
            { error: "Authentication failed" },
            { status: 500 }
          );
      }
    }

    // Handle other errors
    console.error("Sign in error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
