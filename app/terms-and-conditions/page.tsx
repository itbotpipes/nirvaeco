import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Terms & Conditions" };
export default function TermsPage() { return <LegalPage title="Terms & conditions" updated="13 October 2026" sections={[
  ["Website information", "This website provides general information about NIRVAECO and its product range. Product availability, specifications and documentation should be confirmed directly before ordering or relying on the information for regulatory purposes."],
  ["Product claims", "Material and performance descriptions reflect the supplied company brochure. Disposal and composting outcomes depend on local infrastructure and conditions. No independent laboratory results or unsupported certification claims are presented."],
  ["Enquiries and orders", "Submitting an enquiry does not create a purchase agreement. Commercial terms, samples, specifications, quantities, lead times and delivery arrangements require written confirmation."],
  ["Intellectual property", "Website text, brand assets, product presentation and original design are owned by or licensed to Nirvartaya Industries LLP unless otherwise stated."],
  ["Liability", "To the extent permitted by law, the company is not responsible for decisions made solely from general website information without obtaining current product documentation and written confirmation."],
  ["Contact", "Questions about these terms may be sent to info@nirvartayaind.com."],
]}/>; }
