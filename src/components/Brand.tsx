import React from "react";
import { cn } from "../lib/utils";

export function Shop4MeLogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={cn("shrink-0", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Location Pin Outer */}
      <path
        d="M50 5 C25 5 5 25 5 50 C5 75 50 115 50 115 C50 115 95 75 95 50 C95 25 75 5 50 5 Z"
        className="stroke-[#2563EB] dark:stroke-[#3B82F6] fill-white dark:fill-transparent"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Bag Handle */}
      <path
        d="M35 35 C35 20 65 20 65 35"
        className="stroke-[#0B192C] dark:stroke-white"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Bag Body */}
      <path
        d="M 20 35 H 80 V 70 A 10 10 0 0 1 70 80 H 30 A 10 10 0 0 1 20 70 Z"
        className="fill-[#0B192C] dark:fill-white"
      />
      
      {/* The Geometric 'S' */}
      <path
        d="M 62 48 A 12 12 0 0 0 38 48 C 38 58 62 56 62 66 A 12 12 0 0 1 38 66"
        className="stroke-white dark:stroke-[#0f172a]"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Speed lines for S */}
      <path
        d="M 32 75 H 22 M 28 69 H 18 M 35 63 H 25"
        className="stroke-white dark:stroke-[#0f172a]"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      
      {/* Green Arrow cutting through (Now Blue) */}
      <path
        d="M 22 74 L 75 46"
        className="stroke-[#2563EB] dark:stroke-[#3B82F6]"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M 61 45 L 76 45 L 72 58"
        className="stroke-[#2563EB] dark:stroke-[#3B82F6]"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

interface BrandProps {
  className?: string;
  layout?: "row" | "column";
  size?: "sm" | "md" | "lg" | "xl";
  withTagline?: boolean;
  withSubTagline?: boolean;
}

export function Shop4MeBrand({
  className,
  layout = "row",
  size = "md",
  withTagline = false,
  withSubTagline = false,
}: BrandProps) {
  const textColor = "text-[#0B192C] dark:text-white";
  const brandColor = "text-[#2563EB] dark:text-[#3B82F6]";
  const brandBg = "bg-[#2563EB] dark:bg-[#3B82F6]";

  const sizeConfig = {
    sm: {
      mark: "w-8 h-10",
      title: "text-xl",
      tagline: "text-[8px]",
      sub: "text-[6px]",
      gapRow: "space-x-2",
      gapCol: "space-y-1",
    },
    md: {
      mark: "w-12 h-14",
      title: "text-3xl",
      tagline: "text-[10px]",
      sub: "text-[8px]",
      gapRow: "space-x-3",
      gapCol: "space-y-2",
    },
    lg: {
      mark: "w-16 h-20",
      title: "text-4xl",
      tagline: "text-[11px]",
      sub: "text-[9px]",
      gapRow: "space-x-4",
      gapCol: "space-y-3",
    },
    xl: {
      mark: "w-24 h-28 sm:w-28 sm:h-32",
      title: "text-5xl sm:text-6xl",
      tagline: "text-xs sm:text-sm",
      sub: "text-[10px] sm:text-xs",
      gapRow: "space-x-5",
      gapCol: "space-y-4",
    },
  };

  const s = sizeConfig[size];

  if (layout === "row") {
    return (
      <div className={cn("flex items-center", s.gapRow, className)}>
        <Shop4MeLogoMark className={s.mark} />
        <div className="flex flex-col justify-center">
          <div className={cn("font-black tracking-tighter leading-none flex items-center", s.title, textColor)}>
            <span>SHOP</span>
            <span className={brandColor}>4</span>
            <span>ME</span>
          </div>
          {withTagline && (
            <div className="flex items-center space-x-1 sm:space-x-2 mt-1">
              <div className={cn("h-[2px] w-3 sm:w-4", brandBg)}></div>
              <span className={cn("uppercase font-bold tracking-[0.15em] leading-none", brandColor, s.tagline)}>
                Your Errand Boy
              </span>
              <div className={cn("h-[2px] w-3 sm:w-4", brandBg)}></div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center", s.gapCol, className)}>
      <Shop4MeLogoMark className={s.mark} />
      <div className="flex flex-col items-center">
        <div className={cn("font-black tracking-tighter leading-none flex items-center", s.title, textColor)}>
          <span>SHOP</span>
          <span className={brandColor}>4</span>
          <span>ME</span>
        </div>
        {withTagline && (
          <div className="flex items-center space-x-2 sm:space-x-4 mt-2">
            <div className={cn("h-[2px] w-6 sm:w-10", brandBg)}></div>
            <span className={cn("uppercase font-bold tracking-[0.2em] leading-none", brandColor, s.tagline)}>
              Your Errand Boy
            </span>
            <div className={cn("h-[2px] w-6 sm:w-10", brandBg)}></div>
          </div>
        )}
        {withSubTagline && (
          <span className={cn("uppercase font-semibold tracking-widest mt-2 sm:mt-3", textColor, s.sub)}>
            Don't stress. We'll do it for you.
          </span>
        )}
      </div>
    </div>
  );
}
