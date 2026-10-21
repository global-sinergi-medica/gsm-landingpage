import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/types";

interface SectionHeadingProps extends SectionCopy {
  id: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "center",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <div className={cn(align === "center" && "mx-auto max-w-2xl text-center", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-eyebrow font-semibold uppercase",
          isLight ? "bg-white/10 text-lime-400" : "bg-teal-50 text-teal-600",
        )}
      >
        <span
          aria-hidden
          className={cn("size-1.5 rounded-full", isLight ? "bg-lime-400" : "bg-teal-500")}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 text-3xl font-bold tracking-tight md:text-title",
          isLight ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3 text-lead", isLight ? "text-white/70" : "text-muted")}>
          {description}
        </p>
      )}
    </div>
  );
}
