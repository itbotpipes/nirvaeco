import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth/session";
import { productSchema } from "@/lib/validation";

export async function GET() {
  if (!await verifyAdminSession()) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  const { getAdminDb } = await import("@/lib/firebase/admin"); const db = getAdminDb(); if (!db) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  const snapshot = await db.collection("products").orderBy("sortOrder").get();
  return NextResponse.json(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
}

export async function POST(request: Request) {
  const user = await verifyAdminSession(); if (!user) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  const parsed = productSchema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ error: "Invalid product", details: parsed.error.flatten() }, { status: 400 });
  const [{ getAdminDb }, { FieldValue }] = await Promise.all([import("@/lib/firebase/admin"), import("firebase-admin/firestore")]); const db = getAdminDb(); if (!db) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  const duplicate = await db.collection("products").where("slug", "==", parsed.data.slug).limit(1).get(); if (!duplicate.empty) return NextResponse.json({ error: "A product already uses this slug." }, { status: 409 });
  const ref = await db.collection("products").add({ ...parsed.data, createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp(), createdBy: user.uid, updatedBy: user.uid });
  return NextResponse.json({ id: ref.id }, { status: 201 });
}
