"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getClientAuth } from "@/lib/firebase/client";

export function LoginForm() {
  const router = useRouter(); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(""); setLoading(true); const data=new FormData(event.currentTarget);
    try { const credential=await signInWithEmailAndPassword(getClientAuth(),String(data.get("email")),String(data.get("password"))); const idToken=await credential.user.getIdToken(); const response=await fetch("/api/admin/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken})}); const body=await response.json() as {error?:string}; if(!response.ok) throw new Error(body.error||"Sign-in failed."); router.push("/admin"); router.refresh(); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Sign-in failed."); setLoading(false); }
  }
  return <form onSubmit={submit} className="admin-login-form"><label>Email<input name="email" type="email" required autoComplete="username"/></label><label>Password<input name="password" type="password" required autoComplete="current-password"/></label>{error&&<p role="alert">{error}</p>}<button className="button" disabled={loading}>{loading?"Signing in…":"Sign in"}</button></form>;
}
