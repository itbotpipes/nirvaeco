"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic-button";
import { TiltCard } from "@/components/motion/tilt-card";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#faf8f5] border-t border-[#eae5da] overflow-hidden">
      {/* Editorial High-Resolution Background with Hands Packaging Box */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bagasse-hands.jpg"
          alt="Hands closing sustainable sugarcane bagasse food clamshell box"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] md:object-right select-none"
        />
        {/* Soft natural gradient blend to guarantee text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/80 to-transparent md:to-[#faf8f5]/15" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 max-w-xl">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-3">
              Ready to Make a Sustainable Choice?
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-[1.12] mb-4">
              Let’s Discuss Your
              <br />
              Packaging Requirements.
            </h2>

            <p className="text-[15px] sm:text-base text-[#465248] leading-relaxed mb-8 max-w-lg font-normal">
              Explore our bagasse packaging range for food-service, retail, and distribution needs. Share your enquiry and connect with our team.
            </p>

            <Magnetic strength={0.3}>
              <Link
                href="/contact?type=quote"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#173826] text-white text-sm md:text-[15px] font-semibold tracking-wide hover:bg-[#1f4d34] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.03] group shimmer-card"
              >
                <span>Request a Quote</span>
                <ArrowUpRight
                  size={16}
                  className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Floating Circular Plant-Based Badge with 3D Tilt and Continuous Animation */}
          <div className="lg:col-span-6 flex justify-start lg:justify-center perspective-container">
            <TiltCard maxTilt={12} className="relative">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#b2cdad]/90 backdrop-blur-xl border border-white/70 shadow-2xl flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-108 animate-float-subtle">
                <Leaf size={24} className="text-[#1c3823] mb-2 fill-current animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#15311c] leading-tight max-w-[120px]">
                  Plant-Based Packaging For A Cleaner Tomorrow
                </span>

                {/* Subtle rotating dashed perimeter ring */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#1c3823]/30 animate-spin-slow pointer-events-none" />
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
