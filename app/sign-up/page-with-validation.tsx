"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { registerStudent, registerInstitution } from "@/app/sign-up/action";

export default function CreateAccount() {
  const [accountType, setAccountType] = useState("student");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Basic validation
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirmPassword") as string;

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setIsLoading(false);
        return;
      }

      if (password.length < 8) {
        setError("Password must be at least 8 characters");
        setIsLoading(false);
        return;
      }

      // Submit the form based on account type
      if (accountType === "student") {
        const result = await registerStudent(formData);
        if (result.success) {
          setSuccess(result.message);
          e.currentTarget.reset();
        } else {
          setError(result.message);
        }
      } else {
        const result = await registerInstitution(formData);
        if (result.success) {
          setSuccess(result.message);
          e.currentTarget.reset();
        } else {
          setError(result.message);
        }
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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

        <form className="mt-8 space-y-4" onSubmit={onSubmit}>
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}

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

          {/* Rest of the form remains the same as in the previous example */}
          {/* ... */}

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
