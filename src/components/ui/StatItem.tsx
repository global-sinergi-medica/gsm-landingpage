import type { Stat } from "@/types";
import { CountUp } from "./CountUp";

type StatItemProps = Omit<Stat, "id">;

export function StatItem({ icon: Icon, value, label }: StatItemProps) {
  return (
    <div className="group flex items-center gap-4 px-6 py-6 lg:py-0">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-teal-600 transition-colors duration-300 group-hover:border-teal-500 group-hover:bg-teal-50">
        <Icon aria-hidden className="size-5" strokeWidth={1.75} />
      </span>
      <p className="flex flex-col">
        <CountUp
          value={value}
          className="text-stat font-bold text-ink"
          suffixClassName="text-teal-500"
        />
        <span className="mt-0.5 text-sm text-muted">{label}</span>
      </p>
    </div>
  );
}
