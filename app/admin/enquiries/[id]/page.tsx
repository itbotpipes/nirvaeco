import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { EnquiryEditor } from "@/components/admin/enquiry-editor";
import { requireAdmin } from "@/lib/auth/session";
import type { EnquiryStatus } from "@/types";

export default async function EnquiryPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireAdmin(); const { id } = await params;
  const { getAdminDb } = await import("@/lib/firebase/admin"); const db = getAdminDb(); if (!db) notFound();
  const snapshot = await db.collection("enquiries").doc(id).get(); if (!snapshot.exists) notFound(); const record = snapshot.data()!;
  return <AdminShell email={user.email}><div className="admin-heading"><div><p className="mini-label">Enquiry detail</p><h1>{String(record.company)}</h1><p>Submitted by {String(record.name)}</p></div></div><div className="enquiry-detail-grid"><div className="admin-panel enquiry-record"><h2>Customer submission</h2>{[["Name", record.name], ["Company", record.company], ["Email", record.email], ["Phone", record.phone || "—"], ["Country", record.country], ["Type", record.enquiryType], ["Product", record.productName || "—"], ["Quantity", record.quantity || "—"], ["Message", record.message]].map(([label, value]) => <div key={String(label)}><span>{String(label)}</span><p>{String(value)}</p></div>)}</div><div className="admin-panel"><h2>Workflow</h2><EnquiryEditor id={id} status={record.status as EnquiryStatus} notes={String(record.internalNotes || "")}/></div></div></AdminShell>;
}
