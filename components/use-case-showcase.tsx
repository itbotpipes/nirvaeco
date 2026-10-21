"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const useCases = [
  { label: "Takeaway & delivery", image: "/images/clamshell-foodservice.png", alt: "Prepared takeaway meal in a bagasse clamshell", copy: "Explore hinged clamshell formats for takeaway meals, quick-service menus and food delivery." },
  { label: "Restaurants & catering", image: "/images/plain-clamshell-open.png", alt: "Open plain bagasse clamshell for meal service", copy: "Compare practical formats for catering programmes and organised meal service." },
  { label: "Distribution & wholesale", image: "/images/three-compartment-clamshell.png", alt: "Three-compartment bagasse clamshell product", copy: "Review confirmed sizes and formats for distributor and wholesale conversations." },
] as const;

export function UseCaseShowcase() {
  const [active, setActive] = useState(0);
  const selected = useCases[active]!;
  return <section className="usecase-section">
    <div className="container usecase-heading"><p>THREE WAYS TO SERVE</p><h2>Made for the moments<br/>that matter.</h2><span>Food service, in its many forms.</span></div>
    <div className="container usecase-panels" role="group" aria-label="Choose a food-service application">
      {useCases.map((item, index) => <button type="button" key={item.label} className={`usecase-panel${active === index ? " is-active" : ""}`} aria-pressed={active === index} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
        <Image src={item.image} alt={item.alt} fill sizes="(max-width: 820px) 90vw, 38vw"/>
        <span className="usecase-panel-shade"/>
        <span className="usecase-panel-index">0{index + 1} / 03</span>
        <span className="usecase-panel-copy"><strong>{item.label}</strong><i>{item.copy}</i><span className="usecase-panel-action">View application <ArrowUpRight size={15}/></span></span>
      </button>)}
    </div>
    <div className="container usecase-followup" aria-live="polite"><p>{selected.copy}</p><Link className="text-link" href="/products">Explore suitable formats <ArrowUpRight size={15}/></Link></div>
  </section>;
}
