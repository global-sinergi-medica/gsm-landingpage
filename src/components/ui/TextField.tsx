"use client";

import { useId, useState, type ComponentPropsWithoutRef } from "react";
import { Eye, EyeOff, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextFieldProps extends Omit<ComponentPropsWithoutRef<"input">, "id"> {
  label: string;
  icon: LucideIcon;
  invalid?: boolean;
}

export function TextField({
  label,
  icon: Icon,
  invalid = false,
  type = "text",
  className,
  ...props
}: TextFieldProps) {
  const id = useId();
  const [revealed, setRevealed] = useState(false);
  const isPassword = type === "password";
  const ToggleIcon = revealed ? EyeOff : Eye;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-body font-semibold text-ink">
        {label}
      </label>
      <div className="relative">
        <Icon
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-4 size-4.5 -translate-y-1/2 text-muted"
        />
        <input
          id={id}
          type={isPassword && revealed ? "text" : type}
          aria-invalid={invalid || undefined}
          className={cn(
            "h-12 w-full rounded-full border bg-white pl-11 text-body text-ink transition-colors duration-300 placeholder:text-muted/70 focus-visible:ring-2 focus-visible:outline-none",
            isPassword ? "pr-12" : "pr-4",
            invalid
              ? "border-red-300 focus-visible:ring-red-300/50"
              : "border-line hover:border-ink/30 focus-visible:border-lime-500 focus-visible:ring-lime-500/40",
            className,
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            aria-label={revealed ? "Hide password" : "Show password"}
            aria-pressed={revealed}
            onClick={() => setRevealed((value) => !value)}
            className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
          >
            <ToggleIcon aria-hidden className="size-4.5" />
          </button>
        )}
      </div>
    </div>
  );
}