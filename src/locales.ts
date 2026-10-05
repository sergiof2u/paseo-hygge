import { getCollection, type CollectionEntry } from 'astro:content';
import { ruta } from './site';

export type Local = CollectionEntry<'locales'>;

// Locales publicados, en el orden del recorrido por el Paseo.
export const localesPublicados = async () =>
  (await getCollection('locales', ({ data }) => data.publicado)).sort(
    (a, b) => a.data.orden - b.data.orden || a.data.nombre.localeCompare(b.data.nombre, 'es'),
  );

// Un local tiene página propia cuando hay con qué llenarla: descripción y al
// menos dos fotos. Sin eso queda solo su tarjeta en la lista.
export const tienePagina = (local: Local) =>
  Boolean(local.data.descripcion) && (local.data.fotos?.length ?? 0) >= 2;

export const urlLocal = (local: Local) => ruta(`/locales/${local.id}/`);
