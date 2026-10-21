"use client";

import { ArrowDownRight } from "lucide-react";
import Link from "next/link";

const fibers = Array.from({ length: 36 }, (_, index) => ({
  x: 34 + ((index * 73) % 620),
  y: 38 + ((index * 47) % 480),
  bend: ((index % 7) - 3) * 15,
  length: 80 + ((index * 29) % 180),
  width: index % 5 === 0 ? 5 : 2.2,
  color: ["#b5a984", "#d2c8a7", "#9c997d", "#e1d9bd"][index % 4],
}));

export function MaterialExperience() {
  return <section className="material-experience">
    <div className="container material-experience-grid">
      <div className="material-experience-copy"><p className="material-index">A RESOURCE REIMAGINED · BAGASSE</p><h2>From sugarcane fiber<br/>to everyday function.</h2><p>Bagasse is the fibrous material remaining after sugarcane juice extraction. NIRVAECO uses this renewable resource as the foundation for practical food packaging.</p><Link href="#material-story" className="material-link">Follow the material <ArrowDownRight size={16}/></Link></div>
      <figure className="material-macro">
        <svg viewBox="0 0 690 560" role="img" aria-labelledby="fiber-title fiber-description" preserveAspectRatio="xMidYMid slice">
          <title id="fiber-title">Illustrated close-up of bagasse fibers</title><desc id="fiber-description">A tactile abstract study of the natural plant fibers that make up bagasse.</desc>
          <rect width="690" height="560" fill="#e8e3d1"/>
          <path d="M0 106C122 66 218 189 351 146S566 42 690 104v152c-157-55-231 94-371 79S100 254 0 316z" fill="#d3cbb0" opacity=".42"/>
          <path d="M0 351c145-93 252 20 376-17s196-96 314-43v269H0z" fill="#d8cfb5" opacity=".54"/>
          {fibers.map((fiber, index) => <path key={index} d={`M${fiber.x - fiber.length / 2} ${fiber.y} q${fiber.bend} ${index % 2 ? -35 : 38} ${fiber.length} ${fiber.bend / 2}`} fill="none" stroke={fiber.color} strokeWidth={fiber.width} strokeLinecap="round" opacity={index % 3 === 0 ? ".9" : ".62"}/>)}
          <path d="M58 465c80-58 99 32 183-14s120 34 194-8 123 10 191-40" fill="none" stroke="#a69c7d" strokeWidth="1" opacity=".65"/>
        </svg>
        <figcaption><span>THE MATERIAL, UP CLOSE</span><span>Illustrative fiber study · sugarcane bagasse</span></figcaption>
      </figure>
    </div>
  </section>;
}
