"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { ProductVariant } from "@/types";

export function ProductVariantPicker({ variants, productName }: { variants: ProductVariant[]; productName: string }) {
  const [active, setActive] = useState(0);
  const selected = variants[active];
  if (!selected) return null;
  const quoteUrl = `/contact?type=product&product=${encodeURIComponent(productName)}&variant=${encodeURIComponent(selected.name)}`;
  return <div className="product-variant-picker">
    <p>Choose a format</p>
    <div className="variant-options" role="group" aria-label="Available product formats">{variants.map((variant, index) => <button type="button" key={variant.id} aria-pressed={active === index} className={active === index ? "is-active" : ""} onClick={() => setActive(index)}><span>{variant.name}</span><small>{variant.sizeLabel}</small></button>)}</div>
    <p className="variant-selected" aria-live="polite">Selected · {selected.name}</p>
    <Link href={quoteUrl} className="button">Request a quote <ArrowRight size={17}/></Link>
  </div>;
}
