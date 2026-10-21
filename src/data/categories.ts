import {
  Bone,
  Hospital,
  MonitorDot,
  PersonStanding,
  ScanEye,
  Scissors,
  Skull,
  Activity,
} from "lucide-react";
import type { Category } from "@/types";

const strip = (file: string, label: string, width: number, height: number) => ({
  src: `/assets/images/categories/${file}.png`,
  alt: `${label} product range`,
  width,
  height,
});

export const categories: Category[] = [
  {
    id: "trauma-implant",
    icon: Bone,
    label: "Trauma Implant",
    image: strip("trauma-implant", "Trauma Implant", 569, 176),
  },
  {
    id: "arthroplasty",
    icon: PersonStanding,
    label: "Arthroplasty",
    image: strip("arthroplasty", "Arthroplasty", 569, 143),
  },
  {
    id: "arthroscopy",
    icon: ScanEye,
    label: "Arthroscopy",
    image: strip("arthroscopy", "Arthroscopy", 472, 120),
  },
  {
    id: "spine-solutions",
    icon: Activity,
    label: "Spine Solutions",
    image: strip("spine-solutions", "Spine Solutions", 427, 120),
  },
  {
    id: "maxillofacial-cmf",
    icon: Skull,
    label: "Maxillofacial (CMF)",
    image: strip("maxillofacial-cmf", "Maxillofacial (CMF)", 517, 120),
  },
  {
    id: "surgical-instrument",
    icon: Scissors,
    label: "Surgical Instrument",
    image: strip("surgical-basic-instruments", "Surgical Instrument", 406, 100),
  },
  { id: "medical-equipment", icon: MonitorDot, label: "Medical Equipment" },
  { id: "hospital-solution", icon: Hospital, label: "Hospital Solution" },
];
