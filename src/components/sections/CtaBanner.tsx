import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctaBanner } from "@/data/navigation";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="py-section">
      <div className="container-page">
        <Reveal
          variant="zoom-in"
          className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-hero bg-lime-band px-6 py-14 text-center shadow-card-hover sm:px-12 md:py-20"
        >
          <div
            aria-hidden
            className="absolute -inset-12 -z-10 animate-grid-pan bg-grid-dark mask-[radial-gradient(ellipse_at_center,black,transparent_70%)] bg-grid-size will-change-transform"
          />
          <div
            aria-hidden
            className="absolute -top-24 -right-24 -z-10 size-72 animate-spin-slow rounded-full border-[36px] border-dashed border-white/25"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 -left-20 -z-10 size-72 animate-drift rounded-full bg-white/25 blur-3xl will-change-transform"
          />
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-navy-950 md:text-cta"
          >
            {ctaBanner.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lead text-navy-950/70">
            {ctaBanner.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={ctaBanner.action.href} variant="navy" size="xl">
              <Mail
                aria-hidden
                className="size-4.5 transition-transform duration-300 group-hover/button:-rotate-12"
              />
              {ctaBanner.action.label}
            </Button>
            <Button href={ctaBanner.secondaryAction.href} variant="white" size="xl">
              <Phone
                aria-hidden
                className="size-4 transition-transform duration-300 group-hover/button:-rotate-12"
              />
              {ctaBanner.secondaryAction.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
