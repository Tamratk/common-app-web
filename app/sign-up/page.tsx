"use client";

import type React from "react";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormError } from "@/components/form-error";

export default function CreateAccount() {
  const router = useRouter();
  const [accountType, setAccountType] = useState("student");
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const email =
      (formData.get("email") as string) ||
      (formData.get("adminEmail") as string);

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

    try {
      // In a real application, you would call an API to register the user
      // For demo purposes, we'll just simulate the API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to verification page with email
      router.push(`/verify?email=${encodeURIComponent(email)}`);
    } catch (error) {
      setError("An error occurred during registration. Please try again.");
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
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="studentId"
                  className="block text-sm font-medium text-gray-700"
                >
                  Student ID (Optional)
                </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="fieldOfStudy"
                  className="block text-sm font-medium text-gray-700"
                >
                  Field of Study
                </label>
                <select
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                >
                  <option value="">Select your field</option>
                  <option value="computer_science">Computer Science</option>
                  <option value="engineering">Engineering</option>
                  <option value="business">Business</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="science">Science</option>
                  <option value="medicine">Medicine</option>
                  <option value="law">Law</option>
                  <option value="other">Other</option>
                </select>
              </div>

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
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>
            </div>
          )}

          {accountType === "university" && (
            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="institutionName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Institution Name
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="institutionType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Institution Type
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                >
                  <option value="">Select institution type</option>
                  <option value="university">University</option>
                  <option value="college">College</option>
                  <option value="community_college">Community College</option>
                  <option value="technical_institute">
                    Technical Institute
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="emailDomain"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Domain
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 py-2 text-gray-500">
                    @
                  </span>
                  <input
                    type="text"
                    id="emailDomain"
                    name="emailDomain"
                    placeholder="university.edu"
                    required
                    className="block w-full flex-1 rounded-none rounded-r-md border border-gray-300 px-3 py-2 focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="adminName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Administrator Name
                </label>
                <input
                  type="text"
                  id="adminName"
                  name="adminName"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

              <div>
                <label
                  htmlFor="adminEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Administrator Email
                </label>
                <input
                  type="email"
                  id="adminEmail"
                  name="adminEmail"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
                />
              </div>

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
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1a2e5a] focus:outline-none focus:ring-1 focus:ring-[#1a2e5a]"
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
