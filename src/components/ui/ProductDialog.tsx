"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Phone, X } from "lucide-react";
import { company } from "@/data/navigation";
import { categoryLabel, quoteHref } from "@/lib/catalog";
import type { Product } from "@/types";
import { ProductImage } from "./ProductCard";

interface ProductDialogProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDialog({ product, onClose }: ProductDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (product && !dialog.open) dialog.showModal();
    if (!product && dialog.open) dialog.close();
  }, [product]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      aria-labelledby="product-dialog-title"
      className="m-auto w-[min(56rem,calc(100%-2rem))] overflow-hidden rounded-hero bg-white p-0 shadow-card-hover backdrop:bg-navy-950/60 backdrop:backdrop-blur-sm open:animate-pop-in"
    >
      {product && (
        <div className="grid md:grid-cols-2">
          <ProductImage
            product={product}
            sizes="(min-width: 768px) 448px, 100vw"
            className="aspect-square"
          />
          <div className="relative flex flex-col p-6 md:p-8">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full bg-surface text-ink transition-colors hover:bg-navy-950 hover:text-white focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
            >
              <X aria-hidden className="size-4" />
            </button>
            <p className="text-eyebrow font-semibold text-teal-600 uppercase">
              {categoryLabel[product.category]} · {product.group}
            </p>
            <h2
              id="product-dialog-title"
              className="mt-2 pr-10 text-2xl font-bold tracking-tight text-ink"
            >
              {product.name}
            </h2>
            <p className="mt-2 text-body text-muted">{product.description}</p>

            <dl className="mt-6 divide-y divide-line rounded-2xl border border-line text-sm">
              {[
                ["Product code", product.id],
                ["Material", product.material],
                ["Sterile", product.sterile],
                ["Unit", product.unit],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 px-4 py-2.5">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-right font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              <a
                href={quoteHref(product.name)}
                className="group/quote inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-lime-500 px-5 py-3 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:bg-navy-950 hover:text-white focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Request Quote
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover/quote:translate-x-1"
                />
              </a>
              <a
                href={company.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold whitespace-nowrap text-ink transition-colors hover:border-ink focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
              >
                <Phone aria-hidden className="size-4" />
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
