import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "NIRVAECO | Sustainable Sugarcane Bagasse Tableware", template: "%s | NIRVAECO" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "NIRVAECO | Sustainable Sugarcane Bagasse Tableware",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "NIRVAECO",
    type: "website",
    images: [{ url: "/images/hero-bagasse-feast.jpg", width: 1200, height: 675, alt: "NIRVAECO bagasse clamshell packaging" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIRVAECO",
    description: siteConfig.description,
    images: ["/images/hero-bagasse-feast.jpg"],
  },
  icons: { icon: "/images/nirvaeco-logo.png" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  brand: { "@type": "Brand", name: "NIRVAECO" },
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot H-3124, No. 15, GIDC Industrial Estate",
    addressLocality: "Ankleshwar",
    addressRegion: "Gujarat",
    postalCode: "393002",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans bg-white text-[#1c241e] antialiased">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
