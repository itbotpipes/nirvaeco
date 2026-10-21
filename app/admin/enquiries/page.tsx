import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth/session";

export default async function EnquiriesPage({ searchParams }: { searchParams: Promise<{ status?: string; q?: string }> }) {
  const user = await requireAdmin();
  const { status, q } = await searchParams;
  const { getAdminDb } = await import("@/lib/firebase/admin");
  const db = getAdminDb();
  let records: { id: string; [key: string]: unknown }[] = [];
  if (db) {
    let query = db.collection("enquiries").orderBy("createdAt", "desc").limit(100);
    if (status && status !== "all") query = query.where("status", "==", status);
    const snapshot = await query.get();
    records = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    if (q) records = records.filter((item) => `${item.name} ${item.company} ${item.email}`.toLowerCase().includes(q.toLowerCase()));
  }
  return <AdminShell email={user.email}><div className="admin-heading"><div><p className="mini-label">Customer inbox</p><h1>Enquiries</h1><p>Original customer fields remain read-only. Update workflow status and internal notes on the detail page.</p></div></div><form className="admin-filters"><input name="q" defaultValue={q} placeholder="Search name, company or email"/><select name="status" defaultValue={status || "all"}><option value="all">All statuses</option><option value="new">New</option><option value="in_progress">In progress</option><option value="responded">Responded</option><option value="closed">Closed</option></select><button className="button button-small">Filter</button></form><div className="admin-table enquiry-table"><div className="admin-table-head"><span>Contact</span><span>Type</span><span>Status</span><span>Received</span><span/></div>{records.map((record) => <div className="admin-table-row" key={record.id}><strong>{String(record.name)}<small>{String(record.company)} · {String(record.email)}</small></strong><span>{String(record.enquiryType)}</span><span><i className={`status status-${String(record.status)}`}>{String(record.status).replace("_", " ")}</i></span><span>{record.createdAt && typeof record.createdAt === "object" && "toDate" in record.createdAt ? String((record.createdAt as { toDate: () => Date }).toDate().toLocaleDateString()) : "—"}</span><Link href={`/admin/enquiries/${record.id}`}><ArrowRight size={17}/></Link></div>)}{!records.length && <div className="admin-empty">No enquiries found.</div>}</div></AdminShell>;
}
