// Cloudflare Pages build script (advanced mode).
// Copies the single-file worker to dist/_worker.js per Cloudflare's
// Pages Functions advanced mode docs: https://developers.cloudflare.com/pages/functions/advanced-mode/
import { mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, '..', 'dist');
mkdirSync(dist, { recursive: true });
copyFileSync(join(root, '..', 'src', 'worker-vless.js'), join(dist, '_worker.js'));
writeFileSync(join(dist, 'index.html'),
  '<!doctype html><meta charset="utf-8"><title>edgetunnel</title><p>edgetunnel</p>');
console.log('built dist/_worker.js + dist/index.html');
