"use client";

import { Leaf, Sprout, ShieldCheck, Utensils } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Sugarcane Bagasse",
    desc: "Renewable fiber material",
  },
  {
    icon: Sprout,
    title: "Plant-Based",
    desc: "Alternative to conventional plastic",
  },
  {
    icon: ShieldCheck,
    title: "Strong & Durable",
    desc: "Designed for everyday use",
  },
  {
    icon: Utensils,
    title: "Food-Service Ready",
    desc: "Practical takeaway packaging",
  },
];

export function StatsSection() {
  return (
    <section
      className="py-14 md:py-20 bg-[#faf8f5] border-y border-[#eae5da] relative overflow-hidden"
      aria-label="Product Highlights"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e6e0d4]">
          {highlights.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-4 md:px-6 group cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 ${
                  idx !== 0 ? "pt-8 sm:pt-0" : ""
                } ${idx !== highlights.length - 1 ? "pb-8 sm:pb-0" : ""}`}
              >
                {/* Circular Pale Sage Icon Background with Spring Hover */}
                <div className="w-16 h-16 rounded-full bg-[#e8eee4] text-[#3e684a] flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-115 group-hover:bg-[#173826] group-hover:text-white shadow-xs group-hover:shadow-xl group-hover:rotate-6">
                  <Icon size={26} className="stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                </div>

                <h3 className="text-base md:text-lg font-bold text-[#1c241e] mb-1.5 transition-colors group-hover:text-[#173826]">
                  {item.title}
                </h3>

                <p className="text-[13px] md:text-[13.5px] text-[#637064] leading-normal font-normal max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
