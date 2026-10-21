import { CategoryCard } from "@/components/ui/CategoryCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/categories";
import { sectionCopy } from "@/data/navigation";
import { products } from "@/data/products";
import { catalogHref } from "@/lib/catalog";

const THUMBNAIL_COUNT = 3;

export function CategoryShowcase() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="py-section">
      <div className="container-page">
        <Reveal variant="fade-up">
          <SectionHeading id="categories-title" {...sectionCopy.categories} />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {categories.map(({ id, ...category }, index) => {
            const items = products.filter((product) => product.category === id);
            return (
              <Reveal key={id} as="li" variant="zoom-in" delay={index * 90}>
                <CategoryCard
                  {...category}
                  href={catalogHref(id)}
                  count={items.length}
                  thumbnails={items.slice(0, THUMBNAIL_COUNT).map((product) => product.image)}
                />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
