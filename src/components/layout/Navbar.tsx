import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { brand, loginCta, mainNav, quoteCta } from "@/data/navigation";
import { HeaderShell } from "./HeaderShell";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

const stagger = (ms: number) => ({ "--stagger": `${ms}ms` }) as CSSProperties;

interface NavbarProps {
  page?: "home" | "catalog";
}

export function Navbar({ page = "home" }: NavbarProps) {
  const activeHref = page === "catalog" ? "/catalog" : mainNav[0].href;

  return (
    <HeaderShell>
      <div className="relative container-page flex h-full items-center">
        <div className="grid h-full w-full grid-cols-[1fr_auto] items-center gap-6 rounded-full border border-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[scrolled=true]/header:mt-3 group-data-[scrolled=true]/header:h-16 group-data-[scrolled=true]/header:border-line group-data-[scrolled=true]/header:bg-white/85 group-data-[scrolled=true]/header:pr-2 group-data-[scrolled=true]/header:pl-5 group-data-[scrolled=true]/header:shadow-card-hover group-data-[scrolled=true]/header:backdrop-blur-xl lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/#home"
            aria-label={`${brand.name} home`}
            className="group/logo flex animate-drop-in items-center gap-2 justify-self-start rounded-full focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
          >
            <BrandLogo />
          </Link>

          <NavLinks links={mainNav} activeHref={activeHref} />

          <div className="flex items-center gap-3 justify-self-end">
            <div className="hidden animate-drop-in sm:block" style={stagger(550)}>
              <Button
                href={loginCta.href}
                variant="outline"
                aria-label={loginCta.label}
                className="w-12 px-0 xl:w-auto xl:px-6"
              >
                <LogIn
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
                />
                <span className="hidden xl:inline">{loginCta.label}</span>
              </Button>
            </div>
            <div className="hidden animate-drop-in sm:block" style={stagger(650)}>
              <Button href={quoteCta.href}>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/50 blur-md"
                />
                {quoteCta.label}
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </Button>
            </div>
            <MobileMenu links={mainNav} activeHref={activeHref} cta={quoteCta} login={loginCta} />
          </div>
        </div>
      </div>
      <span
        aria-hidden
        className="scroll-progress pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-lime-500 via-teal-500 to-lime-500"
      />
    </HeaderShell>
  );
}
