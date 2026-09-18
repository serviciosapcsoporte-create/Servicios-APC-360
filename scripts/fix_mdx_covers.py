#!/usr/bin/env python3
"""Reemplaza coverImage Unsplash por /blog-img/ locales en los 19 MDX."""
import re, glob

COVERS = {
    "guia-camaras-hikvision-ia-empresas-bogota-2026": "automatizacion-procesos.webp",
    "costo-camaras-seguridad-empresas-2026-hardware-vs-ia": "eficiencia-empresarial.webp",
    "que-es-analitica-video-ia-empresas-bogota": "dashboard-ejecutivo.webp",
    "5-senales-camaras-no-protegen-empresa-bogota": "servicios-apc.webp",
    "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": "reels-poster.webp",
    "analitica-video-ia-ferreterias-bogota-caso-real-suba": "dashboard-ejecutivo.webp",
    "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": "equipo-apc.webp",
    "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": "eficiencia-empresarial.webp",
    "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": "equipo-apc.webp",
    "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": "integracion-sistemas.webp",
    "seo-local-google-maps-empresas-seguridad-bogota": "servicios-apc.webp",
    "servidores-edge-gpu-para-ia-video-analitica-bogota": "hero-og.png",
    "hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": "eficiencia-empresarial.webp",
    "bot-whatsapp-ia-atencion-clientes-seguridad-bogota": "integracion-sistemas.webp",
    "deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": "equipo-apc.webp",
    "cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": "automatizacion-procesos.webp",
    "mejores-camaras-seguridad-local-comercial-bogota": "servicios-apc.webp",
    "camaras-seguridad-bodega-bogota-monitoreo-inteligente": "dashboard-ejecutivo.webp",
    "instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": "automatizacion-procesos.webp",
}

n = 0
for f in glob.glob(r"C:\Users\pc\Documents\serviciosapc-site\src\app\blog\posts\*.mdx"):
    slug = f.split("\\")[-1][:-4]
    if slug not in COVERS:
        print("SIN MAP:", slug); continue
    s = open(f, encoding="utf-8-sig").read()
    s2, c = re.subn(r'^coverImage:\s*".*?"\s*$', 'coverImage: "/blog-img/%s"' % COVERS[slug], s, flags=re.MULTILINE)
    if c:
        open(f, "w", encoding="utf-8").write(s2); n += 1
        print("OK:", slug)
print("actualizados:", n)
