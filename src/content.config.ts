import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un archivo por local. El nombre del archivo es el ancla: /#jah-cafe
const locales = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locales' }),
  schema: z.object({
    nombre: z.string(),
    // Qué es, en dos o tres palabras: "Café de especialidad".
    categoria: z.string().optional(),
    // Una o dos líneas. La manda cada local.
    descripcion: z.string().optional(),
    // Ruta en public/: /fotos/locales/jah-cafe.jpg
    foto: z.string().optional(),
    numeroLocal: z.string().optional(),
    horario: z.string().optional(),
    instagram: z.string().optional(),
    // Formato 57XXXXXXXXXX
    whatsapp: z.string().optional(),
    web: z.string().url().optional(),
    orden: z.number().default(100),
    publicado: z.boolean().default(true),
  }),
});

export const collections = { locales };
