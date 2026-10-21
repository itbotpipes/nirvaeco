import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA, Eyebrow } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "Learn about NIRVAECO, a sustainable food packaging brand by Nirvartaya Industries LLP.", alternates: { canonical: "/about" } };

const journey = [
  ["A", "Sugarcane is pressed", "Juice extraction leaves a fibrous by-product."],
  ["B", "Fiber finds another role", "Bagasse is prepared and processed into mouldable pulpboard."],
  ["C", "Pulp takes a useful form", "The material is shaped into tableware for food service."],
  ["D", "Local systems matter", "End-of-life outcomes depend on collection and composting conditions."],
] as const;

export default function AboutPage() {
  return <>
    <section className="about-opening"><div className="about-opening-image"><Image src="/images/nirvaeco-facility.png" alt="NIRVAECO facility in Ankleshwar, Gujarat" fill sizes="(max-width: 820px) 100vw, 76vw" priority/><span>ANKLESHWAR · GUJARAT · INDIA</span></div><div className="about-opening-copy"><p>THE ORIGIN OF A BETTER MATERIAL</p><h1>Rooted in better choices.<br/>Built for everyday needs.</h1><span>NIRVAECO is a sustainable food packaging brand by Nirvartaya Industries LLP, based in Gujarat, India.</span><Link className="text-link" href="/contact">Start a conversation <ArrowRight size={16}/></Link></div></section>
    <section className="section about-story"><div className="container about-story-grid"><div><Eyebrow>Our story</Eyebrow><h2>A practical alternative, shaped around real service.</h2></div><div><p className="about-story-lead">NIRVAECO focuses on sugarcane bagasse products for food-service businesses, distributors and importers.</p><p>Established in 2024, the brand works to make renewable-material packaging a practical option for businesses. We believe a material shift should respond to the everyday demands of modern food service.</p></div></div></section>
    <section className="about-mission"><div className="container about-mission-grid"><div><Eyebrow>Our purpose</Eyebrow><h2>Make the move to renewable materials practical.</h2><p>Help businesses explore bagasse packaging that responds to familiar service needs while making more considered material choices.</p></div><div className="about-vision"><span>THE VISION</span><h3>A trusted source for practical, renewable-material food packaging.</h3><p>Built through focused products, clear information and collaboration with buyers.</p></div></div></section>
    <section className="about-material"><div className="about-material-field" aria-hidden="true"><svg viewBox="0 0 500 440"><path d="M20 60Q180 135 466 52M12 114Q228 199 479 103M-14 170Q226 255 510 160M8 225Q246 307 477 222M-10 284Q236 364 507 270M15 340Q251 411 485 329M56 28Q178 161 120 411M150 14Q230 183 201 423M257 30Q288 170 288 420M370 25Q337 180 387 420M466 50Q394 191 462 382" fill="none" stroke="#a8a080" strokeWidth="3" strokeLinecap="round"/><path d="M40 80Q200 144 444 73M20 194Q221 273 475 180M35 312Q226 381 459 301" fill="none" stroke="#d2c8a7" strokeWidth="12" strokeLinecap="round"/></svg><span>PLANT FIBER / BAGASSE</span></div><div className="about-material-copy"><p>Material philosophy</p><h2>A useful next chapter for sugarcane fiber.</h2><span>Bagasse is the fibrous material remaining after juice extraction. It provides the foundation for NIRVAECO’s practical food-service formats.</span><Link href="/products" className="text-link">View the range <ArrowRight size={16}/></Link></div></section>
    <section className="about-journey section"><div className="container about-process-layout"><div><Eyebrow>Material, briefly</Eyebrow><h2>From agricultural remainder to food-service form.</h2><p>A compact view of the process described in the company catalogue.</p></div><ol className="about-process-list">{journey.map(([number,title,copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>
    <section className="about-identity"><div className="about-identity-copy"><Eyebrow light>Our identity</Eyebrow><h2>Thoughtful materials.<br/>Practical solutions.</h2><p>NIRVAECO is a brand of Nirvartaya Industries LLP, based in Ankleshwar, Gujarat. The company’s focus is practical sugarcane bagasse packaging and clear conversations with the businesses that source it.</p><Link className="text-link-light" href="/products">Explore the collection <ArrowRight size={16}/></Link></div><div className="about-identity-stamp"><span>01</span><p>INDIA<br/>FOOD-SERVICE<br/>BAGASSE</p><span>NIRVARTAYA INDUSTRIES LLP</span></div></section>
    <CTA title="Let’s make the next packaging decision clearer."/>
  </>;
}
