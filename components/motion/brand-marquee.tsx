"use client";

import { Leaf, Sparkles, ShieldCheck, Flame, Compass, Award } from "lucide-react";

const marqueItems = [
  { text: "100% Upcycled Sugarcane Bagasse", highlight: "Upcycled", icon: Leaf },
  { text: "Zero Tree Pulp Logging", highlight: "Zero Tree Pulp", icon: Sparkles },
  { text: "Certified Compostable in 90 Days", highlight: "90 Days", icon: Award },
  { text: "Extreme Temperature (-20°C to +120°C)", highlight: "-20°C to +120°C", icon: Flame },
  { text: "Manufactured at Ankleshwar, Gujarat", highlight: "Ankleshwar", icon: Compass },
  { text: "Certified Food Contact Safe & Non-Toxic", highlight: "Non-Toxic", icon: ShieldCheck },
  { text: "Microwave & Freezer Reheating Safe", highlight: "Microwave Safe", icon: Flame },
  { text: "Triple-Partition Anti-Migration Ribbing", highlight: "Zero Migration", icon: ShieldCheck },
  { text: "Zero Petroleum Polymers & 0% Microplastics", highlight: "0% Microplastics", icon: Leaf },
];

export function BrandMarquee() {
  return (
    <div className="relative py-5 sm:py-6 bg-[#f0ebe0] border-y border-[#ded6c5] overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Editorial Flow Ribbon */}
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 sm:gap-14 text-xs sm:text-[13.5px] tracking-[0.18em] uppercase text-[#1c2e22]">
          {[...marqueItems, ...marqueItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 shrink-0 group cursor-default">
                <span className="w-6 h-6 rounded-full bg-[#e2d9ca] text-[#2c5339] flex items-center justify-center transition-transform duration-300 group-hover:scale-115 shadow-xs">
                  <Icon size={12} className="stroke-[2.2]" />
                </span>
                <span className="font-semibold text-[#1c2e22] group-hover:text-[#2d5c3d] transition-colors">
                  {item.text}
                </span>
                <span className="text-[#9ea89f] font-mono text-sm px-1" aria-hidden="true">
                  ✦
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
