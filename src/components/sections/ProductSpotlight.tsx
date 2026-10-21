"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowRight, Box, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company, sectionCopy } from "@/data/navigation";
import { featuredProducts as products } from "@/data/products";
import { cn } from "@/lib/utils";

const SLIDE_MS = 4500;

export function ProductSpotlight() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const product = products[active];
  const perks = [
    { icon: Layers, label: product.material },
    { icon: ShieldCheck, label: `Sterile: ${product.sterile}` },
    { icon: Box, label: `Unit: ${product.unit}` },
  ];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setActive((value) => (value + 1) % products.length),
      SLIDE_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, paused]);

  return (
    <section
      id="spotlight"
      aria-labelledby="spotlight-title"
      className="relative overflow-hidden bg-white py-section"
    >
      <div
        aria-hidden
        className="absolute top-1/3 -left-40 size-[520px] animate-drift rounded-full bg-teal-50 blur-3xl will-change-transform"
      />
      <div className="relative container-page">
        <Reveal variant="fade-up">
          <SectionHeading id="spotlight-title" {...sectionCopy.spotlight} />
        </Reveal>

        <div
          className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Reveal variant="zoom-in">
            <div className="relative isolate aspect-square overflow-hidden rounded-hero bg-linear-to-br from-teal-50 via-surface to-white">
              <div
                aria-hidden
                className="absolute -inset-12 -z-10 animate-grid-pan bg-grid-dark mask-[radial-gradient(circle,black,transparent_70%)] bg-grid-size will-change-transform"
              />
              <div
                aria-hidden
                className="absolute inset-[12%] -z-10 animate-spin-slow rounded-full border-2 border-dashed border-teal-500/25"
              />
              <div
                aria-hidden
                className="absolute inset-[20%] -z-10 animate-glow-pulse rounded-full bg-white shadow-card-hover"
              />
              <span
                aria-hidden
                className="absolute top-6 right-8 text-[120px] leading-none font-bold tracking-tighter text-navy-950/5 tabular-nums"
              >
                {String(active + 1).padStart(2, "0")}
              </span>

              <Image
                key={product.id}
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                sizes="(min-width: 1024px) 560px, 90vw"
                className="absolute inset-[14%] size-[72%] animate-spotlight-in object-contain mix-blend-multiply"
              />

              <span
                key={`badge-${product.id}`}
                className="absolute top-6 left-6 animate-pop-in rounded-full bg-lime-500 px-3 py-1.5 text-caption font-bold text-ink uppercase"
                style={{ "--stagger": "350ms" } as CSSProperties}
              >
                {product.group}
              </span>
              <div
                key={`code-${product.id}`}
                className="absolute bottom-6 left-6 animate-pop-in rounded-2xl bg-navy-950 px-5 py-3 text-white shadow-glass"
                style={{ "--stagger": "450ms" } as CSSProperties}
              >
                <span className="block text-caption text-white/60">Product code</span>
                <span className="block text-2xl font-bold">{product.id}</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="slide-right" delay={150}>
            <div key={product.id} aria-live="polite">
              <p
                className="animate-slide-in-right text-eyebrow font-semibold text-teal-600 uppercase"
                style={{ "--stagger": "0ms" } as CSSProperties}
              >
                {String(active + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
              </p>
              <h3
                className="mt-3 animate-slide-in-right text-3xl font-bold tracking-tight text-ink md:text-title"
                style={{ "--stagger": "80ms" } as CSSProperties}
              >
                {product.name}
              </h3>
              <p
                className="mt-3 animate-slide-in-right text-lead text-muted"
                style={{ "--stagger": "160ms" } as CSSProperties}
              >
                {product.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {perks.map(({ icon: Icon, label }, index) => (
                  <li
                    key={label}
                    className="flex animate-slide-in-right items-center gap-2 rounded-full border border-line px-3 py-1.5 text-sm font-medium text-ink/80"
                    style={{ "--stagger": `${240 + index * 70}ms` } as CSSProperties}
                  >
                    <Icon aria-hidden className="size-4 text-teal-500" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-10 grid grid-cols-3 gap-3" aria-label="Choose a product">
              {products.map(({ id, name, image }, index) => {
                const isActive = index === active;
                return (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Show ${name}`}
                      aria-pressed={isActive}
                      className={cn(
                        "group relative block w-full overflow-hidden rounded-2xl border bg-white p-2 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none",
                        isActive
                          ? "border-navy-950 shadow-card-hover"
                          : "border-line/60 hover:-translate-y-1 hover:border-line",
                      )}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        width={160}
                        height={160}
                        className={cn(
                          "aspect-square w-full object-contain mix-blend-multiply transition-transform duration-500",
                          isActive
                            ? "scale-105"
                            : "opacity-70 group-hover:scale-105 group-hover:opacity-100",
                        )}
                      />
                      <span className="absolute inset-x-2 bottom-1.5 h-1 overflow-hidden rounded-full bg-navy-950/10">
                        {isActive && (
                          <span
                            key={`${active}-${paused}`}
                            className={cn(
                              "block h-full origin-left rounded-full bg-lime-500",
                              paused ? "scale-x-100" : "animate-progress",
                            )}
                            style={{ "--duration": `${SLIDE_MS}ms` } as CSSProperties}
                          />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <Button
              href={`${company.email.href}?subject=${encodeURIComponent(`Quote request: ${product.name}`)}`}
              size="lg"
              className="mt-8"
            >
              Request a quote
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
