import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-5xl font-serif text-soft-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-secondary-gray text-lg max-w-2xl font-light", centered && "mx-auto")}>
          {subtitle}
        </p>
      )}
      <div className={cn("h-px w-16 bg-soft-gold mt-6", centered && "mx-auto")} />
    </div>
  );
}
