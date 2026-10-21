import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Breadcrumbs, CTA, Eyebrow } from "@/components/ui";
import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { ProductVariantPicker } from "@/components/product-variant-picker";
import { getProduct, getPublishedProducts } from "@/services/products";
import { siteConfig } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = await getProduct(slug); if (!product) return {};
  return { title: product.seoTitle.replace(" | NIRVAECO", ""), description: product.seoDescription, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: product.seoTitle, description: product.seoDescription, images: [product.featuredImage] } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = await getProduct(slug); if (!product) notFound();
  const all = await getPublishedProducts(); const related = all.filter((item) => item.id !== product.id).slice(0, 3);
  const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.shortDescription, material: product.material, image: product.images.map((image) => `${siteConfig.url}${image}`), brand: { "@type": "Brand", name: "NIRVAECO" }, manufacturer: { "@type": "Organization", name: siteConfig.legalName } };
  return <><section className="product-hero"><div className="container"><Breadcrumbs items={[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:product.name}]}/><div className="product-detail-grid"><ProductGallery images={product.images} productName={product.name}/><div className="product-info"><Eyebrow>{product.categoryName}</Eyebrow><h1>{product.name}</h1><p className="product-lead">{product.shortDescription}</p><p>{product.description}</p><div className="material-line"><span>Primary material</span><strong>{product.material}</strong></div>{product.variants.length > 0 && <ProductVariantPicker variants={product.variants} productName={product.name}/>}<div className="product-actions"><a className="button button-outline" href={siteConfig.catalogue} download>Download catalogue</a></div></div></div></div></section>
    <section className="section specs-section"><div className="container specs-grid"><div><Eyebrow>Specifications</Eyebrow><h2>Confirmed product data.</h2><p>Measurements are reproduced from the supplied NIRVAECO catalogue. Contact the team for current packaging, tolerance and compatibility documentation.</p></div><div>{product.variants.length ? <div className="spec-table"><div className="spec-row spec-head"><span>Variant</span><span>Dimensions</span></div>{product.variants.map((variant) => <div className="spec-row" key={variant.id}><strong>{variant.name}</strong><span>{variant.sizeLabel}</span></div>)}</div> : <div className="spec-placeholder"><h3>Specification on request</h3><p>The supplied source identifies this category without full individual product specifications.</p></div>}</div></div></section>
    <section className="section product-features"><div className="container features-grid"><div><Eyebrow>Product profile</Eyebrow><h2>Made for practical handling.</h2></div><div className="check-list">{product.features.map((feature) => <p key={feature}><Check size={18}/>{feature}</p>)}</div><div><p className="mini-label">Typical applications</p>{product.applications.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div></section>
    <section className="section related-products"><div className="container"><Eyebrow>Continue exploring</Eyebrow><h2>Other products in the range.</h2><div className="product-grid">{related.map((item) => <ProductCard key={item.id} product={item}/>)}</div></div></section><CTA/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>;
}
