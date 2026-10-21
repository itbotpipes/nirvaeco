import type { MetadataRoute } from "next";
import { seedProducts } from "@/data/products";
import { siteConfig } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/products", "/resources", "/contact", "/privacy-policy", "/terms-and-conditions"];
  return [...pages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path === "/products" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : .7 })), ...seedProducts.map((product) => ({ url: `${siteConfig.url}/products/${product.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .8 }))];
}
