import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const qualities = [
  ["01", "Plant-based fiber", "Sugarcane bagasse is the recovered agricultural material used in this range."],
  ["02", "Oil & water resistant", "Described in the supplied product catalogue; confirm format-specific documentation with the team."],
  ["03", "Hot & cold food use", "The catalogue describes use across hot and cold applications."],
];

export function ProductPerformance() {
  return <section className="performance-scene">
    <div className="performance-topline container"><span>Designed to do more</span><span>Material / use / form</span></div>
    <div className="container performance-layout">
      <div className="performance-product-stage"><Image src="/images/three-compartment-clamshell.png" alt="Three-compartment bagasse clamshell from the NIRVAECO range" fill sizes="(max-width: 820px) 100vw, 58vw"/><span className="performance-figure-label">FORM STUDY — 08 / 09 IN</span><i className="performance-leader performance-leader-one"/><i className="performance-leader performance-leader-two"/></div>
      <div className="performance-editorial"><h2>Made for the<br/>work of service.</h2><p className="performance-intro">A familiar meal format, shaped from a material with a second purpose.</p><div className="performance-facts">{qualities.map(([index, title, copy]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><Link href="/resources" className="performance-source-link">See the product catalogue <ArrowUpRight size={15}/></Link></div>
    </div>
  </section>;
}
