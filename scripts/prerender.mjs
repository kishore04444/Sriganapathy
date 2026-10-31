import { readdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { en } from '../src/content/en.js';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'spa' });
try {
  const { App } = await vite.ssrLoadModule('/src/app.jsx');
  let template = await readFile('dist/index.html', 'utf8');
  const primaryFont = (await readdir('dist/assets')).find((file) => file.startsWith('dm-sans-latin-wght-normal-') && file.endsWith('.woff2'));
  if (primaryFont) template = template.replace('</head>', `<link rel="preload" href="/assets/${primaryFont}" as="font" type="font/woff2" crossorigin /></head>`);
  const markup = renderToStaticMarkup(React.createElement(App));
  const faq = en.faq.filter(([, answer]) => answer.trim());
  const faqSchema = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) })}</script>`;
  await writeFile('dist/index.html', template.replace('</head>', `${faqSchema}</head>`).replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
} finally {
  await vite.close();
}
