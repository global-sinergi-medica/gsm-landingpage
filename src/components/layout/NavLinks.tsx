"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types";

interface NavLinksProps {
  links: NavLink[];
  activeHref: string;
}

const sectionSelector = (href: string) => (href.startsWith("/#") ? href.slice(1) : null);

interface Indicator {
  left: number;
  width: number;
}

export function NavLinks({ links, activeHref }: NavLinksProps) {
  const [active, setActive] = useState(activeHref);
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>());
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = links
      .map((link) => sectionSelector(link.href))
      .filter((selector) => selector !== null)
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(`/#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  const target = hovered ?? active;

  useEffect(() => {
    const node = itemRefs.current.get(target);
    const list = listRef.current;
    if (!node || !list) return;
    const update = () => {
      const listBox = list.getBoundingClientRect();
      const box = node.getBoundingClientRect();
      setIndicator({ left: box.left - listBox.left - list.clientLeft, width: box.width });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [target]);

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul
        ref={listRef}
        className="relative flex items-center gap-1 rounded-full border border-line bg-surface/80 p-1"
        onMouseLeave={() => setHovered(null)}
      >
        {indicator && (
          <li
            aria-hidden
            className="absolute top-1 bottom-1 left-0 rounded-full bg-white shadow-card transition-[transform,width] duration-500 ease-[cubic-bezier(0.34,1.4,0.64,1)]"
            style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
          />
        )}
        {links.map((link, index) => {
          const isActive = link.href === active;
          return (
            <li
              key={link.href}
              className="animate-drop-in"
              style={{ "--stagger": `${150 + index * 70}ms` } as CSSProperties}
            >
              <Link
                ref={(node) => {
                  if (node) itemRefs.current.set(link.href, node);
                  else itemRefs.current.delete(link.href);
                }}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onMouseEnter={() => setHovered(link.href)}
                onFocus={() => setHovered(link.href)}
                onBlur={() => setHovered(null)}
                onClick={() => setActive(link.href)}
                className={cn(
                  "relative block rounded-full px-5 py-2 text-nav font-semibold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none",
                  link.href === target ? "text-teal-600" : "text-ink/65 hover:text-ink",
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-lime-500 transition-all duration-300",
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
