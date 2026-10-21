import { AdminShell } from "@/components/admin/admin-shell";
import { ProductEditor } from "@/components/admin/product-editor";
import { requireAdmin } from "@/lib/auth/session";
export default async function NewProduct(){const user=await requireAdmin();return <AdminShell email={user.email}><div className="admin-heading"><div><p className="mini-label">Catalogue</p><h1>New product</h1><p>Create a draft first, then publish once every claim and specification has been checked.</p></div></div><ProductEditor/></AdminShell>}
