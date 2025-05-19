"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { FormError } from "@/components/form-error";
import { PasswordMatchIndicator } from "@/components/password-match-indicator";

export default function CreateAccount() {
  const [accountType, setAccountType] = useState("student");
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  // For real-time password validation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    // Check password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setIsLoading(false);
      return;
    }

    // If validation passes, you would submit the form here
    // For demo purposes, we'll just simulate success
    setTimeout(() => {
      alert("Account created successfully!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create account.
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Already have account?
            <Link href="/sign-in" className="ml-1 text-gray-900 underline">
              Sign-In
            </Link>
          </p>
        </div>

        {error && <FormError message={error} />}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="rounded-md border border-gray-300 p-4">
            <label className="flex items-center space-x-3">
              <div className="flex h-5 items-center">
                <input
                  id="student"
                  name="accountType"
                  type="radio"
                  checked={accountType === "student"}
                  onChange={() => setAccountType("student")}
                  className="h-5 w-5 rounded-full border-gray-300 text-[#1a2e5a] focus:ring-[#1a2e5a]"
                />
              </div>
              <span className="text-base font-medium text-gray-700">
                Register as a Student
              </span>
            </label>
          </div>
          <div className="rounded-md border border-gray-300 p-4">
            <label className="flex items-center space-x-3">
              <div className="flex h-5 items-center">
                <input
                  id="university"
                  name="accountType"
                  type="radio"
                  checked={accountType === "university"}
                  onChange={() => setAccountType("university")}
                  className="h-5 w-5 rounded-full border-gray-300 text-[#1a2e5a] focus:ring-[#1a2e5a]"
                />
              </div>
              <span className="text-base font-medium text-gray-700">
                Register as a Universities/Colleges
              </span>
            </label>
          </div>

          {accountType === "student" && (
            <div className="mt-6 space-y-4">
              {/* Student form fields */}
              {/* ... */}

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
                <PasswordMatchIndicator
                  password={password}
                  confirmPassword={confirmPassword}
                />
              </div>
            </div>
          )}

          {accountType === "university" && (
            <div className="mt-6 space-y-4">
              {/* University form fields */}
              {/* ... */}

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
                <PasswordMatchIndicator
                  password={password}
                  confirmPassword={confirmPassword}
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 w-full rounded bg-[#1a2e5a] px-4 py-3 text-sm font-medium uppercase text-white hover:bg-[#152548] focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </button>
        </form>
      </div>
    </div>
  );
}
