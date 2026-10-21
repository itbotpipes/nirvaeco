import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</p>;
}

export function SectionHeading({ eyebrow, title, copy, center = false, light = false }: { eyebrow: string; title: ReactNode; copy?: string; center?: boolean; light?: boolean }) {
  return <div className={`section-heading ${center ? "center" : ""} ${light ? "light" : ""}`}><Eyebrow light={light}>{eyebrow}</Eyebrow><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container"><Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p></div></section>;
}

export function CTA({ title = "Better packaging starts with a conversation.", copy = "Tell us what your business needs. We’ll help you explore the right bagasse packaging solutions." }: { title?: string; copy?: string }) {
  return <section className="cta-section"><div className="container cta-inner"><div className="cta-copy"><Eyebrow>Start a conversation</Eyebrow><h2>{title}</h2><p>{copy}</p></div><Link className="button" href="/contact?type=quote">Request an enquiry <ArrowRight size={18}/></Link><div className="cta-visual"><Image src="/images/plain-clamshell-closed.png" alt="Plain NIRVAECO bagasse clamshell" width={420} height={320}/></div></div></section>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 && <i>/</i>}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>;
}
