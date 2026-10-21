import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionCopy } from "@/data/navigation";
import { categories } from "@/data/categories";
import { galleryProducts as products } from "@/data/products";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const categoryLabel = Object.fromEntries(categories.map(({ id, label }) => [id, label]));

interface GalleryRowProps {
  items: Product[];
  reverse?: boolean;
}

function GalleryRow({ items, reverse = false }: GalleryRowProps) {
  const loop = [...items, ...items];
  return (
    <div className="group overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul
        className={cn(
          "flex w-max gap-5 py-3 group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {loop.map(({ id, name, category, image }, index) => (
          <li
            key={`${id}-${index}`}
            aria-hidden={index >= items.length}
            className={cn(
              "group/tile relative shrink-0 overflow-hidden rounded-card border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover",
              index % 3 === 1 ? "w-80" : "w-64",
            )}
          >
            <Image
              src={image.src}
              alt={index >= items.length ? "" : image.alt}
              width={image.width}
              height={image.height}
              sizes="320px"
              className="aspect-4/3 w-full object-contain p-6 mix-blend-multiply transition-transform duration-700 group-hover/tile:scale-110 group-hover/tile:-rotate-2"
            />
            <div className="absolute inset-x-3 bottom-3 flex translate-y-4 items-center justify-between gap-3 rounded-xl bg-navy-950/90 px-4 py-2.5 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover/tile:translate-y-0 group-hover/tile:opacity-100">
              <span className="text-sm font-semibold">{name}</span>
              <span className="shrink-0 text-caption font-bold text-lime-400">
                {categoryLabel[category]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const half = Math.ceil(products.length / 2);

export function ProductGallery() {
  return (
    <section aria-labelledby="gallery-title" className="overflow-hidden bg-white py-section">
      <Reveal variant="blur-in" className="container-page">
        <SectionHeading id="gallery-title" {...sectionCopy.gallery} />
      </Reveal>
      <Reveal variant="fade-up" delay={200} className="mt-12 space-y-3">
        <GalleryRow items={products.slice(0, half)} />
        <GalleryRow items={products.slice(half)} reverse />
      </Reveal>
    </section>
  );
}
