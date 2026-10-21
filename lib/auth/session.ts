import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const SESSION_COOKIE = "nirvaeco_admin";

export function isAdminEmail(email?: string | null) {
  const allowed = (process.env.ADMIN_EMAILS || "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);
  return Boolean(email && allowed.includes(email.toLowerCase()));
}

export async function verifyAdminSession() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token || !process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.FIREBASE_PRIVATE_KEY) return null;
  try {
    const { getAdminAuth } = await import("@/lib/firebase/admin");
    const auth = getAdminAuth();
    if (!auth) return null;
    const decoded = await auth.verifySessionCookie(token, true);
    return isAdminEmail(decoded.email) ? decoded : null;
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const user = await verifyAdminSession();
  if (!user) redirect("/admin/login");
  return user;
}
