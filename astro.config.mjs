// @ts-check
import { defineConfig } from 'astro/config';

// Mientras no haya dominio, el sitio vive en sergiof2u.github.io/paseo-hygge/.
// Con dominio propio: site pasa a ser el dominio, base a '/', y se crea
// public/CNAME con el dominio. Las rutas internas usan ruta() de src/site.ts.
export default defineConfig({
  site: 'https://sergiof2u.github.io',
  base: '/paseo-hygge',
});
