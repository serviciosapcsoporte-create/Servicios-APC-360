/* ─── WhatsApp canónico ────────────────────────────────────────
   Fuente única de verdad para los enlaces de WhatsApp.
   Los CTAs con el MISMO nombre accesible deben compartir el MISMO
   href: si cambia el mensaje, cambia aquí y no en cada componente.
   ───────────────────────────────────────────────────────────── */

export const WHATSAPP = "https://wa.me/573337450634";

export const waLink = (msg: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/** Destino canónico de todos los CTAs «Cotizar por WhatsApp». */
export const WA_HERO = waLink(
  "Hola Servicios APC, quiero cotizar la instalación de cámaras de seguridad para mi negocio en Bogotá"
);
