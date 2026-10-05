// Datos del Paseo. Todo lo que se repite en varias partes del sitio vive acá.

export const site = {
  nombre: 'El Paseo Hygge',
  lema: 'Alegría & Bienestar',
  descripcion:
    'Paseo comercial y gastronómico en Subachoque, Cundinamarca, a 40 kilómetros de Bogotá, con jardines y fuentes. Café, chocolate, comida, oficios y bienestar en un mismo lugar.',

  direccion: 'Cl. 4 #4-58, Subachoque, Cundinamarca',
  // Ficha de El Paseo Hygge en Google Maps (no la de SUMA).
  mapa: 'https://maps.google.com/?cid=3673235747683103509',
  mapaEmbed: 'https://maps.google.com/maps?q=El+Paseo+Hygge,+Subachoque&ll=4.930661,-74.1740683&z=17&output=embed',
  distancia: 'a 40 kilómetros de Bogotá',

  horario: 'Todos los días, de 9:00 a. m. a 7:00 p. m.',

  instagram: 'paseohygge',
  facebook: 'paseohygge',
  email: 'paseohygge@gmail.com',
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

// Página donde está la lista completa de locales. Mientras la portada sea
// provisional, la lista vive en el borrador; cuando el borrador pase a ser la
// portada, esto cambia a '/'.
export const paginaLocales = '/borrador/';

export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : '';
export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
export const facebookUrl = `https://www.facebook.com/${site.facebook}`;
