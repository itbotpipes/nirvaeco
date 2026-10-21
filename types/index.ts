export type ProductStatus = "draft" | "published";

export interface ProductVariant {
  id: string;
  name: string;
  sizeLabel: string;
  lengthMm?: number;
  widthMm?: number;
  heightMm?: number;
  diameterMm?: number;
  notes?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryId: "compartment-clamshells" | "plain-clamshells" | "coffee-lids" | "cups-and-lids";
  categoryName: string;
  shortDescription: string;
  description: string;
  material: string;
  variants: ProductVariant[];
  features: string[];
  applications: string[];
  images: string[];
  featuredImage: string;
  featured: boolean;
  status: ProductStatus;
  sortOrder: number;
  seoTitle: string;
  seoDescription: string;
  createdAt?: string;
  updatedAt?: string;
}

export type EnquiryStatus = "new" | "in_progress" | "responded" | "closed";

export interface Enquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  country: string;
  enquiryType: "general" | "product" | "sample" | "catalogue";
  productId?: string;
  productName?: string;
  quantity?: string;
  message: string;
  status: EnquiryStatus;
  internalNotes: string;
  createdAt: string;
  updatedAt: string;
}
