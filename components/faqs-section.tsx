"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is bagasse packaging?",
    a: "Sugarcane bagasse is the dense fibrous pulp remaining after sugarcane stalks are crushed for juice extraction. Instead of burning or discarding this agricultural byproduct, it is molded under high heat and pressure into durable, plant-based food containers.",
  },
  {
    q: "Is bagasse packaging suitable for hot foods?",
    a: "Yes. Bagasse fiber offers natural structural stiffness and thermal resistance, making it suitable for serving hot, warm, and oily meals without softening or losing shape.",
  },
  {
    q: "Can these products be used in the microwave or freezer?",
    a: "Yes. NirvaEco tableware is tested for microwave reheating and refrigerator/freezer food storage under standard commercial food-service conditions (-20°C to 120°C).",
  },
  {
    q: "Are they biodegradable and compostable?",
    a: "Yes. Made purely from renewable sugarcane plant fibers with no conventional plastic lining, our tableware naturally decomposes into organic compost under commercial composting environments.",
  },
  {
    q: "What are the primary applications?",
    a: "Our clamshells and lids are engineered for food delivery, takeaway meals, cloud kitchens, corporate cafeterias, catering events, and quick-service restaurants.",
  },
  {
    q: "Can I request custom specifications or bulk orders?",
    a: "Yes. We support custom sizing, bulk pallet orders, and OEM contract supply requirements for commercial food-service and distribution partners.",
  },
];

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white" aria-labelledby="faqs-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 max-w-md">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[1.5px] bg-[#3e684a]" aria-hidden="true" />
              <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a]">
                Frequently Asked Questions
              </span>
            </div>

            <h2 id="faqs-title" className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.12] mb-4">
              Your Questions,
              <br />
              Answered.
            </h2>

            <p className="text-[15px] text-[#525f54] leading-relaxed font-normal">
              Everything you need to know about sugarcane bagasse, thermal performance, food contact safety, and commercial bulk supply.
            </p>
          </div>

          {/* Right Column: Premium Minimal Accordion (Borderless & Clean) */}
          <div className="lg:col-span-7 divide-y divide-[#e8e2d4]/70">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.q} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[15px] sm:text-base font-semibold tracking-[-0.01em] transition-colors ${
                      isOpen ? "text-[#173826]" : "text-[#1c241e] group-hover:text-[#3e684a]"
                    }`}>
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-0.5 ${
                        isOpen
                          ? "bg-[#173826] text-white rotate-45 shadow-xs"
                          : "bg-[#ece7dc] text-[#556356] group-hover:bg-[#e0d9cc]"
                      }`}
                      aria-hidden="true"
                    >
                      <Plus size={15} className="stroke-[2.2]" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-[14px] sm:text-[14.5px] text-[#525f54] leading-relaxed font-normal animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
