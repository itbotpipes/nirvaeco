import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#faf8f5] border-t border-[#eae5da] overflow-hidden">
      {/* Editorial High-Resolution Background with Hands Packaging Box */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bagasse-hands.jpg"
          alt="Hands closing sustainable sugarcane bagasse food clamshell box"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right] md:object-right select-none"
        />
        {/* Soft natural gradient blend to guarantee text readability on all viewports */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/75 to-transparent md:to-[#faf8f5]/10" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 max-w-xl">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a] block mb-3">
              Ready to Make a Sustainable Choice?
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.12] mb-4">
              Let’s Discuss Your
              <br />
              Packaging Requirements.
            </h2>

            <p className="text-[15px] sm:text-base text-[#465248] leading-relaxed mb-8 max-w-lg font-normal">
              Explore our bagasse packaging range for food-service, retail, and distribution needs. Share your enquiry and connect with our team.
            </p>

            <Link
              href="/contact?type=quote"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173826] text-white text-sm font-semibold hover:bg-[#1f4d34] transition-all duration-200 shadow-md hover:shadow-lg group"
            >
              Request a Quote
              <ArrowUpRight size={15} className="stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Floating Circular Plant-Based Badge */}
          <div className="lg:col-span-6 flex justify-start lg:justify-center">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#b2cdad]/85 backdrop-blur-md border border-white/60 shadow-xl flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-300">
              <Leaf size={20} className="text-[#204429] mb-1.5 fill-current" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1c3823] leading-tight max-w-[105px]">
                Plant-Based Packaging For A Cleaner Tomorrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
