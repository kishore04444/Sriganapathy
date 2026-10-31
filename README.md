# Sri Ganapathy Banana Trading & Distribution

A responsive, bilingual (English/Tamil) business website for Sri Ganapathy Banana Commission Mundy, Coimbatore.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with `npm run build`, or preview it with `npm run preview`.

## Included

- Responsive marketing site with procurement, auction, storage/ripening and distribution content
- English/Tamil toggle with language persistence in `localStorage`
- Call and WhatsApp links using the supplied business number
- Enquiry form that opens a pre-filled WhatsApp message with the submitted details
- Semantic sections, keyboard-accessible controls and responsive layout
- No invented business statistics, certifications, prices or testimonials

The enquiry form opens WhatsApp because no backend or CRM endpoint was supplied. The direct phone, WhatsApp and Google Maps links are ready for production use.

## Cloudflare Pages

The project includes [`wrangler.toml`](./wrangler.toml), [`public/_headers`](./public/_headers), and [`public/robots.txt`](./public/robots.txt).

For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`

The `_headers` file adds basic security headers and immutable caching for hashed assets. Add a canonical URL and absolute Open Graph URL in `index.html` when the final domain is known.
