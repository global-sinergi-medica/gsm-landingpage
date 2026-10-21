import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Catalog } from "@/components/sections/Catalog";
import { CategoryShowcase } from "@/components/sections/CategoryShowcase";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { ProductSpotlight } from "@/components/sections/ProductSpotlight";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <StatsBar />
        <CategoryShowcase />
        <Catalog />
        <ProductSpotlight />
        <WhyChooseUs />
        <HowItWorks />
        <ProductGallery />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
