"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "@/components/motion/magnetic-button";
import { TiltCard } from "@/components/motion/tilt-card";

export function HeroProduct() {
  const [selectedFormat, setSelectedFormat] = useState<"8x8" | "9x9">("8x8");

  const benefits = [
    "Plant-based bagasse fiber",
    "Strong and durable",
    "Suitable for hot and cold foods",
  ];

  return (
    <section
      id="featured-product"
      className="py-20 md:py-28 bg-[#faf8f5] overflow-hidden relative border-t border-[#eae5da]"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 max-w-lg">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-3">
              Featured Product
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-[1.12] mb-4">
              3-Compartment Clamshell
            </h2>

            <p className="text-[15px] sm:text-base text-[#525f54] leading-relaxed mb-6 font-normal">
              A practical, plant-based solution for complete meals. Designed for food-service and takeaway applications.
            </p>

            {/* Interactive Format Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#ede8dc] border border-[#ded7ca] mb-6 shadow-inner">
              <button
                type="button"
                onClick={() => setSelectedFormat("8x8")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedFormat === "8x8"
                    ? "bg-[#173826] text-white shadow-sm"
                    : "text-[#556254] hover:text-[#173826]"
                }`}
              >
                8″ × 8″ (205 × 210 × 45 mm)
              </button>
              <button
                type="button"
                onClick={() => setSelectedFormat("9x9")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  selectedFormat === "9x9"
                    ? "bg-[#173826] text-white shadow-sm"
                    : "text-[#556254] hover:text-[#173826]"
                }`}
              >
                9″ × 9″ (230 × 230 × 50 mm)
              </button>
            </div>

            {/* Supported Benefits List */}
            <div className="space-y-3.5 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 group cursor-default">
                  <div className="w-5 h-5 rounded-full bg-[#527e5c] text-white flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-120 group-hover:rotate-6">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-[14.5px] font-medium text-[#2d382f] transition-colors duration-200 group-hover:text-[#173826]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Magnetic strength={0.25}>
              <Link
                href="/products/three-compartment-clamshell-boxes"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173826] text-white text-sm font-semibold hover:bg-[#1f4d34] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] group"
              >
                <span>View Product Details</span>
                <ArrowUpRight
                  size={15}
                  className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Right Product Spotlight Composition: 3D Stage with Specular Glare */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end perspective-container">
            <TiltCard maxTilt={8} className="w-full max-w-[540px]">
              <div className="relative aspect-[4/3] rounded-3xl bg-[#ede8dc] border border-[#dfd7ca] flex items-center justify-center p-8 shadow-xl overflow-hidden group">
                {/* Soft backdrop radial bloom */}
                <div className="absolute inset-0 bg-radial from-[#ffffff]/70 via-[#f0ebe0]/50 to-transparent pointer-events-none" />

                {/* Physical 3D Object */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/three-compartment-clamshell.png"
                    alt="NIRVAECO 3-compartment sugarcane bagasse takeaway container"
                    width={460}
                    height={340}
                    priority
                    className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Dimension Tag Pill with Live Format Sync */}
                <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-md text-xs font-semibold text-[#173826] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3e684a] animate-pulse" />
                  <span>{selectedFormat === "8x8" ? '8" × 8" · 3 Compartment' : '9" × 9" · 3 Compartment'}</span>
                </div>

                {/* Floating Secondary Thumbnail Card */}
                <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-[#dfd7ca] shadow-md flex items-center justify-center text-[#173826]">
                    <Plus size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg w-20 h-20 overflow-hidden relative group/thumb">
                    <Image
                      src="/images/plain-clamshell-closed.png"
                      alt="Closed view preview"
                      fill
                      className="object-contain p-1 transition-transform duration-300 group-hover/thumb:scale-110"
                    />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
