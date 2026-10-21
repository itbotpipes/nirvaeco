export const siteConfig = {
  name: "NIRVAECO",
  legalName: "Nirvartaya Industries LLP",
  description: "Premium sugarcane bagasse tableware for global distributors and food-service buyers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nirvaeco.royalflame9.chatgpt.site",
  email: "info@nirvartayaind.com",
  phoneDisplay: "+91 92271 11761",
  phoneHref: "+919227111761",
  parentWebsite: "https://www.nirvartayaind.com",
  address: "Plot H-3124, No. 15, GIDC, Ankleshwar, Gujarat 393002, India",
  catalogue: "/documents/nirvaeco-product-catalogue.pdf",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export const productBenefits = [
  "Made from renewable sugarcane bagasse",
  "Plant-based and plastic-free",
  "Biodegradable and compostable",
  "Strong, lightweight and durable",
  "Resistant to oil and water",
  "Suitable for hot and cold foods",
  "Microwave and freezer friendly",
  "Food-grade and hygienic",
] as const;
