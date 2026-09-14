import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs tracking-wider uppercase px-4 py-2 gap-1.5",
    md: "text-sm tracking-wide px-5 py-2.5 gap-2",
    lg: "text-base tracking-wide px-7 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-navy-800 text-warm-100 hover:bg-navy-900 border border-navy-700 shadow-sm active:scale-[0.99]",
    secondary:
      "bg-warm-100 text-navy-800 hover:bg-warm-200 border border-warm-300 active:scale-[0.99]",
    gold:
      "bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold shadow-gold border border-gold-400 active:scale-[0.99]",
    outline:
      "bg-transparent text-navy-800 hover:bg-navy-50/60 border border-navy-300/80 active:scale-[0.99]",
    ghost:
      "bg-transparent text-navy-800 hover:bg-warm-200/60",
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      fullWidth && "w-full",
      className
    )
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
