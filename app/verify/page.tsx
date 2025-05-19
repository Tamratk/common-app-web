"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [failedAttempts, setFailedAttempts] = useState(0);

  useEffect(() => {
    const email = searchParams.get("email");
    if (email) {
      setEmail(email);
    }
  }, [searchParams]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && resendDisabled) {
      setResendDisabled(false);
    }
  }, [countdown, resendDisabled]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!verificationCode.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate a random error for demonstration purposes
      // In a real app, this would be based on actual verification logic
      const shouldFail = Math.random() < 0.3; // 30% chance of failure for demo

      // For demo purposes, we'll simulate a successful verification with any 6-digit code
      // unless we're simulating a failure
      if (
        verificationCode.length === 6 &&
        /^\d+$/.test(verificationCode) &&
        !shouldFail
      ) {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Redirect to success page
        router.push("/success");
      } else {
        // Increment failed attempts
        const newFailedAttempts = failedAttempts + 1;
        setFailedAttempts(newFailedAttempts);

        // If too many failed attempts, redirect to error page
        if (newFailedAttempts >= 3) {
          router.push("/error");
        } else {
          setError(
            `Invalid verification code. Please try again. (Attempt ${newFailedAttempts} of 3)`
          );
        }
      }
    } catch (error) {
      // For any unexpected errors, redirect to the error page
      router.push("/error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setResendDisabled(true);
    setCountdown(60); // Disable resend for 60 seconds

    try {
      // Simulate a random error for demonstration purposes
      const shouldFail = Math.random() < 0.2; // 20% chance of failure for demo

      if (shouldFail) {
        throw new Error("Failed to resend verification code");
      }

      // In a real application, you would call an API to resend the verification code
      // For demo purposes, we'll just simulate the API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message or notification
      alert(`Verification code resent to ${email}`);
    } catch (error) {
      // For resend errors, redirect to the error page
      router.push("/error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Email Verification
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;ve sent an verification to{" "}
            <span className="font-medium text-gray-900">{email}</span> to verify
            your email address and activate your account.
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleVerify} className="mt-8 space-y-6">
          <div>
            <label htmlFor="verificationCode" className="sr-only">
              Verification Code
            </label>
            <input
              id="verificationCode"
              name="verificationCode"
              type="text"
              required
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Verification Code"
              className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full items-center justify-center rounded-md bg-[#1a2e5a] px-4 py-3 text-sm font-medium text-white hover:bg-[#152548] focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify My Account"}
            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          <p>
            Didn&apos;t receive any code?{" "}
            <button
              type="button"
              onClick={handleResend}
              disabled={resendDisabled}
              className="font-medium text-[#1a2e5a] hover:text-[#152548] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {resendDisabled ? `Resend (${countdown}s)` : "Resend"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
