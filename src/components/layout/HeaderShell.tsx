"use client";

import { useEffect, useState, type ReactNode } from "react";

const SCROLL_THRESHOLD = 24;

interface HeaderShellProps {
  children: ReactNode;
}

export function HeaderShell({ children }: HeaderShellProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header data-scrolled={scrolled} className="group/header sticky top-0 z-50 h-nav">
      <div
        aria-hidden
        className="absolute inset-0 border-b border-line/60 bg-white/80 backdrop-blur-xl transition-opacity duration-500 group-data-[scrolled=true]/header:opacity-0"
      />
      {children}
    </header>
  );
}
