"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo, useState, type CSSProperties } from "react";
import { LayoutGrid, PackageSearch, Search, X } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductDialog } from "@/components/ui/ProductDialog";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { categoryCount } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Category, Product } from "@/types";

const ALL = "all";
const STAGGER_MS = 40;
const MAX_STAGGER_MS = 400;

const stagger = (index: number) =>
  ({ "--stagger": `${Math.min(index * STAGGER_MS, MAX_STAGGER_MS)}ms` }) as CSSProperties;

function matches(product: Product, query: string) {
  if (!query) return true;
  const haystack = [product.name, product.group, product.description, product.material, product.id]
    .join(" ")
    .toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .every((word) => haystack.includes(word));
}

interface GridProps {
  items: Product[];
  onOpen: (product: Product) => void;
}

function ProductGrid({ items, onOpen }: GridProps) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
      {items.map((product, index) => (
        <li key={product.id} className="animate-fade-up" style={stagger(index)}>
          <ProductCard product={product} onOpen={() => onOpen(product)} />
        </li>
      ))}
    </ul>
  );
}

function CategoryHeader({ category, count }: { category: Category; count: number }) {
  const { icon: Icon, label, image } = category;
  return (
    <div className="mb-5 flex items-center gap-4 border-b border-line pb-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-navy-950 text-lime-400">
        <Icon aria-hidden className="size-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1">
        <h2 className="text-xl font-bold tracking-tight text-ink">{label}</h2>
        <p className="text-caption text-muted">
          {count} {count === 1 ? "item" : "items"}
        </p>
      </div>
      {image && (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes="220px"
          className="hidden h-12 w-auto object-contain mix-blend-multiply sm:block"
        />
      )}
    </div>
  );
}

function activeCategory(value: string | null) {
  return value && categories.some(({ id }) => id === value) ? value : ALL;
}

export function CatalogBrowserFromUrl() {
  return <CatalogBrowser active={activeCategory(useSearchParams().get("category"))} />;
}

export function CatalogBrowser({ active = ALL }: { active?: string }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const choose = (id: string) => {
    const url = new URL(window.location.href);
    if (id === ALL) url.searchParams.delete("category");
    else url.searchParams.set("category", id);
    window.history.replaceState(null, "", url);
  };

  const filtered = useMemo(
    () =>
      products.filter(
        (product) => (active === ALL || product.category === active) && matches(product, query),
      ),
    [active, query],
  );

  const grouped = active === ALL && !query;
  const tabs = [
    { id: ALL, label: "All products", icon: LayoutGrid, count: products.length },
    ...categories.map(({ id, label, icon }) => ({ id, label, icon, count: categoryCount[id] })),
  ];

  return (
    <div className="container-page grid gap-8 py-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:py-16">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, material, code…"
            className="h-12 w-full rounded-full border border-line bg-white pr-4 pl-11 text-sm text-ink shadow-card transition-colors outline-none placeholder:text-muted focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted hover:bg-surface hover:text-ink"
            >
              <X aria-hidden className="size-4" />
            </button>
          )}
        </label>

        <nav aria-label="Product categories" className="mt-5">
          <p className="mb-2 hidden px-3 text-eyebrow font-semibold text-muted uppercase lg:block">
            Categories
          </p>
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0">
            {tabs.map(({ id, label, icon: Icon, count }) => {
              const isActive = id === active;
              return (
                <li key={id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => choose(id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex w-full cursor-pointer items-center gap-3 rounded-full px-4 py-2 text-left text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none lg:rounded-xl lg:px-3 lg:py-2.5",
                      isActive
                        ? "bg-navy-950 text-white shadow-card-hover"
                        : "border border-line bg-white text-ink hover:border-ink lg:border-transparent lg:bg-transparent lg:hover:border-transparent lg:hover:bg-surface",
                    )}
                  >
                    <Icon
                      aria-hidden
                      className={cn(
                        "hidden size-4 shrink-0 lg:block",
                        isActive ? "text-lime-400" : "text-teal-600",
                      )}
                      strokeWidth={1.75}
                    />
                    <span className="flex-1 whitespace-nowrap">{label}</span>
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-badge font-bold tabular-nums",
                        isActive ? "bg-lime-500 text-ink" : "bg-surface text-muted",
                      )}
                    >
                      {count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <div aria-live="polite">
        <p className="mb-6 text-sm text-muted">
          Showing <span className="font-semibold text-ink">{filtered.length}</span> of{" "}
          {products.length} products
          {query && (
            <>
              {" "}
              for <span className="font-semibold text-ink">“{query}”</span>
            </>
          )}
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center rounded-card border border-dashed border-line px-6 py-20 text-center">
            <PackageSearch aria-hidden className="size-10 text-muted" strokeWidth={1.5} />
            <p className="mt-4 text-card font-bold text-ink">No products found</p>
            <p className="mt-1 text-body text-muted">Try another keyword or category.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                choose(ALL);
              }}
              className="mt-6 cursor-pointer rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink hover:border-ink"
            >
              Reset filters
            </button>
          </div>
        ) : grouped ? (
          <div className="space-y-14">
            {categories.map((category) => (
              <section key={category.id} aria-label={category.label}>
                <CategoryHeader category={category} count={categoryCount[category.id]} />
                <ProductGrid
                  items={filtered.filter((product) => product.category === category.id)}
                  onOpen={setSelected}
                />
              </section>
            ))}
          </div>
        ) : (
          <ProductGrid key={`${active}-${query}`} items={filtered} onOpen={setSelected} />
        )}
      </div>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
