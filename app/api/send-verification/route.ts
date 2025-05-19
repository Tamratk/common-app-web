import { NextResponse } from "next/server";

// This is a mock implementation
// In a real application, you would:
// 1. Generate a verification code
// 2. Store it in a database with the user's email and an expiration time
// 3. Send an email with the verification code

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Simulate random errors for demonstration purposes
    const shouldFail = Math.random() < 0.2; // 20% chance of failure

    if (shouldFail) {
      return NextResponse.json(
        { error: "Failed to send verification code" },
        { status: 500 }
      );
    }

    // Generate a random 6-digit code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // In a real application, you would store this code in a database
    // and associate it with the user's email

    // In a real application, you would send an email with the verification code
    console.log(`Verification code for ${email}: ${verificationCode}`);

    return NextResponse.json(
      { success: true, message: "Verification code sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending verification code:", error);
    return NextResponse.json(
      { error: "Failed to send verification code" },
      { status: 500 }
    );
  }
}
