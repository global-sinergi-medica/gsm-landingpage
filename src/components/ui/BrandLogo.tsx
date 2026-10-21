import Image from "next/image";
import { brand } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  tone?: "dark" | "light";
  className?: string;
}

export function BrandLogo({ tone = "dark", className }: BrandLogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={brand.logo.src}
        alt=""
        width={brand.logo.width}
        height={brand.logo.height}
        sizes="56px"
        className="h-11 w-auto transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/logo:scale-110 group-hover/logo:-rotate-6"
      />
      <span className="flex flex-col leading-none font-bold uppercase">
        <span
          className={cn(
            "text-card tracking-wide",
            tone === "dark" ? "text-navy-900" : "text-white",
          )}
        >
          {brand.wordmark.lead}
        </span>
        <span className="mt-1 text-caption tracking-[0.32em] text-teal-500">
          {brand.wordmark.accent}
        </span>
      </span>
    </span>
  );
}
