import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProductExplorer } from "@/components/product-explorer";
import { getPublishedProducts } from "@/services/products";

export const metadata: Metadata = { title: "Products", description: "Explore NIRVAECO sugarcane bagasse clamshell boxes, coffee lids, cups and lids.", alternates: { canonical: "/products" } };

export default async function ProductsPage() {
  const products = await getPublishedProducts();
  const family = products.filter((product) => ["three-compartment-clamshell-boxes", "plain-clamshell-boxes", "coffee-cup-lids"].includes(product.slug)).slice(0, 3);
  return <><section className="product-atlas"><div className="container product-atlas-inner"><div className="product-atlas-copy"><p>THE NIRVAECO PRODUCT ATLAS</p><h1>Good form for<br/>everyday service.</h1><span>Explore confirmed sugarcane bagasse formats by shape, use and size.</span><Link href="#catalogue-grid">Browse the range <ArrowUpRight size={16}/></Link></div><div className="product-atlas-family" aria-label="Featured bagasse product formats">{family.map((product, index) => <Link className={`atlas-product atlas-product-${index + 1}`} href={`/products/${product.slug}`} key={product.id} aria-label={`Explore ${product.name}`}><Image src={product.featuredImage} alt={product.name} fill sizes="(max-width: 820px) 35vw, 27vw" priority={index === 0}/><span>0{index + 1} · {product.categoryName}</span></Link>)}</div></div></section><section className="catalogue-section"><div className="container"><ProductExplorer products={products}/></div></section></>;
}
