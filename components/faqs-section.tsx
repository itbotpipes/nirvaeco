"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/motion/magnetic-button";

const faqs = [
  {
    category: "materials",
    q: "What is bagasse packaging?",
    a: "Sugarcane bagasse is the dense fibrous pulp remaining after sugarcane stalks are crushed for juice extraction. Instead of burning or discarding this agricultural byproduct, it is molded under high heat and pressure into durable, plant-based food containers.",
  },
  {
    category: "materials",
    q: "Is bagasse packaging suitable for hot foods?",
    a: "Yes. Bagasse fiber offers natural structural stiffness and thermal resistance (-20°C to +120°C), making it suitable for serving hot, warm, and oily meals without softening or losing shape.",
  },
  {
    category: "materials",
    q: "Can these products be used in the microwave or freezer?",
    a: "Yes. NirvaEco tableware is tested for microwave reheating and refrigerator/freezer food storage under standard commercial food-service conditions.",
  },
  {
    category: "materials",
    q: "Are they biodegradable and compostable?",
    a: "Yes. Made purely from renewable sugarcane plant fibers with zero petroleum plastic lining, our tableware naturally decomposes into organic compost within 60 to 90 days under commercial composting environments.",
  },
  {
    category: "orders",
    q: "What is the Minimum Order Quantity (MOQ) for commercial wholesale?",
    a: "We accommodate multi-case starter orders for independent restaurants as well as full pallet and full container loads (FCL) for regional distributors and cloud kitchen networks.",
  },
  {
    category: "orders",
    q: "Can NIRVAECO accommodate custom embossed branding or private label tooling?",
    a: "Yes. We support custom lid engraving, bespoke cavity partitioning, and tailored container dimensions manufactured directly at our Ankleshwar plant.",
  },
];

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [category, setCategory] = useState<"all" | "materials" | "orders">("all");

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  const filteredFaqs = faqs.filter((f) => {
    if (category === "all") return true;
    return f.category === category;
  });

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#eae5da]" aria-labelledby="faqs-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Heading, Subtitle & Support Liaison Box */}
          <div className="lg:col-span-5 max-w-md flex flex-col justify-between">
            <div>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-3">
                Sourcing & Technical Clarity
              </span>
              <h2
                id="faqs-title"
                className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-[1.12] mb-4"
              >
                Your Questions,
                <br />
                Answered.
              </h2>
              <p className="text-[15px] text-[#525f54] leading-relaxed font-normal mb-8">
                Everything wholesale buyers, commercial kitchens, and importers ask about thermal integrity, sample trials, and order dispatch.
              </p>

              {/* Category Filter Pills */}
              <div className="inline-flex items-center p-1 rounded-full bg-[#eee9df] border border-[#ded8cb] mb-8 shadow-inner">
                <button
                  type="button"
                  onClick={() => setCategory("all")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === "all" ? "bg-[#173826] text-white shadow-xs" : "text-[#556254] hover:text-[#173826]"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setCategory("materials")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === "materials" ? "bg-[#173826] text-white shadow-xs" : "text-[#556254] hover:text-[#173826]"
                  }`}
                >
                  Materials & Safety
                </button>
                <button
                  type="button"
                  onClick={() => setCategory("orders")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === "orders" ? "bg-[#173826] text-white shadow-xs" : "text-[#556254] hover:text-[#173826]"
                  }`}
                >
                  Wholesale & Supply
                </button>
              </div>
            </div>

            {/* Direct Technical Liaison Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#ebe5da] shadow-md mt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#e8eee4] text-[#173826] flex items-center justify-center">
                  <MessageSquare size={18} className="stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#3e684a]">
                    Need Custom Specs?
                  </div>
                  <div className="text-sm font-bold text-[#1c241e]">
                    Speak with Ankleshwar Desk
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#5f6b60] leading-relaxed mb-4">
                Our plant engineering team can provide dimensional CAD drawings, pallet loading configurations, and custom mold quotes.
              </p>
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#173826] hover:underline"
                >
                  <span>Connect with Technical Team</span>
                  <ArrowUpRight size={14} className="stroke-[2.5]" />
                </Link>
              </Magnetic>
            </div>
          </div>

          {/* Right Column: Clean Fluid Spring Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${
                    isOpen
                      ? "bg-white border-[#3e684a]/60 shadow-md"
                      : "bg-white/80 border-[#ede9e2] hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] sm:text-[15.5px] font-bold text-[#1c241e]">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#173826] text-white rotate-180" : "bg-[#f0ebe1] text-[#637064]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={14} className="stroke-[2.5]" />
                      ) : (
                        <Plus size={14} className="stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-1 text-[14px] text-[#586459] leading-relaxed border-t border-[#f4f0e8]">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
