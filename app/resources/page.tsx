import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { CTA } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Resources", description: "Download the NIRVAECO product catalogue and request current product documentation.", alternates: { canonical: "/resources" } };

export default function ResourcesPage() {
  return <><section className="resource-opening"><div className="container resource-opening-grid"><div className="resource-document-wrap"><Link className="resource-document" href={siteConfig.catalogue} target="_blank" aria-label="Open NIRVAECO product catalogue PDF"><Image src="/images/catalogue-cover-preview.png" alt="Cover of the NIRVAECO company catalogue" fill sizes="(max-width: 900px) 90vw, 45vw" priority/></Link><span className="resource-document-caption">NIRVAECO · COMPANY CATALOGUE · COVER PREVIEW</span></div><div className="resource-opening-copy"><p>THE NIRVAECO PRODUCT LIBRARY</p><h1>One clear place to start.</h1><p>Explore the current company catalogue for the brand story, bagasse material information, confirmed clamshell dimensions and coffee-lid formats.</p><div className="resource-meta"><span>DOCUMENT</span><strong>Product catalogue</strong><span>FORMAT</span><strong>PDF · supplied company brochure</strong></div><a className="button" href={siteConfig.catalogue} download><Download size={17}/> Download catalogue <ArrowUpRight size={15}/></a><a className="resource-view-link" href={siteConfig.catalogue} target="_blank" rel="noreferrer">Open the PDF in a new tab <ArrowUpRight size={14}/></a></div></div></section><section className="resource-note-section"><div className="container"><span>Need a specific document?</span><p>For current technical or compliance documentation, contact the team with the product format and destination market. No additional brochures are listed unless verified.</p><Link href="/contact?type=product">Ask the NIRVAECO team <ArrowUpRight size={15}/></Link></div></section><CTA title="A clearer product conversation starts here." copy="Share the format and destination market you have in mind, and the team can point you toward the relevant available information."/></>;
}
