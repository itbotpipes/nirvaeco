"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/types";

export function InteractiveProductGallery({ products }: { products: Product[] }) {
  const featured = ["three-compartment-clamshell-boxes", "plain-clamshell-boxes", "coffee-cup-lids"]
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = featured[activeIndex];

  if (!active) return null;

  return <section className="interactive-gallery" aria-labelledby="gallery-heading">
    <div className="gallery-stage">
      {featured.map((product, index) => <div className={`gallery-product${index === activeIndex ? " is-active" : ""}`} key={product.id} aria-hidden={index !== activeIndex}>
        <Image src={product.featuredImage} alt={product.name} fill sizes="(max-width: 820px) 92vw, 62vw" priority={index === 0}/>
        <span className="gallery-stage-note">NIRVAECO · {product.categoryName}</span>
        <span className="gallery-stage-number">0{index + 1} <i/> 03</span>
      </div>)}
      <div className="gallery-stage-caption"><span>01—03</span><span>Made for everyday service</span></div>
    </div>
    <div className="gallery-copy">
      <p className="gallery-kicker">The NIRVAECO collection</p>
      <h2 id="gallery-heading">Thoughtfully made<br/>for real service.</h2>
      <p className="gallery-intro">Explore practical formats in renewable sugarcane fiber, selected for the moments food moves.</p>
      <div className="gallery-selector" role="group" aria-label="Choose a product to preview">
        {featured.map((product, index) => <button type="button" key={product.id} className={index === activeIndex ? "is-active" : ""} aria-pressed={index === activeIndex} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}>
          <span className="gallery-selector-index">0{index + 1}</span><span>{product.name.replace(" Boxes", "")}</span><span className="gallery-selector-marker" aria-hidden="true"/>
        </button>)}
      </div>
      <div className="gallery-product-info" aria-live="polite" key={active.id}>
        <p>{active.shortDescription}</p>
        <span className="gallery-dimensions">{active.variants.length ? active.variants.map((variant) => variant.sizeLabel).join("  ·  ") : "Specifications on request"}</span>
        <Link className="gallery-detail-link" href={`/products/${active.slug}`}>Explore this format <ArrowUpRight size={16}/></Link>
      </div>
      <div className="gallery-progress" aria-hidden="true"><span style={{ transform: `scaleX(${(activeIndex + 1) / featured.length})` }}/></div>
    </div>
  </section>;
}
