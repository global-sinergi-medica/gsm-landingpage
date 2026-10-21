import { MessageCircleQuestion, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { sectionCopy } from "@/data/navigation";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-surface py-section">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal variant="slide-left" className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="faq-title" align="left" {...sectionCopy.faq} />
          <div className="mt-8 flex items-center gap-4 rounded-card border border-line bg-white p-5 shadow-card">
            <span className="flex size-12 shrink-0 animate-glow-pulse items-center justify-center rounded-2xl bg-lime-500 text-ink">
              <MessageCircleQuestion aria-hidden className="size-6" />
            </span>
            <div className="flex-1">
              <p className="text-card font-bold text-ink">Still have questions?</p>
              <p className="text-caption text-muted">Call or email our team anytime.</p>
            </div>
            <Button href="#contact" variant="navy" size="sm">
              Ask us
            </Button>
          </div>
        </Reveal>

        <ul className="space-y-3">
          {faqs.map(({ id, question, answer }, index) => (
            <Reveal key={id} as="li" variant="slide-right" delay={index * 110}>
              <details
                name="faq"
                className="faq group rounded-card border border-line bg-white shadow-card transition-all duration-300 open:border-teal-500/40 open:shadow-card-hover"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card p-6 text-card font-bold text-ink focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-ink transition-all duration-500 group-open:rotate-[135deg] group-open:bg-lime-500">
                    <Plus aria-hidden className="size-4.5" />
                  </span>
                </summary>
                <p className="px-6 pb-6 text-body text-muted">{answer}</p>
              </details>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
