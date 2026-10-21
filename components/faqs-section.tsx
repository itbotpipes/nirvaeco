"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    a: "Yes. NirvaEco tableware is tested for microwave reheating and refrigerator/freezer food storage under standard commercial food-service conditions.",
  },
  {
    q: "Are they biodegradable?",
    a: "Yes. Made purely from renewable sugarcane plant fibers with no conventional plastic lining, our tableware naturally decomposes into organic compost under commercial composting environments.",
  },
  {
    q: "What are the main applications?",
    a: "Our clamshells and lids are engineered for food delivery, takeaway meals, cloud kitchens, corporate cafeterias, catering events, and quick-service restaurants.",
  },
  {
    q: "Can I request custom products?",
    a: "Yes. We support custom sizing, bulk pallet orders, and OEM/custom supply requirements for commercial food-service and distribution partners.",
  },
];

export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#faf8f5] border-t border-[#eae5da]" aria-labelledby="faqs-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-5 max-w-md">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a] block mb-3">
              Frequently Asked Questions
            </span>
            <h2 id="faqs-title" className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.14] mb-4">
              Your Questions,
              <br />
              Answered.
            </h2>
            <p className="text-[15px] text-[#525f54] leading-relaxed font-normal">
              Find answers to common questions about our bagasse packaging, applications, and sustainability.
            </p>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-xl border border-[#ede9e2] overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 hover:bg-[#faf9f6] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14.5px] sm:text-[15px] font-semibold text-[#1c241e]">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[#637064]">
                      {isOpen ? (
                        <Minus size={15} className="stroke-[2.5]" />
                      ) : (
                        <Plus size={15} className="stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-[13.5px] sm:text-[14px] text-[#586459] leading-relaxed border-t border-[#f2eee7]">
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
