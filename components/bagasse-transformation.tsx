"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const stages = [
  { title: "Sugarcane", copy: "A familiar crop begins the story. The stalk is harvested for its juice; the fibrous remainder is bagasse.", note: "01 / A renewable crop", visual: "cane" },
  { title: "Fiber recovery", copy: "After juice extraction, the remaining plant fibers are separated and prepared for another use.", note: "02 / A useful by-product", visual: "fiber" },
  { title: "Pulp processing", copy: "Recovered fiber is processed into mouldable pulpboard, ready to take on a useful new form.", note: "03 / Material preparation", visual: "pulp" },
  { title: "Tableware moulding", copy: "The pulp is shaped into functional formats for food service. This diagram is an illustrative material story, not a depiction of NirvaEco’s factory.", note: "04 / Form follows function", visual: "mould" },
  { title: "Finished packaging", copy: "The result is a practical bagasse format for takeaway, delivery and everyday service.", note: "05 / Ready for service", visual: "product" },
  { title: "End-of-life considerations", copy: "What happens next depends on local collection, disposal and composting conditions. Check the requirements in your market.", note: "06 / Local conditions matter", visual: "cycle" },
];

function MaterialVisual({ visual }: { visual: string }) {
  if (visual === "product") return <Image className="transform-product-image" src="/images/plain-clamshell-open.png" alt="Finished plain bagasse clamshell packaging" fill sizes="(max-width: 820px) 90vw, 48vw" />;
  if (visual === "cycle") return <div className="cycle-visual"><Image src="/images/plain-clamshell-closed.png" alt="Bagasse clamshell at the end of its service life" fill sizes="(max-width: 820px) 90vw, 48vw"/><span>LOCAL CONDITIONS<br/>SHAPE WHAT COMES NEXT</span></div>;
  return <svg className={`material-svg material-${visual}`} viewBox="0 0 720 620" role="img" aria-label={`${visual} stage illustration`}>
    <ellipse cx="360" cy="518" rx="235" ry="28" fill="#263b2618"/>
    {visual === "cane" && <g fill="none" strokeLinecap="round"><path d="M230 505 286 118M337 506 361 102M447 506 420 130" stroke="#728764" strokeWidth="23"/><path d="m282 192-81-67m74 123 84-67m-103 148-92-72m124 1 105-85m-73 236-97-76m119-22 115-83" stroke="#899873" strokeWidth="15"/><path d="M281 264h7M337 336h12m-75 84h13m123-237h-8m-24 190h-10" stroke="#d3c9a4" strokeWidth="7"/></g>}
    {visual === "fiber" && <g fill="none" strokeLinecap="round">{Array.from({length: 23}, (_, i) => <path key={i} d={`M${155 + i * 17} ${430 - (i % 4) * 19} Q${210 + i * 10} ${175 + (i % 5) * 22} ${530 - i * 8} ${170 + (i % 3) * 38}`} stroke={i % 3 === 0 ? "#9c9a74" : "#c7b98d"} strokeWidth={i % 4 === 0 ? 8 : 4} opacity=".8"/>)}</g>}
    {visual === "pulp" && <g><path d="M190 250h340l-28 190q-6 43-49 52H267q-43-8-49-52z" fill="#e7e4d4" stroke="#b6b39b" strokeWidth="3"/><ellipse cx="360" cy="251" rx="170" ry="47" fill="#f1efdf" stroke="#b6b39b" strokeWidth="3"/><ellipse cx="360" cy="251" rx="133" ry="29" fill="#d4d0b8"/><path d="M256 325q104 42 208 0m-203 39q99 36 198 0m-182 39q83 32 165 0" fill="none" stroke="#c0b998" strokeWidth="4"/></g>}
    {visual === "mould" && <g><path d="M164 360q196-208 392 0l-30 91q-166 125-332 0z" fill="#dddbc5" stroke="#aaa88f" strokeWidth="4"/><path d="M209 356q151-151 302 0l-27 59q-124 89-248 0z" fill="#f0eedc" stroke="#b8b59d" strokeWidth="3"/><path d="M201 362q159 104 318 0" fill="none" stroke="#c1bea7" strokeWidth="3"/><path d="M360 358v90m-104-53 24 57m184-57-24 57" stroke="#c9c5ae" strokeWidth="3"/></g>}
  </svg>;
}

export function BagasseTransformation() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-material-step]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(Number((visible.target as HTMLElement).dataset.materialStep));
    }, { rootMargin: "-38% 0px -38% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <section className="transformation-section" aria-labelledby="transformation-title">
    <div className="transformation-heading container"><p className="transformation-overline">Material, in motion</p><h2 id="transformation-title">From fiber<br/>to form.</h2><p>Follow the stages that turn a sugarcane by-product into everyday packaging.</p></div>
    <div className="transformation-story container">
      <div className="transformation-steps">{stages.map((stage, index) => <article data-material-step={index} className={`transformation-step${index === active ? " is-active" : ""}`} key={stage.title}>
        <span className="transformation-step-index">0{index + 1} <i/></span><h3>{stage.title}</h3><p>{stage.copy}</p>
      </article>)}</div>
      <div className="transformation-stage-wrap">
        <div className="transformation-stage" aria-live="polite" aria-label={`Stage ${active + 1}: ${stages[active].title}`}>
          {stages.map((stage, index) => <div key={stage.visual} className={`transformation-visual${index === active ? " is-active" : ""}`} aria-hidden={index !== active}><MaterialVisual visual={stage.visual}/><span className="transformation-stage-label">{stage.note}</span></div>)}
        </div>
        <div className="transformation-progress"><span>01</span><div><i style={{ transform: `scaleX(${(active + 1) / stages.length})` }}/></div><span>06</span></div>
      </div>
    </div>
  </section>;
}
