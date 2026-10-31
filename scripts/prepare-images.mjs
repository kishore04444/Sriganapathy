import { mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const output = path.join(root, 'public', 'images');
const sources = {
  'hero-banana': 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=1600&q=88',
  'plantation-banana': 'https://images.pexels.com/photos/28214207/pexels-photo-28214207.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'farmer-market': 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=1600&q=88',
  'buyer-bunches': 'https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'hot-ripening': 'https://images.pexels.com/photos/34454659/pexels-photo-34454659.jpeg?auto=compress&cs=tinysrgb&w=1600',
  'cold-storage': 'https://images.pexels.com/photos/36204961/pexels-photo-36204961.jpeg?auto=compress&cs=tinysrgb&w=1600',
};
const widths = [480, 800, 1200];

if (!process.argv.includes('--download')) {
  console.log('Image generation requires --download and is intentionally separate from npm run build.');
  process.exit(0);
}

await mkdir(output, { recursive: true });
for (const [name, url] of Object.entries(sources)) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download ${name}: ${response.status}`);
  const source = Buffer.from(await response.arrayBuffer());
  for (const width of widths) {
    await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(output, `${name}-${width}.webp`));
  }
}
await rm(path.join(output, 'plantation.webp'), { force: true });
await rm(path.join(output, 'hero-banana.webp'), { force: true });
await rm(path.join(output, 'farmer-market.webp'), { force: true });
await rm(path.join(output, 'buyer-bunches.webp'), { force: true });
