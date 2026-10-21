import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionCopy } from "@/data/navigation";
import { steps } from "@/data/steps";

export function HowItWorks() {
  return (
    <section aria-labelledby="process-title" className="py-section">
      <div className="container-page">
        <Reveal variant="fade-up">
          <SectionHeading id="process-title" {...sectionCopy.process} />
        </Reveal>

        <div className="relative mt-16">
          <Reveal
            variant="draw"
            delay={200}
            className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-0.5 bg-linear-to-r from-teal-500 via-lime-500 to-teal-500 lg:block"
          />
          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ id, icon: Icon, title, description }, index) => (
              <Reveal
                key={id}
                as="li"
                variant="zoom-in"
                delay={400 + index * 220}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative flex size-16 items-center justify-center rounded-full bg-navy-950 text-lime-400 shadow-card-hover ring-8 ring-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-lime-500 group-hover:text-ink">
                  <Icon aria-hidden className="size-7" strokeWidth={1.75} />
                  <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-lime-500 text-caption font-bold text-ink ring-2 ring-white">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-card font-bold text-ink">{title}</h3>
                <p className="mt-2 max-w-60 text-body text-muted">{description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
