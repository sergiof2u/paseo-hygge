// Datos del Paseo. Todo lo que se repite en varias partes del sitio vive acá.

export const site = {
  nombre: 'El Paseo Hygge',
  lema: 'Alegría & Bienestar',
  descripcion:
    'Un paseo de jardines, fuentes y locales pequeños en el centro de Subachoque, Cundinamarca, a 40 kilómetros de Bogotá. Café, chocolate, comida, oficios y bienestar en un mismo lugar.',

  direccion: 'Cl. 4 #4-58, Subachoque, Cundinamarca',
  mapa: 'https://share.google/C4EpS4eDRcIz4K9mY',
  mapaEmbed: 'https://www.google.com/maps?q=Calle+4+%234-58,+Subachoque,+Cundinamarca&output=embed',
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

export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : '';
export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;
export const facebookUrl = `https://www.facebook.com/${site.facebook}`;
