"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/types";
import { categories, filterProducts } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export function ProductExplorer({ products }: { products: Product[] }) {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => filterProducts(products, category, query), [products, category, query]);
  return <div>
    <div className="catalogue-tools">
      <div className="filter-tabs" role="group" aria-label="Product categories">{categories.map((item) => <button type="button" key={item.id} className={category === item.id ? "active" : ""} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}</div>
      <label className="search-field"><Search size={18}/><span className="sr-only">Search products</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the range" /></label>
    </div>
    {visible.length ? <div className="product-grid" id="catalogue-grid">{visible.map((product) => <ProductCard key={product.id} product={product}/>)}</div> : <div className="empty-state"><h3>No matching products</h3><p>Try another category or search term.</p></div>}
  </div>;
}
