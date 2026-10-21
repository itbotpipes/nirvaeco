import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth/session";
import { enquiryUpdateSchema } from "@/lib/validation";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await verifyAdminSession(); if (!user) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  const parsed = enquiryUpdateSchema.safeParse(await request.json().catch(() => null)); if (!parsed.success) return NextResponse.json({ error: "Invalid update" }, { status: 400 });
  const [{ getAdminDb }, { FieldValue }] = await Promise.all([import("@/lib/firebase/admin"), import("firebase-admin/firestore")]); const db = getAdminDb(); if (!db) return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  const { id } = await params; await db.collection("enquiries").doc(id).update({ ...parsed.data, updatedAt: FieldValue.serverTimestamp(), updatedBy: user.uid });
  return NextResponse.json({ ok: true });
}
