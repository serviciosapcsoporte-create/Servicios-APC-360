#!/usr/bin/env python3
SLUGS = [
    "5-senales-camaras-no-protegen-empresa-bogota",
    "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad",
    "analitica-video-ia-ferreterias-bogota-caso-real-suba",
    "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard",
    "bot-whatsapp-ia-atencion-clientes-seguridad-bogota",
    "camaras-seguridad-bodega-bogota-monitoreo-inteligente",
    "costo-camaras-seguridad-empresas-2026-hardware-vs-ia",
    "cuanto-cuesta-camaras-seguridad-negocio-bogota-2026",
    "deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento",
    "guia-camaras-hikvision-ia-empresas-bogota-2026",
    "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026",
    "hikvision-vs-dahua-vs-uniview-comparativa-ia-2026",
    "instalacion-camaras-seguridad-negocio-pequeno-bogota-guia",
    "mejores-camaras-seguridad-local-comercial-bogota",
    "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues",
    "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data",
    "que-es-analitica-video-ia-empresas-bogota",
    "seo-local-google-maps-empresas-seguridad-bogota",
    "servidores-edge-gpu-para-ia-video-analitica-bogota",
]
P = r"C:\Users\pc\Documents\serviciosapc-site\public\sitemap.xml"
s = open(P, encoding="utf-8").read()
entries = ""
for slug in SLUGS:
    if slug in s:
        print("ya existe:", slug)
        continue
    entries += ("  <url>\n    <loc>https://serviciosapc.site/blog/" + slug + "/</loc>\n"
                "    <lastmod>2026-09-17</lastmod>\n    <changefreq>monthly</changefreq>\n"
                "    <priority>0.6</priority>\n  </url>\n")
s = s.replace("</urlset>", entries + "</urlset>")
open(P, "w", encoding="utf-8").write(s)
print("insertados:", entries.count("<url>"), "| total:", s.count("<loc>"))
