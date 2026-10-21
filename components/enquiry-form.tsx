"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { enquirySchema } from "@/lib/validation";

type FormValues = z.infer<typeof enquirySchema>;

export function EnquiryForm({ productId, productName }: { productId?: string; productName?: string }) {
  const params = useSearchParams();
  const queryType = params.get("type");
  const initialType = queryType === "sample" ? "sample" : queryType === "product" || productId ? "product" : queryType === "catalogue" ? "catalogue" : "general";
  const queryProduct = params.get("product");
  const queryVariant = params.get("variant");
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { enquiryType: initialType, productId, productName: productName ?? (queryProduct ? `${queryProduct}${queryVariant ? ` — ${queryVariant}` : ""}` : undefined), website: "" },
  });
  async function onSubmit(values: FormValues) {
    setServerError("");
    const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (!response.ok) { const body = await response.json().catch(() => ({})) as { error?: string }; setServerError(body.error || "We could not submit your enquiry. Please try again."); return; }
    setSubmitted(true);
  }
  if (submitted) return <div className="form-success"><CheckCircle2/><h3>Enquiry received</h3><p>Thank you. The NIRVAECO team will review your requirement and respond using the contact details provided.</p></div>;
  return <form className="enquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate>
    <input className="honeypot" tabIndex={-1} autoComplete="off" {...register("website")} />
    <div className="form-grid">
      <label><span>Name *</span><input {...register("name")} autoComplete="name" />{errors.name && <small>{errors.name.message}</small>}</label>
      <label><span>Company *</span><input {...register("company")} autoComplete="organization" />{errors.company && <small>{errors.company.message}</small>}</label>
      <label><span>Business email *</span><input type="email" {...register("email")} autoComplete="email" />{errors.email && <small>{errors.email.message}</small>}</label>
      <label><span>Phone</span><input {...register("phone")} autoComplete="tel" /></label>
      <label><span>Country *</span><input {...register("country")} autoComplete="country-name" />{errors.country && <small>{errors.country.message}</small>}</label>
      <label><span>Enquiry type *</span><select {...register("enquiryType")}><option value="general">General enquiry</option><option value="product">Product enquiry</option><option value="sample">Sample request</option><option value="catalogue">Catalogue support</option></select></label>
      <label className="full"><span>Estimated quantity or programme size</span><input {...register("quantity")} placeholder="Optional — e.g. trial order or monthly requirement" /></label>
      <label className="full"><span>Tell us about your requirement *</span><textarea rows={6} {...register("message")} placeholder="Formats, intended use, destination market and timing are helpful." />{errors.message && <small>{errors.message.message}</small>}</label>
    </div>
    {serverError && <p className="form-error" role="alert">{serverError}</p>}
    <button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send enquiry"}<ArrowRight size={18}/></button>
    <p className="form-note">By submitting, you agree to our <a href="/privacy-policy">privacy policy</a>.</p>
  </form>;
}
