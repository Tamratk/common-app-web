export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Your account has been successfully verified!
        </p>
        <div className="mt-8 rounded-lg bg-green-50 p-6">
          <p className="text-green-800">
            Your account is now active and you can start using all features.
          </p>
        </div>
      </div>
    </div>
  );
}
