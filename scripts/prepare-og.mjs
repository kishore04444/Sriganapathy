import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const svg = await readFile('public/images/og-brand.svg');
await sharp(svg).png({ compressionLevel: 9 }).toFile('public/images/og-brand.png');
