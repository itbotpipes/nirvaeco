import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return <article className={`product-card product-card-${product.slug}`}>
    <Link href={`/products/${product.slug}`} className="product-image-wrap" aria-label={`View ${product.name}`}>
      <Image src={product.featuredImage} alt={product.name} fill sizes="(max-width: 700px) 100vw, 33vw" className="product-image" />
      <span className="product-arrow"><ArrowUpRight size={20}/></span>
    </Link>
    <div className="product-card-body"><p>{product.categoryName}</p><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><span>{product.variants.length ? `${product.variants.length} verified size${product.variants.length > 1 ? "s" : ""}` : "Specifications on request"}</span></div>
  </article>;
}
