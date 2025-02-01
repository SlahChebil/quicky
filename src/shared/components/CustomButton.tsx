import { Loader2 } from "lucide-react"; // For loading animation
import { ReactNode } from "react";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  variant?: "gradient";
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
}

const buttonStyles = {
  gradient:
    "bg-gradient-to-r from-pink-500 to-blue-500 hover:opacity-90 text-white",
};

const CustomButton = ({
  text,
  onClick,
  variant = "gradient",
  disabled = false,
  loading = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 rounded-lg font-semibold transition ${
        buttonStyles[variant]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {loading && <Loader2 className="animate-spin w-5 h-5" />}
      {text}
    </button>
  );
};

export default CustomButton;
