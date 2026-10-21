"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("featured-product");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-[#faf8f5]">
      {/* Editorial Photographic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bagasse-feast.jpg"
          alt="NIRVAECO three-compartment sugarcane bagasse takeout clamshell filled with food"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] md:object-center select-none"
        />
        {/* Subtle gradient vignette to preserve contrast for left typography on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/85 via-[#faf8f5]/40 to-transparent md:hidden" />
      </div>

      <div className="container relative z-10 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-5">
            <span className="w-5 h-[1.5px] bg-[#3e684a]" aria-hidden="true" />
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.16em] text-[#345d40]">
              Sustainable Bagasse Tableware
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-semibold tracking-[-0.03em] leading-[1.06] text-[#1a201c] mb-5 md:mb-6">
            A Better Way
            <br />
            <span className="text-[#3b6647]">to Package.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-[17px] text-[#424d44] leading-relaxed max-w-lg mb-8 md:mb-10 font-normal">
            Thoughtfully made bagasse tableware for modern food service.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173826] text-white text-sm md:text-[14.5px] font-semibold tracking-wide hover:bg-[#1f4d34] transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              Explore the Collection
              <ArrowUpRight size={16} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator at bottom right */}
        <div className="absolute right-4 sm:right-8 bottom-2 md:bottom-4 hidden sm:flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[#556254] font-medium">
            Scroll to Explore
          </span>
          <button
            type="button"
            onClick={scrollToNext}
            className="w-9 h-9 rounded-full bg-white/95 text-[#173826] flex items-center justify-center shadow-md hover:bg-white hover:scale-105 transition-all duration-200 border border-[#e2ddd3]"
            aria-label="Scroll to explore"
          >
            <ArrowDown size={15} className="stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
