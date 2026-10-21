import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  country: z.string().trim().min(2).max(100),
  enquiryType: z.enum(["general", "product", "sample", "catalogue"]),
  productId: z.string().trim().max(100).optional().or(z.literal("")),
  productName: z.string().trim().max(150).optional().or(z.literal("")),
  quantity: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(3000),
  website: z.string().max(0).optional(),
});

export const productSchema = z.object({
  slug: z.string().trim().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).max(120),
  name: z.string().trim().min(2).max(160),
  categoryId: z.enum(["compartment-clamshells", "plain-clamshells", "coffee-lids", "cups-and-lids"]),
  categoryName: z.string().trim().min(2).max(100),
  shortDescription: z.string().trim().min(10).max(260),
  description: z.string().trim().min(20).max(5000),
  material: z.string().trim().min(2).max(150),
  variants: z.array(z.object({
    id: z.string().min(1), name: z.string().min(1), sizeLabel: z.string().min(1),
    lengthMm: z.number().positive().optional(), widthMm: z.number().positive().optional(),
    heightMm: z.number().positive().optional(), diameterMm: z.number().positive().optional(), notes: z.string().optional(),
  })).default([]),
  features: z.array(z.string().min(1)).default([]),
  applications: z.array(z.string().min(1)).default([]),
  images: z.array(z.string().min(1)).default([]),
  featuredImage: z.string().min(1), featured: z.boolean().default(false),
  status: z.enum(["draft", "published"]), sortOrder: z.number().int().nonnegative(),
  seoTitle: z.string().min(2).max(160), seoDescription: z.string().min(10).max(320),
});

export const enquiryUpdateSchema = z.object({
  status: z.enum(["new", "in_progress", "responded", "closed"]),
  internalNotes: z.string().max(5000),
});

export function isSafeSlug(value: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
