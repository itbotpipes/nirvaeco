import { HeroSection } from "@/components/hero-section";
import { BrandMarquee } from "@/components/motion/brand-marquee";
import { HeroProduct } from "@/components/hero-product";
import { ProtocolEngine } from "@/components/motion/protocol-engine";
import { StatsSection } from "@/components/stats-section";
import { AboutNirvaEco } from "@/components/about-nirva-eco";
import { PinnedHorizontalProducts } from "@/components/motion/pinned-horizontal-products";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqsSection } from "@/components/faqs-section";
import { CtaSection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      {/* 01. Hero (Static, Clean Presentation with Instant High Contrast) */}
      <HeroSection />

      {/* 02. Kinetic Brand Marquee (Dual-Track Infinite Editorial Ticker) */}
      <BrandMarquee />

      {/* 03. Hero Product (3-Compartment Clamshell Flagship with Format Switcher) */}
      <HeroProduct />

      {/* 04. The ONYT Protocol Engine (Exact 1-Screen Locked Engine from Video Recording) */}
      <ProtocolEngine />

      {/* 05. Product Highlights & Sourcing Integrity */}
      <StatsSection />

      {/* 06. About NirvaEco (1-Screen Locked Story: Purpose, Vision & Aim) */}
      <AboutNirvaEco />

      {/* 07. Pinned Horizontal Product Carousel (1-Screen Locked Carousel) */}
      <PinnedHorizontalProducts />

      {/* 08. Commercial Kitchen Feedback & Testimonials */}
      <TestimonialsSection />

      {/* 09. Frequently Asked Questions & Ankleshwar Technical Liaison */}
      <FaqsSection />

      {/* 10. CTA (Packaging Requirements Enquiry - Preserved Intact) */}
      <CtaSection />
    </>
  );
}
