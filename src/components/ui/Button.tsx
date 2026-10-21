import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline-light" | "outline" | "white" | "navy";
type ButtonSize = "sm" | "md" | "lg" | "xl";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = BaseProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    keyof BaseProps | "href"
  >;

type NativeButtonProps = BaseProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    keyof BaseProps
  >;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-lime-500 text-ink hover:bg-lime-400 hover:shadow-glow focus-visible:ring-lime-500 focus-visible:ring-offset-white",
  "outline-light":
    "border border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/15 focus-visible:ring-white focus-visible:ring-offset-navy-800",
  outline:
    "border border-line bg-white text-ink hover:border-ink hover:bg-ink hover:text-white focus-visible:ring-lime-500 focus-visible:ring-offset-white",
  white:
    "bg-white text-ink shadow-card hover:bg-navy-950 hover:text-white focus-visible:ring-white focus-visible:ring-offset-lime-band",
  navy: "bg-navy-950 text-white hover:bg-navy-800 focus-visible:ring-navy-800 focus-visible:ring-offset-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 gap-2 px-4 text-sm font-semibold",
  md: "h-11 gap-2 px-6 text-sm font-semibold",
  lg: "h-12 gap-2 px-6 text-nav font-semibold",
  xl: "h-14 gap-2.5 px-8 text-nav font-semibold",
};

export function Button({ variant = "primary", size = "lg", className, ...props }: ButtonProps) {
  const classes = cn(
    "group/button relative inline-flex shrink-0 overflow-hidden cursor-pointer items-center justify-center rounded-full whitespace-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.98]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <button type="button" {...props} className={classes} />;
}
