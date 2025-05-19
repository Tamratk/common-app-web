import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Sign In</h1>
          <p className="mt-2 text-sm text-gray-600">
            Don&apos;t have an account?
            <Link href="/" className="ml-1 text-gray-900 underline">
              Create account
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6">
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

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-[#1a2e5a] focus:ring-[#1a2e5a]"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-[#1a2e5a] hover:text-[#152548]"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[#1a2e5a] px-4 py-3 text-sm font-medium uppercase text-white hover:bg-[#152548] focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
