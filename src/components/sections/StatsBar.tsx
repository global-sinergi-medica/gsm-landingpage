import { Reveal } from "@/components/ui/Reveal";
import { StatItem } from "@/components/ui/StatItem";
import { stats } from "@/data/stats";

export function StatsBar() {
  return (
    <section aria-label="Key figures" className="relative z-10 -mt-16 px-hero-inset">
      <ul className="relative container-page grid animate-hero-rise grid-cols-1 divide-y divide-line overflow-hidden rounded-card border border-line bg-white py-2 shadow-card-hover before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-teal-500/60 before:to-transparent sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:py-9">
        {stats.map(({ id, ...stat }, index) => (
          <Reveal
            key={id}
            as="li"
            variant="fade-up"
            delay={600 + index * 120}
            className="flex items-center lg:justify-center"
          >
            <StatItem {...stat} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
