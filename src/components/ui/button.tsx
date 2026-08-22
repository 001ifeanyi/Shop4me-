import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", fullWidth, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-indigo-200": variant === "primary",
            "bg-primary/20 text-primary-hover hover:bg-indigo-200": variant === "secondary",
            "border-2 border-indigo-200 bg-transparent text-primary-hover hover:bg-primary/10 hover:border-indigo-300": variant === "outline",
            "bg-transparent text-text-secondary hover:bg-surface-hover": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
            "h-12 w-12": size === "icon",
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
