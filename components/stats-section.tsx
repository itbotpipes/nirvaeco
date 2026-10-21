import { Leaf, Sprout, ShieldCheck, Utensils } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Sugarcane Bagasse",
    desc: "Renewable fiber material",
  },
  {
    icon: Sprout,
    title: "Plant-Based",
    desc: "Alternative to conventional plastic",
  },
  {
    icon: ShieldCheck,
    title: "Strong & Durable",
    desc: "Designed for everyday use",
  },
  {
    icon: Utensils,
    title: "Food-Service Ready",
    desc: "Practical takeaway packaging",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 bg-[#faf8f5] border-y border-[#eae5da]" aria-label="Product Highlights">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e6e0d4]">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-4 md:px-6 ${
                  idx !== 0 ? "pt-6 sm:pt-0" : ""
                } ${idx !== highlights.length - 1 ? "pb-6 sm:pb-0" : ""}`}
              >
                {/* Circular Pale Sage Icon Background */}
                <div className="w-14 h-14 rounded-full bg-[#e8eee4] text-[#3e684a] flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-200">
                  <Icon size={24} className="stroke-[1.8]" />
                </div>

                <h3 className="text-base md:text-lg font-semibold text-[#1c241e] mb-1.5">
                  {item.title}
                </h3>

                <p className="text-[13px] md:text-[13.5px] text-[#637064] leading-normal font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
