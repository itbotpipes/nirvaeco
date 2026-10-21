import type { Product } from "@/types";

const sharedFeatures = [
  "Renewable sugarcane bagasse fiber",
  "Plastic-free, plant-based material",
  "Oil and water resistant",
  "Suitable for hot and cold foods",
  "Microwave and freezer friendly",
];

export const seedProducts: Product[] = [
  {
    id: "three-compartment-clamshell",
    slug: "three-compartment-clamshell-boxes",
    name: "Three-Compartment Clamshell Boxes",
    categoryId: "compartment-clamshells",
    categoryName: "Compartment Clamshells",
    shortDescription: "Hinged bagasse boxes with three defined sections for organised takeaway meals.",
    description: "A practical format for meal service where separation and presentation matter. The hinged construction supports straightforward packing, transport and service.",
    material: "Sugarcane bagasse",
    variants: [
      { id: "8x8-3c", name: "8 × 8 inch, 3 compartment", sizeLabel: "205 × 210 × 45 mm", lengthMm: 205, widthMm: 210, heightMm: 45 },
      { id: "9x9-3c", name: "9 × 9 inch, 3 compartment", sizeLabel: "230 × 230 × 50 mm", lengthMm: 230, widthMm: 230, heightMm: 50 },
    ],
    features: sharedFeatures,
    applications: ["Takeaway meals", "Catering", "Food delivery", "Commercial kitchens"],
    images: ["/images/three-comp-card.jpg", "/images/three-compartment-clamshell.png", "/images/clamshell-foodservice.png"],
    featuredImage: "/images/three-comp-card.jpg",
    featured: true,
    status: "published",
    sortOrder: 1,
    seoTitle: "Three-Compartment Bagasse Clamshell Boxes | NIRVAECO",
    seoDescription: "Explore 8 × 8 and 9 × 9 inch three-compartment sugarcane bagasse clamshell boxes for food-service buyers.",
  },
  {
    id: "plain-clamshell",
    slug: "plain-clamshell-boxes",
    name: "Plain Clamshell Boxes",
    categoryId: "plain-clamshells",
    categoryName: "Plain Clamshells",
    shortDescription: "Clean, versatile hinged containers for takeaway, delivery and everyday food service.",
    description: "A simple single-cavity clamshell designed for flexible menus. The neutral natural finish keeps attention on the food while supporting efficient service.",
    material: "Sugarcane bagasse",
    variants: [
      { id: "8x8-plain", name: "8 × 8 inch plain", sizeLabel: "205 × 210 × 45 mm", lengthMm: 205, widthMm: 210, heightMm: 45 },
      { id: "9x9-plain", name: "9 × 9 inch plain", sizeLabel: "230 × 230 × 45 mm", lengthMm: 230, widthMm: 230, heightMm: 45 },
      { id: "9x6-plain", name: "9 × 6 inch plain", sizeLabel: "155 × 230 × 45 mm", lengthMm: 155, widthMm: 230, heightMm: 45 },
    ],
    features: sharedFeatures,
    applications: ["Restaurants", "Quick-service dining", "Food delivery", "Retail food counters"],
    images: ["/images/plain-clamshell-card.jpg", "/images/plain-clamshell-open.png", "/images/plain-clamshell-closed.png", "/images/clamshell-lifestyle.png"],
    featuredImage: "/images/plain-clamshell-card.jpg",
    featured: true,
    status: "published",
    sortOrder: 2,
    seoTitle: "Plain Sugarcane Bagasse Clamshell Boxes | NIRVAECO",
    seoDescription: "Browse 8 × 8, 9 × 9 and 9 × 6 inch plain bagasse clamshell containers for takeaway and food delivery.",
  },
  {
    id: "coffee-lids",
    slug: "coffee-cup-lids",
    name: "Coffee Cup Lids",
    categoryId: "coffee-lids",
    categoryName: "Coffee Lids",
    shortDescription: "Flat and sipper lid formats in 80 mm and 90 mm diameters.",
    description: "A focused lid range for on-the-go drink service. Available source specifications cover flat and sipper formats at two diameters; matching cup specifications should be confirmed during enquiry.",
    material: "Sugarcane bagasse",
    variants: [
      { id: "90-flat", name: "90 mm flat lid", sizeLabel: "90 mm diameter", diameterMm: 90 },
      { id: "90-sipper", name: "90 mm sipper lid", sizeLabel: "90 mm diameter", diameterMm: 90 },
      { id: "80-flat", name: "80 mm flat lid", sizeLabel: "80 mm diameter", diameterMm: 80 },
      { id: "80-sipper", name: "80 mm sipper lid", sizeLabel: "80 mm diameter", diameterMm: 80 },
    ],
    features: ["Plant-based material", "Flat and sipper formats", "Lightweight", "Designed for takeaway drink service"],
    applications: ["Cafés", "Quick-service dining", "Catering", "Takeaway beverages"],
    images: ["/images/coffee-lid-card.jpg", "/images/sipper-lid.png"],
    featuredImage: "/images/coffee-lid-card.jpg",
    featured: true,
    status: "published",
    sortOrder: 3,
    seoTitle: "Bagasse Coffee Cup Lids | 80 mm & 90 mm | NIRVAECO",
    seoDescription: "Explore flat and sipper bagasse coffee lid formats in 80 mm and 90 mm diameters.",
  },
  {
    id: "cups-and-lids",
    slug: "cups-and-lids",
    name: "Cups & Lids",
    categoryId: "cups-and-lids",
    categoryName: "Cups & Lids",
    shortDescription: "A developing drinkware category for food-service and distribution programmes.",
    description: "The company brochure identifies cups and lids as a product category but does not provide complete cup specifications. Contact the team for current availability, compatibility and specification documentation.",
    material: "Specification available on request",
    variants: [],
    features: ["Food-service focused", "Takeaway applications", "Specification-led sourcing"],
    applications: ["Cafés", "Hospitality", "Food-service distribution"],
    images: ["/images/sipper-lid.png"],
    featuredImage: "/images/sipper-lid.png",
    featured: false,
    status: "published",
    sortOrder: 4,
    seoTitle: "Cups & Lids for Food Service | NIRVAECO",
    seoDescription: "Discuss current cup and lid availability with NIRVAECO's food-service packaging team.",
  },
];

export const categories = [
  { id: "all", label: "All products" },
  { id: "compartment-clamshells", label: "Compartment" },
  { id: "plain-clamshells", label: "Plain clamshells" },
  { id: "coffee-lids", label: "Coffee lids" },
  { id: "cups-and-lids", label: "Cups & lids" },
] as const;

export function getProductBySlug(slug: string) {
  return seedProducts.find((product) => product.slug === slug);
}

export function filterProducts(products: Product[], category: string, query = "") {
  const term = query.trim().toLowerCase();
  return products.filter((product) => {
    const categoryMatches = category === "all" || product.categoryId === category;
    const queryMatches = !term || `${product.name} ${product.categoryName} ${product.shortDescription}`.toLowerCase().includes(term);
    return categoryMatches && queryMatches;
  });
}
