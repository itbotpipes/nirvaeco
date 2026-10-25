import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
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
    title: "Coffee Lids",
    desc: "Plant-based bagasse lid options available in flat and sipper formats.",
    image: "/images/coffee-lid-card.jpg",
    href: "/products/molded-fiber-beverage-lids",
    variants: [
      { size: "80 mm Flat Lid", dim: "" },
      { size: "90 mm Sipper Lid", dim: "" },
      { size: "80 mm Flat Lid", dim: "" },
      { size: "90 mm Sipper Lid", dim: "" },
    ],
  },
];

export function OtherProducts() {
  return (
    <section id="products-range" className="py-20 md:py-28 bg-white border-t border-[#eae5da]" aria-labelledby="range-title">
      <div className="container">
        {/* Header with Title and View All / Carousel Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a] block mb-2.5">
              Our Product Range
            </span>
            <h2 id="range-title" className="text-3xl sm:text-4xl md:text-[38px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-tight">
              Thoughtfully Designed for Everyday Service.
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/products"
              className="text-[14px] font-semibold text-[#1c241e] hover:text-[#3e684a] transition-colors inline-flex items-center gap-1.5"
            >
              View All Products
              <ArrowUpRight size={15} className="stroke-[2.5]" />
            </Link>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#faf8f5] hover:text-[#173826] transition-colors"
                aria-label="Previous products"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#faf8f5] hover:text-[#173826] transition-colors"
                aria-label="Next products"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Column Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((prod) => (
            <div
              key={prod.title}
              className="bg-white rounded-2xl border border-[#eae5da] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f4f1ea]">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#1c241e] mb-2.5">
                  {prod.title}
                </h3>

                <p className="text-[13.5px] text-[#637064] leading-relaxed mb-6 font-normal">
                  {prod.desc}
                </p>

                {/* Card CTA */}
                <div className="pt-4 mt-auto">
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#173826] hover:text-[#3e684a] transition-colors group/link"
                  >
                    View Product
                    <ArrowUpRight size={14} className="stroke-[2.5] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
