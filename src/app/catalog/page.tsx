import type { Metadata } from "next";
import { Suspense, type CSSProperties } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CatalogBrowser, CatalogBrowserFromUrl } from "@/components/sections/CatalogBrowser";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Product Catalog — PT Global Sinergi Medica",
  description:
    "Orthopedic implants, surgical instruments, medical equipment and hospital services. Filter by category and request a quote.",
};

export default function CatalogPage() {
  const highlights = [
    { value: String(products.length), label: "Products & services" },
    { value: String(categories.length), label: "Categories" },
    { value: "1,000+", label: "Product SKU" },
  ];

  return (
    <>
      <Navbar page="catalog" />
      <main className="overflow-x-clip">
        <section aria-labelledby="catalog-page-title" className="px-hero-inset pt-hero-inset">
          <div className="relative isolate overflow-hidden rounded-hero bg-hero">
            <div
              aria-hidden
              className="absolute -inset-12 -z-10 animate-grid-pan bg-grid mask-[radial-gradient(ellipse_at_center,black_20%,transparent_75%)] bg-grid-size will-change-transform"
            />
            <div
              aria-hidden
              className="absolute -top-32 -right-32 -z-10 size-96 animate-drift rounded-full bg-teal-500/25 blur-3xl will-change-transform"
            />
            <div className="container-page flex flex-col gap-8 py-14 md:flex-row md:items-end md:justify-between md:py-16">
              <div className="max-w-2xl">
                <nav aria-label="Breadcrumb">
                  <ol className="flex items-center gap-1.5 text-sm text-white/60">
                    <li>
                      <Link href="/" className="hover:text-white">
                        Home
                      </Link>
                    </li>
                    <ChevronRight aria-hidden className="size-3.5" />
                    <li aria-current="page" className="font-semibold text-white">
                      Catalog
                    </li>
                  </ol>
                </nav>
                <h1
                  id="catalog-page-title"
                  className="mt-4 animate-word-rise text-4xl font-bold tracking-tight text-white md:text-display"
                >
                  Product Catalog
                </h1>
                <p
                  className="mt-4 max-w-xl animate-fade-up text-lead text-white/75"
                  style={{ "--stagger": "150ms" } as CSSProperties}
                >
                  End-to-end orthopedic solutions, from trauma implants to hospital services. Pick a
                  category, open a product for details, and request a quote.
                </p>
              </div>
              <ul className="flex gap-3">
                {highlights.map(({ value, label }, index) => (
                  <li
                    key={label}
                    className="min-w-28 animate-pop-in rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                    style={{ "--stagger": `${250 + index * 100}ms` } as CSSProperties}
                  >
                    <span className="block text-2xl font-bold text-white">{value}</span>
                    <span className="block text-caption text-white/65">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Suspense fallback={<CatalogBrowser />}>
          <CatalogBrowserFromUrl />
        </Suspense>
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
