"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
}

const numberFormatter = new Intl.NumberFormat("en-US");

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return null;
  return { prefix: match[1], target: Number(match[2].replace(/,/g, "")), suffix: match[3] };
}

export function CountUp({ value, duration = 1800, className, suffixClassName }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);
  const parsed = parseValue(value);

  useEffect(() => {
    const node = ref.current;
    const source = parseValue(value);
    if (!node || !source) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCurrent(Math.round(source.target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden className="tabular-nums">
        {parsed ? (
          <>
            {parsed.prefix}
            {numberFormatter.format(current ?? parsed.target)}
            <span className={suffixClassName}>{parsed.suffix}</span>
          </>
        ) : (
          value
        )}
      </span>
    </span>
  );
}
