import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  bordered?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  theme?: "light" | "navy";
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  bordered = true,
  padding = "md",
  theme = "light",
  className,
  ...props
}) => {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4 sm:p-5",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10",
  };

  const themeStyles = {
    light:
      "bg-white text-charcoal-800 border-warm-300/80 shadow-subtle hover:border-gold-400/60 hover:shadow-card",
    navy:
      "bg-navy-900 text-warm-100 border-navy-700/80 shadow-elevated hover:border-gold-500/50 hover:shadow-gold/20",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "rounded-sm transition-all duration-300 relative",
          bordered && "border",
          paddingStyles[padding],
          themeStyles[theme],
          hoverEffect && "hover:-translate-y-1",
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
