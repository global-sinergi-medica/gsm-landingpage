import Image from "next/image";
import { Hospital } from "lucide-react";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/features";
import { sectionCopy, whyUsImage } from "@/data/navigation";

export function WhyChooseUs() {
  return (
    <section
      id="about"
      aria-labelledby="why-title"
      className="relative isolate overflow-hidden bg-navy-900 py-section"
    >
      <div
        aria-hidden
        className="absolute -inset-12 -z-10 animate-grid-pan bg-grid mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)] bg-grid-size will-change-transform"
      />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-40 -z-10 size-[640px] animate-drift rounded-full bg-teal-500/10 blur-[120px] will-change-transform"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal variant="slide-left">
            <SectionHeading id="why-title" tone="light" align="left" {...sectionCopy.whyUs} />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map(({ id, ...feature }, index) => (
              <Reveal key={id} as="li" variant="slide-left" delay={150 + index * 120}>
                <FeatureItem {...feature} />
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Reveal
            variant="clip-reveal"
            delay={200}
            className="relative aspect-4/3 overflow-hidden rounded-hero border border-white/10"
          >
            <Image
              src={whyUsImage.src}
              alt={whyUsImage.alt}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover transition-transform duration-[2s] hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent"
            />
          </Reveal>
          <Reveal variant="zoom-in" delay={1100} className="absolute bottom-6 left-6 sm:-left-6">
            <div className="flex animate-float items-center gap-3 rounded-2xl border border-white/20 bg-navy-950/85 p-4 pr-6 shadow-glass">
              <span className="flex size-12 items-center justify-center rounded-xl bg-lime-500 text-ink">
                <Hospital aria-hidden className="size-6" />
              </span>
              <span>
                <span className="block text-2xl font-bold text-white">8 services</span>
                <span className="block text-caption text-white/70">
                  From surgery to after-sales
                </span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
