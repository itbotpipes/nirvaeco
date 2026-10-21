import { PageHero } from "@/components/ui";
export function LegalPage({ title, updated, sections }: { title: string; updated: string; sections: readonly (readonly [string,string])[] }) {
  return <><PageHero eyebrow="Legal" title={title} copy={`Last updated ${updated}`}/><section className="section legal-section"><div className="container legal-copy">{sections.map(([heading,copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}</div></section></>;
}
