import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
  titleAs: TitleTag = "h2",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={twMerge(
        clsx(
          "mb-12 sm:mb-16",
          isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl text-left",
          className
        )
      )}
    >
      {eyebrow && (
        <div
          className={clsx(
            "inline-flex items-center gap-2 mb-3 text-xs font-semibold tracking-widest uppercase",
            isDark ? "text-gold-400" : "text-gold-600"
          )}
        >
          <span className="w-5 h-[1.5px] bg-current inline-block opacity-75"></span>
          <span>{eyebrow}</span>
          {isCenter && <span className="w-5 h-[1.5px] bg-current inline-block opacity-75"></span>}
        </div>
      )}

      <TitleTag
        className={clsx(
          "font-serif font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-tight",
          isDark ? "text-warm-50" : "text-navy-950"
        )}
      >
        {title}
      </TitleTag>

      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans",
            isDark ? "text-warm-200/80" : "text-charcoal-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
