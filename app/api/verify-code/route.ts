import { NextResponse } from "next/server";

// This is a mock implementation
// In a real application, you would:
// 1. Retrieve the stored verification code for the email
// 2. Compare it with the code provided by the user
// 3. If they match and the code hasn't expired, mark the user as verified

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { error: "Email and verification code are required" },
        { status: 400 }
      );
    }

    // Simulate random errors for demonstration purposes
    const shouldFail = Math.random() < 0.3; // 30% chance of failure

    if (shouldFail) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }

    // In a real application, you would verify the code against what's stored in your database
    // For demo purposes, we'll accept any 6-digit code
    if (code.length === 6 && /^\d+$/.test(code)) {
      // In a real application, you would mark the user as verified in your database

      return NextResponse.json(
        { success: true, message: "Email verified successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Invalid verification code" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying code:", error);
    return NextResponse.json(
      { error: "Failed to verify code" },
      { status: 500 }
    );
  }
}
