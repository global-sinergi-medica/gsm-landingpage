import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Category, ImageAsset } from "@/types";

type CategoryCardProps = Omit<Category, "id"> & {
  href: string;
  count: number;
  thumbnails: ImageAsset[];
};

export function CategoryCard({
  icon: Icon,
  label,
  image,
  href,
  count,
  thumbnails,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-card-hover focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:outline-none sm:p-5"
    >
      <span
        aria-hidden
        className="absolute -top-10 -right-10 size-28 rounded-full bg-lime-500/0 blur-2xl transition-colors duration-300 group-hover:bg-lime-500/30"
      />
      <div className="flex items-start justify-between">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-teal-50 text-navy-950 transition-colors duration-300 group-hover:bg-lime-500">
          <Icon
            aria-hidden
            className="size-7 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12"
            strokeWidth={1.6}
          />
        </span>
        <ArrowUpRight
          aria-hidden
          className="size-5 -translate-x-1 translate-y-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-0 group-hover:text-teal-600 group-hover:opacity-100"
        />
      </div>
      <span className="mt-6 text-card font-bold text-ink">{label}</span>
      <span className="mt-1 text-caption text-muted">
        {count} {count === 1 ? "item" : "items"} in catalog
      </span>
      {image ? (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes="280px"
          className="mt-5 h-16 w-full object-contain object-left mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <span className="mt-5 flex h-16 gap-2 overflow-hidden">
          {thumbnails.map((thumbnail) => (
            <Image
              key={thumbnail.src}
              src={thumbnail.src}
              alt=""
              width={64}
              height={64}
              className="size-16 shrink-0 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ))}
        </span>
      )}
    </Link>
  );
}
