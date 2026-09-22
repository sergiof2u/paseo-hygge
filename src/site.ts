// Datos del Paseo. Todo lo que se repite en varias partes del sitio vive acá.

export const site = {
  nombre: 'El Paseo Hygge',
  lema: 'Alegría & Bienestar',
  descripcion:
    'Un paseo de jardines, fuentes y locales pequeños en el centro de Subachoque, Cundinamarca, a 40 kilómetros de Bogotá. Café, chocolate, comida, oficios y bienestar en un mismo lugar.',

  direccion: 'Cl. 4 #4-58, Subachoque, Cundinamarca',
  // Ficha de El Paseo Hygge en Google Maps (no la de SUMA).
  mapa: 'https://maps.google.com/?cid=3673235747683103509',
  mapaEmbed: 'https://maps.google.com/maps?q=El+Paseo+Hygge,+Subachoque&ll=4.930661,-74.1740683&z=17&output=embed',
  distancia: 'a 40 kilómetros de Bogotá',

  // Pendiente: lo confirman los dueños del Paseo.
  horario: '',

  instagram: 'paseohygge',
  facebook: 'paseohygge',
  // Pendiente: número de contacto del Paseo, en formato 57XXXXXXXXXX.
  whatsapp: '',

  // Publicidad. Con el ID vacío, el código de seguimiento no se carga.
  metaPixel: '',
  googleAnalytics: '',
} as const;

// Antepone la base del sitio a una ruta interna. Mientras el sitio viva en
// sergiof2u.github.io/paseo-hygge/ la base es /paseo-hygge; con dominio propio
// será /. Toda ruta interna pasa por aquí: una escrita a mano se rompe al cambiar.
export const ruta = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + p;

export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : '';
export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
export const facebookUrl = `https://www.facebook.com/${site.facebook}`;
