import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`enquiry:${ip}`, 4, 10 * 60_000)) return NextResponse.json({ error: "Too many submissions. Please wait and try again." }, { status: 429 });
  const parsed = enquirySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the form and try again.", details: parsed.error.flatten().fieldErrors }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true });
  if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) return NextResponse.json({ error: "Enquiry storage is not configured yet. Please email info@nirvartayaind.com." }, { status: 503 });
  const [{ getAdminDb }, { FieldValue }] = await Promise.all([import("@/lib/firebase/admin"), import("firebase-admin/firestore")]);
  const db = getAdminDb();
  if (!db) return NextResponse.json({ error: "Enquiry storage is not configured yet. Please email info@nirvartayaind.com." }, { status: 503 });
  const data = { ...parsed.data };
  delete data.website;
  await db.collection("enquiries").add({ ...data, status: "new", internalNotes: "", createdAt: FieldValue.serverTimestamp(), updatedAt: FieldValue.serverTimestamp(), source: "website", ipHash: null });
  return NextResponse.json({ ok: true }, { status: 201 });
}
