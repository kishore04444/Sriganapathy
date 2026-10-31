# Sri Ganapathy Banana Trading & Distribution

A responsive, bilingual (English/Tamil) business website for Sri Ganapathy Banana Commission Mundy, Coimbatore.

## Run locally

Requires Node.js 22 or a current LTS release.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`, or test the production build locally with `npm run preview`.

## Included

- Responsive business website with procurement, auction, storage/ripening and distribution information
- English/Tamil language toggle with language persistence in `localStorage`
- Call and WhatsApp links using the supplied business number
- Enquiry form that opens a pre-filled WhatsApp message (no submissions are stored by this site)
- Address-based Google Maps directions
- SEO metadata, canonical URL, Open Graph/Twitter metadata, `robots.txt` and XML sitemap
- Lazy loading for below-the-fold images and high-priority loading for the hero image
- Security and immutable asset-cache headers in `vercel.json`

## Deploy to Vercel

This is a Vite static frontend. Import the repository into Vercel and use these settings (Vercel usually detects them automatically):

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

After deployment, check the production URL, WhatsApp enquiry flow, phone link, map directions and both language modes. If the domain changes, update the canonical URL, Open Graph URL, sitemap and `robots.txt` to match the new production domain.

## Image note

The current design references externally hosted image URLs. Keep the image providers and their applicable usage/licensing terms in mind. For the most reliable production setup, replace these URLs with approved business photographs stored under `public/images/`; do not use photographs of another facility as proof of your own storage or premises.
