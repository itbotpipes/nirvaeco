"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, LogOut, Mail, Package } from "lucide-react";
import type { ReactNode } from "react";

const links=[{href:"/admin",label:"Overview",icon:LayoutDashboard},{href:"/admin/products",label:"Products",icon:Package},{href:"/admin/enquiries",label:"Enquiries",icon:Mail}];
export function AdminShell({children,email}:{children:ReactNode;email?:string}){
  const pathname=usePathname(); const router=useRouter();
  async function logout(){await fetch("/api/admin/session",{method:"DELETE"});router.push("/admin/login");router.refresh();}
  return <div className="admin-layout"><aside className="admin-sidebar"><Link href="/admin" className="admin-logo">NIRVA<span>ECO</span></Link><nav>{links.map(({href,label,icon:Icon})=><Link key={href} className={pathname===href||pathname.startsWith(`${href}/`)?"active":""} href={href}><Icon size={18}/>{label}</Link>)}</nav><div className="admin-user"><span>{email}</span><button onClick={logout}><LogOut size={16}/>Log out</button></div></aside><main className="admin-main">{children}</main></div>;
}
