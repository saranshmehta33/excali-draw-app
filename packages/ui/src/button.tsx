"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "outlined" | "secondary";
  className?: string;
  appName: string;
  onClick: () => void;
  size: "lg" | "sm";
  children: ReactNode;
}

export const Button = ({ size, variant, className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`${className}
        ${variant === "primary" ? "bg-primary" : variant == "secondary" ? "" : ""}
        ${size === "lg" ? "px-4 py-2" : "px-2 py-1" }`
        
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
