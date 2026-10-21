import { categories } from "@/data/categories";
import { company } from "@/data/navigation";
import { products } from "@/data/products";

export const categoryLabel: Record<string, string> = Object.fromEntries(
  categories.map(({ id, label }) => [id, label]),
);

export const categoryCount: Record<string, number> = Object.fromEntries(
  categories.map(({ id }) => [id, products.filter((product) => product.category === id).length]),
);

export function catalogHref(category?: string): string {
  return category ? `/catalog?category=${category}` : "/catalog";
}

export function quoteHref(productName: string): string {
  return `${company.email.href}?subject=${encodeURIComponent(`Quote request: ${productName}`)}`;
}
