import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "gold" | "neutral" | "spice";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  size = "sm",
  className,
}) => {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wider uppercase";

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3 py-1",
  };

  const variantStyles = {
    gold: "bg-gold-50 text-gold-800 border border-gold-300/70",
    navy: "bg-navy-50 text-navy-800 border border-navy-200",
    neutral: "bg-warm-200 text-charcoal-700 border border-warm-300",
    spice: "bg-amber-50 text-amber-800 border border-amber-200",
  };

  return (
    <span
      className={twMerge(
        clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
      )}
    >
      {children}
    </span>
  );
};
