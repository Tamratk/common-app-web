import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
        </div>

        <h1 className="text-2xl font-bold uppercase text-green-500">
          SUCCESS!
        </h1>

        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-800">Congratulations!</p>
          <p className="text-gray-600">
            You can proceed to login page and fill out your necessary
            information.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/sign-in"
            className="inline-block w-full rounded-md bg-green-500 px-6 py-3 text-center font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}
