# Sri Ganapathy Banana Commission Mundy

Premium bilingual React/Vite website for Sri Ganapathy Banana Commission Mundy in New Siddhapudur, Coimbatore.

## Run locally

Requires Node.js 22 or a current LTS release.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content editing

- English homepage copy: `src/content/en.js`
- Tamil homepage copy: `src/content/ta.js`
- Today's rates board: `data/rates.json`
- Add a rate by setting `lastUpdated` and adding entries with `variety`, `grade` and `priceRange`.
- The variety list and FAQ data are in the language content files and must be kept structurally identical.
- The form opens a pre-filled WhatsApp message; it does not store submissions.

## Photos

The current homepage uses neutral externally hosted imagery and a clearly marked gallery placeholder. Replace these URLs in `src/main.jsx` with approved owner photographs when available. Do not present stock imagery as Sri Ganapathy's farm, mundy or storage facility. For production performance, add approved WebP or AVIF files under `public/images/`, then use local paths with explicit `width`, `height`, `loading` and `srcset` values.

## Owner TODOs

- Confirm the auction opening time.
- Confirm whether a minimum quantity applies.
- Confirm payment terms.
- Add approved farm, mundy, hot-ripening and cold-storage photographs.
- Update `data/rates.json` whenever the rates board should be published.
- Confirm business hours before adding them to structured data.
- Confirm any years-in-business statement before publishing it.

## Deployment

This is a Vite static frontend deployed to Vercel:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

If the domain changes, update the canonical URLs, Open Graph URLs, sitemap, robots.txt, llms.txt, JSON-LD and the Vercel project domain.

## Business facts

Sri Ganapathy Banana Commission Mundy
51–52, 8th Street Extension, Subbana Gounder Layout, New Siddhapudur, Coimbatore – 641012
Ragu and Muruganandham
+91 98424 66544
