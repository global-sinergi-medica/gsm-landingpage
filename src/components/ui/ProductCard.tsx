import Image from "next/image";
import { ArrowRight, Box, Maximize2, ShieldCheck } from "lucide-react";
import { categoryLabel, quoteHref } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onOpen?: () => void;
}

export function ProductImage({
  product,
  sizes,
  className,
}: {
  product: Product;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        product.photo
          ? "bg-surface"
          : "bg-[radial-gradient(circle_at_50%_40%,#ffffff_0%,#eef5f4_70%,#e4efee_100%)]",
        className,
      )}
    >
      <Image
        src={product.image.src}
        alt={product.image.alt}
        fill
        sizes={sizes}
        className={cn(
          "transition-transform duration-700 ease-out group-hover:scale-105",
          product.photo
            ? "object-cover"
            : "object-contain p-[12%] drop-shadow-[0_14px_18px_rgba(7,32,60,0.18)]",
        )}
      />
    </div>
  );
}

export function ProductCard({ product, onOpen }: ProductCardProps) {
  const { id, name, group, category, description, material, sterile, unit } = product;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-card-hover">
      <div className="relative">
        <ProductImage
          product={product}
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 33vw, 50vw"
          className="aspect-square"
        />
        <span className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-white/90 px-2.5 py-1 text-badge font-semibold tracking-wide text-navy-950 uppercase shadow-card backdrop-blur">
          {group}
        </span>
        {onOpen && (
          <button
            type="button"
            onClick={onOpen}
            aria-label={`View details of ${name}`}
            className="absolute right-3 bottom-3 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white text-navy-950 opacity-0 shadow-card transition-all duration-300 group-hover:opacity-100 hover:bg-navy-950 hover:text-white focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none max-lg:opacity-100"
          >
            <Maximize2 aria-hidden className="size-4" />
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="flex items-center justify-between gap-2 text-badge font-semibold tracking-wide uppercase">
          <span className="truncate text-teal-600">{categoryLabel[category]}</span>
          <span className="shrink-0 text-muted tabular-nums">{id}</span>
        </p>
        <h3 className="mt-1.5 text-card leading-snug font-bold text-ink">
          {onOpen ? (
            <button
              type="button"
              onClick={onOpen}
              className="cursor-pointer text-left hover:text-teal-600 focus-visible:underline focus-visible:outline-none"
            >
              {name}
            </button>
          ) : (
            name
          )}
        </h3>
        <p className="mt-1 line-clamp-2 text-caption text-muted">{description}</p>

        <p className="mt-3 truncate text-caption text-ink/80" title={material}>
          <span className="text-muted">Material · </span>
          {material}
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5 text-badge font-semibold text-ink/80">
          {sterile !== "-" && (
            <li className="inline-flex items-center gap-1 rounded-full bg-surface px-2 py-1">
              <ShieldCheck aria-hidden className="size-3 text-teal-600" />
              Sterile: {sterile}
            </li>
          )}
          <li className="inline-flex items-center gap-1 rounded-full bg-surface px-2 py-1">
            <Box aria-hidden className="size-3 text-teal-600" />
            {unit}
          </li>
        </ul>

        <div className="mt-auto pt-4">
          <a
            href={quoteHref(name)}
            aria-label={`Request a quote for ${name}`}
            className="group/quote flex items-center justify-center gap-2 rounded-full bg-lime-500 px-3 py-2.5 text-sm font-semibold whitespace-nowrap text-ink transition-colors duration-300 hover:bg-navy-950 hover:text-white focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95"
          >
            Request Quote
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover/quote:translate-x-1"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
