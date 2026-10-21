import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/login-form";
import { verifyAdminSession } from "@/lib/auth/session";
export const metadata:Metadata={title:"Admin sign in",robots:{index:false,follow:false}};
export default async function LoginPage(){if(await verifyAdminSession())redirect("/admin");return <div className="admin-login-page"><div className="admin-login-card"><Image src="/images/nirvaeco-logo.png" alt="NIRVAECO" width={210} height={72}/><p className="mini-label">Secure content management</p><h1>Welcome back.</h1><p>Sign in with an authorised Firebase administrator account.</p><LoginForm/></div></div>}
