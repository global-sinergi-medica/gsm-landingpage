import { Boxes, LayoutGrid, MapPinned, Network } from "lucide-react";
import type { Stat } from "@/types";

export const stats: Stat[] = [
  { id: "sku", icon: Boxes, value: "1,000+", label: "Product SKU" },
  { id: "categories", icon: LayoutGrid, value: "8", label: "Product categories" },
  { id: "scopes", icon: Network, value: "3", label: "Distribution scopes" },
  { id: "distribution", icon: MapPinned, value: "Nationwide", label: "Distribution" },
];
