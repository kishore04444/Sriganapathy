import { readFile, writeFile } from 'node:fs/promises';
import { en } from '../src/content/en.js';

const file = 'dist/index.html';
let html = await readFile(file, 'utf8');
const faq = en.faq.filter(([, answer]) => answer.trim());
const staticMarkup = `<div class="static-home"><header><p>${en.heroKicker}</p><h1>${en.heroTitle}</h1><p>${en.heroText}</p></header><main><h2>${en.varietiesTitle}</h2><p>${en.varietiesText}</p><ul>${en.varieties.map(([name, use]) => `<li><h3>${name}</h3><p>${use}</p></li>`).join('')}</ul><h2>${en.journeyTitle}</h2><ol>${en.journey.map(([, title, text]) => `<li><strong>${title}</strong>: ${text}</li>`).join('')}</ol><h2>${en.faqTitle}</h2><dl>${faq.map(([question, answer]) => `<dt>${question}</dt><dd>${answer}</dd>`).join('')}</dl></main></div>`;
const faqSchema = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) })}</script>`;
html = html.replace('<div id="root"></div>', `<div id="root">${staticMarkup}</div>`);
html = html.replace('</head>', `${faqSchema}</head>`);
await writeFile(file, html);
