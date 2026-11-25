"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Leaf, ShieldCheck, Flame, Sparkles } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";

interface StageData {
  id: string;
  number: string;
  phase: string;
  tag: string;
  title: string;
  desc: string;
  badge: string;
  image: string;
  specs: string[];
  kpiLabel: string;
  kpiValue: string;
  icon: React.ElementType;
}

const stages: StageData[] = [
  {
    id: "upcycle",
    number: "01",
    phase: "PHASE 01",
    tag: "RAW BIOMASS · AGRICULTURAL RECLAIM",
    title: "Upcycle & Depith",
    desc: "We reclaim dense plant stalks remaining after sugarcane juice extraction across regional Gujarat sugar mills. Zero tree logging, zero petroleum polymers, and 100% renewable annually.",
    badge: "100% Upcycled Agricultural Fiber",
    image: "/images/clamshell-lifestyle.png",
    specs: ["Zero Tree Pulp", "Annual Crop Waste", "100% Bio-Based"],
    kpiLabel: "Raw Fiber Purity",
    kpiValue: "100%",
    icon: Leaf,
  },
  {
    id: "refine",
    number: "02",
    phase: "PHASE 02",
    tag: "HYDRO-MECHANICAL · ZERO CHLORINE",
    title: "Refine & Thermoform",
    desc: "Fibers are hydrated and refined in closed-loop water systems, then molded under hydraulic heat dies at +200°C to evaporate moisture and bond cellular walls.",
    badge: "High-Heat Hydraulic Molding",
    image: "/images/plain-clamshell-open.png",
    specs: ["+200°C Heat Set", "Zero Chemical Bleach", "Oil & Water Proof"],
    kpiLabel: "Thermal Endurance",
    kpiValue: "-20° to 120°C",
    icon: Flame,
  },
  {
    id: "architecture",
    number: "03",
    phase: "PHASE 03",
    tag: "PRECISION TOOLING · TRIPLE PARTITION",
    title: "Isolate & Reinforce",
    desc: "Rigid anti-sag ribbing isolates each compartment to completely prevent flavor migration. Hot gravies, steamed rice, and salads stay separated and crisp during transit.",
    badge: "Zero Flavor Migration",
    image: "/images/three-compartment-clamshell.png",
    specs: ["Deep Divided Walls", "Anti-Sag Ribbing", "8\"×8\" & 9\"×9\" Formats"],
    kpiLabel: "Compartment Isolation",
    kpiValue: "100%",
    icon: ShieldCheck,
  },
  {
    id: "dispatch",
    number: "04",
    phase: "PHASE 04",
    tag: "FRICTION LOCK · 90-DAY COMPOSTING",
    title: "Seal & Dispatch",
    desc: "Robotic perimeter trimming creates a snug friction-fit lid seal that stays closed over bumpy delivery roads. Tableware decomposes organically in 60 to 90 days.",
    badge: "Food-Service Ready & Certified",
    image: "/images/plain-clamshell-closed.png",
    specs: ["Airtight Friction Seal", "Zero Microplastics", "Soil Compost in 90D"],
    kpiLabel: "Compost Horizon",
    kpiValue: "90 Days",
    icon: Sparkles,
  },
];

export function ProtocolEngine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) return;

          const currentScroll = -rect.top;
          const p = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

          const newStage = Math.min(Math.floor(p * stages.length), stages.length - 1);
          setActiveStage((prev) => (prev !== newStage ? newStage : prev));

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

  const current = stages[activeStage];
  const percentComplete = Math.round(((activeStage + 1) / stages.length) * 100);

  return (
    <div
      ref={containerRef}
      id="protocol-engine"
      className="relative w-full bg-[#faf8f5] border-t border-[#eae5da]"
      style={{ height: "300vh" }}
    >
      {/* Pinned Screen Viewport: Exactly 100vh, clearing the fixed navbar with pt-20 and fitting in 1 screen */}
      <div className="sticky top-0 h-screen max-h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-22 pb-6 px-6 sm:px-10 lg:px-16 z-20">
        {/* 01. Top Header Bar (With Clear Spacing Below Fixed Navbar) */}
        <div className="relative z-10 flex items-start justify-between border-b border-[#e5dfd2] pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#3e684a] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#3e684a]">
                The Production Protocol // 4-Stage Engine
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-semibold tracking-tight text-[#1a201c] leading-tight">
              From Upcycled Fiber to <span className="text-[#173826]">Precision Tableware.</span>
            </h2>
          </div>

          {/* Phase Progress Segmented Dashes */}
          <div className="flex flex-col items-end gap-1 shrink-0">
            <div className="text-[11px] font-mono tracking-wider text-[#637064]">
              PHASE PROGRESS <span className="text-[#1a201c] font-bold">{current.number} / 04</span>{" "}
              <span className="text-[#173826] font-bold">({percentComplete}%)</span>
            </div>
            <div className="flex items-center gap-1.5">
              {stages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx <= activeStage
                      ? "w-7 sm:w-9 bg-[#173826]"
                      : "w-3 sm:w-5 bg-[#ded7c8]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 02. Center Stage: Split Screen (Stage Narrative + Authentic Product Spotlight Card) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto w-full py-2">
          {/* Left Column: Narrative with Large Watermark Number */}
          <div className="lg:col-span-6 relative">
            {/* Watermark Large Number in Pale Warm Neutral */}
            <div className="absolute -top-10 -left-3 text-7xl sm:text-8xl md:text-9xl font-bold font-mono text-[#eae2d5] pointer-events-none select-none">
              {current.number}
            </div>

            <div className="relative z-10 space-y-3 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#3e684a]">
                <span>STAGE {current.number}</span>
                <span>•</span>
                <span>{current.phase}</span>
                <span>•</span>
                <span className="text-[#738275]">{current.tag}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-tight text-[#1a201c] leading-tight">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#4a584c] leading-relaxed font-normal min-h-[60px]">
                {current.desc}
              </p>

              {/* Spec Chips for Current Stage */}
              <div className="flex flex-wrap gap-2 pt-1">
                {current.specs.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 rounded-full bg-white border border-[#ded7ca] text-xs font-semibold text-[#1c241e] shadow-xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Tableware Product Spotlight Card (Proportionately Sized for 1-Screen) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <TiltCard maxTilt={5} className="w-full max-w-[400px]">
              <div className="w-full rounded-3xl bg-white border border-[#ebe5da] p-5 shadow-xl relative overflow-hidden group hover:border-[#3e684a]/40 transition-all duration-300">
                {/* Card Top Header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#637064] pb-2.5 border-b border-[#f0ebe0] mb-3">
                  <span className="text-[#173826] font-bold tracking-wider flex items-center gap-1.5">
                    {React.createElement(current.icon, { size: 13, className: "stroke-[2.5]" })}
                    <span>{current.badge}</span>
                  </span>
                  <span>{current.phase}</span>
                </div>

                {/* High-Resolution Product Showcase Canvas */}
                <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#f5f1e8] border border-[#ebe5da] flex items-center justify-center p-3 overflow-hidden mb-3 group/img">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-contain p-2 transition-transform duration-500 group-hover/img:scale-106 select-none"
                  />
                  {/* Subtle soft gradient glow */}
                  <div className="absolute inset-0 bg-radial from-transparent to-black/5 pointer-events-none" />

                  {/* Stage Active Floating Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-white/70 text-[10.5px] font-bold text-[#173826] shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a]" />
                    <span>Stage {current.number} Verified</span>
                  </div>
                </div>

                {/* Card Bottom KPI Bar */}
                <div className="flex items-center justify-between pt-2.5 border-t border-[#f0ebe0]">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7a887b]">
                      LAB & TRIAL SPECIFICATION
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#1c241e]">
                      {current.kpiLabel}
                    </div>
                  </div>

                  <div className="text-xl font-mono font-bold text-[#173826]">
                    {current.kpiValue}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* 03. Minimal Bottom Bar: Scroll Hint Only (Removed SELECT STAGE) */}
        <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-[#e5dfd2] text-[11px] font-mono text-[#7a887b]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#173826]">↓</span>
            <span>SCROLL DOWN TO ADVANCE PRODUCTION PHASES</span>
          </div>

          <div className="hidden sm:block">
            <span>SCREEN UNLOCKS AFTER PHASE 04</span>
          </div>
        </div>
      </div>
    </div>
  );
}
