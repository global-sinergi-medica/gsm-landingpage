"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductDialog } from "@/components/ui/ProductDialog";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";
import { sectionCopy } from "@/data/navigation";
import { products } from "@/data/products";
import { catalogHref, categoryCount } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const ALL = "all";
const COLUMNS = 4;
const PREVIEW_COUNT = 8;

const tabs = [
  { id: ALL, label: "All", count: products.length },
  ...categories.map(({ id, label }) => ({ id, label, count: categoryCount[id] })),
];

export function Catalog() {
  const [active, setActive] = useState(ALL);
  const [selected, setSelected] = useState<Product | null>(null);
  const filtered = active === ALL ? products : products.filter((p) => p.category === active);
  const visible = filtered.slice(0, PREVIEW_COUNT);

  return (
    <section
      id="catalog"
      aria-labelledby="catalog-title"
      className="relative bg-surface py-section"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-dark mask-[linear-gradient(to_bottom,black,transparent_60%)] bg-grid-size"
      />
      <div className="relative container-page">
        <Reveal
          variant="fade-up"
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <SectionHeading id="catalog-title" align="left" {...sectionCopy.products} />
          <Button href={catalogHref()} variant="outline" size="md">
            View full catalog
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </Button>
        </Reveal>

        <div
          role="tablist"
          aria-label="Product categories"
          className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
        >
          {tabs.map(({ id, label, count }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="catalog-grid"
                onClick={() => setActive(id)}
                className={cn(
                  "flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none",
                  isActive
                    ? "border-navy-950 bg-navy-950 text-white shadow-card-hover"
                    : "border-line bg-white text-ink hover:border-ink",
                )}
              >
                {label}
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-badge font-bold",
                    isActive ? "bg-lime-500 text-ink" : "bg-surface text-muted",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <ul
          id="catalog-grid"
          role="tabpanel"
          aria-live="polite"
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visible.map((product, index) => (
            <Reveal key={product.id} as="li" variant="flip-up" delay={(index % COLUMNS) * 90}>
              <ProductCard product={product} onOpen={() => setSelected(product)} />
            </Reveal>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button href={catalogHref(active === ALL ? undefined : active)} size="lg">
            {filtered.length > PREVIEW_COUNT
              ? `See all ${filtered.length} products`
              : "Open full catalog"}
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </Button>
        </div>
      </div>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
