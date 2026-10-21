import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { brand, contactItems, copyright, footerQuickLinks } from "@/data/navigation";
import { categories } from "@/data/categories";
import { catalogHref } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

const footerCategoryLinks: NavLink[] = categories.map(({ id, label }) => ({
  label,
  href: catalogHref(id),
}));

const linkFocus =
  "focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 focus-visible:outline-none";

interface FooterLinkColumnProps {
  title: string;
  links: NavLink[];
  delay: number;
}

function FooterLinkColumn({ title, links, delay }: FooterLinkColumnProps) {
  return (
    <Reveal variant="fade-up" delay={delay}>
      <nav aria-label={title}>
        <h2 className="text-eyebrow font-semibold text-white/50 uppercase">{title}</h2>
        <ul className="mt-5 space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-sm text-body text-white/80 transition-colors hover:text-lime-400",
                  linkFocus,
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="absolute -top-40 left-1/3 -z-10 size-[480px] rounded-full bg-navy-700/50 blur-3xl"
      />
      <div className="container-page pt-20 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-footer lg:gap-10">
          <Reveal variant="fade-up">
            <Link
              href="/#home"
              className={cn("inline-flex items-center gap-3 rounded-sm", linkFocus)}
              aria-label={`${brand.name} home`}
            >
              <BrandLogo tone="light" />
            </Link>
            <p className="mt-5 text-body font-semibold text-lime-400 italic">{brand.tagline}</p>
            <p className="mt-3 max-w-72 text-body text-white/65">{brand.description}</p>
          </Reveal>

          <FooterLinkColumn title="Quick Links" links={footerQuickLinks} delay={120} />
          <FooterLinkColumn title="Categories" links={footerCategoryLinks} delay={240} />

          <Reveal variant="fade-up" delay={360}>
            <h2 className="text-eyebrow font-semibold text-white/50 uppercase">Contact Info</h2>
            <ul className="mt-5 space-y-3">
              {contactItems.map(({ id, icon: Icon, label, href }) => (
                <li key={id}>
                  <a
                    href={href}
                    {...(href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={cn(
                      "group inline-flex items-center gap-3 rounded-sm text-body text-white/80 transition-colors hover:text-lime-400",
                      linkFocus,
                    )}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-lime-400 transition-colors group-hover:bg-lime-500 group-hover:text-ink">
                      <Icon aria-hidden className="size-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-white/50">{copyright}</p>
          <p className="text-caption text-white/50">
            End-to-End Orthopedic Solutions for Better Life
          </p>
        </div>
      </div>
    </footer>
  );
}
