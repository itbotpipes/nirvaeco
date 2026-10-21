import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";
import { verifyAdminSession } from "@/lib/auth/session";

export async function POST() {
  if (!await verifyAdminSession()) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME; const apiKey = process.env.CLOUDINARY_API_KEY; const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!cloudName || !apiKey || !apiSecret) return NextResponse.json({ error: "Cloudinary is not configured." }, { status: 503 });
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });
  const timestamp = Math.round(Date.now() / 1000); const folder = "nirvaeco/products"; const signature = cloudinary.utils.api_sign_request({ timestamp, folder }, apiSecret);
  return NextResponse.json({ timestamp, folder, signature, cloudName, apiKey });
}
