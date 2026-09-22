// @ts-check
import { defineConfig } from 'astro/config';

// Dominio propio: paseohygge.com (Namecheap, comprado el 2026-09-21).
// public/CNAME le dice a GitHub Pages cuál es el dominio. Las rutas internas
// usan ruta() de src/site.ts, así que cambiar base no rompe nada.
export default defineConfig({
  site: 'https://paseohygge.com',
  base: '/',
});
