import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Privacy Policy", robots: { index: true, follow: true } };
export default function PrivacyPolicy() { return <LegalPage title="Privacy policy" updated="13 October 2026" sections={[
  ["Information we collect", "When you submit an enquiry, we collect the information you provide, such as your name, company, contact details, country, product interest, estimated quantity and message."],
  ["How we use information", "We use enquiry information to respond to requests, understand business requirements, provide product or catalogue support, and maintain appropriate business records."],
  ["Storage and access", "Enquiry records are stored in systems configured by Nirvartaya Industries LLP. Access is limited to authorised administrators. We do not make customer enquiry records publicly available."],
  ["Retention", "Information is retained only for as long as reasonably needed for the business purpose, legal obligations and dispute resolution."],
  ["Your choices", "You may request access, correction or deletion of personal information by contacting info@nirvartayaind.com, subject to applicable legal requirements."],
  ["Updates", "This policy may be updated as the website and operating requirements evolve. The date above identifies the current version."],
]}/>; }
