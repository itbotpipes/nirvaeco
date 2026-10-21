import { HeroSection } from "@/components/hero-section";
import { HeroProduct } from "@/components/hero-product";
import { StatsSection } from "@/components/stats-section";
import { AboutNirvaEco } from "@/components/about-nirva-eco";
import { OtherProducts } from "@/components/other-products";
import { FaqsSection } from "@/components/faqs-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Hero Product (3-Compartment Clamshell Flagship) */}
      <HeroProduct />

      {/* 03. Stats / Product Highlights (4 Aligned Columns) */}
      <StatsSection />

      {/* 04. About NirvaEco (Story, Values, Pillars) */}
      <AboutNirvaEco />

      {/* 05. Other Products (Product Range Showcase) */}
      <OtherProducts />

      {/* 06. FAQs (Frequently Asked Questions Accordion) */}
      <FaqsSection />

      {/* 07. Testimonials */}
      <TestimonialsSection />

      {/* 08. CTA (Packaging Requirements Enquiry) */}
      <CtaSection />
    </>
  );
}
