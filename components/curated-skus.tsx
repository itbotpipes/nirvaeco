import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProductCardData {
  slug: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

const skuCards: ProductCardData[] = [
  {
    slug: "three-compartment-clamshell-boxes",
    badge: "3-Compartment Partition",
    title: "3-Compartment Clamshells",
    description:
      "Bagasse clamshell containers with three compartments, designed for convenient food-service and takeaway applications.",
    image: "/images/three-comp-card.jpg",
    specs: [
      { label: "Common Sizes", value: "8×8″ (205×210mm) · 9×9″ (230×230mm)" },
      { label: "Heat Resistance", value: "-20°C to +120°C (Microwave & Freezer)" },
      { label: "Pallet / Carton", value: "Verified Food-Service Packaging" },
    ],
  },
  {
    slug: "plain-clamshell-boxes",
    badge: "High-Depth Single Cavity",
    title: "Heavy-Gauge Plain Clamshells",
    description:
      "Practical hinged bagasse containers designed for food delivery, takeaway, and everyday food packaging.",
    image: "/images/plain-clamshell-card.jpg",
    specs: [
      { label: "Common Sizes", value: "8×8″ · 9×9″ · 9×6″ (155×230×45 mm)" },
      { label: "Heat Resistance", value: "-20°C to +120°C (Oil & Water Resistant)" },
      { label: "Pallet / Carton", value: "Standard Export Pack" },
    ],
  },
  {
    slug: "coffee-cup-lids",
    badge: "Industrial Fit",
    title: "Molded Fiber Beverage Lids",
    description:
      "Plant-based bagasse lid options available in flat and sipper formats.",
    image: "/images/coffee-lid-card.jpg",
    specs: [
      { label: "Common Sizes", value: "80 mm & 90 mm (Flat & Sipper)" },
      { label: "Heat Resistance", value: "-20°C to +120°C (Hot Beverage Safe)" },
      { label: "Pallet / Carton", value: "Bulk Dispenser Pack" },
    ],
  },
];

export function CuratedSKUs() {
  return (
    <section id="collection" className="curated-section section" aria-labelledby="curated-heading">
      <div className="container">
        {/* Section Header */}
        <div className="curated-header">
          <div className="curated-header-left">
            <p className="section-eyebrow">CORE PRODUCT ARCHITECTURE</p>
            <h2 id="curated-heading" className="section-title">
              Curated B2B Tableware SKUs
            </h2>
          </div>
          <div className="curated-header-right">
            <p className="curated-header-copy">
              Designed for heavy hot gravies, high stacking rigidity, and seamless service.
              Available in natural tan and bleached white sugarcane bagasse.
            </p>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="curated-grid">
          {skuCards.map((product) => (
            <article key={product.slug} className="sku-card">
              <Link href={`/products/${product.slug}`} className="sku-card-image-wrap" tabIndex={-1}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="sku-card-img"
                />
                <span className="sku-badge">{product.badge}</span>
              </Link>

              <div className="sku-card-body">
                <h3 className="sku-card-title">
                  <Link href={`/products/${product.slug}`}>{product.title}</Link>
                </h3>
                <p className="sku-card-desc">{product.description}</p>

                {/* Specs Box */}
                <div className="sku-specs-list">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="sku-spec-row">
                      <span className="sku-spec-label">{spec.label}</span>
                      <strong className="sku-spec-val">{spec.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="sku-card-footer">
                  <Link href={`/products/${product.slug}`} className="sku-card-link">
                    Inquire SKU <ArrowUpRight size={15} className="sku-link-arrow" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
