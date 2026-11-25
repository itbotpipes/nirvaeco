"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Eye, Target } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Magnetic } from "@/components/motion/magnetic-button";

const pillars = [
  {
    step: "01",
    icon: Leaf,
    title: "Our Purpose",
    headline: "To enable sustainable choices in food packaging.",
    desc: "NirvaEco is focused on replacing conventional petroleum-based plastics with practical, plant-based tableware using renewable sugarcane bagasse.",
    badge: "100% Bagasse Pulp",
    stat: "Zero Tree Pulp",
  },
  {
    step: "02",
    icon: Eye,
    title: "Our Vision",
    headline: "A cleaner tomorrow through responsible innovation.",
    desc: "Pioneering high-density molded fiber engineering that meets rigorous commercial kitchen and cloud kitchen delivery demands without environmental compromise.",
    badge: "Circular Lifecycle",
    stat: "90-Day Biodegradable",
  },
  {
    step: "03",
    icon: Target,
    title: "Our Aim",
    headline: "To make plant-based packaging accessible for food-service businesses.",
    desc: "Direct supply, wholesale pallet logistics, and OEM private tooling manufactured from our modern Ankleshwar facility for domestic and international markets.",
    badge: "Food-Service Ready",
    stat: "Hot & Cold Certified",
  },
];

export function AboutNirvaEco() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) return;

          // Normalized progress through the pinned container [0, 1]
          const currentScroll = -rect.top;
          const p = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
          setProgress(p);

          // Calculate which pillar should be active (0, 1, 2)
          let newIndex = 0;
          if (p < 0.38) {
            newIndex = 0;
          } else if (p < 0.72) {
            newIndex = 1;
          } else {
            newIndex = 2;
          }

          // ONLY update state when activeIndex actually changes to keep scrolling 120fps smooth
          setActiveIndex((prev) => (prev !== newIndex ? newIndex : prev));
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

  const current = pillars[activeIndex];

  return (
    <div
      ref={containerRef}
      id="about"
      className="relative w-full bg-[#faf8f5] border-t border-[#eae5da]"
      style={{ height: "280vh" }}
    >
      {/* Pinned Screen Viewport (Locks in place for 280vh of scroll) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center py-10 md:py-16 z-20">
        <div className="container relative z-10 w-full">
          {/* Top Stage Indicator */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e5dfd2]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#3e684a] animate-pulse" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-[#3e684a]">
                About NirvaEco · Pinned Story
              </span>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#173826]">
                {current.step} / 03
              </span>
              <div className="w-20 h-1.5 bg-[#e5dfd2] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#173826] transition-all duration-150 rounded-full"
                  style={{ width: `${Math.max(progress * 100, 10)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading & Active Story Narrative */}
            <div className="lg:col-span-5 max-w-lg">
              <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-2.5">
                {current.step} · {current.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-[1.14] mb-4">
                Sustainable Packaging
                <br />
                for a Cleaner Tomorrow.
              </h2>

              {/* Dynamic Headline transition for active pillar */}
              <div className="p-4 rounded-2xl bg-white border border-[#e5dfd2] shadow-sm mb-5 transition-all duration-300">
                <div className="text-xs font-bold uppercase tracking-wider text-[#3e684a] mb-1">
                  {current.title}
                </div>
                <div className="text-base sm:text-lg font-semibold text-[#1c241e] leading-snug">
                  {current.headline}
                </div>
              </div>

              {/* Story Narrative Paragraph (Clean, Crisp, 100% Readable) */}
              <p className="text-[15px] sm:text-base text-[#465348] leading-relaxed mb-6 font-normal min-h-[60px] transition-opacity duration-300">
                {current.desc}
              </p>

              <Magnetic strength={0.25}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173826] text-white text-sm font-semibold hover:bg-[#1f4d34] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] group"
                >
                  <span>Our Story</span>
                  <ArrowUpRight
                    size={15}
                    className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Magnetic>
            </div>

            {/* Center Column: High-Res Clamshell Lifestyle Photography */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-[#ebe5da] bg-[#f2eee6] group">
                <Image
                  src="/images/clamshell-lifestyle.png"
                  alt="NIRVAECO sustainable sugarcane bagasse tableware on natural stone surface"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-radial from-transparent to-black/10 pointer-events-none" />

                {/* Floating Spec Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3e684a]" />
                    <span className="text-xs font-bold text-[#1c241e]">{current.stat}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#3e684a] uppercase tracking-wider">
                    Ankleshwar
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Purpose, Vision, Aim Interactive & Scroll-Locked Stack */}
            <div className="lg:col-span-3 space-y-3.5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={pillar.title}
                    onClick={() => setActiveIndex(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5 ${
                      isActive
                        ? "bg-white border-[#3e684a] shadow-lg scale-[1.03] translate-x-1"
                        : "bg-white/50 border-[#ebe5da] hover:bg-white hover:border-[#ded7ca]"
                    }`}
                  >
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-xs transition-colors duration-300 ${
                        isActive ? "bg-[#173826] text-white" : "bg-[#e8eee4] text-[#3e684a]"
                      }`}
                    >
                      <Icon size={19} className="stroke-[2]" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold transition-colors duration-200 ${
                          isActive ? "text-[#173826]" : "text-[#2d382f]"
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#5f6c60] leading-relaxed mt-0.5 font-normal">
                        {pillar.headline}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar: Scroll Instruction */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#e5dfd2] text-xs text-[#6a776b]">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-[#173826]">↓</span>
              <span>Scroll to step through Purpose, Vision & Aim</span>
            </div>
            <span>Screen unlocks when completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
