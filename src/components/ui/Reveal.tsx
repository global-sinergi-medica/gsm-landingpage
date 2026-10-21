"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type RevealVariant =
  | "fade-up"
  | "zoom-in"
  | "slide-left"
  | "slide-right"
  | "blur-in"
  | "flip-up"
  | "clip-reveal"
  | "draw";

interface RevealProps {
  variant?: RevealVariant;
  delay?: number;
  as?: "div" | "li" | "span";
  className?: string;
  children?: ReactNode;
}

export function Reveal({
  variant = "fade-up",
  delay = 0,
  as: Tag = "div",
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    // IntersectionObserver honours the target's own clip-path, so a fully clipped node never intersects.
    const target = variant === "clip-reveal" ? (node.parentElement ?? node) : node;
    observer.observe(target);
    return () => observer.disconnect();
  }, [variant]);

  return (
    <Tag
      ref={ref as never}
      data-reveal={variant}
      data-visible={visible}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
