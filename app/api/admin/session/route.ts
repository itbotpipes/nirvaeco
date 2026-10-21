import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE, isAdminEmail } from "@/lib/auth/session";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null) as { idToken?: unknown } | null;
  const idToken = payload?.idToken;
  if (typeof idToken !== "string" || !process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) return NextResponse.json({ error: "Authentication is not configured." }, { status: 503 });
  try {
    const { getAdminAuth } = await import("@/lib/firebase/admin");
    const auth = getAdminAuth();
    if (!auth) return NextResponse.json({ error: "Authentication is not configured." }, { status: 503 });
    const decoded = await auth.verifyIdToken(idToken, true);
    if (!isAdminEmail(decoded.email)) return NextResponse.json({ error: "This account is not authorised." }, { status: 403 });
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    const session = await auth.createSessionCookie(idToken, { expiresIn });
    (await cookies()).set(SESSION_COOKIE, session, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: expiresIn / 1000, path: "/" });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Sign-in could not be verified." }, { status: 401 }); }
}

export async function DELETE() {
  (await cookies()).set(SESSION_COOKIE, "", { httpOnly: true, maxAge: 0, path: "/" });
  return NextResponse.json({ ok: true });
}
