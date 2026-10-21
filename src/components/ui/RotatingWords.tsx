"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

const LETTER_STAGGER_MS = 24;
const ENTER_DELAY_MS = 120;
const SWOOSH_DELAY_MS = 350;

interface RotatingWordsProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

interface WordProps {
  word: string;
  leaving?: boolean;
}

const stagger = (ms: number) => ({ "--stagger": `${ms}ms` }) as CSSProperties;

function RollingLetters({ word, leaving = false }: WordProps) {
  return (
    <span className="col-start-1 row-start-1 whitespace-nowrap">
      {Array.from(word).map((char, index) => (
        <span
          key={index}
          className={cn("inline-block", leaving ? "animate-letter-out" : "animate-letter-in")}
          style={stagger(index * LETTER_STAGGER_MS + (leaving ? 0 : ENTER_DELAY_MS))}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

function Swoosh({ word, leaving = false }: WordProps) {
  return (
    <span className="invisible relative col-start-1 row-start-1 justify-self-start whitespace-nowrap">
      {word}
      <svg
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        className="visible absolute inset-x-0 -bottom-3 h-3.5 w-full overflow-visible"
      >
        <path
          d="M3 11 C 70 4, 150 2, 297 8"
          pathLength={1}
          strokeDasharray="1 1"
          strokeWidth={5}
          strokeLinecap="round"
          className={cn(
            "fill-none stroke-lime-500",
            leaving ? "animate-erase-line" : "animate-draw-line",
          )}
          style={
            leaving
              ? undefined
              : stagger(word.length * LETTER_STAGGER_MS + ENTER_DELAY_MS + SWOOSH_DELAY_MS)
          }
        />
      </svg>
    </span>
  );
}

export function RotatingWords({ words, interval = 3200, className }: RotatingWordsProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((value) => value + 1), interval);
    return () => window.clearInterval(id);
  }, [interval]);

  const index = tick % words.length;
  const previous = (index - 1 + words.length) % words.length;

  return (
    <span aria-hidden className={cn("inline-grid", className)}>
      <span className="col-start-1 row-start-1 inline-grid overflow-clip [overflow-clip-margin:0.12em]">
        {tick > 0 && <RollingLetters key={`out-${tick}`} word={words[previous]} leaving />}
        <RollingLetters key={`in-${tick}`} word={words[index]} />
      </span>
      {tick > 0 && <Swoosh key={`swoosh-out-${tick}`} word={words[previous]} leaving />}
      <Swoosh key={`swoosh-in-${tick}`} word={words[index]} />
    </span>
  );
}
