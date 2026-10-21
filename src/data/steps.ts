import { ClipboardList, GraduationCap, PackageCheck, Search } from "lucide-react";
import type { ProcessStep } from "@/types";

export const steps: ProcessStep[] = [
  {
    id: "browse",
    icon: Search,
    title: "Browse the catalog",
    description: "Explore implants, instruments and equipment across 8 categories.",
  },
  {
    id: "quote",
    icon: ClipboardList,
    title: "Request a quote",
    description: "Send your product list and our team prepares a tailored offer.",
  },
  {
    id: "deliver",
    icon: PackageCheck,
    title: "Safe & on-time delivery",
    description: "Our logistics team delivers to your hospital nationwide.",
  },
  {
    id: "support",
    icon: GraduationCap,
    title: "Training & support",
    description: "Surgeon training, OR support and after-sales service.",
  },
];
