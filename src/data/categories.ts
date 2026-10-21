import {
  Bone,
  MonitorDot,
  PersonStanding,
  Scissors,
  Skull,
} from "lucide-react";
import type { Category } from "@/types";
import SpineIcon from "@/components/icons/SpineIcon";
import ArthroscopyIcon from "@/components/icons/ArthroscopyIcon";

export const categories: Category[] = [
  {
    id: "trauma-implant",
    icon: Bone,
    label: "Trauma Implant",
  },
  {
    id: "arthroplasty",
    icon: PersonStanding,
    label: "Arthroplasty",
  },
  {
    id: "arthroscopy",
    icon: ArthroscopyIcon,
    label: "Arthroscopy",
  },
  {
    id: "spine-solutions",
    icon: SpineIcon,
    label: "Spine Solutions",
  },
  {
    id: "maxillofacial-cmf",
    icon: Skull,
    label: "Maxillofacial (CMF)",
  },
  {
    id: "surgical-instrument",
    icon: Scissors,
    label: "Surgical Instrument",
  },
  { id: "medical-equipment",
    icon: MonitorDot,
    label: "Medical Equipment"
  },
];
