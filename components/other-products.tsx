"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "@/components/motion/tilt-card";
import { Magnetic } from "@/components/motion/magnetic-button";

const allProducts = [
  {
    category: "clamshells",
    title: "3-Compartment Clamshells",
    desc: "Bagasse clamshell containers with three compartments, designed for convenient food-service and takeaway applications.",
    image: "/images/three-comp-card.jpg",
    href: "/products/three-compartment-clamshell-boxes",
    variants: [
      { size: '8" × 8"', dim: "205 × 210 × 45 mm" },
      { size: '9" × 9"', dim: "230 × 230 × 50 mm" },
    ],
  },
  {
    category: "clamshells",
    title: "Plain Clamshells",
    desc: "Practical hinged bagasse containers designed for food delivery, takeaway, and everyday food packaging.",
    image: "/images/plain-clamshell-card.jpg",
    href: "/products/plain-clamshell-boxes",
    variants: [
      { size: '8" × 8"', dim: "205 × 210 × 45 mm" },
      { size: '9" × 9"', dim: "230 × 230 × 45 mm" },
      { size: '9" × 6"', dim: "155 × 230 × 45 mm" },
    ],
  },
  {
    category: "lids",
    title: "Coffee Lids",
    desc: "Plant-based bagasse lid options available in flat and sipper formats.",
    image: "/images/coffee-lid-card.jpg",
    href: "/products/molded-fiber-beverage-lids",
    variants: [
      { size: "80 mm Flat Lid", dim: "Universal fit" },
      { size: "90 mm Sipper Lid", dim: "Sip-through seal" },
      { size: "80 mm Sipper Lid", dim: "Takeaway hot cup" },
    ],
  },
];

export function OtherProducts() {
  const [filter, setFilter] = useState<"all" | "clamshells" | "lids">("all");

  const filteredProducts = allProducts.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section
      id="products-range"
      className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#eae5da] relative overflow-hidden"
      aria-labelledby="range-title"
    >
      <div className="container relative z-10">
        {/* Header with Title and Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-2.5">
              Our Product Range
            </span>
            <h2
              id="range-title"
              className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-tight"
            >
              Thoughtfully Designed for Everyday Service.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {/* Filter Pills */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#eee9df] border border-[#ded8cb] shadow-inner">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === "all"
                    ? "bg-[#173826] text-white shadow-xs"
                    : "text-[#556254] hover:text-[#173826]"
                }`}
              >
                All Products
              </button>
              <button
                type="button"
                onClick={() => setFilter("clamshells")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === "clamshells"
                    ? "bg-[#173826] text-white shadow-xs"
                    : "text-[#556254] hover:text-[#173826]"
                }`}
              >
                Clamshells
              </button>
              <button
                type="button"
                onClick={() => setFilter("lids")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  filter === "lids"
                    ? "bg-[#173826] text-white shadow-xs"
                    : "text-[#556254] hover:text-[#173826]"
                }`}
              >
                Coffee Lids
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.title}>
              <TiltCard maxTilt={7} className="h-full">
                <div className="bg-white rounded-3xl border border-[#ebe5da] p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:border-[#3e684a]/40">
                  {/* Image Area with Zoom Interaction */}
                  <div className="relative aspect-4/3 rounded-2xl bg-[#f2eee6] overflow-hidden mb-6 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-radial from-transparent to-black/10 pointer-events-none" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-[#1a201c] tracking-tight mb-2.5 group-hover:text-[#173826] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[#525f54] leading-relaxed mb-6 font-normal">
                      {product.desc}
                    </p>

                    {/* Available Formats / Variants */}
                    <div className="mt-auto space-y-2 mb-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a887b] block">
                        Available Formats
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.variants.map((v) => (
                          <span
                            key={v.size}
                            className="px-2.5 py-1 rounded-md bg-[#f4f0e7] text-xs font-medium text-[#2d382f] border border-[#e5dfd2]"
                          >
                            {v.size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Action Link */}
                    <div className="pt-4 border-t border-[#f0ebe0] flex items-center justify-between">
                      <Magnetic strength={0.2}>
                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173826] uppercase tracking-wider group-hover:underline"
                        >
                          <span>Explore Details</span>
                          <ArrowUpRight
                            size={14}
                            className="stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      </Magnetic>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
