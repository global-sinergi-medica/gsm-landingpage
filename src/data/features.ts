import { Stethoscope, Truck } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "clinical-support",
    icon: Stethoscope,
    title: "Clinical Support",
    description: "Our team supports surgeons and OR staff during surgery.",
  },
  
  {
    id: "supply-chain",
    icon: Truck,
    title: "Supply Chain Management",
    description: "Inventory and distribution planned around your schedule.",
  },
];
