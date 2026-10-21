import type { LucideIcon } from "lucide-react";
import { ComponentType } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Stat {
  id: string;
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface Category {
  id: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  image?: ImageAsset;
}

export interface Product {
  id: string;
  slug: string;
  category: string;
  group: string;
  name: string;
  description: string;
  material: string;
  sterile: string;
  unit: string;
  image: ImageAsset;
  /** Full-bleed photo (services) instead of a transparent product cut-out. */
  photo?: boolean;
}

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ContactItem {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface HeroHighlight {
  id: string;
  icon: LucideIcon;
  title: string;
  caption: string;
}

export interface HeroContent {
  eyebrow: string;
  badge: string;
  titleLead: string;
  titleRotating: [string, ...string[]];
  titleTail: string;
  description: string;
  primaryCta: NavLink;
  secondaryCta: NavLink;
  highlights: [HeroHighlight, HeroHighlight];
  image: ImageAsset;
}

export interface ProcessStep {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  description?: string;
}
