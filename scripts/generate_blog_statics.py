#!/usr/bin/env python3
"""Genera paginas estaticas indexables desde src/app/blog/posts/*.mdx."""
import os, re, html
from urllib.parse import quote

_HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(_HERE, "..", "src", "app", "blog", "posts"))
BASE = os.path.normpath(os.path.join(_HERE, "..", "public", "blog"))

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
"guia-camaras-hikvision-ia-empresas-bogota-2026": ("Cámaras Hikvision con IA para empresas en Bogotá: convierte video en conteo, aforo y reportes automáticos. Aprende a ordenar tu operación.", "Tus cámaras Hikvision actuales pueden contar personas, medir aforo, asistir el arqueo y mandar alertas a WhatsApp con IA YOLO, sin cambiar el equipo y operando en local. Aquí te mostramos cómo convertir lo que ya tienes en datos para ordenar la operación diaria en Bogotá.", "Diagnóstico gratuito: revisamos tus cámaras Hikvision y te dejamos el plan para convertirlas en datos de conteo, aforo y alertas. Escríbenos y agendamos."),
"costo-camaras-seguridad-empresas-2026-hardware-vs-ia": ("Costo cámaras para empresas en Bogotá 2026: hardware vs capa IA que reutiliza tus equipos. Compara y optimiza tu inversión con datos.", "¿Comprar cámaras nuevas o sumar una capa de IA a las que ya tienes? En Bogotá la segunda opción arranca desde 150 dólares mensuales y reutiliza tu hardware, mientras una instalación completa con IA suele pagarse entre seis y doce meses. Aquí van los costos reales de 2026 para que compares con datos.", "Diagnóstico gratuito: revisamos tus equipos y te dejamos el comparativo entre capa IA e instalación completa, con costos de 2026. Escríbenos y agendamos."),
"que-es-analitica-video-ia-empresas-bogota": ("Qué es analítica de video con IA para empresas en Bogotá: convierte frames en conteo y alertas útiles. Entiende cómo funciona y aplícala.", "La analítica de video con IA entiende lo que ve tu cámara: detecta personas, vehículos, cascos o placas, genera conteos y alertas en segundos y funciona sin internet. Aquí ves cómo funciona por dentro y qué datos puede empezar a darte tu sistema actual en Bogotá.", "Diagnóstico gratuito: revisamos tu sistema actual y te dejamos el plan para que empiece a darte conteos y alertas. Escríbenos y agendamos."),
"5-senales-camaras-no-protegen-empresa-bogota": ("5 señales de que tus cámaras no generan datos en tu empresa en Bogotá: imagen borrosa, sin reportes. Diagnostica y ordena tu sistema.", "Si tus cámaras solo graban y nadie las revisa, no le dan valor a tu operación. Estas 5 señales dicen si tu CCTV en Bogotá está en esa lista: fallas de grabación, imagen nocturna deficiente, puntos ciegos, arqueo manual y soporte lento. Cada una se arregla con IA sobre el hardware que ya tienes.", "Diagnóstico gratuito: revisamos tu sistema y te dejamos el plan para ordenarlo con datos, señal por señal. Escríbenos y agendamos."),
"negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": ("Negocio con cámaras con IA vs sin IA en Bogotá: comparativa visual antes y después con datos, arqueo y mapas de calor. Mira el cambio.", "Imagina el mismo negocio antes y después de sumar IA: de video borroso y revisión manual a placas legibles, arqueo asistido, mapas de calor y alertas a WhatsApp con el tablero en el celular. El caso completo, con las capturas, está aquí.", "Diagnóstico gratuito: revisamos tus cámaras y te mostramos cómo se vería tu negocio con datos en tiempo real. Escríbenos y agendamos."),
"analitica-video-ia-ferreterias-bogota-caso-real-suba": ("Analítica de video con IA para ferreterías en Bogotá: caso Suba con control de accesos, arqueo asistido y mapas de calor. Inspira tu operación.", "Una ferretería de Suba ordenó sus accesos, automatizó el arqueo y empezó a usar mapas de calor para reacomodar el piso con ColorVu 4K e IA YOLO. Este es el caso completo, con las decisiones que tomaron y los resultados que obtuvieron.", "Diagnóstico gratuito: revisamos tu ferretería y te dejamos el plan de arqueo y datos, como el caso de Suba. Escríbenos y agendamos."),
"analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": ("Analítica de video con IA para clínicas en Bogotá: cumplimiento, control de acceso y detección de caídas con datos. Organiza tu operación clínica.", "Una caída detectada en menos de 30 segundos, accesos verificados a farmacia y esterilización, EPP controlado y todo en red local: así una clínica en Bogotá convierte su video en cumplimiento trazable.", "Diagnóstico gratuito: revisamos tu clínica y te dejamos el plan de cumplimiento y control de accesos con IA. Escríbenos y agendamos."),
"hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": ("Hikvision ColorVu vs AcuSense vs DeepinView en Bogotá 2026: cuál genera mejores datos nocturnos y menos falsas alertas. Elige con criterio.", "ColorVu da color nocturno real, AcuSense filtra las falsas alarmas y DeepinView trae la IA dentro de la cámara. Aquí va cuál conviene según lo que necesites: placas, interiores o analítica avanzada sin servidor adicional, con criterio probado.", "Diagnóstico gratuito: revisamos tu operación y te dejamos la recomendación entre ColorVu, AcuSense y DeepinView. Escríbenos y agendamos."),
"normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": ("Normativa videovigilancia Colombia 2026 Ley 1581 Habeas Data en Bogotá: checklist de cumplimiento y retención. Ordena tus datos hoy.", "Ley 1581 de Habeas Data, Resolución 1074 de SG-SST y Código Penal: lo que dice la norma 2026 para tu videovigilancia en Colombia, con avisos obligatorios, retención, derechos ARCO y sanciones. Al final tienes la lista práctica para operar tus cámaras en regla.", "Diagnóstico gratuito: revisamos tu sistema y te dejamos el checklist para dejarlo en regla con la norma 2026. Escríbenos y agendamos."),
"automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": ("Automatización CCTV con n8n en Bogotá: de alerta a WhatsApp, CRM y dashboard en minutos. Integra tus sistemas y ahorra tiempo.", "Tus cámaras pueden mandar clips y alertas a WhatsApp, registrar eventos en el CRM y mostrarlos en un tablero, sin integraciones manuales todos los días. Aquí ves cómo conectarlas a n8n con lógica condicional, reintentos automáticos y operación local.", "Diagnóstico gratuito: revisamos tus cámaras y te dejamos el mapa de flujos para conectarlas a WhatsApp y CRM. Escríbenos y agendamos."),
"seo-local-google-maps-empresas-seguridad-bogota": ("SEO local en Google Maps para empresas en Bogotá: cómo aparecer primero y duplicar cotizaciones con ficha optimizada. Mejora tu visibilidad.", "Aparecer en el Map Pack de Google Maps significa más llamadas y cotizaciones cada semana sin depender del boca a boca. Aquí ves cómo optimizar tu ficha de Google Business Profile en Bogotá: categorías, fotos, reseñas y publicaciones que sí mueven la aguja.", "Diagnóstico gratuito: revisamos tu ficha de Google y te dejamos el plan para subir al Map Pack de tu zona. Escríbenos y agendamos."),
"servidores-edge-gpu-para-ia-video-analitica-bogota": ("Servidores edge con GPU para videoanalítica en Bogotá: qué necesitas para procesar IA local sin nube. Diseña tu infraestructura eficiente.", "Para procesar YOLO en local necesitas un servidor edge con GPU: opciones NVIDIA, cámaras por equipo, latencia de milisegundos y privacidad total. Aquí va el punto de equilibrio frente a pagar nube mensual por cada cámara conectada.", "Diagnóstico gratuito: revisamos tu proyecto y te dejamos la especificación del servidor edge que necesitas. Escríbenos y agendamos."),
"hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": ("Hikvision vs Dahua vs Uniview con IA en Bogotá 2026: comparativa ONVIF, visión nocturna y compatibilidad YOLO. Elige con datos.", "Hikvision, Dahua y Uniview comparados donde importa: IA de fábrica, compatibilidad ONVIF y RTSP con YOLO, visión nocturna y ecosistema. El objetivo es que elijas cámaras que entreguen datos útiles sin quedarte atado a un software propietario.", "Diagnóstico gratuito: revisamos tu caso y te dejamos la marca recomendada con datos, no por precio. Escríbenos y agendamos."),
"bot-whatsapp-ia-atencion-clientes-seguridad-bogota": ("Bot WhatsApp con IA para empresas en Bogotá: atiende consultas 24/7, cotiza y reduce tiempo manual. Automatiza tu atención hoy.", "Un bot de WhatsApp con IA responde consultas, arma cotizaciones base y crea tickets las 24 horas, mientras tu equipo deja de contestar lo mismo todos los días. Aquí ves cómo funciona y qué conviene automatizar primero en tu negocio.", "Diagnóstico gratuito: revisamos tus conversaciones de WhatsApp y te dejamos el plan de bot y atención automatizada. Escríbenos y agendamos."),
"deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": ("Detección EPP con IA en construcción y fábrica en Bogotá: cumplimiento SG-SST con casco y chaleco en tiempo real. Ordena tu SST.", "Casco, chaleco, guantes y gafas verificados en tiempo real, con alerta inmediata y trazabilidad para tu SG-SST. Así funciona la detección de EPP con IA en obras y fábricas de Bogotá, sin frenar la operación ni sumar reprocesos.", "Diagnóstico gratuito: revisamos tu obra o fábrica y te dejamos el plan de detección de EPP con IA. Escríbenos y agendamos."),
"cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": ("Cuánto cuesta instalar cámaras para negocio en Bogotá 2026: precios reales de 800 mil a 8 millones con IA y ROI. Cotiza con datos.", "Instalar cámaras en un negocio en Bogotá cuesta entre $800.000 y $8.000.000 en 2026, según los equipos, el grabador y el cableado. Aquí ves qué incluye cada propuesta y en qué punto conviene sumar IA para que el gasto se pague con datos.", "Diagnóstico gratuito: revisamos tu negocio y te dejamos la cotización con precios claros de 2026. Escríbenos y agendamos."),
"mejores-camaras-seguridad-local-comercial-bogota": ("Mejores cámaras para local comercial en Bogotá 2026: comparativa Hikvision y Dahua por tipo de negocio. Elige eficiencia, no precio.", "Bullet para la entrada, dome para el interior, PTZ donde hace falta mirada larga: aquí va qué modelo de Hikvision conviene según tu local en Bogotá y la luz real del sitio. El objetivo es que el equipo ordene la operación y reduzca errores sin pagar de más.", "Diagnóstico gratuito: revisamos tu local y te dejamos la lista de cámaras recomendadas por zona. Escríbenos y agendamos."),
"camaras-seguridad-bodega-bogota-monitoreo-inteligente": ("Cámaras para bodega en Bogotá con monitoreo inteligente e IA: intrusión, conteo y mapas de calor. Ordena tu logística con datos.", "Techos altos, movimiento constante y mercancía en tránsito: una bodega necesita detección perimetral, conteo y verificación nocturna, no más video sin revisar. Aquí ves cómo poner el monitoreo a decidir contigo desde el celular, con datos centralizados.", "Diagnóstico gratuito: revisamos tu bodega y te dejamos el plan de monitoreo inteligente con IA. Escríbenos y agendamos."),
"instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": ("Instalación de cámaras para negocio pequeño en Bogotá: guía paso a paso, ubicación y errores comunes. Instala orden desde el inicio.", "Para un negocio de 20 a 150 metros en Bogotá: cuántas cámaras comprar, dónde ponerlas, qué errores de altura y red evitar y cómo dejar listo el acceso remoto. Guía paso a paso para instalar orden desde el inicio y que el sistema crezca contigo.", "Diagnóstico gratuito: revisamos tu local y te dejamos el plan de instalación, ubicaciones incluidas. Escríbenos y agendamos."),
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
        return base + quote(fix_mojibake(cta_map[slug]), safe=""), "Agendar diagnóstico gratis"
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
    return base + quote(fix_mojibake(msg), safe=""), "Agendar diagnóstico gratis"



# Titulos de tag cortos (<=49 chars; la plantilla agrega " | Servicios APC" <=65 total)
TITLE_TAG = {
    "bot-whatsapp-ia-atencion-clientes-seguridad-bogota": "Bot WhatsApp con IA para empresas en Bogot\u00e1",
    "mejores-camaras-seguridad-local-comercial-bogota": "Mejores c\u00e1maras para local comercial en Bogot\u00e1",
    "seo-local-google-maps-empresas-seguridad-bogota": "SEO Local en Google Maps para empresas en Bogot\u00e1",
    "5-senales-camaras-no-protegen-empresa-bogota": "5 se\u00f1ales de que sus c\u00e1maras NO lo protegen",
    "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": "Anal\u00edtica de video con IA para cl\u00ednicas",
    "analitica-video-ia-ferreterias-bogota-caso-real-suba": "Anal\u00edtica de video con IA para ferreter\u00edas",
    "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": "CCTV con n8n: alertas a WhatsApp y CRM",
    "camaras-seguridad-bodega-bogota-monitoreo-inteligente": "C\u00e1maras para bodega en Bogot\u00e1 con IA",
    "costo-camaras-seguridad-empresas-2026-hardware-vs-ia": "Costo de c\u00e1maras para empresas en 2026",
    "cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": "Cu\u00e1nto cuesta instalar c\u00e1maras en Bogot\u00e1",
    "hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": "Hikvision vs Dahua vs Uniview en 2026",
    "instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": "C\u00e1maras para negocio peque\u00f1o en Bogot\u00e1",
    "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": "C\u00e1maras con IA vs sin IA: antes y despu\u00e9s",
    "que-es-analitica-video-ia-empresas-bogota": "Qu\u00e9 es la anal\u00edtica de video con IA",
    "deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": "Detecci\u00f3n de EPP con IA en obra y f\u00e1brica",
    "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": "Normativa de videovigilancia 2026 en Colombia",
    "servidores-edge-gpu-para-ia-video-analitica-bogota": "Servidores edge con GPU para videoanal\u00edtica",
    "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": "ColorVu vs AcuSense vs DeepinView en 2026",
    "guia-camaras-hikvision-ia-empresas-bogota-2026": "C\u00e1maras Hikvision + IA: gu\u00eda 2026",
}

_DANGLING = {"en","de","del","para","con","y","o","a","la","el","al","por","sin","que","se","lo","su","sus","un","una","es"}

def make_title_tag(slug, title):
    if slug in TITLE_TAG:
        return TITLE_TAG[slug]
    t = title.strip()
    if len(t) <= 49:
        return t
    t = t[:49]
    if " " in t:
        t = t.rsplit(" ", 1)[0]
    t = t.rstrip(" ,;:.-()")
    while " " in t and t.rsplit(" ", 1)[-1].lower().strip("()") in _DANGLING:
        t = t.rsplit(" ", 1)[0].rstrip(" ,;:.-()")
    return t

def build(slug, fm, body_html, cover, meta, intro40, cta, prev_link, next_link, cta_href, cta_label):
    title = fix_mojibake(fm.get("title", slug))
    date = fm.get("date", fm.get("publishDate", "2026-07-29"))
    cat = fix_mojibake(fm.get("category", "Guías"))
    tags = fix_mojibake(fm.get("tags", "camaras seguridad Bogota"))
    read = fm.get("readTime", "8 min")
    h = TEMPLATE
    h = h.replace("%%TITLE%%", html.escape(title))
    h = h.replace("%%TITLE_TAG%%", html.escape(make_title_tag(slug, title)))
    h = h.replace("%%META%%", html.escape(fix_mojibake(meta)))
    h = h.replace("%%SLUG%%", slug)
    h = h.replace("%%COVER%%", cover)
    h = h.replace("%%DATE%%", date)
    h = h.replace("%%CAT%%", html.escape(cat))
    h = h.replace("%%TAGS%%", html.escape(tags))
    h = h.replace("%%READ%%", html.escape(read))
    h = h.replace("%%INTRO40%%", html.escape(fix_mojibake(intro40)))
    h = h.replace("%%CTA%%", html.escape(fix_mojibake(cta)))
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
