"use client";

import { useRouter } from "next/navigation";
import { FrownIcon } from "lucide-react";

export default function ErrorPage() {
  const router = useRouter();

  const handleTryAgain = () => {
    // Go back to the previous page
    router.back();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full border-2 border-red-500 p-3">
            <FrownIcon className="h-16 w-16 text-red-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold uppercase text-red-500">ERROR!</h1>

        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-800">
            Thank you for your request.
          </p>
          <p className="text-gray-800">
            We are unable to continue the process.
          </p>
          <p className="text-gray-600">
            Please try again to complete the request.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={handleTryAgain}
            className="inline-block w-full rounded-md bg-red-500 px-6 py-3 text-center font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
