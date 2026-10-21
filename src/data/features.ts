import { ClipboardCheck, Stethoscope, Truck, Wrench } from "lucide-react";
import type { Feature } from "@/types";

export const features: Feature[] = [
  {
    id: "clinical-support",
    icon: Stethoscope,
    title: "Clinical Support",
    description: "Our team supports surgeons and OR staff during surgery.",
  },
  {
    id: "technical-service",
    icon: Wrench,
    title: "Technical Service",
    description: "Installation and maintenance for equipment and instrument sets.",
  },
  {
    id: "regulatory-support",
    icon: ClipboardCheck,
    title: "Regulatory Support",
    description: "Product registration and compliance handled for you.",
  },
  {
    id: "supply-chain",
    icon: Truck,
    title: "Supply Chain Management",
    description: "Inventory and distribution planned around your schedule.",
  },
];
