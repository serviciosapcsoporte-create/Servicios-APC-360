# P3 — Checklists externos (GBP + línea base GSC)

**Estado 23/11/2026:** NO ejecutables por el agente. Requieren login humano en cuentas de Google.
Se documentan para ejecutar en orden; no se inventan métricas ni se activa `aggregateRating`/`hasMap` sin evidencia real.

## 1. Google Search Console (bloquea la línea base)

Verificado en vivo el 23/11/2026 con el service account `analista-apc@servicios-apc-pyton.iam.gserviceaccount.com`:
`GET https://www.googleapis.com/webmasters/v3/sites` → **HTTP 403 `accessNotConfigured` / `SERVICE_DISABLED`** en el proyecto GCP `160252449744`.

Pasos (hacedlos en este orden):

1. Habilitar la API: https://console.developers.google.com/apis/api/searchconsole.googleapis.com/overview?project=160252449744
2. En GSC → `sc-domain:serviciosapc.site` → Configuración → Usuarios y permisos → **Añadir usuario** `analista-apc@servicios-apc-pyton.iam.gserviceaccount.com` (permiso "Restricto" basta para consultar).
3. Confirmar con:
   ```
   python C:\Users\pc\AppData\Local\Temp\opencode\gsc_probe.py
   curl.exe -s -w "%{http_code}" -H "Authorization: Bearer $(Get-Content -Raw C:\Users\pc\AppData\Local\Temp\opencode\gsc_token.txt)" https://www.googleapis.com/webmasters/v3/sites
   ```
   Esperado: `200` con la lista de propiedades. Si aún da 403, esperar unos minutos a la propagación.
4. Solo entonces capturar línea base (16 semanas): queries, páginas, países, dispositivos; guardar en `gsc_baseline_2026-11.json`.
5. Opcional para completar medición: API key de PageSpeed Insights/CrUX y `ga4_property_id`.

Nota: en el repo `gsc_query.py` / `gsc_inspect.py` están referenciados en la bitácora pero no versionados; hay que recrearlos o usar el token de arriba.

## 2. Google Business Profile (Fase 5/8, externa)

Pendiente desde `PLAN_SEO_MAESTRO.md`: reclamar y verificar https://share.google/kRW5lAaoVc7wxAHh2.

- Categoría principal: **Automatización**; secundarias: Soporte técnico, Consultoría informática.
- NAP exacto (ya consistente en 300/300 objetos del repo): Servicios APC · Cra. 52c #39b-22, Bogotá 110111 · +57 333 745 0634 · serviciosapcsoporte@gmail.com.
- Horario Lun–Dom 06:00–21:00; área de servicio: 20 localidades + 11 municipios Cundinamarca.
- 19 fotos reales de instalaciones + logo + dashboards; 10 Q&A precargadas; productos/servicios con precios del SOP.
- Reseñas: solicitar por WhatsApp **después** de instalaciones reales; responder todas en <24 h.
- `hasMap` y "Ver en Maps" **solo tras verificar el perfil**. `aggregateRating` **solo con ≥5 reseñas reales**.
- Medición: GBP Insights (impresiones búsqueda/mapa, clics web, llamadas) + geo-grid. Objetivo map pack Top 5.

Nota: el token `token-gbp.json` no está en `D:\APC\Hosting APC`; la API de GBP requeriría autorización OAuth humana. Por eso esta sección queda como checklist, no ejecutada.
