"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TiltCard } from "@/components/motion/tilt-card";
import { useScrollMotion } from "@/components/motion/smooth-scroll-provider";

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
  {
    quote:
      "Switching to renewable bagasse containers elevated our brand perception while meeting our operational demands for hot gravies and meal sets.",
    client: "Cloud Kitchen Network",
    location: "Mumbai, India",
  },
];

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScrollMotion();

  const prev = () => {
    setIndex((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
  };

  const next = () => {
    setIndex((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));
  };

  const current = testimonials[index];

  // Botanical leaf floating parallax offset
  const leafParallax = Math.sin(scrollY * 0.002) * 12;

  return (
    <section className="relative py-20 md:py-28 bg-[#faf8f5] border-t border-[#eae5da] overflow-hidden" aria-labelledby="testi-title">
      {/* Decorative botanical palm leaf accent on right edge with scrubbed parallax */}
      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-64 md:w-80 h-80 pointer-events-none opacity-25 hidden lg:block select-none will-change-transform"
        style={{
          transform: `translate3d(0, calc(-50% + ${leafParallax}px), 0)`,
          transition: "transform 0.4s ease-out",
        }}
      >
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
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-[#3e684a] block mb-3">
              Testimonials
            </span>
            <h2 id="testi-title" className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.035em] text-[#1a201c] leading-[1.12] mb-4">
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
                className="w-11 h-11 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#173826] hover:text-white hover:border-[#173826] transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-11 h-11 rounded-full border border-[#dcd7cb] bg-white flex items-center justify-center text-[#556254] hover:bg-[#173826] hover:text-white hover:border-[#173826] transition-all duration-300 shadow-xs hover:scale-105 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>

              <div className="flex items-center gap-1.5 ml-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === i ? "w-6 bg-[#173826]" : "w-1.5 bg-[#dcd7cb]"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Testimonial 3D Card */}
          <div className="lg:col-span-7 perspective-container">
            <TiltCard maxTilt={6} glare={true} className="max-w-xl">
              <div className="bg-white rounded-3xl border border-[#ede9e2] p-8 sm:p-12 shadow-md relative">
                {/* Quote Mark */}
                <div className="text-[#64926f] mb-4">
                  <Quote size={40} className="rotate-180 fill-current opacity-70" />
                </div>

                {/* Quote Body with key transition */}
                <p className="text-base sm:text-lg md:text-[19px] text-[#2a342c] font-normal leading-relaxed mb-6 min-h-[90px] transition-all duration-500">
                  “{current.quote}”
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-[#f4f0e8]">
                  <h3 className="text-sm font-bold text-[#1a201c]">
                    {current.client}
                  </h3>
                  <span className="text-xs text-[#707e71]">
                    {current.location}
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
