"use client";

import Image from "next/image";
import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

export function ProductGallery({ images, productName }: { images: string[]; productName: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const selected = images[active] ?? images[0];
  if (!selected) return null;
  return <div className="product-gallery">
    <div className={`product-main-image${zoom ? " is-zoomed" : ""}`} key={selected}>
      <Image src={selected} alt={`${productName} product view ${active + 1}`} fill sizes="(max-width: 820px) 100vw, 55vw" className="product-contain" priority />
      <button className="product-zoom-toggle" type="button" onClick={() => setZoom((value) => !value)} aria-label={zoom ? "Zoom out of product image" : "Zoom into product image"} aria-pressed={zoom}>{zoom ? <ZoomOut size={17}/> : <ZoomIn size={17}/>}</button>
    </div>
    {images.length > 1 && <div className="product-thumbs" role="group" aria-label={`${productName} images`}>
      {images.map((image, index) => <button type="button" key={image} aria-label={`Show ${productName} view ${index + 1}`} aria-pressed={active === index} onClick={() => { setActive(index); setZoom(false); }}>
        <Image src={image} alt="" fill sizes="(max-width: 820px) 40vw, 20vw" className="product-contain" />
      </button>)}
    </div>}
  </div>;
}
