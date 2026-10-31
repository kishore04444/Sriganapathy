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
- Owner-supplied gallery images: `data/gallery.json`
- Add a rate by setting `lastUpdated` and adding entries with `variety`, `grade` and `priceRange`.
- The variety list and FAQ data are in the language content files and must be kept structurally identical. The build checks English and Tamil keys.
- The form opens a pre-filled WhatsApp message; it does not store submissions.

## Photos

Homepage images are local WebP assets under `public/images/`. They are neutral Unsplash reference images, not photographs of Sri Ganapathy's farm, mundy or storage facility. Replace them with approved owner photographs when available. Add approved gallery entries to `data/gallery.json` with `src`, `width`, `height`, `alt` and optional `srcSet`; the gallery stays hidden while the list is empty.

Current neutral image credits:

- [Fresh banana bunches](https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e) — Unsplash image source `photo-1571771894821-ce9b6c11b08e`
- [Banana tree with a bunch of bananas](https://www.pexels.com/photo/28214207/) — Pexels image source `photo-28214207`
- [Market banana reference](https://images.unsplash.com/photo-1603833665858-e61d17a86224) — Unsplash image source `photo-1603833665858-e61d17a86224`
- [Bananas in a basket](https://www.pexels.com/photo/461208/) — Pexels image source `photo-461208`
- [Green bananas stacked for ripening reference](https://www.pexels.com/photo/34454659/) — Pexels image source `photo-34454659`
- [Hanging bananas at a market](https://www.pexels.com/photo/36204961/) — Pexels image source `photo-36204961`

The hot-ripening and cool-storage cards are also neutral reference imagery until the owner supplies facility photographs. The image preparation script downloads the source files and creates real WebP candidates at 480, 800 and 1200 pixels.

## Owner TODOs

- Confirm the auction opening time.
- Confirm whether a minimum quantity applies.
- Confirm payment terms.
- Add approved farm, mundy, hot-ripening and cold-storage photographs.
- Add approved gallery entries and meaningful bilingual alt text.
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
