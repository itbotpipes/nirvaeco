"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic-button";

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("featured-product");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[94vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#faf8f5]">
      {/* High-Resolution Photographic Background (Static, Zero Scroll Distortion) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero-bagasse-feast.jpg"
          alt="NIRVAECO three-compartment sugarcane bagasse takeout clamshell filled with food"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] md:object-center select-none"
        />
        {/* Soft edge gradient to ensure 100% contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/90 via-[#faf8f5]/40 to-transparent md:hidden" />
      </div>

      <div className="container relative z-10 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-5">
            <span className="w-5 h-[1.5px] bg-[#3e684a]" aria-hidden="true" />
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#345d40]">
              Sustainable Bagasse Tableware
            </span>
          </div>

          {/* Clean Static Headline without animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold tracking-[-0.035em] leading-[1.04] text-[#1a201c] mb-5 md:mb-6">
            <span className="block">A Better Way</span>
            <span className="block text-[#3b6647]">to Package.</span>
          </h1>

          {/* Subheading Body */}
          <p className="text-base sm:text-lg md:text-[19px] text-[#425044] leading-relaxed mb-8 md:mb-10 max-w-lg font-normal">
            Practical, plant-based tableware designed for everyday food-service, takeaway, and catering needs. Crafted responsibly from sugarcane bagasse.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Magnetic strength={0.3}>
              <Link
                href="/products/three-compartment-clamshell-boxes"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#173826] text-white text-sm sm:text-[15px] font-semibold tracking-wide hover:bg-[#1f4d34] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] group"
              >
                <span>Explore Products</span>
                <ArrowUpRight
                  size={16}
                  className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/90 backdrop-blur-md text-[#1c241e] text-sm sm:text-[15px] font-semibold tracking-wide border border-[#ded7ca] hover:bg-white hover:border-[#173826] transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.02]"
              >
                <span>Request a Quote</span>
              </Link>
            </Magnetic>
          </div>

          {/* Trust Attributes List */}
          <div className="mt-10 sm:mt-12 pt-6 border-t border-[#ded8cb]/70 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-[13px] text-[#556254] font-medium">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a]" />
              <span>100% Sugarcane Bagasse</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a]" />
              <span>Microwave & Freezer Safe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a]" />
              <span>Certified Biodegradable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        type="button"
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#5d6d5f] hover:text-[#173826] transition-colors duration-300 cursor-pointer p-2"
        aria-label="Scroll to featured product"
      >
        <span>Scroll</span>
        <ArrowDown size={14} className="stroke-[2.5] animate-bounce" />
      </button>
    </section>
  );
}
