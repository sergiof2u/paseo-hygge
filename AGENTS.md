# El Paseo Hygge — sitio web

Página informativa del Paseo Hygge, en Subachoque, Cundinamarca. La encargan los
dueños del Paseo. Sirve de soporte a las redes, que hoy son solo Instagram
(@paseohygge), y de destino para publicidad pagada. Lo principal es darle
solidez al Paseo como lugar, con una referencia corta de cada local.

Estático, hecho con Astro, con la misma base del sitio de SUMA
(`C:\Users\USUARIO\suma-web`). Todavía no tiene dominio ni repositorio.

Estas instrucciones aplican a cualquier IA que trabaje en este repositorio.

## Contenido

- `src/site.ts`: datos del Paseo (dirección, horario, redes, WhatsApp) y los IDs
  de publicidad. Lo que se repite vive ahí y en ningún otro lugar.
- `src/content/locales/<slug>.md`: un archivo por local. El nombre del archivo es
  el ancla de su ficha: `/#jah-cafe`. Sirve para enlazar un local desde un anuncio.
  Los campos están en `src/content.config.ts`. Un local sin `descripcion` sale con
  «Ficha por completar».
- `publicado: false` oculta un local sin borrar su archivo.

Agregar un local es crear un archivo. No hay que editar la página.

La plantilla que se les manda a los locales para pedir sus datos está en
`F:\OneDrive\9 WEB HYGGE\PLANTILLA PARA LOCALES.txt`.

## Publicidad

`metaPixel` y `googleAnalytics` en `src/site.ts`. Con el ID vacío, el código de
seguimiento no se carga. La imagen para compartir es `public/compartir.jpg`
(1200 × 630).

## Imágenes

En `public/fotos/`, reducidas antes de guardarlas: lado largo de 1600 px (2400
para la portada), JPEG de calidad 80, progresivo. Las fotos de los locales van en
`public/fotos/locales/<slug>.jpg`. Los originales viven fuera del repositorio, en
`F:\OneDrive\9 WEB HYGGE\`.

## Identidad

Colores del logo, como tokens en `src/styles/global.css`: vino `#3B0412`, rojo
`#9A342A`, verde `#9FA969`, amarillo `#F2CF69`. Tipografías: Fraunces para
títulos y Karla para texto, las dos de Google Fonts. En el CSS se usan los tokens
`--serif` y `--sans`, nunca el nombre de la fuente.

## Redacción

- Tuteo, nunca voseo.
- Nada de superlativos de turismo («experiencia inolvidable», «lugar mágico»).
- Nunca la construcción «no es X, sino Y».
- No inventar datos de un local: si no lo mandó, queda por completar.

## Comandos

- `npm run dev`: servidor local en localhost:4321
- `npm run build`: compila a `dist/`
