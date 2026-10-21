import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Global Sinergi Medica — End-to-End Orthopedic Solutions",
  description:
    "The largest medical equipment distributor in Indonesia, orthopedic implants, surgical instruments, medical equipment and hospital services with nationwide distribution and clinical support.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
