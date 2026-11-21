# Bitácora SEO — Fases ejecutadas (serviciosapc.site)

Registro de "cómo lo encontré y cómo lo entrego", una entrada por fase.
Fuente del plan: `C:\Users\pc\.opencode\skills\seo\PLAN_SEO_SERVICIOSAPC.md` (30/08/2026).

---

## FASE 0 — Fundación técnica ✅ CERRADA (decisión: NO migrar a Astro)

### Cómo lo encontré
- El plan proponía migrar de React SPA + hash routing a Astro SSG porque "todas las rutas sirven el mismo index.html" y los canonicals apuntaban al home.
- Revisión en vivo (21/11/2026):
  - `GET /` → 200, canonical `https://serviciosapc.site/`, **0 enlaces `href="#/"`** en HTML → no hay hash routing.
  - `GET /sitemap.xml` → 200 con **56 URLs**.
  - `GET /robots.txt` → 200, `GET /llms.txt` → 200.
  - Posts blog individuales → 200 (ej. `/blog/cuanto-cuesta-camaras-seguridad-negocio-bogota-2026/`).
  - Landings clave → 200 (`/instalacion-camaras-seguridad-bogota/`, `/camaras-seguridad-empresas-bogota/`, `/precio-instalacion-camaras-bogota/`).
- Conclusión: el efecto que buscaba Astro (URLs limpias + meta/canonical único por ruta + blog crawlable) **ya está logrado** con HTML estático en `public/`/`docs/` sobre Vite/React.

### Cómo lo entrego
- **Decisión: no migrar a Astro.** Migrar sería un riesgo innecesario sobre un sitio en producción que ya cumple el objetivo de la Fase 0. Se documenta la desviación del plan para que el próximo agente no la reintente.
- Hallazgos derivados que se atienden en su fase correspondiente:
  - `/blog/` (hub) devuelve 404 → se corrige en **Fase 2** (arquitectura/enlazado).
  - `robots.txt` live tiene un bloque "Cloudflare Managed Content" que **prohíbe** GPTBot/ClaudeBot/Google-Extended, contradiciendo el `Allow: /` del archivo local (`public/robots.txt`, 607 B, sí los permite). Es inyección del edge, no del repo → se atiende en **Fase 4/9** (AI search readiness), requiere cambio en dashboard de Cloudflare.
- Sin cambios de código en esta fase. Sin deploy.

---

## FASE 1 — Keywords ✅ CERRADA (alcance: cluster cámaras)

### Cómo lo encontré
- Sitemap en vivo: 56 URLs. Cobertura por cluster:
  - **Cámaras** (2.400/mes): 21 URLs → bien cubierto.
  - Instalación / Hikvision / precio: 14 / 3 / 4 URLs → cubierto.
  - Automatización (procesos, whatsapp, n8n, CRM, dashboard): solo 1-2 posts de blog cada uno, sin landing propia.
  - Siigo, copiloto IA, soporte técnico, control de acceso, GPS flotas: **0 URLs**.
- Decisión previa del usuario: `camaras de seguridad en Bogotá` es la keyword con más tiempo de ranking; **home title/meta se dejan en automatización** ("deja así").

### Cómo lo entrego
- Mantengo la asignación acordada: home = captura amplia vía H1 de cámaras; títulos/meta = automatización.
- **Los clusters 2-4 quedan como backlog**, no como bloqueador: crear landings nuevas quedó explícitamente fuera de alcance en la sesión anterior. No se crean páginas nuevas.
- Sin cambios de código. Sin deploy.

---

## FASE 2 — Arquitectura y enlazado ✅ CERRADA (commit `c563d71`)

### Cómo lo encontré
- `/blog/` → **404** (27 posts existían, pero no había hub). No estaba como URL exacta en el sitemap (solo aparecía como prefijo de los posts).
- `mantenimiento-camaras/` → sin BreadcrumbList, sin breadcrumb visible y solo 2 enlaces internos (por debajo del mínimo de 3 del plan).
- 3 landings clave sí tenían breadcrumb + 3 enlaces internos; home y posts OK.

### Cómo lo entrego
- `public/blog/index.html` + `docs/blog/index.html`: hub con los **27 posts agrupados en 4 clústeres**, H1, breadcrumb, CollectionPage schema, CTA WhatsApp y mismo estilo visual que los posts.
- `sitemap.xml` (public + docs): agregada URL exacta `/blog/` → 57 URLs.
- `mantenimiento-camaras/` (public + docs): BreadcrumbList JSON-LD + breadcrumb visible + bloque "Contenido relacionado" con 4 enlaces internos → 5 enlaces totales.
- **Verificado en vivo** tras build `c563d71f`: `/blog/` 200 con 27 posts y canonical propio; breadcrumb schema y visible OK; 5 links internos; sitemap 57 URLs en origen.
- Nota transitoria: el edge de Cloudflare sirvió el sitemap viejo (56 URLs, `CF-Cache-Status: HIT`) durante unos minutos; con cache-bust dio 57. No requiere acción, se propaga al expirar el TTL.

---

## FASE 3 — On-page ✅ CERRADA (commit `ac90d86`)

### Cómo lo encontré
- Auditoría en vivo de 8 páginas: todas tenían title/canonical/OG:title, H1 único y 0 imágenes sin alt.
- Huecos: `twitter:card` ausente en 7 de 8 páginas; hub `/blog/` sin `og:image`; `/automatizacion-con-camaras/` sin FAQ ni enlaces internos; meta del home de 225 caracteres (recomendado ~155).
- Conteo de palabras (HTML estático): instalación 1.513 ✅, empresas 1.103, blog post 1.884, precio 662, mantenimiento 544, automatización 354 → 3 landings por debajo del objetivo de 1.500 del plan.

### Cómo lo entrego
- Twitter Card (`summary_large_image` + title/description/image) en las 7 páginas que faltaban, en `public/` y `docs/`.
- `og:image` agregado al hub `/blog/` (`blog-img/equipo-apc.webp`).
- `/automatizacion-con-camaras/`: FAQPage JSON-LD con 4 preguntas + FAQ visible + bloque "Contenido relacionado" con 3 enlaces internos (antes tenía 0).
- **Verificado en vivo** (`ac90d864`): 8/8 páginas con twitter=SI, OG:title/img=SI, canonical=SI, H1=1, 0 imgs sin alt.
- **Pendiente para Fase 7**: ampliar contenido de precio (662), mantenimiento (544) y automatización (514) a 1.500+ palabras.
- **No tocado**: meta del home (225 chars). El usuario pidió "deja así" el title/meta del home; cualquier recorte requiere su Confirmación explícita.

---

## FASE 4 — Schema markup ✅ CERRADA (commit `578507c`) — con un bloqueo externo

### Cómo lo encontré
- Tipos JSON-LD en vivo antes del fix:
  - Home: `LocalBusiness, ProfessionalService, Organization, FAQPage, VideoObject` (sin `WebSite`).
  - Landings cámaras: `LocalBusiness, ProfessionalService, Service, BreadcrumbList, FAQPage, VideoObject` ✅.
  - `/mantenimiento-camaras/`: `Service, FAQPage, BreadcrumbList` ✅.
  - `/automatizacion-con-camaras/`: **solo `FAQPage`** (sin Service ni BreadcrumbList).
  - Blog hub: `BreadcrumbList, CollectionPage`; post: `Article, BreadcrumbList`.
- `robots.txt` **en vivo** tiene un bloque inyectado por Cloudflare ("Managed Content") que hace `Disallow: /` a GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot, etc., **contradiciendo** el `Allow: /` del archivo local `public/robots.txt` (607 B). Esto anula la Quick Win #4 del plan (permitir crawlers IA).
- La ruta `/buscar?q=` del `SearchAction` del plan devuelve **404** → agregar ese schema sería inválido.

### Cómo lo entrego
- `WebSite` schema en home (`index.html`, `docs/index.html`, `dist/index.html`) **sin `SearchAction`**, porque no existe endpoint de búsqueda.
- `Service` + `BreadcrumbList` en `/automatizacion-con-camaras/` (`public/` + `docs/`).
- **Verificado en vivo** (`578507c9`): home ya tiene `WebSite`; automatización ya tiene `Service, BreadcrumbList`. Ningún JSON inválido detectado.
- **BLOQUEO EXTERNO para ti**: el bloqueo de crawlers IA se inyecta desde el dashboard de Cloudflare (Managed robots.txt). No se puede corregir desde el repo. Hay que desactivar esa opción en Cloudflare para que el `Allow: /` local tenga efecto.
- **Pendiente para Fase 7**: los posts de blog no tienen `FAQPage`. No se agregó schema sin FAQ visible, porque eso violaría las guías de datos estructurados de Google.

---
