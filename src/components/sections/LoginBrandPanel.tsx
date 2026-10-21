import Image from "next/image";
import type { CSSProperties } from "react";
import { brand } from "@/data/navigation";

const staggerStyle = (ms: number) => ({ "--stagger": `${ms}ms` }) as CSSProperties;

export function LoginBrandPanel() {
  return (
    <aside
      aria-label={brand.name}
      className="relative isolate hidden overflow-hidden bg-hero lg:flex lg:items-center lg:justify-center"
    >
      <div
        aria-hidden
        className="absolute -inset-12 -z-10 animate-grid-pan bg-grid mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)] bg-grid-size will-change-transform"
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 -z-10 size-96 animate-drift rounded-full bg-teal-500/25 blur-3xl will-change-transform"
      />
      <div
        aria-hidden
        className="absolute right-1/4 -bottom-40 -z-10 size-96 animate-drift-slow rounded-full bg-lime-500/15 blur-3xl will-change-transform"
      />

      <div className="flex flex-col items-center px-10 text-center">
        <Image
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={brand.logo.width}
          height={brand.logo.height}
          sizes="160px"
          priority
          className="h-36 w-auto animate-pop-in"
        />

        <p
          className="mt-5 animate-fade-up text-2xl font-bold tracking-wide whitespace-nowrap text-white uppercase"
          style={staggerStyle(150)}
        >
          Partner Portal Login
        </p>

        <span
          aria-hidden
          className="mt-8 h-0.5 w-10 animate-fade-up bg-lime-400"
          style={staggerStyle(250)}
        />
        <p
          className="mt-6 max-w-sm animate-fade-up text-3xl leading-tight font-bold tracking-tight text-balance text-white"
          style={staggerStyle(350)}
        >
          {brand.tagline}
        </p>
      </div>
    </aside>
  );
}