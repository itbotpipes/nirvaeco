# NIRVAECO website

Production-oriented Next.js/Vinext website for NIRVAECO, the sustainable food packaging brand of Nirvartaya Industries LLP.

## Included

- Responsive public website: home, about, product listing, product detail, resources, contact, privacy and terms
- Source-faithful initial product catalogue with exact known dimensions
- Firebase-backed public enquiries through a server-only endpoint
- Firebase Authentication and server session cookies for the CMS
- Product create/update/delete APIs and enquiry workflow management
- Signed Cloudinary product-image uploads
- Metadata, canonical URLs, Open Graph, XML sitemap, robots rules and structured data
- Firestore security rules, Zod validation, rate limiting and automated core tests

The public catalogue falls back to the brochure-derived seed data when Firebase is not configured. Enquiry submission and the CMS intentionally return configuration errors until real credentials are provided.

## Local setup

1. Copy `.env.example` to `.env.local` and fill in the values.
2. Install dependencies with `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by the development server.

## Firebase setup

1. Create a Firebase project and Web app.
2. Enable Email/Password in Firebase Authentication.
3. Create the initial administrator in Authentication.
4. Add the administrator email to `ADMIN_EMAILS` (comma-separated for multiple users).
5. Create a service account and add its project ID, client email and escaped private key to the server variables.
6. Create Firestore in production mode and deploy the included rules with `firebase deploy --only firestore:rules`.
7. Seed `products` only if CMS persistence is required. Until then, the public site uses `data/products.ts`. Seed operations should create missing records by stable ID and must not overwrite edited production documents.

All browser access to products and enquiries is denied for writes. The public enquiry form writes only through the validated server endpoint. Administrator APIs verify a revoked-aware Firebase session cookie and the email allowlist.

## Cloudinary setup

Create a Cloudinary product environment and add the cloud name, API key and API secret. The browser requests a short-lived signature from the protected admin endpoint, then uploads directly into `nirvaeco/products`. The API secret is never sent to the browser.

## Verification

```text
npm run typecheck
npm run lint
npm run test
npm run build
```

Live Firebase, Firestore and Cloudinary flows also require the real credentials from `.env.example` and an authorised admin account.

## Content safeguards

The brochure supplied several certification marks but no supporting certificates, so the public website does not claim those certifications. The unrelated coaching paragraph and unsupported statistics/testimonials were also excluded. Product dimensions are preserved exactly from the brochure; incomplete cup specifications remain explicitly on request.
