import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function AboutNirvaEco() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white" aria-labelledby="about-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Story Copy */}
          <div className="lg:col-span-5 max-w-lg">
            <span className="text-[11px] md:text-xs font-bold tracking-[0.16em] uppercase text-[#3e684a] block mb-3">
              About NirvaEco
            </span>

            <h2 id="about-title" className="text-3xl sm:text-4xl md:text-[42px] font-semibold tracking-[-0.03em] text-[#1a201c] leading-[1.14] mb-5">
              Sustainable Packaging
              <br />
              for a Cleaner Tomorrow.
            </h2>

            <p className="text-[15px] sm:text-base text-[#525f54] leading-relaxed mb-8 font-normal">
              NirvaEco is a sustainable packaging brand by Nirvartaya Industries LLP, focused on creating practical, plant-based tableware using sugarcane bagasse for a cleaner, more responsible tomorrow.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#173826] text-white text-sm font-semibold hover:bg-[#1f4d34] transition-all duration-200 shadow-md group"
            >
              Our Story
              <ArrowUpRight size={15} className="stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Column: Larger Product Photography on the Right */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[4/3] sm:aspect-[5/4] rounded-2xl md:rounded-[32px] overflow-hidden shadow-sm border border-[#ebe5da] bg-[#f2eee6]">
              <Image
                src="/images/clamshell-lifestyle.png"
                alt="NIRVAECO sustainable sugarcane bagasse tableware on natural stone surface"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
