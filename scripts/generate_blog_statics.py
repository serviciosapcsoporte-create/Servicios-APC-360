#!/usr/bin/env python3
"""Genera paginas estaticas indexables desde src/app/blog/posts/*.mdx."""
import os, re, html

SRC = r"C:\Users\pc\Documents\serviciosapc-site\src\app\blog\posts"
BASE = r"C:\Users\pc\Documents\serviciosapc-site\public\blog"

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

COPY = {
"guia-camaras-hikvision-ia-empresas-bogota-2026": ("Camaras Hikvision con IA para empresas en Bogota: convierte video en conteo, aforo y reportes automaticos. Aprende a ordenar tu operacion.", "Este articulo explica como convertir tus camaras Hikvision actuales en un sistema de datos con IA YOLO en Bogota, con conteo de personas, aforo, arqueo asistido y alertas a WhatsApp, operando en local para ordenar la operacion diaria sin cambiar todo.", "Agenda un diagnostico gratuito con Servicios APC y convierte tus camaras en datos para decidir mejor. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"costo-camaras-seguridad-empresas-2026-hardware-vs-ia": ("Costo camaras para empresas en Bogota 2026: hardware vs capa IA que reutiliza tus equipos. Compara y optimiza tu inversion con datos.", "El articulo desglosa costos reales 2026 en Bogota: solo capa IA que reutiliza tus camaras desde 150 dolares mensuales, frente a instalacion completa Hikvision mas IA, con mantenimiento, licencias y retorno de inversion entre seis y doce meses.", "Agenda un diagnostico gratuito con Servicios APC y compara que te conviene: solo IA o instalacion completa. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"que-es-analitica-video-ia-empresas-bogota": ("Que es analitica de video con IA para empresas en Bogota: convierte frames en conteo y alertas utiles. Entiende como funciona y aplicala.", "La analitica de video con IA entiende lo que ve tu camara en Bogota: detecta personas, vehiculos, cascos o placas, genera conteos y alertas en segundos, funciona sin internet y convierte tus equipos actuales en datos utiles para decidir mejor.", "Agenda un diagnostico gratuito con Servicios APC y descubre que datos puede generar tu sistema actual. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"5-senales-camaras-no-protegen-empresa-bogota": ("5 senales de que tus camaras no generan datos en tu empresa en Bogota: imagen borrosa, sin reportes. Diagnostica y ordena tu sistema.", "El articulo presenta cinco senales operativas de que tu CCTV en Bogota no genera valor: fallas de grabacion, imagen nocturna deficiente, puntos ciegos, arqueo manual y soporte lento, con soluciones de IA y hardware para ordenar el sistema.", "Agenda un diagnostico gratuito con Servicios APC y ordena tu sistema de camaras con datos utiles. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": ("Negocio con camaras con IA vs sin IA en Bogota: comparativa visual antes y despues con datos, arqueo y mapas de calor. Mira el cambio.", "Compara el mismo negocio en Bogota antes y despues de sumar IA: de video borroso y revision manual a placas legibles, arqueo asistido, mapas de calor, retencion inteligente y alertas a WhatsApp con tablero disponible en el celular.", "Agenda un diagnostico gratuito con Servicios APC y mira como se veria tu negocio con datos en tiempo real. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"analitica-video-ia-ferreterias-bogota-caso-real-suba": ("Analitica de video con IA para ferreterias en Bogota: caso Suba con control de accesos, arqueo asistido y mapas de calor. Inspira tu operacion.", "Presenta el caso de una ferreteria en Suba, Bogota, que integro ColorVu 4K e IA YOLO para ordenar accesos, mejorar visibilidad nocturna, automatizar el arqueo de caja y usar mapas de calor para optimizar el layout y las ventas por zona.", "Agenda un diagnostico gratuito con Servicios APC y ordena tu ferreteria con arqueo y datos utiles. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": ("Analitica de video con IA para clinicas en Bogota: cumplimiento, control de acceso y deteccion de caidas con datos. Organiza tu operacion clinica.", "Explica como las clinicas en Bogota usan IA de video para ordenar el cumplimiento, detectar caidas en menos de treinta segundos, verificar EPP en zonas criticas y controlar accesos a farmacia y esterilizacion, todo operando en red local.", "Agenda un diagnostico gratuito con Servicios APC y ordena tu clinica con cumplimiento y datos en tiempo real. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": ("Hikvision ColorVu vs AcuSense vs DeepinView en Bogota 2026: cual genera mejores datos nocturnos y menos falsas alertas. Elige con criterio.", "Compara ColorVu para color nocturno real, AcuSense para filtrar falsas alarmas con mejor retorno y DeepinView con IA embebida en camara, para ayudarte en Bogota a elegir segun placas, interiores o analitica avanzada sin servidor adicional con criterio tecnico probado.", "Agenda un diagnostico gratuito con Servicios APC y elige el modelo Hikvision ideal para tu operacion. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": ("Normativa videovigilancia Colombia 2026 Ley 1581 Habeas Data en Bogota: checklist de cumplimiento y retencion. Ordena tus datos hoy.", "Resume la normativa 2026 para videovigilancia en Colombia: Ley 1581 de Habeas Data, Resolucion 1074 de SG-SST y Codigo Penal, con avisos obligatorios, retencion, derechos ARCO, sanciones y lista practica para operar tus camaras en regla en Bogota.", "Agenda un diagnostico gratuito con Servicios APC y verifica si tu sistema cumple la norma. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": ("Automatizacion CCTV con n8n en Bogota: de alerta a WhatsApp, CRM y dashboard en minutos. Integra tus sistemas y ahorra tiempo.", "Muestra como conectar tus camaras en Bogota a n8n para enviar clips y alertas a WhatsApp, registrar eventos en CRM y visualizarlos en tablero, con logica condicional, reintentos automaticos y operacion local que ahorra integraciones manuales costosas todos los dias.", "Agenda un diagnostico gratuito con Servicios APC e integra tus camaras a WhatsApp y CRM. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"seo-local-google-maps-empresas-seguridad-bogota": ("SEO local en Google Maps para empresas en Bogota: como aparecer primero y duplicar cotizaciones con ficha optimizada. Mejora tu visibilidad.", "Explica como optimizar tu ficha de Google Business Profile en Bogota con categorias, fotos, resenas y publicaciones, para aparecer en el Map Pack local, recibir mas llamadas y convertir busquedas cercanas en cotizaciones constantes cada semana sin depender de voz a voz.", "Agenda un diagnostico gratuito con Servicios APC y mejora tu visibilidad en Google Maps. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"servidores-edge-gpu-para-ia-video-analitica-bogota": ("Servidores edge con GPU para videoanalitica en Bogota: que necesitas para procesar IA local sin nube. Disena tu infraestructura eficiente.", "Detalla que servidor edge con GPU necesitas en Bogota para procesar YOLO en local: opciones NVIDIA, camaras por equipo, latencia de milisegundos, privacidad total y punto de equilibrio frente a pagar nube mensual por cada camara conectada todos los dias.", "Agenda un diagnostico gratuito con Servicios APC y disena tu infraestructura edge eficiente. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": ("Hikvision vs Dahua vs Uniview con IA en Bogota 2026: comparativa ONVIF, vision nocturna y compatibilidad YOLO. Elige con datos.", "Compara Hikvision, Dahua y Uniview en Bogota en IA de fabrica, compatibilidad ONVIF y RTSP con YOLO, vision nocturna y ecosistema total, para elegir camaras que entreguen datos utiles y se integren sin quedar atado a software propietario.", "Agenda un diagnostico gratuito con Servicios APC y elige marca con datos, no por precio. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"bot-whatsapp-ia-atencion-clientes-seguridad-bogota": ("Bot WhatsApp con IA para empresas en Bogota: atiende consultas 24/7, cotiza y reduce tiempo manual. Automatiza tu atencion hoy.", "Describe como un bot de WhatsApp con IA en Bogota responde consultas, genera cotizaciones base y crea tickets automaticamente, operando veinticuatro siete, reduciendo tiempos de respuesta y liberando a tu equipo de mensajes repetitivos diarios para ordenar la atencion y vender mas.", "Agenda un diagnostico gratuito con Servicios APC y automatiza tu atencion por WhatsApp. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": ("Deteccion EPP con IA en construccion y fabrica en Bogota: cumplimiento SG-SST con casco y chaleco en tiempo real. Ordena tu SST.", "Explica la deteccion de EPP con IA en obras y fabricas de Bogota: casco, chaleco, guantes y gafas verificados en tiempo real, con alertas inmediatas y trazabilidad para cumplir SG-SST y reducir reprocesos en seguridad y salud laboral.", "Agenda un diagnostico gratuito con Servicios APC y ordena tu cumplimiento SG-SST con IA. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": ("Cuanto cuesta instalar camaras para negocio en Bogota 2026: precios reales de 800 mil a 8 millones con IA y ROI. Cotiza con datos.", "Presenta precios reales 2026 en Bogota desde ochocientos mil pesos hasta ocho millones segun camaras, grabador y cableado, explica que incluye cada propuesta y cuando sumar IA para convertir el gasto en datos y retorno medible para tu negocio cada mes.", "Agenda un diagnostico gratuito con Servicios APC y cotiza tu sistema con precios claros. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"mejores-camaras-seguridad-local-comercial-bogota": ("Mejores camaras para local comercial en Bogota 2026: comparativa Hikvision y Dahua por tipo de negocio. Elige eficiencia, no precio.", "Guia los tipos bullet, dome y PTZ para locales en Bogota, con modelos Hikvision recomendados por entrada, interior y caja, criterios de resolucion y luz, para elegir el equipo que ordene la operacion y reduzca errores diarios sin pagar de mas.", "Agenda un diagnostico gratuito con Servicios APC y elige la camara ideal para tu local. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"camaras-seguridad-bodega-bogota-monitoreo-inteligente": ("Camaras para bodega en Bogota con monitoreo inteligente e IA: intrusion, conteo y mapas de calor. Ordena tu logistica con datos.", "Propone soluciones con IA para bodegas en Bogota con techos altos y movimiento constante: deteccion perimetral, conteo, mapas de calor y verificacion nocturna, para ordenar inventarios, reducir perdidas operativas y decidir con datos centralizados todos los dias desde tu celular.", "Agenda un diagnostico gratuito con Servicios APC y ordena tu bodega con monitoreo inteligente. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
"instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": ("Instalacion de camaras para negocio pequeno en Bogota: guia paso a paso, ubicacion y errores comunes. Instala orden desde el inicio.", "Guia paso a paso para negocios de veinte a ciento cincuenta metros en Bogota: cuantas camaras comprar, donde ubicarlas, errores de altura y red, acceso remoto y mantenimiento, para instalar un sistema ordenado que crezca con tu negocio.", "Agenda un diagnostico gratuito con Servicios APC e instala orden desde el inicio. Escribenos al WhatsApp 333 745 0634 y cotiza ahora."),
}

TEMPLATE = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "_blog_template.html"), encoding="utf-8").read()

def fix_mojibake(s):
    if "Ã" in s or "Â" in s:
        try:
            return s.encode("cp1252").decode("utf-8")
        except Exception:
            return s
    return s

def parse_mdx(path):
    raw = open(path, encoding="utf-8-sig").read()
    fm, body = {}, raw
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", raw, re.DOTALL)
    if m:
        for line in m.group(1).split("\n"):
            mm = re.match(r'^(\w+):\s*"?(.*?)"?\s*$', line)
            if mm:
                fm[mm.group(1)] = mm.group(2)
        body = m.group(2)
    return fm, body

def inline_md(t):
    t = html.escape(t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', t)
    return t

def body_to_html(body):
    out, in_list, in_table, rows = [], False, False, []
    def close_list():
        nonlocal in_list
        if in_list:
            out.append("</ul>"); in_list = False
    def close_table():
        nonlocal in_table, rows
        if in_table:
            if rows:
                out.append("<table><tr>" + "".join("<th>" + inline_md(c.strip()) + "</th>" for c in rows[0]) + "</tr>")
                for r in rows[1:]:
                    out.append("<tr>" + "".join("<td>" + inline_md(c.strip()) + "</td>" for c in r) + "</tr>")
                out.append("</table>")
            rows = []; in_table = False
    for raw in body.split("\n"):
        line = raw.strip()
        if not line:
            close_list(); close_table(); continue
        if line.startswith("http://192.168.") or "192.168." in line and line.startswith("http"):
            close_list(); close_table()
            out.append("<p><em>[Referencia interna del sistema: captura local del equipo. Solicite una demostracion por WhatsApp.]</em></p>")
            continue
        if re.match(r"^\|.*\|$", line):
            close_list()
            cells = [c for c in line.strip("|").split("|")]
            if re.match(r"^[\s\|\-:]+$", line):
                continue
            in_table = True; rows.append(cells); continue
        close_table()
        if line.startswith("### "):
            close_list(); out.append("<h3>" + inline_md(line[4:]) + "</h3>"); continue
        if line.startswith("## "):
            close_list(); out.append("<h2>" + inline_md(line[3:]) + "</h2>"); continue
        if re.match(r"^[-*]\s+", line):
            if not in_list:
                out.append("<ul>"); in_list = True
            out.append("<li>" + inline_md(re.sub(r"^[-*]\s+", "", line)) + "</li>"); continue
        if re.match(r"^\d+\.\s+", line):
            if not in_list:
                out.append("<ul>"); in_list = True
            out.append("<li>" + inline_md(re.sub(r"^\d+\.\s+", "", line)) + "</li>"); continue
        if line.startswith("!["):
            continue
        close_list()
        out.append("<p>" + inline_md(line) + "</p>")
    close_list(); close_table()
    return "\n".join(out)

def get_contextual_cta(slug, category):
    base = "https://wa.me/573337450634?text="
    cta_map = {
        "5-senales-camaras-no-protegen-empresa-bogota": "Hola Servicios APC, leí el diagnóstico de señales CCTV y quiero una auditoría gratis",
        "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": "Hola Servicios APC, leí el caso de clínicas con IA y quiero asesoría para mi clínica",
        "analitica-video-ia-ferreterias-bogota-caso-real-suba": "Hola Servicios APC, vi el caso de ferretería en Suba y quiero replicarlo",
        "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": "Hola Servicios APC, vi la automatización n8n + CCTV y quiero integrar mis cámaras",
        "automatizacion-procesos-pymes": "Hola Servicios APC, quiero automatizar procesos en mi pyme con n8n",
        "bot-whatsapp-ia-atencion-clientes-seguridad-bogota": "Hola Servicios APC, quiero un bot WhatsApp con IA para mi negocio",
        "camaras-ia-vs-tradicionales": "Hola Servicios APC, quiero comparar cámaras IA vs tradicionales",
        "camaras-seguridad-bodega-bogota-monitoreo-inteligente": "Hola Servicios APC, vi el caso de bodega con IA y quiero replicarlo",
        "como-elegir-camaras-seguridad": "Hola Servicios APC, quiero ayuda para elegir las mejores cámaras para mi local",
        "conteo-personas-negocio": "Hola Servicios APC, quiero conteo de personas con IA para mi negocio",
        "costo-camaras-seguridad-empresas-2026-hardware-vs-ia": "Hola Servicios APC, quiero comparar costo hardware vs IA para mis cámaras",
        "cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": "Hola Servicios APC, quiero saber cuánto cuesta instalar cámaras en mi negocio",
        "deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": "Hola Servicios APC, necesito detección de EPP con IA para mi obra/fábrica",
        "guia-camaras-hikvision-ia-empresas-bogota-2026": "Hola Servicios APC, quiero la guía completa de Hikvision IA para mi empresa",
        "guia-mantenimiento-camaras": "Hola Servicios APC, necesito guía de mantenimiento para mis cámaras",
        "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": "Hola Servicios APC, quiero comparar ColorVu vs AcuSense vs DeepinView",
        "hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": "Hola Servicios APC, quiero comparar Hikvision vs Dahua vs Uniview",
        "instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": "Hola Servicios APC, necesito guía de instalación para mi negocio pequeño",
        "instalacion-cctv-guia-completa": "Hola Servicios APC, necesito guía completa de instalación CCTV",
        "mejores-camaras-seguridad-local-comercial-bogota": "Hola Servicios APC, quiero las mejores cámaras para mi local comercial",
        "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": "Hola Servicios APC, vi el caso visual antes/después con IA y quiero eso",
        "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": "Hola Servicios APC, necesito asesoría sobre normativa videovigilancia 2026",
        "precio-camaras-seguridad-bogota": "Hola Servicios APC, quiero precios de cámaras de seguridad en Bogotá",
        "que-es-analitica-video-ia-empresas-bogota": "Hola Servicios APC, quiero entender qué es analítica de video con IA",
        "seo-local-google-maps-empresas-seguridad-bogota": "Hola Servicios APC, quiero SEO Local para mi negocio en Bogotá",
        "servidores-edge-gpu-para-ia-video-analitica-bogota": "Hola Servicios APC, necesito servidor edge GPU para videoanalítica IA",
    }
    if slug in cta_map:
        return base + cta_map[slug], "Cotizar por WhatsApp"
    cat_defaults = {
        "Diagnóstico": "Hola Servicios APC, leí su diagnóstico y quiero auditoría gratis",
        "Caso Sectorial": "Hola Servicios APC, vi su caso sectorial y quiero replicarlo",
        "Automatización": "Hola Servicios APC, quiero automatizar con n8n/WhatsApp",
        "IA & Seguridad": "Hola Servicios APC, quiero IA para mis cámaras",
        "Guía Técnica": "Hola Servicios APC, leí su guía y quiero implementarlo",
        "Guía Sectorial": "Hola Servicios APC, leí su guía y quiero implementarlo",
        "Guía Práctica": "Hola Servicios APC, leí su guía y quiero implementarlo",
        "Guía de Compra": "Hola Servicios APC, leí su guía y quiero cotizar",
        "Comparativa": "Hola Servicios APC, vi su comparativa y quiero cotizar",
        "Comparativa Hardware": "Hola Servicios APC, vi su comparativa y quiero cotizar",
        "Precios": "Hola Servicios APC, vi precios y quiero cotizar",
        "Costos y ROI": "Hola Servicios APC, vi costos y quiero cotizar",
        "Legal & Cumplimiento": "Hola Servicios APC, necesito asesoría legal videovigilancia",
        "SEO & Marketing": "Hola Servicios APC, quiero SEO Local para mi negocio",
        "Infraestructura": "Hola Servicios APC, necesito servidor edge GPU para IA",
    }
    msg = cat_defaults.get(category, "Hola Servicios APC, leí su artículo y quiero asesoría")
    return base + msg, "Cotizar por WhatsApp"

def build(slug, fm, body_html, cover, meta, intro40, cta, prev_link, next_link, cta_href, cta_label):
    title = fix_mojibake(fm.get("title", slug))
    date = fm.get("date", fm.get("publishDate", "2026-07-29"))
    cat = fix_mojibake(fm.get("category", "Guías"))
    tags = fix_mojibake(fm.get("tags", "camaras seguridad Bogota"))
    read = fm.get("readTime", "8 min")
    h = TEMPLATE
    h = h.replace("%%TITLE%%", html.escape(title))
    h = h.replace("%%META%%", html.escape(meta))
    h = h.replace("%%SLUG%%", slug)
    h = h.replace("%%COVER%%", cover)
    h = h.replace("%%DATE%%", date)
    h = h.replace("%%CAT%%", html.escape(cat))
    h = h.replace("%%TAGS%%", html.escape(tags))
    h = h.replace("%%READ%%", html.escape(read))
    h = h.replace("%%INTRO40%%", html.escape(intro40))
    h = h.replace("%%CTA%%", html.escape(cta))
    h = h.replace("%%CTA_HREF%%", html.escape(cta_href))
    h = h.replace("%%CTA_LABEL%%", html.escape(cta_label))
    h = h.replace("%%BODY%%", body_html)
    h = h.replace("%%PREV_LINK%%", prev_link)
    h = h.replace("%%NEXT_LINK%%", next_link)
    return h

def main():
    slugs = sorted(COVERS.keys())
    n = len(slugs)
    for i, slug in enumerate(slugs):
        fm, body = parse_mdx(os.path.join(SRC, slug + ".mdx"))
        body = re.sub(r"http://192\.168\.\d+\.\d+/[^\s)]*", "##SNAP##", body)
        body = body.replace("##SNAP##", "")
        body_html = body_to_html(fix_mojibake(body))
        meta, intro40, cta = COPY[slug]
        prev_link = ('<a href="https://serviciosapc.site/blog/' + slugs[i-1] + '/">&laquo; Anterior</a>') if i > 0 else ""
        next_link = ('<a href="https://serviciosapc.site/blog/' + slugs[i+1] + '/">Siguiente &raquo;</a>') if i < n-1 else ""
        cat = fix_mojibake(fm.get("category", "Guías"))
        cta_href, cta_label = get_contextual_cta(slug, cat)
        out = build(slug, fm, body_html, COVERS[slug], meta, intro40, cta, prev_link, next_link, cta_href, cta_label)
        d = os.path.join(BASE, slug)
        os.makedirs(d, exist_ok=True)
        open(os.path.join(d, "index.html"), "w", encoding="utf-8").write(out)
        print("OK:", slug, len(out))

if __name__ == "__main__":
    main()
