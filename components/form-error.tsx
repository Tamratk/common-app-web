import { AlertCircle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-red-100/80 p-3 text-sm text-red-600">
      <AlertCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
