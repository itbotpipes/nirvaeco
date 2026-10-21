import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProductEditor } from "@/components/admin/product-editor";
import { requireAdmin } from "@/lib/auth/session";
import { getAllProducts } from "@/services/products";
export default async function EditProduct({params}:{params:Promise<{id:string}>}){const user=await requireAdmin();const{id}=await params;const product=(await getAllProducts()).find(item=>item.id===id);if(!product)notFound();return <AdminShell email={user.email}><div className="admin-heading"><div><p className="mini-label">Catalogue</p><h1>Edit product</h1><p>{product.name}</p></div></div><ProductEditor product={product}/></AdminShell>}
