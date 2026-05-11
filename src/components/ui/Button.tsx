import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-soft-gold disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-soft-gold text-white hover:bg-deep-gold": variant === "primary",
            "bg-soft-black text-warm-white hover:bg-dark-warm-gray": variant === "secondary",
            "border border-soft-gold text-soft-gold hover:bg-soft-gold/10": variant === "outline",
            "hover:bg-soft-cream text-dark-warm-gray": variant === "ghost",
            "h-9 px-4 py-2": size === "sm",
            "h-11 px-8 py-2": size === "md",
            "h-14 px-10 py-3 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
