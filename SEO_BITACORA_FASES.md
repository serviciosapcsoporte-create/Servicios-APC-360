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
- Verificación local 14/14: 0 fondos verdes en 178 HTML, borde y glow verde conservados, logo blanco en bundle, 0 hashes viejos. Sin regresiones: NAP 300/300, Fase 7 0 hallazgos, Fase 8 0 objetos sin `sameAs`. Deploy pendiente de verificación en vivo.

---
