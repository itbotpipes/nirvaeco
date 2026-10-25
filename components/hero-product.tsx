import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, ShieldCheck, ThermometerSnowflake, Box } from "lucide-react";

export function HeroProduct() {
  return (
    <section
      id="featured-product"
      className="py-10 md:py-14 lg:py-12 bg-white overflow-hidden border-b border-[#eae5da]"
      aria-label="3-Compartment Clamshell Featured Spotlight"
    >
      <div className="container max-w-6xl">
        {/* Centered Compact Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 lg:mb-8">
          <div className="inline-flex items-center justify-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-[#3e684a]" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3e684a]">
              Featured Product · Flagship Format
            </span>
            <span className="w-4 h-[1.5px] bg-[#3e684a]" aria-hidden="true" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-tight mb-2">
            The 3-Compartment Clamshell
          </h2>

          <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#525f54] leading-relaxed max-w-xl mx-auto font-normal">
            High-walled separation keeps multi-course meals clean, crisp, and fresh in a 100% plant-based sugarcane bagasse format.
          </p>
        </div>

        {/* 3-Column Spotlight: Left Specs | Center Native 4:3 Product Showcase | Right Specs & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Wing (2 Key Specifications) */}
          <div className="lg:col-span-3 space-y-5 order-2 lg:order-1">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e8eee4] text-[#3e684a] flex items-center justify-center shrink-0 mt-0.5">
                <Layers size={16} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a201c] leading-snug">
                  Triple Partition Mold
                </h3>
                <p className="text-xs text-[#637064] leading-relaxed mt-0.5">
                  High-walled dividers prevent sauce and liquid migration between chambers during delivery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e8eee4] text-[#3e684a] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck size={16} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a201c] leading-snug">
                  Oil & Grease Barrier
                </h3>
                <p className="text-xs text-[#637064] leading-relaxed mt-0.5">
                  Naturally dense sugarcane fibers repel hot sauces and oils without any plastic lining.
                </p>
              </div>
            </div>
          </div>

          {/* Center Product Showcase (Native 4:3 Aspect Ratio - Full Product Visible) */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden bg-[#f0ebe1] border border-[#e8e2d4] shadow-sm">
              <Image
                src="/images/three-comp-card.jpg"
                alt="NIRVAECO 3-Compartment sugarcane bagasse clamshell container on natural stone surface"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.015]"
              />

              {/* Floating Pill Tag at bottom */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-4 sm:left-4 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-xs text-[11px] sm:text-xs font-semibold text-[#1a201c]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a]" />
                  <span>100% Sugarcane Bagasse · Plastic-Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Wing (Thermal Spec, Formats & CTA Button) */}
          <div className="lg:col-span-3 space-y-5 order-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e8eee4] text-[#3e684a] flex items-center justify-center shrink-0 mt-0.5">
                <ThermometerSnowflake size={16} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a201c] leading-snug">
                  -20°C to 120°C Rated
                </h3>
                <p className="text-xs text-[#637064] leading-relaxed mt-0.5">
                  Microwave reheat safe and freezer stable for prepared commissary meals and takeaway.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#e8eee4] text-[#3e684a] flex items-center justify-center shrink-0 mt-0.5">
                <Box size={16} className="stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[#1a201c] leading-snug">
                  Available Formats
                </h3>
                <p className="text-xs text-[#637064] leading-relaxed mt-0.5">
                  8 × 8″ (205 × 210 mm) & 9 × 9″ (230 × 230 mm)
                </p>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/products/three-compartment-clamshell-boxes"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-[#173826] text-white text-xs sm:text-[13px] font-semibold hover:bg-[#1f4d34] transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                View Product Details
                <ArrowUpRight
                  size={14}
                  className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
