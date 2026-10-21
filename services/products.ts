import type { Product } from "@/types";
import { seedProducts } from "@/data/products";

async function loadAdminDb() {
  if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) return null;
  const { getAdminDb } = await import("@/lib/firebase/admin");
  return getAdminDb();
}

function normaliseProduct(id: string, data: Record<string, unknown>): Product {
  return { id, ...(data as Omit<Product, "id">) };
}

export async function getPublishedProducts(): Promise<Product[]> {
  const db = await loadAdminDb();
  if (!db) return seedProducts;
  try {
    const snapshot = await db.collection("products").where("status", "==", "published").get();
    if (snapshot.empty) return seedProducts;
    return snapshot.docs.map((doc) => normaliseProduct(doc.id, doc.data())).sort((a, b) => a.sortOrder - b.sortOrder);
  } catch {
    return seedProducts;
  }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getPublishedProducts();
  return products.find((product) => product.slug === slug);
}

export async function getAllProducts(): Promise<Product[]> {
  const db = await loadAdminDb();
  if (!db) return seedProducts;
  const snapshot = await db.collection("products").get();
  return snapshot.empty ? seedProducts : snapshot.docs.map((doc) => normaliseProduct(doc.id, doc.data())).sort((a, b) => a.sortOrder - b.sortOrder);
}
