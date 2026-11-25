"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic-button";
import { TiltCard } from "@/components/motion/tilt-card";

interface ProductCardData {
  category: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  href: string;
  formats: { name: string; dim: string }[];
  highlight: string;
}

const products: ProductCardData[] = [
  {
    category: "Featured Clamshells",
    badge: "Food-Service Flagship",
    title: "3-Compartment Clamshells",
    desc: "Rigid partition design isolating curries, rice, and sides to guarantee zero flavor migration during takeaway delivery.",
    image: "/images/three-comp-card.jpg",
    href: "/products/three-compartment-clamshell-boxes",
    highlight: "Zero Flavor Migration",
    formats: [
      { name: '8" × 8"', dim: "205 × 210 × 45 mm" },
      { name: '9" × 9"', dim: "230 × 230 × 50 mm" },
    ],
  },
  {
    category: "Everyday Takeaway",
    badge: "Versatile Hinged Box",
    title: "Plain Clamshells",
    desc: "Single-cavity hinged containers engineered for burgers, wraps, snacks, salads, and complete commercial meal packaging.",
    image: "/images/plain-clamshell-card.jpg",
    href: "/products/plain-clamshell-boxes",
    highlight: "Microwave & Freezer Safe",
    formats: [
      { name: '8" × 8"', dim: "205 × 210 × 45 mm" },
      { name: '9" × 9"', dim: "230 × 230 × 45 mm" },
      { name: '9" × 6"', dim: "155 × 230 × 45 mm" },
    ],
  },
  {
    category: "Beverage Solutions",
    badge: "Snap-Fit Molded Fiber",
    title: "Molded Fiber Coffee Lids",
    desc: "100% plastic-free friction-fit coffee lids engineered for hot beverages. Snaps tight with zero beverage leakage.",
    image: "/images/coffee-lid-card.jpg",
    href: "/products/molded-fiber-beverage-lids",
    highlight: "Leak-Proof Snug Fit",
    formats: [
      { name: "80 mm Flat Lid", dim: "Universal fit" },
      { name: "90 mm Sipper Lid", dim: "Sip-through seal" },
      { name: "80 mm Sipper Lid", dim: "Takeaway hot cup" },
    ],
  },
  {
    category: "Custom Engineering",
    badge: "OEM & Export Dispatch",
    title: "Private Label Tooling",
    desc: "Custom embossed branding, bespoke cavity configurations, and container wall thicknesses manufactured at our Ankleshwar plant.",
    image: "/images/clamshell-lifestyle.png",
    href: "/contact?type=custom",
    highlight: "Made at Ankleshwar",
    formats: [
      { name: "Bulk Pallets", dim: "Container load" },
      { name: "Custom Tooling", dim: "Embossed lid" },
      { name: "Export Specs", dim: "Global shipping" },
    ],
  },
];

export function PinnedHorizontalProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !trackRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) return;

          const currentScroll = -rect.top;
          const p = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

          // Calculate horizontal scroll distance
          const scrollWidth = trackRef.current.scrollWidth;
          const clientWidth = window.innerWidth;
          const maxScroll = Math.max(scrollWidth - clientWidth + 96, 0);
          const translateX = p * maxScroll;

          // Direct GPU transform update (0 React re-renders)
          trackRef.current.style.transform = `translate3d(-${translateX}px, 0, 0)`;

          if (progressLineRef.current) {
            progressLineRef.current.style.transform = `scaleX(${Math.max(p, 0.05)})`;
          }

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

  return (
    <section
      ref={containerRef}
      id="products-range"
      className="relative w-full bg-[#faf8f5] border-t border-[#eae5da]"
      style={{ height: "280vh" }}
      aria-labelledby="locked-range-title"
    >
      {/* Pinned Screen Container (Locks in place while user scrubs horizontally) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 md:py-12 z-20">
        {/* Header Bar */}
        <div className="container relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div>
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-2">
              Our Product Range · Pinned Carousel
            </span>
            <h2
              id="locked-range-title"
              className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-tight"
            >
              Thoughtfully Designed for Everyday Service.
            </h2>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#525f54]">
              Horizontal Track
            </span>
            <div className="w-24 sm:w-36 h-1.5 bg-[#e5dfd3] rounded-full overflow-hidden">
              <div
                ref={progressLineRef}
                className="h-full bg-[#173826] origin-left rounded-full will-change-transform"
                style={{ transform: "scaleX(0.05)" }}
              />
            </div>
          </div>
        </div>

        {/* Horizontally Scrubbed Track */}
        <div className="relative w-full flex-1 flex items-center overflow-visible">
          <div
            ref={trackRef}
            style={{
              transform: "translate3d(0, 0, 0)",
              transition: "transform 0.05s linear",
            }}
            className="flex items-stretch gap-6 sm:gap-8 px-6 sm:px-12 lg:px-20 will-change-transform"
          >
            {products.map((product) => (
              <div
                key={product.title}
                className="w-[320px] sm:w-[380px] md:w-[440px] shrink-0 flex flex-col"
              >
                <TiltCard maxTilt={6} className="h-full">
                  <div className="bg-white rounded-3xl border border-[#ebe5da] p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col h-full group hover:border-[#3e684a]/50">
                    {/* Image Area with Zoom */}
                    <div className="relative aspect-[16/10] rounded-2xl bg-[#f2eee6] overflow-hidden mb-6 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 320px, 440px"
                        className="object-cover transition-transform duration-700 group-hover:scale-106"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#173826] shadow-sm">
                        {product.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="text-[11px] font-bold tracking-wider uppercase text-[#3e684a] mb-1">
                        {product.category}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1a201c] tracking-tight mb-2 group-hover:text-[#173826] transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-[#525f54] leading-relaxed mb-6 font-normal">
                        {product.desc}
                      </p>

                      {/* Format Badges */}
                      <div className="mt-auto space-y-2 mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#7a887b] block">
                          Available Specifications
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.formats.map((f) => (
                            <span
                              key={f.name}
                              className="px-2.5 py-1 rounded-md bg-[#f4f0e7] text-xs font-medium text-[#2d382f] border border-[#e5dfd2]"
                            >
                              {f.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link Action */}
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

                        <span className="text-[11px] font-semibold text-[#3e684a] bg-[#e8eee4] px-2.5 py-1 rounded-full">
                          {product.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Sub-indicator */}
        <div className="container relative z-10 flex items-center justify-between text-xs text-[#637064] pt-3 border-t border-[#eae5da]">
          <div className="flex items-center gap-2">
            <span>Scroll downward to glide through all products</span>
            <span className="font-mono text-[#173826] font-bold">→</span>
          </div>

          <div className="flex items-center gap-2">
            <span>Screen unlocks when carousel completes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
