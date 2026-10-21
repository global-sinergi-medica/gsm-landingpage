import { Globe, Mail, MapPin, Phone, Stethoscope, Truck } from "lucide-react";
import type { ContactItem, HeroContent, NavLink, SectionCopy } from "@/types";

export const company = {
  phone: { label: "+62 852-8694-2884", href: "tel:+6285286942884" },
  email: { label: "info@globalsinergimedica.com", href: "mailto:info@globalsinergimedica.com" },
  website: { label: "www.globalsinergimedica.com", href: "https://www.globalsinergimedica.com" },
  address:
    "Jl. Western Boulevard Jl. Grand Wisata No.28 Blok BG 01, Lambangjaya, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Grand+Wisata+Blok+BG+01+Tambun+Selatan+Bekasi",
};

export const brand = {
  name: "PT Global Sinergi Medica",
  wordmark: { lead: "Global Sinergi Medica", accent: "Medica" },
  logo: {
    src: "/assets/logo/gsm-mark.png",
    alt: "Global Sinergi Medica logo",
    width: 540,
    height: 493,
  },
  tagline: "Bringing Solutions, Building Better Health.",
  description:
    "End-to-end orthopedic solutions: implants, surgical instruments, medical equipment and hospital services.",
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Categories", href: "/#categories" },
  { label: "Catalog", href: "/catalog" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const quoteCta: NavLink = { label: "Request Quote", href: "/#contact" };

export const loginCta: NavLink = {
  label: "Login",
  href: "/login",
};

export const hero: HeroContent = {
  eyebrow: "Largest Medical Equipment Distributor in Indonesia",
  badge: "Bringing Solutions, Building Better Health.",
  titleLead: "End-to-End",
  titleRotating: ["Orthopedic", "Trauma", "Spine", "Arthroplasty"],
  titleTail: "Solutions for Better Life",
  description:
    "From trauma to joint reconstruction, from hospital to patient. Implants, surgical instruments, medical equipment and clinical support from one partner.",
  primaryCta: { label: "Explore Catalog", href: "/catalog" },
  secondaryCta: { label: "Contact Us", href: "/#contact" },
  highlights: [
    { id: "distribution", icon: Truck, title: "Nationwide", caption: "Distribution" },
    { id: "clinical", icon: Stethoscope, title: "Clinical", caption: "Support in the OR" },
  ],
  image: {
    src: "/assets/images/hero-banner.png",
    alt: "Orthopedic implants, surgical instruments and an arthroscopy tower in front of an operating room",
    width: 942,
    height: 799,
  },
};

export const sectionCopy = {
  categories: {
    eyebrow: "Our Solutions",
    title: "7 Product Categories",
    description: "Complete orthopedic solutions, from trauma implants to hospital services.",
  },
  products: {
    eyebrow: "Product Catalog",
    title: "Find the right product",
    description: "Filter by category and request a quote for the items you need.",
  },
  spotlight: {
    eyebrow: "Product Spotlight",
    title: "See every detail before you order",
    description: "A closer look at our implant systems, with material and packaging at a glance.",
  },
  gallery: {
    eyebrow: "Complete Orthopedic Solution",
    title: "From trauma to joint reconstruction",
    description: "From hospital to patient: implants, instruments and equipment from one partner.",
  },
  whyUs: {
    eyebrow: "Our Purpose",
    title: "Vision & Mission",
    description: "The principles that guide how we serve healthcare in Indonesia.",
  },
  process: {
    eyebrow: "How It Works",
    title: "From catalog to operating room",
    description: "How we work with hospitals, from the first quote to after-sales support.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
    description: "What hospitals usually ask before working with us.",
  },
} satisfies Record<string, SectionCopy>;

export const whyUsImage = {
  src: "/assets/images/why-us-team.jpg",
  alt: "Doctors and nurses reviewing equipment orders in a medical supply warehouse",
  width: 1280,
  height: 720,
};

export const ctaBanner = {
  title: "Need a quote for your hospital?",
  description:
    "Send us your product list. Our team prepares an offer and supports you from order to surgery.",
  action: { label: "Email Us", href: company.email.href },
  secondaryAction: { label: company.phone.label, href: company.phone.href },
};

export const footerQuickLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Categories", href: "/#categories" },
  { label: "Catalog", href: "/catalog" },
  { label: "About", href: "/#about" },
];

export const contactItems: ContactItem[] = [
  { id: "phone", icon: Phone, ...company.phone },
  { id: "email", icon: Mail, ...company.email },
  { id: "website", icon: Globe, ...company.website },
  { id: "address", icon: MapPin, label: company.address, href: company.mapsHref },
];

export const copyright = "© 2026 PT Global Sinergi Medica. All rights reserved.";
