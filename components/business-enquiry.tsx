"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { enquirySchema } from "@/lib/validation";
import { z } from "zod";

type FormData = z.infer<typeof enquirySchema>;

export function BusinessEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      enquiryType: "product",
      website: "",
    },
  });

  async function onSubmit(data: FormData) {
    setServerError("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        setServerError(body.error || "We could not submit your enquiry. Please try again.");
        return;
      }

      setSubmitted(true);
      reset();
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="enquiry-section section" aria-labelledby="enquiry-heading">
      <div className="container">
        <div className="enquiry-grid">
          {/* Left Column: Direct Liaison Desk */}
          <div className="enquiry-info-col">
            <p className="section-eyebrow">DIRECT LIAISON DESK</p>
            <h2 id="enquiry-heading" className="enquiry-main-title">
              Initiate Consignment
              <br />
              or Factory Enquiry
            </h2>
            <p className="enquiry-desc">
              Speak directly with our Ankleshwar manufacturing and export teams. We supply custom
              tooling specifications, container stuffing optimization, and verified technical
              dossiers.
            </p>

            <div className="contact-details-card">
              <div className="contact-item">
                <div className="contact-icon-box">
                  <MapPin size={17} />
                </div>
                <div>
                  <span className="contact-item-label">MANUFACTURING PLANT</span>
                  <p className="contact-item-val">{siteConfig.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Phone size={17} />
                </div>
                <div>
                  <span className="contact-item-label">DIRECT EXPORT LINE</span>
                  <a href={`tel:${siteConfig.phoneHref}`} className="contact-item-val contact-link">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box">
                  <Mail size={17} />
                </div>
                <div>
                  <span className="contact-item-label">PROCUREMENT INQUIRIES</span>
                  <a href={`mailto:${siteConfig.email}`} className="contact-item-val contact-link">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="enquiry-subnote">
              <Sparkles size={14} className="subnote-icon" />
              <span>Quotes dispatched within 12 hours with complete CIF/FOB pricing.</span>
            </div>
          </div>

          {/* Right Column: Enterprise Form Container */}
          <div className="enquiry-form-col">
            <div className="enquiry-card">
              {submitted ? (
                <div className="enquiry-success-view">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Enquiry Received</h3>
                  <p>
                    Thank you for reaching out. The NIRVAECO technical export team at Nirvartaya
                    Industries LLP will review your requirements and respond within one business day.
                  </p>
                  <button
                    type="button"
                    className="button button-outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="approved-form" noValidate>
                  {/* Honeypot field */}
                  <input
                    className="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />

                  <div className="form-fields-grid">
                    <label className="field-group">
                      <span className="field-label">Full Name *</span>
                      <input
                        {...register("name")}
                        placeholder="e.g. David Miller"
                        className={`field-input ${errors.name ? "has-error" : ""}`}
                        autoComplete="name"
                      />
                      {errors.name && <small className="field-error">{errors.name.message}</small>}
                    </label>

                    <label className="field-group">
                      <span className="field-label">Corporate Email *</span>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="david@distribution.eu"
                        className={`field-input ${errors.email ? "has-error" : ""}`}
                        autoComplete="email"
                      />
                      {errors.email && (
                        <small className="field-error">{errors.email.message}</small>
                      )}
                    </label>

                    <label className="field-group">
                      <span className="field-label">Company Name *</span>
                      <input
                        {...register("company")}
                        placeholder="e.g. Nordic Food Service BV"
                        className={`field-input ${errors.company ? "has-error" : ""}`}
                        autoComplete="organization"
                      />
                      {errors.company && (
                        <small className="field-error">{errors.company.message}</small>
                      )}
                    </label>

                    <label className="field-group">
                      <span className="field-label">Destination Port / Country *</span>
                      <input
                        {...register("country")}
                        placeholder="e.g. Rotterdam / Hamburg / Jebel Ali"
                        className={`field-input ${errors.country ? "has-error" : ""}`}
                        autoComplete="country-name"
                      />
                      {errors.country && (
                        <small className="field-error">{errors.country.message}</small>
                      )}
                    </label>

                    <label className="field-group">
                      <span className="field-label">Estimated Volume</span>
                      <select {...register("quantity")} className="field-input field-select">
                        <option value="">Select Programme Size</option>
                        <option value="Evaluation Sample Kit">Evaluation Sample Kit</option>
                        <option value="Trial Order (<50k units)">Trial Order (&lt;50k units)</option>
                        <option value="Wholesale (50k - 200k units)">Wholesale (50k – 200k units)</option>
                        <option value="Full Container Load (FCL)">Full Container Load (FCL)</option>
                        <option value="Annual Supply Contract">Annual Supply Contract</option>
                      </select>
                    </label>

                    <label className="field-group">
                      <span className="field-label">Product Interest</span>
                      <select {...register("productName")} className="field-input field-select">
                        <option value="All Bagasse SKUs">All Tableware SKUs</option>
                        <option value="3-Compartment Clamshells">3-Compartment Clamshells</option>
                        <option value="Plain Clamshells">Plain Clamshells</option>
                        <option value="Coffee Cup Lids">Coffee Cup Lids</option>
                        <option value="Cups & Lids Range">Cups & Lids Range</option>
                      </select>
                    </label>

                    <label className="field-group field-full">
                      <span className="field-label">Consignment Notes & Custom Requirements *</span>
                      <textarea
                        rows={4}
                        {...register("message")}
                        placeholder="Detail preferred SKUs, custom mold debossing, or pallet packing instructions..."
                        className={`field-input field-textarea ${errors.message ? "has-error" : ""}`}
                      />
                      {errors.message && (
                        <small className="field-error">{errors.message.message}</small>
                      )}
                    </label>
                  </div>

                  {serverError && (
                    <p className="form-server-error" role="alert">
                      {serverError}
                    </p>
                  )}

                  <button type="submit" disabled={isSubmitting} className="button button-submit">
                    {isSubmitting ? "Dispatching Request..." : "Submit Enterprise Request"}{" "}
                    <ArrowUpRight size={17} />
                  </button>

                  <p className="form-disclaimer">
                    Protected by strict B2B confidentiality. By submitting, you agree to our{" "}
                    <a href="/privacy-policy" className="disclaimer-link">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
