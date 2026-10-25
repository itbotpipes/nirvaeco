import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  const points = [
    "Complimentary evaluation sample packs",
    "Custom branding & OEM format options",
    "Direct factory dispatch from Gujarat, India",
    "Guaranteed 24-hour quotation turnaround",
  ];

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="cta-heading">
      <div className="container max-w-6xl">
        {/* Dual-Card Master Showcase with white background */}
        <div className="rounded-[28px] sm:rounded-[36px] md:rounded-[40px] bg-white border border-[#eae5da] overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: B2B Commercial Enquiry Desk */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between bg-white">
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-4 h-[1.5px] bg-[#3e684a]" aria-hidden="true" />
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3e684a]">
                    Commercial Supply & Sampling
                  </span>
                </div>

                {/* Headline */}
                <h2
                  id="cta-heading"
                  className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.14] mb-3.5"
                >
                  Request an Evaluation Kit
                  <br />
                  or Commercial Quotation.
                </h2>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-[#556357] leading-relaxed mb-6 max-w-lg font-normal">
                  We supply food-service operators, cloud kitchens, and wholesale distributors with certified bagasse tableware, direct factory pricing, and rapid sample dispatches.
                </p>

                {/* Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs text-[#28362b] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/contact?type=quote"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#173826] text-white text-xs sm:text-[13.5px] font-semibold hover:bg-[#1f4d34] transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                  Request a Quote
                  <ArrowUpRight
                    size={14}
                    className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact?type=sample"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1a201c] border border-[#d8d2c5] text-xs sm:text-[13.5px] font-semibold hover:bg-[#f6f3ee] hover:border-[#b8af9e] transition-all duration-200 shadow-2xs"
                >
                  Order Free Sample Kit
                </Link>
              </div>
            </div>

            {/* Right Column: Tactile Product / Tableware Visual */}
            <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] bg-white overflow-hidden border-t lg:border-t-0 lg:border-l border-[#eae5da]">
              <Image
                src="/images/plain-clamshell-card.jpg"
                alt="NIRVAECO sustainable sugarcane bagasse packaging evaluation sample"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Minimal floating pill */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#eae5da] shadow-xs text-[11px] font-semibold text-[#1a201c]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3e684a]" />
                  <span>Evaluation Sample Kits Ready to Ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
