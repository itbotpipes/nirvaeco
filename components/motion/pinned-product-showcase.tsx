"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Flame, ShieldCheck, Sprout, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic-button";

interface StepData {
  number: string;
  tag: string;
  title: string;
  highlight: string;
  desc: string;
  specs: string[];
  icon: React.ElementType;
}

const steps: StepData[] = [
  {
    number: "01",
    tag: "Raw Fiber Foundation",
    title: "100% Upcycled",
    highlight: "Sugarcane Bagasse",
    desc: "We reclaim dense agricultural pulp remaining after sugarcane juice extraction. Zero tree logging, zero petroleum polymers, and completely renewable annually.",
    specs: ["100% Agricultural Byproduct", "Renewable Sugarcane Fiber", "Zero Tree Pulp"],
    icon: Sprout,
  },
  {
    number: "02",
    tag: "Thermal Engineering",
    title: "Extreme Temperature",
    highlight: "Integrity (-20°C to +120°C)",
    desc: "Molded under hydraulic pressure and extreme dry-heat sterilization. Withstands boiling gravies, hot oily curries, and deep freeze storage without warping or leaking.",
    specs: ["Microwave Reheating Safe", "Freezer Storage Ready", "Oil & Water Impermeable"],
    icon: Flame,
  },
  {
    number: "03",
    tag: "Ergonomic Architecture",
    title: "Triple-Partition",
    highlight: "Zero Flavor Migration",
    desc: "Rigid rib-reinforced internal dividing walls isolate compartments completely. Liquid curries, steamed rice, and dry accompaniments remain crisp and separated.",
    specs: ["Anti-Sag Cross Ribbing", "Secure Perimeter Lock", "8\"×8\" & 9\"×9\" Formats"],
    icon: ShieldCheck,
  },
  {
    number: "04",
    tag: "Circular End-Of-Life",
    title: "Commercial & Backyard",
    highlight: "Biodegradable in 90 Days",
    desc: "Unlike plastic or PLA that linger for centuries or require specialized industrial facilities, NirvaEco tableware breaks down organically into nutrient-rich compost.",
    specs: ["Composts in 60-90 Days", "Zero Microplastic Residue", "Certified Non-Toxic"],
    icon: Sparkles,
  },
];

export function PinnedProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) return;

          // Normalized progress from 0 (entry) to 1 (exit)
          const currentScroll = -rect.top;
          const p = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

          // Update progress bar without React re-render
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${p})`;
          }

          // 3D Product transformation via GPU direct style update
          if (productRef.current) {
            const rotX = 14 - p * 28;
            const rotY = -20 + p * 40;
            const scale = 0.94 + Math.sin(p * Math.PI) * 0.12;
            const translateY = Math.sin(p * Math.PI * 2) * 15;
            productRef.current.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale}) translateY(${translateY}px)`;
          }

          // Only update activeIndex when it actually changes
          const nextIndex = Math.min(Math.floor(p * steps.length), steps.length - 1);
          setActiveIndex((prev) => (prev !== nextIndex ? nextIndex : prev));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const currentStep = steps[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#12281b] text-white"
      style={{ height: "300vh" }}
    >
      {/* Pinned Viewport Container (Locks in place for 300vh of scroll) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 z-20">
        {/* Subtle radial ambient atmosphere */}
        <div className="absolute inset-0 bg-radial from-[#1e442f]/40 via-transparent to-[#0d1c13] pointer-events-none" />

        {/* Top Bar: Progress Indicator & Step Nav */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#65b37b] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#9ac8a7]">
              Product Architecture · Scroll Lock
            </span>
          </div>

          {/* Stepper Pill Indicators */}
          <div className="flex items-center gap-2 sm:gap-3">
            {steps.map((s, idx) => (
              <div
                key={s.number}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-[#255437] text-white border border-[#65b37b]/40 shadow-sm"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                <span>{s.number}</span>
                <span className="hidden md:inline font-normal">{s.tag}</span>
              </div>
            ))}
          </div>

          {/* Overall Scrub Progress Line */}
          <div className="hidden sm:block w-28 h-1.5 bg-white/15 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-[#65b37b] origin-left rounded-full will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>

        {/* Center Stage: Split Screen */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-5 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold tracking-wider text-[#9ac8a7] uppercase mb-4">
              {React.createElement(currentStep.icon, { size: 14, className: "stroke-[2.5]" })}
              <span>{currentStep.tag}</span>
            </div>

            <div className="min-h-[130px] sm:min-h-[150px]">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.035em] leading-[1.1] mb-2 text-white">
                {currentStep.title}
                <br />
                <span className="text-[#65b37b]">{currentStep.highlight}</span>
              </h3>
            </div>

            <p className="text-[15px] sm:text-base text-[#cad9cd] leading-relaxed mb-6 font-normal min-h-[60px] transition-opacity duration-300">
              {currentStep.desc}
            </p>

            {/* Spec Badges for Current Stage */}
            <div className="flex flex-wrap gap-2 mb-8">
              {currentStep.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/90 backdrop-blur-xs"
                >
                  {spec}
                </span>
              ))}
            </div>

            <Magnetic strength={0.25}>
              <Link
                href="/products/three-compartment-clamshell-boxes"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#255437] text-white text-xs sm:text-sm font-semibold hover:bg-[#32734a] transition-all duration-300 border border-[#65b37b]/40 shadow-lg hover:shadow-2xl hover:scale-[1.03] group"
              >
                <span>Request Sample Pack</span>
                <ArrowUpRight
                  size={15}
                  className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Right Column: 3D Product Canvas Locked to Scroll Scrub */}
          <div className="lg:col-span-7 relative flex items-center justify-center perspective-container">
            {/* Ambient Background Glow Ring */}
            <div className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#1e4a30]/60 blur-3xl pointer-events-none" />

            {/* Pinned 3D Physical Element Transforming with Scroll (GPU direct) */}
            <div
              ref={productRef}
              style={{
                transform: "perspective(1200px) rotateX(14deg) rotateY(-20deg) scale(0.94)",
                transition: "transform 0.06s linear",
              }}
              className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center will-change-transform"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="/images/three-compartment-clamshell.png"
                  alt="NIRVAECO 3-compartment sugarcane bagasse takeaway container 3D perspective"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.6)] select-none"
                />
              </div>

              {/* Floating Dynamic Callout Pill */}
              <div className="absolute -bottom-4 left-6 sm:left-12 px-4 py-2 rounded-2xl bg-[#0e2115]/90 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#65b37b] animate-ping" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#9ac8a7]">
                    Active Focus
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {currentStep.tag} ({activeIndex + 1}/4)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Instructions to Scroll */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span>Scroll downward through all 4 stages</span>
          </div>

          <div className="flex items-center gap-2 text-white/70">
            <span className="animate-pulse">↓</span>
            <span>Screen unlocks when finished</span>
          </div>
        </div>
      </div>
    </div>
  );
}
