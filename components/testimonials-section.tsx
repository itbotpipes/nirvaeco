"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";

const testimonials = [
  {
    quote:
      "NirvaEco's bagasse packaging has been a reliable choice for our takeaway service. The quality and structural stiffness are excellent, and it directly aligns with our zero-plastic sustainability goals.",
    client: "Rohan Varma",
    role: "Head of Supply Chain & Packaging",
    business: "Multi-Unit Cloud Kitchen Network",
    location: "Mumbai, Maharashtra",
    metrics: "12,000+ meals delivered monthly",
  },
  {
    quote:
      "The 3-compartment clamshells retain heat and structure exceptionally well during transit across heavy traffic. Zero lid pops, zero soggy bottoms, and our customers love the certified plastic-free finish.",
    client: "Priya Desai",
    role: "Culinary Operations Director",
    business: "Gourmet Catering & Corporate Lunches",
    location: "Ahmedabad, Gujarat",
    metrics: "Zero liquid leakage reports",
  },
  {
    quote:
      "Switching from plastic containers to NIRVAECO's sugarcane tableware elevated our brand perception significantly. The natural tactile texture tells customers immediately that we care about quality and the planet.",
    client: "Sameer Joshi",
    role: "Founder & Executive Chef",
    business: "Farm-to-Fork QSR Brand",
    location: "Bengaluru, Karnataka",
    metrics: "100% plastic-free certified",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const current = testimonials[index];

  return (
    <section className="relative py-20 md:py-28 bg-[#faf8f5] border-t border-[#eae5da] overflow-hidden" aria-labelledby="testi-title">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & Carousel Navigation */}
          <div className="lg:col-span-5 max-w-md">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-3">
              Tested in Active Service
            </span>

            <h2 id="testi-title" className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-[1.12] mb-4">
              Trusted by
              <br />
              Commercial Kitchens.
            </h2>

            <p className="text-[15px] text-[#525f54] leading-relaxed mb-8 font-normal">
              Real feedback from procurement heads, culinary directors, and cloud kitchen operators relying on NIRVAECO daily.
            </p>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-11 h-11 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#173826] hover:text-white hover:border-[#173826] transition-all duration-300 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-11 h-11 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#173826] hover:text-white hover:border-[#173826] transition-all duration-300 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex items-center gap-1.5 ml-4">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === idx ? "w-8 bg-[#173826]" : "w-2 bg-[#d7d2c5] hover:bg-[#a39f93]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-End Testimonial Card */}
          <div className="lg:col-span-7 perspective-container">
            <TiltCard maxTilt={5}>
              <div className="bg-white rounded-3xl border border-[#ebe5da] p-8 sm:p-10 shadow-xl transition-all duration-300 relative overflow-hidden group hover:border-[#3e684a]/50">
                {/* Subtle top quotation accent */}
                <div className="flex items-center justify-between mb-6">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#2d6a42]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#f2eee6] text-xs font-semibold text-[#3e684a]">
                    Verified Commercial Partner
                  </span>
                </div>

                {/* Quote Body */}
                <div className="relative mb-8">
                  <Quote size={32} className="text-[#3e684a]/20 absolute -top-4 -left-3 pointer-events-none" />
                  <p className="text-lg sm:text-xl md:text-[21px] text-[#1a201c] font-medium leading-relaxed tracking-tight relative z-10">
                    “{current.quote}”
                  </p>
                </div>

                {/* Client Profile & Metric Strip */}
                <div className="pt-6 border-t border-[#f0ebe0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#173826] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm">
                      {current.client.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-base font-bold text-[#1c241e]">{current.client}</div>
                      <div className="text-xs text-[#525f54]">{current.role} · {current.business}</div>
                      <div className="text-[11px] text-[#738275]">{current.location}</div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3e684a] block">
                      Operational Result
                    </span>
                    <span className="text-xs font-semibold text-[#1c241e]">
                      {current.metrics}
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
