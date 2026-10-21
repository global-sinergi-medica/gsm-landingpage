import type { Feature } from "@/types";

type FeatureItemProps = Omit<Feature, "id">;

export function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="group h-full rounded-card border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-lime-500/40 hover:bg-white/10">
      <span className="flex size-11 items-center justify-center rounded-xl bg-lime-500/15 text-lime-400 transition-colors duration-300 group-hover:bg-lime-500 group-hover:text-ink">
        <Icon
          aria-hidden
          className="size-5.5 transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.75}
        />
      </span>
      <h3 className="mt-4 text-card font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-white/65">{description}</p>
    </div>
  );
}
