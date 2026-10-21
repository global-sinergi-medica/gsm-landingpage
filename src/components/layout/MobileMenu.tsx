"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  links: NavLink[];
  activeHref: string;
  cta: NavLink;
  login: NavLink;
}

const ITEM_STAGGER_MS = 60;

export function MobileMenu({ links, activeHref, cta, login }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);
  const itemClass = (index: number) => ({
    className: cn(
      "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
      open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
    ),
    style: { transitionDelay: open ? `${100 + index * ITEM_STAGGER_MS}ms` : "0ms" },
  });

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="relative flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
      >
        <Menu
          aria-hidden
          className={cn(
            "absolute size-6 transition-all duration-300",
            open ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
          )}
        />
        <X
          aria-hidden
          className={cn(
            "absolute size-6 transition-all duration-300",
            open ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0",
          )}
        />
      </button>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full mt-2 grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col rounded-card border border-line bg-white p-3 shadow-card-hover">
            {links.map((link, index) => (
              <li key={link.href} {...itemClass(index)}>
                <Link
                  href={link.href}
                  onClick={close}
                  aria-current={link.href === activeHref ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-nav font-semibold transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none",
                    link.href === activeHref ? "text-teal-600" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              {...itemClass(links.length)}
              className={cn(
                itemClass(links.length).className,
                "flex flex-col gap-2 px-1 pt-2 pb-1 sm:hidden",
              )}
            >
              <Button
                href={login.href}
                variant="outline"
                size="md"
                onClick={close}
                className="w-full"
              >
                {login.label}
              </Button>
              <Button href={cta.href} size="md" onClick={close} className="w-full">
                {cta.label}
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
