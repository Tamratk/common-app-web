"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface PasswordMatchIndicatorProps {
  password: string;
  confirmPassword: string;
}

export const PasswordMatchIndicator = ({
  password,
  confirmPassword,
}: PasswordMatchIndicatorProps) => {
  const [isMatching, setIsMatching] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // Only show indicator if confirm password has some value
    if (confirmPassword) {
      setShowIndicator(true);
      setIsMatching(password === confirmPassword);
    } else {
      setShowIndicator(false);
    }
  }, [password, confirmPassword]);

  if (!showIndicator) return null;

  return (
    <div className="mt-1 flex items-center gap-x-2 text-sm">
      {isMatching ? (
        <>
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <span className="text-green-500">Passwords match</span>
        </>
      ) : (
        <>
          <XCircle className="h-4 w-4 text-red-500" />
          <span className="text-red-500">Passwords do not match</span>
        </>
      )}
    </div>
  );
};
