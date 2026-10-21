import { describe, expect, it } from "vitest";
import { filterProducts, seedProducts } from "@/data/products";
import { isAdminEmail } from "@/lib/auth/session";
import { enquirySchema, isSafeSlug, productSchema } from "@/lib/validation";

describe("catalogue utilities", () => {
  it("filters products by category and query", () => {
    expect(filterProducts(seedProducts, "coffee-lids", "sipper")).toHaveLength(1);
    expect(filterProducts(seedProducts, "plain-clamshells")).toHaveLength(1);
  });
  it("accepts clean product slugs only", () => {
    expect(isSafeSlug("plain-clamshell-boxes")).toBe(true);
    expect(isSafeSlug("../admin")).toBe(false);
  });
  it("validates every seeded product", () => {
    for (const { id, ...product } of seedProducts) { void id; expect(productSchema.safeParse(product).success).toBe(true); }
  });
});

describe("enquiry validation", () => {
  it("accepts a legitimate B2B enquiry", () => {
    expect(enquirySchema.safeParse({ name: "Asha Patel", company: "Example Foods", email: "asha@example.com", country: "India", enquiryType: "product", message: "Please share details for the 8 × 8 inch clamshell.", website: "" }).success).toBe(true);
  });
  it("rejects short messages and invalid email addresses", () => {
    expect(enquirySchema.safeParse({ name: "A", company: "B", email: "bad", country: "I", enquiryType: "general", message: "Hi" }).success).toBe(false);
  });
});

describe("administrator allowlist", () => {
  it("uses an exact, case-insensitive email allowlist", () => {
    process.env.ADMIN_EMAILS = "owner@example.com, admin@example.com";
    expect(isAdminEmail("Admin@Example.com")).toBe(true);
    expect(isAdminEmail("attacker@example.com")).toBe(false);
  });
});
