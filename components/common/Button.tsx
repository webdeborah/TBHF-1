"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "hover:text-white",
  onClick,
  fullWidth = false,
  disabled = false,
  type = "button",
}: ButtonProps) => {
  // Define class variations
  const baseClasses =
    "font-helvetica font-bold rounded-md inline-flex items-center justify-center transition-all duration-300";

  const variantClasses = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
    secondary:
      "bg-[var(--secondary)] text-[var(--text-primary)] hover:bg-[var(--secondary-dark)]",
    outline:
      "border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)] hover:text-white",
    text: "bg-transparent text-[var(--primary)] hover:text-[var(--primary-dark)] hover:underline",
  };

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  // Combine classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className="w-full h-full flex items-center justify-center"
    >
      {children}
    </motion.span>
  );

  // Return link or button
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
