import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { hero } from "@/data/navigation";
import { cn } from "@/lib/utils";

const WORD_STAGGER_MS = 90;
const WORD_START_MS = 150;

const staggerStyle = (ms: number) => ({ "--stagger": `${ms}ms` }) as CSSProperties;
const TITLE_LINES = 3;
const afterTitle = WORD_START_MS + TITLE_LINES * WORD_STAGGER_MS;

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="px-hero-inset pt-hero-inset">
      <div className="relative isolate overflow-hidden rounded-hero bg-hero">
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

        <div className="container-page grid gap-10 pt-16 lg:min-h-hero lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:pt-0 xl:gap-4">
          <div className="max-w-hero-copy self-center lg:py-24">
            <p className="inline-flex animate-pop-in items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pr-4 pl-1.5 text-sm font-medium text-white/90">
              <span className="relative flex size-6 items-center justify-center rounded-full bg-lime-500">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-400 opacity-60" />
                <span className="relative size-2 rounded-full bg-ink" />
              </span>
              {hero.badge}
            </p>

            <h1
              id="hero-title"
              aria-label={`${hero.titleLead} ${hero.titleRotating[0]} ${hero.titleTail}`}
              className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-display"
            >
              <span
                aria-hidden
                className="block animate-word-rise"
                style={staggerStyle(WORD_START_MS)}
              >
                {hero.titleLead}
              </span>
              <span
                aria-hidden
                className="block animate-word-rise pb-4 text-lime-400"
                style={staggerStyle(WORD_START_MS + WORD_STAGGER_MS)}
              >
                <RotatingWords words={hero.titleRotating} />
              </span>
              <span
                aria-hidden
                className="block animate-word-rise"
                style={staggerStyle(WORD_START_MS + 2 * WORD_STAGGER_MS)}
              >
                {hero.titleTail}
              </span>
            </h1>

            <p
              className="mt-6 max-w-md animate-fade-up text-lead text-white/75"
              style={staggerStyle(afterTitle)}
            >
              {hero.description}
            </p>

            <div
              className="mt-9 flex animate-fade-up flex-wrap gap-3"
              style={staggerStyle(afterTitle + 120)}
            >
              <Button href={hero.primaryCta.href} size="xl">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/50 blur-md"
                />
                {hero.primaryCta.label}
                <ArrowRight
                  aria-hidden
                  className="size-4.5 transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Button>
              <Button href={hero.secondaryCta.href} size="xl" variant="outline-light">
                <Phone
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover/button:-rotate-12"
                />
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl self-center pb-16 lg:max-w-none lg:py-20">
            <div
              aria-hidden
              className="absolute inset-x-6 top-[8%] bottom-1/3 -z-10 animate-glow-pulse rounded-full bg-[radial-gradient(closest-side,rgba(120,170,255,0.55),transparent)] blur-2xl"
            />
            <div
              aria-hidden
              className="absolute top-[4%] left-1/2 -z-10 aspect-square w-[78%] -translate-x-1/2 animate-spin-slow rounded-full border border-dashed border-white/15"
            />
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={hero.image.width}
              height={hero.image.height}
              sizes="(min-width: 1024px) 620px, 100vw"
              preload
              className="block h-auto w-full animate-hero-rise rounded-hero shadow-glass ring-1 ring-white/15"
            />
            {hero.highlights.map(({ id, icon: Icon, title, caption }, index) => (
              <div
                key={id}
                className={cn(
                  "absolute hidden animate-pop-in sm:block",
                  index === 0
                    ? "bottom-[30%] -left-2 xl:-left-10"
                    : "right-2 bottom-[10%] xl:-right-6",
                )}
                style={staggerStyle(1200 + index * 250)}
              >
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-950/85 p-3 pr-5 shadow-glass",
                    index === 0 ? "animate-float" : "animate-float-delayed",
                  )}
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-lime-500 text-ink">
                    <Icon aria-hidden className="size-5" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{title}</span>
                    <span className="block text-caption text-white/70">{caption}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
