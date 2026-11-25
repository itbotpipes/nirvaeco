import { HeroSection } from "@/components/hero-section";
import { HeroProduct } from "@/components/hero-product";
import { PinnedProductShowcase } from "@/components/motion/pinned-product-showcase";
import { StatsSection } from "@/components/stats-section";
import { AboutNirvaEco } from "@/components/about-nirva-eco";
import { PinnedHorizontalProducts } from "@/components/motion/pinned-horizontal-products";
import { FaqsSection } from "@/components/faqs-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      {/* 01. Hero (Static, Clean Presentation with Zero Animation) */}
      <HeroSection />

      {/* 02. Hero Product (3-Compartment Clamshell Flagship Overview) */}
      <HeroProduct />

      {/* 03. ONYT-Style Locked-Screen Deep-Dive (Screen Locks for 350vh while 3D Clamshell & Specs Transition) */}
      <PinnedProductShowcase />

      {/* 04. Stats / Product Highlights (4 Aligned Columns) */}
      <StatsSection />

      {/* 05. About NirvaEco (Story, Values, Word-by-Word Kinetic Reveal) */}
      <AboutNirvaEco />

      {/* 06. ONYT-Style Locked-Screen Horizontal Product Carousel (Screen Locks for 300vh while Cards Glide) */}
      <PinnedHorizontalProducts />

      {/* 07. FAQs (Frequently Asked Questions Accordion) */}
      <FaqsSection />

      {/* 08. Testimonials (Food Business Feedback) */}
      <TestimonialsSection />

      {/* 09. CTA (Packaging Requirements Enquiry - Preserved Intact) */}
      <CtaSection />
    </>
  );
}
