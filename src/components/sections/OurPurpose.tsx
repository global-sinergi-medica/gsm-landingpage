import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionCopy } from "@/data/navigation";

const missionPoints = [
  "Provide high-quality orthopedic medical devices and bone implants that meet clinical and regulatory standards.",
  "Ensure product availability through a fast, accurate, and reliable distribution network.",
  "Build strategic partnerships with hospitals, principals, and healthcare institutions across Indonesia.",
  "Support medical professionals with relevant products, education, and technical assistance.",
  "Uphold integrity, professionalism, and patient safety in every business process.",
];

export function OurPurpose() {
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

      <div className="container-page">
        <Reveal variant="fade-up">
          <SectionHeading id="why-title" tone="light" {...sectionCopy.whyUs} />
        </Reveal>

        <Reveal variant="fade-up" delay={150}>
          <div className="mt-14 grid gap-6 border-y border-white/15 py-9 md:grid-cols-[minmax(160px,0.7fr)_2fr] md:gap-12 md:py-12">
            <div>
              <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-lime-400">
                01 / Our Vision
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What we aim to achieve
              </h3>
              
            </div>
            <p className="ml-16 max-w-4xl text-2xl leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
              To become Indonesia’s most trusted orthopedic medical device provider,
              delivering innovative, safe, and internationally compliant solutions that
              advance healthcare services.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(180px,0.7fr)_2fr] lg:gap-12">
          <Reveal variant="slide-left">
            <div className="lg:sticky lg:top-28">
              <p className="text-eyebrow font-semibold uppercase tracking-[0.2em] text-lime-400">
                02 / Our Mission
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                How we make it happen
              </h3>
            </div>
          </Reveal>

          <ol className="divide-y divide-white/10">
            {missionPoints.map((point, index) => (
              <Reveal key={point} as="li" variant="fade-up" delay={120 + index * 90}>
                <div className="grid gap-3 py-5 sm:grid-cols-[44px_1fr] sm:gap-5 sm:py-6">
                  <span className="font-mono text-sm text-teal-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
