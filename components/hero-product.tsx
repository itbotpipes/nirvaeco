"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Plus, Leaf } from "lucide-react";

export function HeroProduct() {
  const benefits = [
    "Plant-based bagasse fiber",
    "Strong and durable",
    "Suitable for hot and cold foods",
  ];

  return (
    <section id="featured-product" className="py-20 md:py-28 bg-[#faf8f5] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 max-w-lg">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a] block mb-3">
              Featured Product
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.12] mb-4">
              3-Compartment Clamshell
            </h2>

            <p className="text-[15px] sm:text-base text-[#525f54] leading-relaxed mb-6 font-normal">
              A practical, plant-based solution for complete meals. Designed for food-service and takeaway applications.
            </p>

            {/* Supported Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#527e5c] text-white flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-[14.5px] font-medium text-[#2d382f]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/products/three-compartment-clamshell-boxes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173826] text-white text-sm font-semibold hover:bg-[#1f4d34] transition-all duration-200 shadow-md group"
            >
              View Product Details
              <ArrowUpRight size={15} className="stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Product Spotlight Composition */}
          <div className="lg:col-span-7 relative flex items-center justify-center lg:justify-end">
            {/* Soft Organic Sage Backdrop Pill Shape */}
            <div className="relative w-full max-w-[540px] aspect-[16/11] rounded-[36px] overflow-hidden bg-gradient-to-br from-[#f4f2ec] via-[#edf3ea] to-[#739564] shadow-md flex items-center justify-center p-6 sm:p-10">
              {/* Product Photograph */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/three-compartment-clamshell.png"
                  alt="NIRVAECO 3-Compartment Sugarcane Bagasse Clamshell"
                  width={620}
                  height={450}
                  className="object-contain max-h-[95%] drop-shadow-2xl transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Connecting Plus Badge */}
            <div className="hidden sm:flex absolute right-[18%] lg:right-[15%] top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-lg border border-[#e6e1d6] items-center justify-center text-[#3e684a]">
              <Plus size={16} className="stroke-[2.5]" />
            </div>

            {/* Natural Bagasse Fiber Thumbnail Card */}
            <div className="hidden sm:block absolute -right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-10 w-36 bg-white rounded-2xl p-2.5 shadow-xl border border-[#ece7dc] transition-transform duration-300 hover:scale-105">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-2 bg-[#f4f1ea]">
                <Image
                  src="/images/plain-clamshell-card.jpg"
                  alt="Natural bagasse fiber texture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-1.5 px-1 pb-1">
                <Leaf size={13} className="text-[#527e5c] shrink-0" />
                <span className="text-[11px] font-semibold text-[#2b352d] leading-tight">
                  Natural Bagasse Fiber
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
