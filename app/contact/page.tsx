import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Contact", description: "Contact NIRVAECO for product, sample, catalogue and distribution enquiries.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <section className="contact-opening"><div className="container contact-grid"><div className="contact-aside"><p className="contact-overline">START A CONVERSATION · NIRVAECO</p><h1>Tell us what you need.<br/>We’ll take it from there.</h1><p>Share the format, intended use and destination market you have in mind. We’ll help you find the most useful next step.</p><div className="contact-list"><a href={`mailto:${siteConfig.email}`}><Mail/><span>Email<strong>{siteConfig.email}</strong></span></a><a href={`tel:${siteConfig.phoneHref}`}><Phone/><span>Phone<strong>{siteConfig.phoneDisplay}</strong></span></a><div><MapPin/><span>Based in<strong>{siteConfig.address}</strong></span></div></div><div className="contact-location-note"><span>GUJARAT, INDIA</span><span>GLOBAL FOOD-SERVICE ENQUIRIES</span></div></div><div className="contact-form-column"><div className="contact-form-heading"><span>YOUR ENQUIRY</span><span>We usually need a little context.</span></div><Suspense fallback={<div className="form-loading">Loading enquiry form…</div>}><EnquiryForm/></Suspense></div></div></section>;
}
