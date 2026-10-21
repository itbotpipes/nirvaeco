import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth/session";
import { productSchema } from "@/lib/validation";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await verifyAdminSession(); if (!user) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  const parsed = productSchema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ error: "Invalid product", details: parsed.error.flatten() }, { status: 400 });
  const [{ getAdminDb }, { FieldValue }] = await Promise.all([import("@/lib/firebase/admin"), import("firebase-admin/firestore")]); const db = getAdminDb(); if (!db) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  const { id } = await params; await db.collection("products").doc(id).set({ ...parsed.data, updatedAt: FieldValue.serverTimestamp(), updatedBy: user.uid }, { merge: true });
  return NextResponse.json({ ok: true });
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await verifyAdminSession()) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  const { getAdminDb } = await import("@/lib/firebase/admin"); const db = getAdminDb(); if (!db) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  const { id } = await params; await db.collection("products").doc(id).delete(); return NextResponse.json({ ok: true });
}
