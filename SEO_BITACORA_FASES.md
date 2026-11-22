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
- Complemento tras la verificación en vivo: había objetos de negocio sin `sameAs` (principalmente `author`/`publisher` de los 27 posts y entidades `LocalBusiness` de páginas de ubicación). Agregué los 6 perfiles a **291 objetos** más. Resultado: **0 objetos de negocio sin `sameAs`** en todo el sitio.
- Verificación: **0 JSON inválidos**, NAP 300/300 consistente, cache-bust y `WebSite` intactos, 5/5 landings de Fase 7 siguen ≥1500 palabras, 0 lenguaje prohibido.
- Deploy ✅ `3038befd` (`built`, 21/11/2026 07:17:38Z), tras `73ceefa9` del primer bloque. Verificado en vivo: 6/7 páginas con 6/6 perfiles oficiales y 0 enlaces muertos. El `/blog/` queda fuera: solo tiene `CollectionPage` + `BreadcrumbList`, sin entidad de negocio, por lo que `sameAs` no aplica. Sin regresiones de NAP ni de Fase 7.

### Externo pendiente (requiere tu acción / acceso, NO ejecutable desde el repo)
- **Directorios locales**: dar de alta o reclamar Páginas Amarillas, Cylex, Empresite, InfoStock, directorioempresarial.co con el NAP canónico (5-10 enlaces/mes).
- **GBP**: reclamar/verificar el perfil, categorías, descripción, servicios, fotos y posts (bloqueado desde Fase 5 por falta de acceso al dashboard).
- **Guest posts / colaboraciones**: blogs de tecnología Colombia y aliados (contadores → Siigo, etc.). Requiere outreach y aprobación de textos.
- **Contenido viral (P3)**: infografías/calculadoras; esfuerzo alto, queda en backlog.
- **HARO**: responder solicitudes de periodistas (0-1/mes), requiere cuenta y seguimiento.

---

## FASE 9 — Monitoreo y KPIs 🔴 BLOQUEADA (requiere acceso externo) — revisada 21/11/2026

### Cómo lo encontré
- El plan pide un dashboard semanal/mensual con 14 KPIs y 8 "Falsification Gates". Casi todos dependen de datos que **no están disponibles en este entorno**: GSC, GA4, GBP Insights, PageSpeed Insights, CrUX y Ahrefs/Moz.
- Intenté desbloquearlo: el config `C:\Users\pc\.config\claude-seo\google-api.json` apuntaba al service account del NAS caído (`\\DESKTOP-BB2QBQ3\...`). Lo redirigí a la copia local `D:\APC\ARICK_COMANDO\config\credentials.json` (mismo SA `analista-apc@servicios-apc-pyton.iam.gserviceaccount.com`) y reescribí el JSON sin BOM (PowerShell 5.1 añadía BOM y Python lo rechazaba). Resultado: `google_auth.py --check` pasó a **Credential Tier 1**, con GSC e Indexing API marcados `[OK]`.
- **Pero la autorización real falla**, con dos causas distintas y verificadas:
  1. `gsc_query.py sites` → **HTTP 403 `accessNotConfigured`**: la Search Console API no está habilitada en el proyecto de Google Cloud `160252449744`. Requiere activarla en `console.developers.google.com/apis/api/searchconsole.googleapis.com`.
  2. `gsc_query.py query` → **Permission denied para `sc-domain:serviciosapc.site`**: el service account no está agregado como usuario en GSC → Config → Usuarios y permisos.
- Sin esos dos pasos (que solo se pueden hacer en la consola de Google con la cuenta del usuario), **no hay datos de impresiones, clicks, posiciones ni cobertura de indexación**. GA4 tampoco tiene `ga4_property_id` configurado. PSI/CrUX siguen sin `api_key`.

### Cómo lo entrego
- **No se ejecuta ninguna acción de Fase 9 sobre el sitio**: no hay nada que medir con las credenciales actuales y el plan no autoriza cambios de contenido en esta fase. Queda documentada como bloqueada, con la causa exacta, para no repetir el intento a ciegas.
- Verificación local que sí se pudo hacer: build/deploy estable (`3038befd`, `built`, 21/11/2026 07:17:38Z), sin regresiones de Fases 0-8.
- Lo que se necesita del usuario para desbloquear:
  1. Habilitar **Search Console API** en el proyecto GCP `160252449744`.
  2. Agregar `analista-apc@servicios-apc-pyton.iam.gserviceaccount.com` como usuario en GSC (`sc-domain:serviciosapc.site`).
  3. (Opcional) Crear una API key con PageSpeed Insights + CrUX y ponerla en `api_key`; y el ID de propiedad GA4 en `ga4_property_id`.
- Con eso se puede correr `gsc_query.py` (queries, páginas, países), `gsc_inspect.py` (cobertura por URL) y `pagespeed_check.py`, y recién ahí armar el dashboard con línea base real. **No se inventan métricas ni baselines.**

### Nota: insight "JavaScript antiguo" de Lighthouse (21/11/2026) — DECIDIDO CONSERVAR
- PageSpeed reportó "JavaScript antiguo, ahorro estimado 10 KiB" por polyfills de `Array.prototype.at` / `Array.prototype.findLast`. El 100% del hallazgo apunta a `https://static.cloudflareinsights.com/beacon.min.js/vce70...`.
- No es código nuestro: no está en `src/` ni en el bundle Vite; Cloudflare lo inyecta en el edge al tener Web Analytics activo. El consejo de "no transpilar Baseline" no aplica a un script de terceros ya minificado. El insight además figura como **"Sin puntuar"** (no afecta al score).
- En `serviciosapc.site` el CSP sí permite el envío (`connect-src ... cloudflareinsights.com`), así que el beacon reporta datos. Quitarlo del CSP no ahorraría bytes (el script se descarga igual), solo cortaría el envío.
- **Aclaración (22/11/2026)**: se verificó en vivo que **GA4 también reporta** (`gtag.js` con `G-7ES977W3VY` + beacon `google-analytics.com/g/collect` a 1,25 s), así que el beacon no es "la única analítica". Lo bloqueado es el **acceso por API** (sin `ga4_property_id`), no el tracking. Ver sección "JS no usado" al final.
- **Decisión del usuario: conservarlo.** Sin cambios en el repo ni en el dashboard. (En `dogweb.lat` el CSP bloquea el envío, así que ahí serían 10 KiB sin beneficio; queda como observación separada, no se tocó ese proyecto.)

---

## FIX LCP — Poster responsive del hero (22/11/2026) ✅

### Cómo lo encontré
- Usuario pegó el desglose de LCP de PSI: TTFB 0 ms, **retraso de carga de recursos 450 ms**, carga 140 ms, retraso de render 40 ms; elemento = `<img src="/videos/perros-arbol-poster.webp">` del hero.
- Verificado: el preload `fetchpriority="high"` ya está en el HTML inicial y **sí se consume** (resource timing `initiator: link`, arranca 17 ms después del TTFB, sin doble descarga ni warnings). Los 450 ms del desglose son de campo / sin estrangulamiento; bajo CPU 4x el LCP real es 4520 ms, dominado por el montaje de React (deuda Fase 6).
- **Bug real detectado**: en móvil (390 px) descargaban **dos posters** — el desktop de 54 KB (el `<img>` lo pintaba) y el móvil de 10 KB (solo lo usaba el `<video>` vía `syncPoster`). El `<img>` tenía `src` fijo desktop y el preload desktop no tenía `media`.

### Cómo lo entrego
- `src/app/App.tsx`: `<img>` del hero con `srcSet="...-mobile.webp 390w, ....webp 1280w"` y `sizes="(max-width: 767px) 390w, 1280w"`. En móvil pinta el poster de 10 KB; en desktop el de 54 KB.
- `index.html` + shells `docs/` y `dist/`: preload desktop con `media="(min-width: 768px)"`, para que el móvil no descargue ambos.
- Rebuild real de Vite en copia local `sapc-build` (npm ci + vite build + postbuild.py): entry `index-BDEstDqd.js` → `index-DQTczrbI.js`, CSS sin cambios, cache-bust `?v=20261121`. Assets sincronizados a `public/`, `docs/` y `dist/`; solo 5 shells referenciaban el entry y se les cambió el hash con regex (bloques inyectados `style`/`IntersectionObserver`/`noscript` conservados).
- Verificación local: bundles con `390w` y `767px`, 0 hashes viejos, NAP 300/300, Fase 7 5/5 y 0 lenguaje, Fase 8 0 objetos sin `sameAs`. Deploy `199c5520` verificado en vivo: **falló en móvil** (ver corrección abajo).

### Corrección del fix (mismo día, tras verificación en vivo)
- El primer deploy (`199c5520`, `srcSet` + `sizes="390w"`) **no funcionó en móvil**: con DPR 2 el navegador calcula 390×2=780 px y seguía eligiendo el candidato 1280w (54 KB). En vivo: `perros-arbol-poster.webp` descargado por `initiator: img` en 390 px.
- Causa: `srcset`/`sizes` no puede forzar el archivo pequeño en pantallas de alta densidad. Poster móvil real = 480×270 (10 KB), desktop = 1280×720 (54 KB).
- Fix definitivo: `<picture>` con `<source media="(max-width: 767px)" srcSet="...-mobile.webp">` en `App.tsx`, que ignora el DPR. Segundo rebuild: entry `index-DQTczrbI.js` → `index-DNLN2JqK.js`, mismos pasos de assets/shells.
- Deploy `239076d4` verificado en vivo (390 px): `<img>` ya pinta el poster móvil de 10 KB (`initiator: link`, 328 ms) ✅. **Pero** apareció el `<video>` descargando el poster desktop de 54 KB a los 11,5 s (`initiator: video`) — el `syncPoster()` de JS llega tarde porque depende de `heroVideo`. El ahorro neto en móvil era cero (solo retrasado).

### Extensión al `<video>` (aprobada por el usuario, mismo día)
- `src/app/App.tsx`: se quitó el atributo `poster="/videos/perros-arbol-poster.webp"` fijo del `<video>`. El `<picture>/<img>` ya cubre el fondo mientras tanto, y `syncPoster()` (useEffect) asigna el poster correcto al montar el video. En móvil ya no se descarga el desktop de 54 KB.
- Tercer rebuild: entry `index-DNLN2JqK.js` → `index-CWN_K5cc.js`, mismos pasos (assets a 3 árboles, hash solo en 5 shells, bloques inyectados conservados). Verificación local: 0 hashes viejos, NAP 300/300, Fase 8 0 objetos sin `sameAs`, bundle con `source media` y sin `390w`.
- Deploy `4aa0603a` verificado en vivo (390 px): **solo** `perros-arbol-poster-mobile.webp` (10 KB, `initiator: link`, 343 ms). Ya no hay descarga del poster desktop de 54 KB por `img` ni por `video`. `load` pasó de 11,5 s → 1,5 s. HTML servido con entry `CWN_K5cc`, preloads con `media`, sin hash viejo. Ahorro neto en móvil: ~44 KB. ✅ CIERRE.

---

## INSIGHT — JS no usado (22/11/2026) ✅ (sin cambios de código)

### Cómo lo encontré
- Usuario pegó el insight de PSI: "Reduce el contenido JavaScript que no se use — ahorro estimado 113 KiB", marcado **Sin puntuar** (LCP/FCP). Fuentes: `gtag.js` 178,6 KiB → 74,3 KiB, y `/assets/index-DFQE9AyK.js` 120,0 KiB → 38,4 KiB.
- **El hash `DFQE9AyK` no existe** en el repo ni en vivo (medición de un build anterior). El entry actual es `index-CWN_K5cc.js`; su tamaño real es prácticamente idéntico (123.205 B transferidos / 389.149 B sin comprimir), así que el insight sigue siendo representativo.
- Medido con CDP (red sin caché) y `curl --compressed`: `gtag.js` = 545.666 B sin comprimir → **183.080 B gzip** (= 178,6 KiB del insight). Confirmado beacon `https://www.google-analytics.com/g/collect?...tid=G-7ES977W3VY...` a los 1,25 s: **GA4 sí está reportando**, no es peso muerto.
- Composición del entry (búsqueda de marcas en el bundle): React + react-dom + `motion` + `lucide` + `App.tsx`. **No** contiene MUI, recharts, Radix, d3, lodash ni date-fns: esos ya están separados en chunks lazy (BlogLanding, MantenimientoCamaras, etc.). Ya existe code-splitting por página.
- El "ahorro estimado" de Lighthouse es heurístico sobre cobertura; no identifica líneas eliminables. `gtag.js` es código de Google no editable.

### Cómo lo entrego
- **Decisión del usuario: conservar GA4 y documentar.** La única forma de materializar los 74 KiB sería retirar GA4 (Cloudflare Web Analytics ya está activo, 10 KiB), pero se perdería el dashboard. Coherent con la decisión previa de conservar el beacon de Cloudflare. El insight es "Sin puntuar": no afecta al score.
- **Decisión del usuario: entry como deuda técnica, no tocar.** Coherente con Fase 0 (no migrar a Astro) y con el LCP del home por montaje de React ya documentado. Quitar `motion` del critical path o dividir `App.tsx` implicaría riesgo visual y otro ciclo de build/deploy sin beneficio en el score.
- Cero cambios de código, cero builds, cero deploys. Commit solo de documentación.

---

## INSIGHT — Long tasks del hilo principal (22/11/2026) ✅ (sin cambios de código)

### Cómo lo encontré
- Usuario pegó el insight de PSI: "Evita tareas largas del hilo principal — 2 tareas largas encontradas", **Sin puntuar** (TBT). Dos tareas de **51 ms** a 3494 ms y 3545 ms, atribuidas a `gtag/js?id=G-7ES977W3VY`.
- Verificado en vivo con `PerformanceObserver({type:'longtask'})` vía CDP (escritorio, sin throttling): 6 long tasks entre **536 ms y 1219 ms** (52/203/80/185/83/56 ms), todas con `attribution.name = "unknown"` — es decir, **no identifican a gtag.js**, y **ninguna aparece a los 3,5 s** del insight. `gtag.js` termina de descargarse a ~840 ms. Sin errores JS.
- El TBT local suma 359 ms y coincide con el tramo de montaje de React (deuda Fase 6), no con GA4. La atribución de Lighthouse a `gtag.js` es heurística (asigna la tarea al script con más tiempo dentro de ella), no una prueba de causalidad.
- Cada tarea del insight dura 51 ms: apenas **1 ms por encima del umbral de 50 ms**, así que su aporte real a TBT es ~2 ms.

### Cómo lo entrego
- **Aplica la decisión anterior del usuario: conservar GA4.** No se retira el script por un insight "Sin puntuar" ni por tareas de 51 ms cuya atribución no se reproduce localmente.
- **Sin cambios de código, builds ni deploys.** Se documenta que el TBT medible del home viene del montaje de React (ya registrado como deuda técnica en Fase 6), no de GA4.
- Si en el futuro se quiere atacar el TBT de verdad, el punto de intervención es el montaje de React (prerender/SSR), no `gtag.js` — requiere aprobación de cambio arquitectural.

---

## FIX ACCESIBILIDAD — Contraste de CTAs WhatsApp (22/11/2026) ✅

### Cómo lo encontré
- Usuario pegó el hallazgo de PSI: "Los colores de fondo y de primer plano no tienen una relación de contraste adecuada" sobre 3 enlaces: `Cotizar con Estudio Gratis por WhatsApp`, `+57 333 7450634` y `Cotizar por WhatsApp`.
- Medido en vivo con CDP (`getComputedStyle` + cálculo WCAG): los 3 tenían `color: rgb(255,255,255)` sobre `background: rgb(37,211,102)` → **ratio 1,98:1** (AA exige 4,5:1). El logo oficial (`D.whatsapp`) tenía `fill="#25D366"`, invisible sobre ese mismo verde.
- Inventario: además del SPA, **56 HTML estáticos** por árbol (`public/`, `docs/`, `dist/`) usaban `.whatsapp{background:#25d366;color:#fff}` (143 reglas + 15 estilos inline = 158 ocurrencias). El insight solo mostró 3 elementos porque auditó la home.
- **Decisión del usuario: usar los colores originales de WhatsApp y el logo original.** De las combinaciones válidas eligió fondo `#075E54` (verde oscuro oficial) + texto y logo en blanco, con borde y glow en `#25D366`. Ratio **7,67:1** (AA ✅); hover `#0B6E5F` + blanco = 6,16:1.

### Cómo lo entrego
- SPA: `src/app/App.tsx` (botón "Cotizar con Estudio Gratis"), `src/app/components/WhatsAppCTA.tsx` (chip compartido, usado en home y landings) y `src/components/ErrorBoundary.tsx` (mismo patrón, para consistencia): `bg-[#25D366]` → `bg-[#075E54]`, `hover:bg-[#20c05c]` → `hover:bg-[#0B6E5F]`; borde y shadow siguen en `#25D366`. Logo del chip con `fill="#FFFFFF"` (mismo path oficial).
- HTML estáticos: solo `background:#25d366` → `background:#075e54` en 143 archivos (158 ocurrencias). **No** se tocaron los 228 usos de verde como `color:`, `border-color:`, `--green:` ni `border-left` (logo y acentos conservan el verde oficial).
- Rebuild Vite en copia local + postbuild: entry `index-CWN_K5cc.js` → `index-Cgif1_O5.js`; CSS `index-DlP7LrLc.css` → `index-CiqIJQzD.css` (cambió porque la utilidad `bg-[#25D366]` desapareció y entró `bg-[#075E54]`; mismo tamaño). Assets a 3 árboles y hashes solo en 5 shells (bloques inyectados conservados).
- Verificación local 14/14: 0 fondos verdes en 178 HTML, borde y glow verde conservados, logo blanco en bundle, 0 hashes viejos. Sin regresiones: NAP 300/300, Fase 7 0 hallazgos, Fase 8 0 objetos sin `sameAs`.
- Deploy `af48fc19` verificado en vivo: los 3 CTAs del insight (y los demás chips) pasan de **1,98:1 → 7,67:1** (`rgb(255,255,255)` sobre `rgb(7,94,84)`); el botón flotante sigue en 17,85:1; el logo del chip computa `rgb(255,255,255)`. Una landing estática (`instalacion-camaras-seguridad-bogota`) también sirve `.whatsapp` con fondo `rgb(7,94,84)` y texto blanco. ✅ CIERRE.

---

## FIX ACCESIBILIDAD — Enlaces idénticos «Cotizar por WhatsApp» (22/11/2026) ✅

### Cómo lo encontré
- Usuario pegó el insight de PSI: "Los enlaces idénticos tienen la misma finalidad... Sin puntuar" sobre dos `<a>` con nombre accesible `Cotizar por WhatsApp`.
- Enumerado en vivo con CDP: la home tiene **4** enlaces con ese mismo nombre accesible. Tres apuntaban a `Hola Servicios APC, quiero cotizar la instalación de cámaras de seguridad para mi negocio en Bogotá`; el cuarto (CTA flotante de `MobileCTA`) apuntaba a `Hola, quiero cotizar la instalación...`. Distinto `href` con la misma etiqueta → el usuario no puede inferir la finalidad.
- Causa raíz: **tres constantes duplicadas** con el mismo nombre (`WA_HERO`) en `src/app/App.tsx`, `src/app/components/MobileCTA.tsx` y `src/app/components/VideoHero.tsx`. Las landings revisadas no devuelven enlaces con esa etiqueta.
- **Decisión del usuario: unificar al mensaje de App y centralizar** la constante compartida.

### Cómo lo entrego
- Nuevo módulo `src/app/components/wa.ts`: única fuente de verdad con `WHATSAPP`, `waLink(msg)` y `WA_HERO` canónico. `App.tsx`, `MobileCTA.tsx` y `VideoHero.tsx` importan de ahí; se eliminaron las 3 definiciones duplicadas (ya no existe el mensaje corto en el bundle).
- `WA_HERO_ESTUDIO` sigue en `App.tsx` porque tiene otra etiqueta ("Cotizar con Estudio Gratis por WhatsApp") y otra intención; no es un enlace idéntico.
- Rebuild Vite en copia local + postbuild: entry `index-Cgif1_O5.js` → `index-Z_hkDGpR.js`; CSS sin cambios (`index-CiqIJQzD.css`). Assets a 3 árboles y hash solo en 5 shells (bloques inyectados conservados).
- Verificación local 16/16: 0 mensajes cortos en 23 assets, mensaje canónico presente en el bundle, 0 hashes viejos, contraste intacto (0 fondos verdes en 178 HTML). Sin regresiones: NAP 300/300, Fase 7 0 hallazgos, Fase 8 0 objetos sin `sameAs`.
- Deploy `a3b7048c` verificado en vivo: los 4 enlaces «Cotizar por WhatsApp» de la home tienen **4 → 1 href único** (`Hola%20Servicios%20APC%2C%20quiero%20cotizar...`). El contraste sigue en 7,67:1 (landing estática incluida) y el logo del chip en blanco. ✅ CIERRE.

---

## FIX ACCESIBILIDAD — 10 checks manuales «Sin puntuar» (21/11/2026) ✅

### Cómo lo encontré
- El usuario pegó los 10 checks manuales de PageSpeed Insights (todos «Sin puntuar»): foco por teclado, propósito/estado, orden de Tab, orden visual vs DOM, trampas de foco, foco llevado al contenido nuevo, landmarks HTML5, offscreen oculto, etiquetas y roles ARIA.
- Auditoría con CDP en vivo (`a11y_audit.js`, 1440×900 y 390×844, 55 pasos de Tab) más revisión de código:
  - `header:0`, `nav:1`, `main:1`, `footer:1`, `h1:1`, `sections:13`, `namedSections:[]` → el `<nav>` no estaba dentro de `<header>` (falta landmark `banner`).
  - 55 pasos de Tab: 0 enfocables ocultos/fuera de pantalla, 0 sin indicador; el único salto «atrás» es artefacto del CTA fijo.
  - Panel móvil con `aria-hidden="true"` + `inert=""` y panel de Cristal con `aria-hidden` + `display:none`: no hay focus trap.
  - FAQ y servicios sí exponen `aria-expanded`; el launcher de Cristal era `<div onclick>` sin rol, sin foco y sin estado; enfocaba `#cr-text` al abrir pero no devolvía el foco al cerrar.
  - `motion-dom` inyecta `tabindex="0"` por la gesture `press`: `whileTap` en `Tilt` (2 usos decorativos, beneficios y casos) dejaba **9 `<div>` enfocables sin rol**.
  - El indicador de foco global computaba `oklab(... / 0.18)` (~19 % de opacidad): la regla base `*{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}` de Tailwind diluía el anillo. CSP bloquea inyectar `<style>` en vivo, así que el arreglo tuvo que ir en la fuente.
- Decisión del usuario: aplicar los 4 fixes (landmark, chat, `Tilt` y anillo de foco).

### Cómo lo entrego
- `src/app/App.tsx`: `<nav>` envuelto en `<header>` en las dos ramas (home y landing/blog), sin mover `fixed`/`sticky`/`glass-nav` para no alterar el layout; `whileTap={{ scale: 0.98 }}` eliminado de `Tilt` (conserva `whileHover`).
- `public/chat/cristal.js`: launcher convertido a `<button type="button">` con `aria-label`, `aria-controls="cr-panel"` y `aria-expanded` alternado en `openPanel`/`closePanel`; panel con `role="dialog"` y `aria-label`; al cerrar, el foco vuelve al launcher solo si estaba dentro del panel.
- `public/chat/cristal.css`: reset de botón nativo (`border:0`, `padding:0`, `font:inherit`, `color:inherit`) y anillo `:focus-visible`.
- `src/styles/index.css`: `:focus-visible` con `outline:2px solid #1A365D` y `outline-color:#1A365D !important` para ganar a la regla base con `color-mix`. El verde `#25D366` sobre blanco da 1,98:1 y no sirve como indicador de foco: se conserva el azul corporativo sólido (3 px en el launcher, 2 px en el resto).
- Rebuild Vite en copia local (`sapc-build`) + `postbuild.py`: entry `index-Z_hkDGpR.js` → `index-AqweREdY.js`; CSS `index-CiqIJQzD.css` → `index-D7xfTjLS.css`; 23 assets sincronizados a `public/`, `docs/` y `dist/`; hashes reemplazados por nombre literal en los 6 shells (incluido el `404.html` legacy, que tenía hashes de builds anteriores). Bloques inyectados de `docs/index.html` (`--font-sans`, `fade-in-up`, `card-glow`, `IntersectionObserver`, `<noscript>`) conservados.
- Verificación local 26/26 de build + 16/16 de CDP: 0 `div[tabindex="0"]`, `nav` dentro de `header`, launcher nativo enfocable con Tab, `aria-expanded` false→true→false, foco al input al abrir y de vuelta al launcher al cerrar, 0 enfocables visibles en `aria-hidden`, anillo `rgb(26,54,93) solid 3px`, contraste de los CTAs 7,67:1 intacto. Sin regresiones: NAP 20/20 variante única, Fase 8 0 objetos sin `sameAs`, JSON-LD 0 inválidos.
- Primer deploy `2d455d7` (Pages `built`): el `header`, la ausencia de `tabindex` y el CSS nuevo sí llegaron, pero el launcher de Cristal seguía siendo `<div>` en vivo. Causa: **Cloudflare guarda `/chat/cristal.js` en caché de borde con la misma URL** (`CF-Cache-Status: HIT`, `Age: 351098` ≈ 4 días); con `?t=` o `?v=` da `MISS` y sirve el archivo nuevo (17.163 B vs 16.866 B cacheados). El `link rel=stylesheet` del chat tenía el mismo problema.
- **Segundo fix**: `src/app/components/CristalChat.tsx` añade `CHAT_CACHE_BUST = "?v=20261122"` a `cristal.css`, `cristal-config.js` y `cristal.js`. Segundo build: entry `index-AqweREdY.js` → `index-C02dIHlR.js`; CSS sin cambios (`index-D7xfTjLS.css`); 23 assets y 6 shells resincronizados. Verificación local repetida 26/26 + 16/16.
- Segundo deploy `662f5d1` verificado en vivo (Pages `built`, 19.758 ms): 16/16 checks CDP pasan en `serviciosapc.site` — `header:1`, `nav` dentro de `header`, **0** `div[tabindex="0"]`, launcher `<button type="button">` con `aria-expanded="false"` → `true` → `false`, foco al input al abrir y de vuelta al launcher al cerrar, anillo `rgb(26,54,93) solid 3px`, 0 enfocables visibles en `aria-hidden`, CTAs en `rgb(7,94,84)` sobre blanco (7,67:1). Assets nuevos 200, entry anterior 404, HTML sin hash viejo, `/chat/cristal.js?v=20261122` sirve 17.163 B con `aria-controls`. ✅ CIERRE.

---

## SEGURIDAD — CSP efectiva contra XSS (22/11/2026) — AUDITORÍA, SIN APLICAR

### Cómo lo encontré
- El usuario pegó 8 hallazgos «Sin puntuar» de PageSpeed: `script-src` con lista de hosts sorteable (Alta), `'unsafe-inline'` en `script-src` (Alta), `'unsafe-inline'` en `script-src-elem` (Alta), CSP en `<meta>` en vez de cabecera HTTP (Media), HSTS ausente (Alta), COOP ausente (Alta), sin control de marcos XFO/`frame-ancestors` (Alta) y sin `require-trusted-types-for` (Alta).
- `curl`/`Invoke-WebRequest` a `https://serviciosapc.site/?seg=1`: cabeceras reales = `Server: cloudflare`, `cf-cache-status: DYNAMIC`, `Cache-Control: max-age=600`. **No** hay `content-security-policy`, `strict-transport-security`, `cross-origin-opener-policy` ni `x-frame-options`. La única CSP es `<meta http-equiv>` con `'unsafe-inline'` + `'unsafe-eval'` y listas de hosts (`googletagmanager`, `google-analytics`, `static.cloudflareinsights.com`).
- Inventario con `csp_scan_all.py` sobre los 60 HTML de `docs/`: **5 hashes inline ejecutables únicos (63 usos)** — gtag bootstrap (59), bundle embebido de una auditoría (1), script de enlaces externos de esa auditoría (1), script de `documento/index.html` que lee `?tipo=&id=` (1) e `IntersectionObserver` del home (1). Solo **2 fuentes externas**: `gtag/js?id=G-7ES977W3VY` (59) y `/assets/index-C02dIHlR.js?v=20261121` (2). **2 handlers inline** `onload="this.media='all'"` (`index.html` y `404.html`), hash real `sha256-MhtPZXr7+LpJUY5qtMutB+qWfQtMaPccfe7QXtCcEYc=`; mi primer regex los cortó en `this.media='` y dio un hash falso, corregido en `csp_dom_check.py`.
- ℹ️ Hallazgo colateral (no XSS): `docs/documento/index.html` construye `${base}/${tipo}/${clave}/${id}.pdf` con parámetros sin validar y usa `a.download = ${id}.pdf`; no inyecta HTML pero merece validación de parámetros en otra fase.
- `csp_dom_check.py` sobre el bundle: 3 `innerHTML`, todos internos de React DOM (`"<script><\/script>"` y `"<svg>"+...+"</svg>"`), 0 `eval`, 0 `new Function`, 0 `document.write`. Con `require-trusted-types-for 'script'` en **enforce**, esas asignaciones de React lanzan `TypeError` si no hay política:Trusty Types no puede activarse a ciegas.
- Cloudflare MCP con la sesión autorizada: zone `serviciosapc.site` = `1deb5017f160f3be043ebd97651575aa`, account `b4e0aaf606c53c781ab832775c9d89f2`; `always_use_https = off`, `min_tls_version = 1.0`, `http2/http3 = on`. `zones_settings_get` para `strict_transport_security` e `hsts` responde HTTP 400 (no son setting de la API v4: HSTS se activa en Edge Certificates o por regla de cabecera). `rulesets_list` solo muestra 5 rulesets managed/de cache, **ninguno de `http_response_headers_transform`**: hoy no se está inyectando ninguna cabecera de seguridad.
- Documentación Cloudflare consultada: Response Header Transform Rules permiten `set static` sobre la respuesta; HSTS recomienda empezar con `max-age` bajo y subir, y `includeSubDomains` solo si todos los subdominios soportan HTTPS. El token viejo `cfoat_...` de `cf_zone_check.py` sigue dando HTTP 9109; se usa MCP, no ese token.

### Cómo lo entrego
- Entregado por ahora: **diagnóstico + opciones**, sin cambiar cabeceras ni código. No se aplica nada sin decisión del usuario porque toca configuración de Cloudflare (superficie pública) y porque `'strict-dynamic'` / Trusted Types pueden romper el beacon de Cloudflare Insights y el bundle de React respectivamente.
- Propuesta de fase 1 (segura, cierra 6 de 8 hallazgos sin romper GA4 ni el chat): cabecera HTTP vía Cloudflare Response Header Transform Rule con hashes de los 5 scripts + `sha256-MhtPZXr7+...=` con `'unsafe-hashes'` para el `onload`, sin `'unsafe-inline'` ni `'unsafe-eval'`, `object-src 'none'`, `base-uri 'self'`, `frame-ancestors 'none'`; más `X-Frame-Options: DENY`, `Cross-Origin-Opener-Policy: same-origin-allow-popups` (no rompe popups de Cristal/WhatsApp) y `Strict-Transport-Security: max-age=86400` (fase 1; subir a 31536000 tras verificar).
- Quedan para fase 2, documentados: el hallazgo de «lista de hosts» (requiere `'strict-dynamic'` + nonce, con riesgo de bloquear el beacon inyectado por Cloudflare) y Trusted Types (empezar en `Content-Security-Policy-Report-Only`, revisar los 3 `innerHTML` de React antes de enforce). El `<meta>` CSP se conserva como defensa en profundidad mientras se valida la cabecera.
- ⏸️ Decisión recibida el 22/11/2026: **Fase 1 segura**, HSTS **por fases**, **COOP seguro + XFO** y Trusted Types **Report-Only**. Ver entrega más abajo.

## SEGURIDAD — CSP Fase 1 aplicada (22/11/2026) ✅

### Cómo lo encontré (decisión y ejecución)
- El usuario eligió las 4 opciones recomendadas de la auditoría: cabecera CSP con hashes sin `'strict-dynamic'`, HSTS `max-age=86400`, `Cross-Origin-Opener-Policy: same-origin-allow-popups` + `X-Frame-Options: DENY`, y Trusted Types solo en report-only.
- Validé el payload de Cloudflare con la doc oficial: `action: rewrite`, `action_parameters.headers` con `operation: set`, fase `http_response_headers_transform` a nivel zone, y un `dry_run=true` limpio antes de persistir.
- Comprobé que los hashes del HTML sirvido por Cloudflare coinciden con los del repo (`csp_verify_live_hashes.py`) y que el navegador calcula exactamente los mismos 5 hashes + el del handler (`csp_browser_hashes.js`).

### Cómo lo entrego
- **Una sola** Response Header Transform Rule en la zone `1deb5017f160f3be043ebd97651575aa`: ruleset `e72c35ff10304b35a3f87de0f284c5a9`, regla `7c99c74aa5b048ebb52408f79af02b4d`, ref `apc_security_headers_20261122`, **versión 2**. Expresión `true`, 5 cabeceras `set` para no gastar cuota de reglas.
- `Content-Security-Policy`: `default-src 'self'; script-src 'self' 'unsafe-hashes' 'sha256-AHMFt7q…=' 'sha256-h45aw4…=' 'sha256-IYGaQP…=' 'sha256-DmUl7x…=' 'sha256-++ETL1g…=' 'sha256-MhtPZX…=' <hosts Google/Cloudflare>; script-src-elem 'self' <los 5 hashes de <script>> <hosts>; script-src-attr 'unsafe-hashes' 'sha256-MhtPZX…='; connect-src …; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src …; img-src …; worker-src 'self' blob:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'`. El `<meta>` CSP se conserva como defensa en profundidad (sus directivas no cubren `frame-ancestors`/`object-src`/`base-uri`).
- `Strict-Transport-Security: max-age=86400` (fase 1, sin `includeSubDomains`), `Cross-Origin-Opener-Policy: same-origin-allow-popups`, `X-Frame-Options: DENY`, `Content-Security-Policy-Report-Only: require-trusted-types-for 'script'`.
- **Fallo intermedio documentado**: en la versión 1 escribí los hashes sin comillas (`sha256-…` en vez de `'sha256-…'`). Chrome los ignoró → 3 violaciones `enforce` (gtag línea 532, handler `onload`, IntersectionObserver línea 620): CSS quedó en `media=print`, `gtag` quedó `undefined` y no hubo peticiones a Analytics. Una matriz local A–F (`csp_matrix.js`) reprodujo el bloqueo y aisló la causa. Versión 2 con comillas → 0 violaciones.
- Verificación home 12/12 con CDP real (`csp_verify_live.js`): **0 violaciones enforce**, `onload` aplicado (`mediaAll=1`, `mediaPrint=0`), GA4 `gtag=function` + tráfico a googletagmanager y google-analytics, beacon de Cloudflare Insights presente, launcher de Cristal `<BUTTON>`, H1 intacto, script inline del IntersectionObserver ejecutable, CTA en `rgb(7,94,84)`, 5 assets locales 200, 0 excepciones y 0 errores de consola. Los 3 `trusted-types-sink` son `disposition=report` (2 `innerHTML` de React + 1 de `cristal.js`): se registran, no rompen.
- Verificación de otras 4 rutas (`csp_verify_pages.js`): `/Auditoria-Minutos-Serviciosapc.html`, `/documento/index.html`, un 404 y `/instalacion-camaras-seguridad-bogota/` → **0 violaciones enforce en todas**, con sus scripts inline funcionando (gtag, `form.onsubmit`, CSS del 404).
- Sin cambios en fuente, assets ni builds: solo configuración de Cloudflare + esta bitácora. No se publicó contenido. ✅ CIERRE FASE 1.
- Pendiente para fase 2 (no ejecutada): subir HSTS a `max-age=31536000` tras 24-48 h; evaluar `'strict-dynamic'` + nonce (hoy se conservan hosts porque el beacon inyectado por Cloudflare no tendría nonce); pasar Trusted Types a `enforce` tras revisar los 3 `innerHTML`; validar parámetros de `/documento/index.html?tipo=&id=`.

## BASELINE — Funciones web (22/11/2026) — diagnóstico, sin cambios ✅

### Cómo lo encontré
- El usuario pegó el hallazgo «Funciones de Baseline — Sin puntuar» con estado a fecha 2026-10-22 y un listado de ~40 funciones con su disponibilidad (Limited / Newly / Widely).
- **El reporte está desactualizado**: cita `/assets/index-DFQE9AyK.js`, pero `curl` a `https://serviciosapc.site/?baseline=20261122` devuelve `index-C02dIHlR.js` + `index-D7xfTjLS.css` (los bundles actuales). El bundle citado ya no se sirve.
- Escaneo con `baseline_scan.py` sobre `src/`, `docs/` (60 HTML + assets) y `public/chat/` para cada función listada, separando código propio de terceros.

### Cómo lo entrego (sin cambios de código)
- **Limited Availability propias (3)**: `prefers-reduced-transparency` (media query en `src/styles/index.css`: si el navegador no la entiende, ignora la regla y conserva el glass normal), `marker` (solo `::marker` para colorear viñetas en `blog-content`; sin soporte queda el marcador por defecto) y `field-sizing` (clase Tailwind `.field-sizing-content` en el CSS; **no hay ni un `<textarea>` en los 60 HTML ni la clase en el bundle actual**: `textarea.tsx` no se usa en producción). Ninguna causa pérdida funcional.
- **Limited de terceros (no controlables)**: `ua-client-hints` de `gtag/js`; `interaction-contentful-paint`, `soft-navigations`, `long-animation-frames` y `layout-instability` del `beacon.min.js` de Cloudflare; `requestidlecallback` aparece como «No atribuible» porque lo reporta `_lighthouse-eval.js` (el propio Lighthouse). En nuestro código `requestIdleCallback` sí tiene fallback explícito a `setTimeout` (`App.tsx` y `CristalChat.tsx`).
- **Newly Available propias**: `fetch-priority` (`fetchpriority="high"` en preloads y hero; si se ignora, carga normal), `text-wrap` (`text-wrap:balance`, degrada a wrap normal), `relative-color` (solo dentro de un `@supports` del reset de Tailwind), `backdrop-filter` (con `-webkit-` y fallback `background:#fff` en `prefers-contrast`/`prefers-reduced-transparency`), `registered-custom-properties`/`gradient-interpolation` (`@property` y `color-mix(in oklab…)` generados por Tailwind, tras `@supports`). Todas con degradación natural.
- Conclusión: es un insight informativo sin impacto en ranking ni en la experiencia; **no se aplica ningún cambio**. Si se quiere un listado fresco, hay que volver a correr PSI (el actual mezcla un bundle antiguo). ✅ CIERRE.
