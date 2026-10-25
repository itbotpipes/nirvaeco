"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "NirvaEco's bagasse packaging has been a reliable choice for our takeaway service. The quality and finish are excellent, and it aligns with our sustainability goals.",
    client: "Food Service Business",
    location: "India",
  },
  {
    quote:
      "The 3-compartment clamshells retain heat and structure exceptionally well during meal transport, delivering clean presentation with zero plastic.",
    client: "Catering & Delivery Operator",
    location: "Gujarat, India",
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
    <section className="relative py-20 md:py-28 bg-white border-t border-[#eae5da] overflow-hidden" aria-labelledby="testi-title">
      {/* Decorative leaf branch accent on right edge */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-64 md:w-80 h-80 pointer-events-none opacity-20 hidden lg:block select-none">
        <Image
          src="/images/test-p05-03.png"
          alt="Natural palm leaf decorative accent"
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Side: Heading & Carousel Controls */}
          <div className="lg:col-span-5 max-w-md">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a] block mb-3">
              Testimonials
            </span>
            <h2 id="testi-title" className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.14] mb-4">
              Trusted by
              <br />
              Food Businesses.
            </h2>
            <p className="text-[15px] text-[#525f54] leading-relaxed mb-8 font-normal">
              Our bagasse packaging is used by cafes, restaurants, cloud kitchens, and food-service businesses.
            </p>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#faf8f5] hover:text-[#173826] transition-colors shadow-xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#faf8f5] hover:text-[#173826] transition-colors shadow-xs"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side: Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#ede9e2] p-8 sm:p-10 shadow-sm relative max-w-xl">
              {/* Quote Mark */}
              <div className="text-[#64926f] mb-4">
                <Quote size={36} className="rotate-180 fill-current opacity-80" />
              </div>

              {/* Quote Body */}
              <p className="text-base sm:text-lg text-[#2a342c] font-normal leading-relaxed mb-6">
                “{current.quote}”
              </p>

              {/* Client Info */}
              <div>
                <h3 className="text-sm font-bold text-[#1a201c]">
                  {current.client}
                </h3>
                <span className="text-xs text-[#707e71]">
                  {current.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
