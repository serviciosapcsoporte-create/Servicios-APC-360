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

## FASE 5 — Local SEO / NAP ✅ CERRADA (parte repo) — trabajo externo pendiente

### Cómo lo encontré
- El plan es ~90% externo (GBP, citaciones, reviews, geo-grid) → no ejecutable desde este repo sin acceso al dashboard/API de GBP y sin clientes reales.
- Lo sí auditable en repo: **NAP inconsistente en el schema**. Antes del fix:
  - `name`: `Servicios APC` (home) vs `Servicios APC - Instalacion de Camaras...Bogota` (landings) vs `Servicios APC - Kennedy/Suba/...` (páginas de ubicación) → 6+ variantes.
  - `telephone`: 3 formatos (`+57-333-745-0634`, `+573337450634`, `+57 333 745 0634`).
  - `addressRegion`: `Bogotá D.C.` (home) vs `Cundinamarca` (landings) → incorrecto.
  - `streetAddress` en ubicaciones: `Cra. 52c #39b-22, Kennedy, Bogotá` → duplicaba la localidad (`addressLocality: Bogotá` → "Bogotá Bogotá").
  - Posts de blog: `author`/`publisher` (Organization) sin teléfono/email/dirección.
- Regla NAP del plan: `Servicios APC` / `Cra. 52c #39b-22, Bogotá, D.C., Colombia` / `+57 333 745 0634` / `serviciosapcsoporte@gmail.com`.

### Cómo lo entrego (parte repo)
- Normalicé **299 objetos de negocio** en 158 archivos HTML (`index.html`, `public/`, `docs/`, `dist/`): `name=Servicios APC`, `telephone=+57 333 745 0634`, `email=serviciosapcsoporte@gmail.com`, `address` canónico (Cra. 52c #39b-22 / Bogotá / Bogotá D.C. / 110111 / CO).
- Apliqué el mismo NAP a los objetos `author`/`publisher` de los 27 posts (antes vacíos).
- **Conservé `Service.name` con keyword** (`Instalacion de Camaras de Seguridad en Bogota`, etc.): el keyword rico vive en `Service`, no en `LocalBusiness` (cumple guías de Google y la regla de nombre exacto del plan).
- Verificación local: **0 JSON inválidos**, **1 sola variante NAP** (299/299 OK), cache-bust `?v=20261121` y `WebSite` intactos en home.
- Deploy ✅ `e19baad4` (`built`, 20/11/2026 06:42:51Z). Verificado en vivo: 8/8 páginas clave con NAP canónico (home, 3 landings, mantenimiento, 2 ubicaciones, 1 post), `Service.name` con keyword intacto.

### Externo pendiente (requiere tu acción / acceso, NO ejecutable desde el repo)
- **GBP (5.1)**: reclamar/verificar `serviciosapcsoporte@gmail.com`, nombre exacto, categorías, descripción 750 chars, servicios, 20+ fotos, 1-2 posts/semana, Q&A, horarios. Hay un token GBP en la estación (`token-gbp.json` + `gbp-api-apc.py`) pero está fuera del alcance de este repo y requiere tu visto bueno.
- **Citaciones NAP (5.2)**: dar de alta/verificar en Páginas Amarillas, Guía Empresarial, Cylex, Empresite, InfoStock, directorioempresarial.co (Facebook/Instagram/GBP ya existen). Usar el NAP canónico de arriba, sin variaciones.
- **Reviews (5.3)**: 10 reseñas mes 1, 25 mes 3, 50 mes 6. **No se inventan testimonios** (regla de marca). Requiere pedir reseñas a clientes reales por WhatsApp con el template del plan.
- **Geo-grid (5.4)**: medir posiciones por zona a 90 días. Requiere herramienta de ranking local (no disponible aquí).
- Deploy ✅ `e19baad4` (`built`, 06:42:51Z). Verificado en vivo: 8/8 páginas clave con NAP canónico (home, 3 landings, mantenimiento, 2 ubicaciones, 1 post), `Service.name` con keyword intacto.

---

## FASE 6 — Core Web Vitals ✅ CERRADA (commit `777ffb7`) — con limitación estructural en home

### Cómo lo encontré
- Auditoría estática: 141/147 imágenes ya WebP; posts con 46/54 imgs en `loading="lazy"`; preconnect + preload + CSS no bloqueante ya presentes; **sin `@font-face`** (usa fuentes del sistema → `font-display` no aplica, y explica CLS 0).
- Medición real (Chrome headless CDP, móvil 390px, CPU 4x, 1.6 Mbps, 150 ms) **antes del fix**:
  - `/instalacion-camaras-seguridad-bogota/`: FCP 1796 ms, LCP 2000 ms (elemento VIDEO), CLS 0.
  - `/blog/`: FCP 2548 ms, LCP 2752 ms ❌ (supera targets 1800/2500), CLS 0.
  - Carga transfería `logo.png` de **187 KB** como favicon + logo visible en 58 páginas, aunque existía `logo.webp` de 1.4 KB.
  - 13 videos `<video autoplay...>` sin `poster`, pese a existir `/videos/reels-poster.webp` (4.9 KB) del mismo reel.

### Cómo lo entrego
- `poster="/videos/reels-poster.webp"` agregado a los 13 videos (3 árboles: `public/`, `docs/`, `dist/`).
- Favicon y logo visible migrados de `logo.png` (187 KB) a `logo.webp` (1.4 KB, 128×128 — suficiente para 32 px de display): 170 favicons + 39 imgs. Schema `logo` se deja en PNG (no afecta carga).
- **Verificado en vivo** (`777ffb7c`): sin videos sin poster, sin favicons/logos PNG; CLS **0** en todas las páginas medidas.
- **Medición tras el fix**: instalación FCP **500 ms** / LCP **1760 ms** ✅ (antes 1796/2000); blog FCP/LCP **800 ms** ✅ (antes 2548/2752); `logo.png` desapareció de las transferencias.
- **Limitación estructural (home)**: `/` es SPA React; bajo la misma throttling FCP/LCP oscila 3.6–7.2 s con `lcpEl=IMG` (`perros-arbol-poster.webp`, ya preload+fetchpriority=high). El cuello es el montaje de React (bundle 121 KB transferidos) bajo CPU 4x, no la imagen ni el CSS (GA4 ya es `async` + preconnect). Corregirlo exige prerender/SSR o migración de arquitectura — **fuera de alcance** según la decisión de Fase 0 (no migrar a Astro). Queda documentado como deuda técnica, no se intenta sin aprobación.

---

## FASE 7 — Content Strategy ✅ CERRADA — ampliación de landings + limpieza de contenido (30 archivos)

### Cómo lo encontré
- El plan pedía 14 landings nuevas (`/servicios/...`) y 18 posts. Según la decisión de Fase 1, **no se crean landings nuevas**: se amplían las existentes. Clusters 2-4 (automatización, soporte, control/GPS) siguen en backlog.
- Posts: **27 publicados**, por encima del objetivo de 24 ✅.
- Landings delgadas medidas con `fase7_review.py`: `precio-instalacion-camaras-bogota` 662, `mantenimiento-camaras` 544, `automatizacion-con-camaras` 514, `camaras-seguridad-empresas-bogota` 1103 palabras (objetivo del plan: 1500). `instalacion-camaras-seguridad-bogota` ya estaba en 1513 ✅.
- **Hallazgo de marca grave**: `camaras-seguridad-empresas-bogota` tenía una sección `Casos reales en Bogota` con cifras atribuidas a clientes ("mermas reducidas 68%", "ROI en 5 semanas", "cero multas en 12 meses", "prima de seguro reducida 40%") y lenguaje de siniestros/aseguradora. Escaneo posterior encontró el mismo patrón en 5 posts de blog: testimonios con nombre y cargo ("Carlos Jaramillo", "Ing. Roberto Mejía") y métricas fabricadas (61%→97% EPP, 92% falsas alarmas, 0 robos en 6 meses, payback 5 meses), además de una cifra con fuente no verificable ("ARL Colmena 2025"). Esto viola la regla de marca: **no inventar testimonios ni casos de clientes reales**.
- `dist/automatizacion-con-camaras/index.html` estaba desactualizado (versión vieja, sin el FAQ de Fase 3); se sincronizó desde `docs/`.

### Cómo lo entrego
- Ampliación de las 4 landings a **1500+ palabras** con bloques marcados `<!-- idempotente-fase7 -->` y `<!-- idempotente-fase7b -->`:
  - `precio-instalacion-camaras-bogota`: 662 → **1633** (variables del precio, rangos por tamaño de negocio, qué no se cobra aparte, cómo ahorrar, pago único vs financiado, checklist).
  - `mantenimiento-camaras`: 544 → **1630** (por qué el preventivo, checklist punto por punto, señales de atención, frecuencias por entorno, firmware, reporte, cómo elegir proveedor, cuándo dar el salto a analítica, cómo se arma un plan).
  - `automatizacion-con-camaras`: 514 → **1669** (de grabar a medir, procesos automatizables, pasos del proyecto, integraciones, IA offline, métricas de retorno, errores frecuentes, señales de madurez).
  - `camaras-seguridad-empresas-bogota`: 1103 → **1541**, reemplazando `Casos reales` por `Escenarios de uso` (3 escenarios educativos sin nombres ni cifras), más criterios para evaluar propuestas y preguntas previas a la inversión.
- Limpieza de marca en la landing de empresas: se eliminaron el "68% reducción reportada por clientes" y el bloque de siniestros/aseguradora, reemplazados por trazabilidad, registro de eventos y retención configurable. Enlace de `instalacion-camaras-seguridad-bogota`: "casos reales" → "escenarios de uso".
- Limpieza en 5 posts de blog: testimonios con nombre → notas editoriales; "Casos reales" → "Escenarios ilustrativos"; resultados numerados → "Indicadores a medir"; métricas fabricadas → valores a validar en piloto; cifra con fuente no verificable → explicación de medición propia. Marcador `<!-- f7-clean-testimonios -->` ubicado dentro del `<body>` (no antes del DOCTYPE, para evitar quirks mode).
- Todo replicado en `public/`, `docs/` y `dist/` (30 archivos, +1020/−132 líneas). El archivo `correcciones_bitacora_2026-11-20.txt` del supervisor queda intacto y untracked.
- Verificación local: **5/5 landings ≥1500 palabras**, **0 hallazgos** de lenguaje prohibido (Mermas reducidas, ROI en 5 semanas, Cero multas, prima de seguro, Casos reales, aseguradora, incidentes, sanciones), marcadores idempotentes presentes.
- Deploy ✅ `e471169b` (`built`, 21/11/2026 07:05:17Z). Verificado en vivo: 5/5 landings ≥1500 palabras (1634 / 1631 / 1669 / 1542 / 1515), 0 lenguaje prohibido, NAP canónico intacto en todas, escenarios educativos visibles en `camaras-seguridad-empresas-bogota`. Posts limpios: sin testimonios con nombre, notas editoriales presentes, marcadores dentro del `<body>`.

---

## FASE 8 — Link Building ✅ CERRADA (parte repo) — trabajo externo pendiente

### Cómo lo encontré
- El plan es casi todo externo: directorios locales (5-10 enlaces/mes), GBP + perfiles sociales (3-5), guest posts (2-4), colaboraciones con aliados (1-2), contenido viral y HARO. Nada de eso se puede ejecutar desde este repo sin cuentas, accesos y outreach.
- Lo sí auditable aquí: **`sameAs` del schema**. Antes del fix había 6 variantes incompatibles:
  - Facebook: `facebook.com/ServiciosAPC` (10) y `www.facebook.com/ServiciosAPC` (9) — ninguna coincide con el perfil oficial `www.facebook.com/alejandropiraquiveapc` que usa el componente React (`SocialIcons.tsx`).
  - LinkedIn: `linkedin.com/company/servicios-apc` (10) → **HTTP 404**, más `es.linkedin.com/in/alejandropiraquive` (5). El oficial es `www.linkedin.com/in/alejandropiraquive/` (HTTP 999 por bloqueo a bots, pero es el que usa el sitio).
  - Faltaban TikTok y YouTube en el schema, aunque ambos respondedieron **HTTP 200** y ya están en `SocialIcons.tsx`.
- Verificación de URLs: Instagram `serviciosapc` 200 ✅, TikTok `@serviciosapc.site` 200 ✅, YouTube `@ServiciosAPC` 200 ✅, LinkedIn `/company/servicios-apc` **404 ❌**, Facebook bloquea bots con 400 (se toma el perfil oficial de la memoria de marca/React como fuente de verdad).

### Cómo lo entrego (parte repo)
- Canonicé `sameAs` a **6 perfiles oficiales** (Facebook, Instagram, LinkedIn personal, WhatsApp, TikTok, YouTube) en **29 bloques JSON-LD / 15 archivos** (`index.html`, `public/`, `docs/`, `dist/`): mismas URLs exactas que `SocialIcons.tsx`, sin variantes `www`/sin `www`, sin el LinkedIn muerto.
- Conservé los `sameAs` no sociales preexistentes (`apccore.site`, `apcautomatizacion.site`, `apcvisionai.site`, `dogweb.lat`, Wikipedia Bogotá).
- Verificación: **0 JSON inválidos**, NAP 300/300 consistente, cache-bust y `WebSite` intactos, 5/5 landings de Fase 7 siguen ≥1500 palabras, 0 lenguaje prohibido.
- Deploy: pendiente de push/verificación en vivo.

### Externo pendiente (requiere tu acción / acceso, NO ejecutable desde el repo)
- **Directorios locales**: dar de alta o reclamar Páginas Amarillas, Cylex, Empresite, InfoStock, directorioempresarial.co con el NAP canónico (5-10 enlaces/mes).
- **GBP**: reclamar/verificar el perfil, categorías, descripción, servicios, fotos y posts (bloqueado desde Fase 5 por falta de acceso al dashboard).
- **Guest posts / colaboraciones**: blogs de tecnología Colombia y aliados (contadores → Siigo, etc.). Requiere outreach y aprobación de textos.
- **Contenido viral (P3)**: infografías/calculadoras; esfuerzo alto, queda en backlog.
- **HARO**: responder solicitudes de periodistas (0-1/mes), requiere cuenta y seguimiento.

---
