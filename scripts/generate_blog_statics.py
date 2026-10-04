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
"guia-camaras-hikvision-ia-empresas-bogota-2026": ("C\u00e1maras Hikvision con IA para empresas en Bogot\u00e1: convierte video en conteo, aforo y reportes autom\u00e1ticos. Aprende a ordenar tu operaci\u00f3n.", "Este art\u00edculo explica c\u00f3mo convertir tus c\u00e1maras Hikvision actuales en un sistema de datos con IA YOLO en Bogot\u00e1, con conteo de personas, aforo, arqueo asistido y alertas a WhatsApp, operando en local para ordenar la operaci\u00f3n diaria sin cambiar todo.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y convierte tus c\u00e1maras en datos para decidir mejor. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"costo-camaras-seguridad-empresas-2026-hardware-vs-ia": ("Costo c\u00e1maras para empresas en Bogot\u00e1 2026: hardware vs capa IA que reutiliza tus equipos. Compara y optimiza tu inversi\u00f3n con datos.", "El art\u00edculo desglosa costos reales 2026 en Bogot\u00e1: solo capa IA que reutiliza tus c\u00e1maras desde 150 d\u00f3lares mensuales, frente a instalaci\u00f3n completa Hikvision m\u00e1s IA, con mantenimiento, licencias y retorno de inversi\u00f3n entre seis y doce meses.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y compara qu\u00e9 te conviene: solo IA o instalaci\u00f3n completa. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"que-es-analitica-video-ia-empresas-bogota": ("Qu\u00e9 es anal\u00edtica de video con IA para empresas en Bogot\u00e1: convierte frames en conteo y alertas \u00fatiles. Entiende c\u00f3mo funciona y apl\u00edcala.", "La anal\u00edtica de video con IA entiende lo que ve tu c\u00e1mara en Bogot\u00e1: detecta personas, veh\u00edculos, cascos o placas, genera conteos y alertas en segundos, funciona sin internet y convierte tus equipos actuales en datos \u00fatiles para decidir mejor.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y descubre qu\u00e9 datos puede generar tu sistema actual. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"5-senales-camaras-no-protegen-empresa-bogota": ("5 se\u00f1ales de que tus c\u00e1maras no generan datos en tu empresa en Bogot\u00e1: imagen borrosa, sin reportes. Diagnostica y ordena tu sistema.", "El art\u00edculo presenta cinco se\u00f1ales operativas de que tu CCTV en Bogot\u00e1 no genera valor: fallas de grabaci\u00f3n, imagen nocturna deficiente, puntos ciegos, arqueo manual y soporte lento, con soluciones de IA y hardware para ordenar el sistema.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y ordena tu sistema de c\u00e1maras con datos \u00fatiles. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": ("Negocio con c\u00e1maras con IA vs sin IA en Bogot\u00e1: comparativa visual antes y despu\u00e9s con datos, arqueo y mapas de calor. Mira el cambio.", "Compara el mismo negocio en Bogot\u00e1 antes y despu\u00e9s de sumar IA: de video borroso y revisi\u00f3n manual a placas legibles, arqueo asistido, mapas de calor, retenci\u00f3n inteligente y alertas a WhatsApp con tablero disponible en el celular.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y mira c\u00f3mo se ver\u00eda tu negocio con datos en tiempo real. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"analitica-video-ia-ferreterias-bogota-caso-real-suba": ("Anal\u00edtica de video con IA para ferreter\u00edas en Bogot\u00e1: caso Suba con control de accesos, arqueo asistido y mapas de calor. Inspira tu operaci\u00f3n.", "Presenta el caso de una ferreter\u00eda en Suba, Bogot\u00e1, que integr\u00f3 ColorVu 4K e IA YOLO para ordenar accesos, mejorar visibilidad nocturna, automatizar el arqueo de caja y usar mapas de calor para optimizar el layout y las ventas por zona.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y ordena tu ferreter\u00eda con arqueo y datos \u00fatiles. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": ("Anal\u00edtica de video con IA para cl\u00ednicas en Bogot\u00e1: cumplimiento, control de acceso y detecci\u00f3n de ca\u00eddas con datos. Organiza tu operaci\u00f3n cl\u00ednica.", "Explica c\u00f3mo las cl\u00ednicas en Bogot\u00e1 usan IA de video para ordenar el cumplimiento, detectar ca\u00eddas en menos de treinta segundos, verificar EPP en zonas cr\u00edticas y controlar accesos a farmacia y esterilizaci\u00f3n, todo operando en red local.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y ordena tu cl\u00ednica con cumplimiento y datos en tiempo real. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": ("Hikvision ColorVu vs AcuSense vs DeepinView en Bogot\u00e1 2026: cu\u00e1l genera mejores datos nocturnos y menos falsas alertas. Elige con criterio.", "Compara ColorVu para color nocturno real, AcuSense para filtrar falsas alarmas con mejor retorno y DeepinView con IA embebida en c\u00e1mara, para ayudarte en Bogot\u00e1 a elegir seg\u00fan placas, interiores o anal\u00edtica avanzada sin servidor adicional con criterio t\u00e9cnico probado.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y elige el modelo Hikvision ideal para tu operaci\u00f3n. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": ("Normativa videovigilancia Colombia 2026 Ley 1581 Habeas Data en Bogot\u00e1: checklist de cumplimiento y retenci\u00f3n. Ordena tus datos hoy.", "Resume la normativa 2026 para videovigilancia en Colombia: Ley 1581 de Habeas Data, Resoluci\u00f3n 1074 de SG-SST y C\u00f3digo Penal, con avisos obligatorios, retenci\u00f3n, derechos ARCO, sanciones y lista pr\u00e1ctica para operar tus c\u00e1maras en regla en Bogot\u00e1.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y verifica si tu sistema cumple la norma. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": ("Automatizaci\u00f3n CCTV con n8n en Bogot\u00e1: de alerta a WhatsApp, CRM y dashboard en minutos. Integra tus sistemas y ahorra tiempo.", "Muestra c\u00f3mo conectar tus c\u00e1maras en Bogot\u00e1 a n8n para enviar clips y alertas a WhatsApp, registrar eventos en CRM y visualizarlos en tablero, con l\u00f3gica condicional, reintentos autom\u00e1ticos y operaci\u00f3n local que ahorra integraciones manuales costosas todos los d\u00edas.", "Agenda un diagn\u00f3stico gratuito con Servicios APC e integra tus c\u00e1maras a WhatsApp y CRM. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"seo-local-google-maps-empresas-seguridad-bogota": ("SEO local en Google Maps para empresas en Bogot\u00e1: c\u00f3mo aparecer primero y duplicar cotizaciones con ficha optimizada. Mejora tu visibilidad.", "Explica c\u00f3mo optimizar tu ficha de Google Business Profile en Bogot\u00e1 con categor\u00edas, fotos, rese\u00f1as y publicaciones, para aparecer en el Map Pack local, recibir m\u00e1s llamadas y convertir b\u00fasquedas cercanas en cotizaciones constantes cada semana sin depender de voz a voz.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y mejora tu visibilidad en Google Maps. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"servidores-edge-gpu-para-ia-video-analitica-bogota": ("Servidores edge con GPU para videoanal\u00edtica en Bogot\u00e1: qu\u00e9 necesitas para procesar IA local sin nube. Dise\u00f1a tu infraestructura eficiente.", "Detalla qu\u00e9 servidor edge con GPU necesitas en Bogot\u00e1 para procesar YOLO en local: opciones NVIDIA, c\u00e1maras por equipo, latencia de milisegundos, privacidad total y punto de equilibrio frente a pagar nube mensual por cada c\u00e1mara conectada todos los d\u00edas.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y dise\u00f1a tu infraestructura edge eficiente. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": ("Hikvision vs Dahua vs Uniview con IA en Bogot\u00e1 2026: comparativa ONVIF, visi\u00f3n nocturna y compatibilidad YOLO. Elige con datos.", "Compara Hikvision, Dahua y Uniview en Bogot\u00e1 en IA de f\u00e1brica, compatibilidad ONVIF y RTSP con YOLO, visi\u00f3n nocturna y ecosistema total, para elegir c\u00e1maras que entreguen datos \u00fatiles y se integren sin quedar atado a software propietario.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y elige marca con datos, no por precio. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"bot-whatsapp-ia-atencion-clientes-seguridad-bogota": ("Bot WhatsApp con IA para empresas en Bogot\u00e1: atiende consultas 24/7, cotiza y reduce tiempo manual. Automatiza tu atenci\u00f3n hoy.", "Describe c\u00f3mo un bot de WhatsApp con IA en Bogot\u00e1 responde consultas, genera cotizaciones base y crea tickets autom\u00e1ticamente, operando veinticuatro siete, reduciendo tiempos de respuesta y liberando a tu equipo de mensajes repetitivos diarios para ordenar la atenci\u00f3n y vender m\u00e1s.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y automatiza tu atenci\u00f3n por WhatsApp. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": ("Detecci\u00f3n EPP con IA en construcci\u00f3n y f\u00e1brica en Bogot\u00e1: cumplimiento SG-SST con casco y chaleco en tiempo real. Ordena tu SST.", "Explica la detecci\u00f3n de EPP con IA en obras y f\u00e1bricas de Bogot\u00e1: casco, chaleco, guantes y gafas verificados en tiempo real, con alertas inmediatas y trazabilidad para cumplir SG-SST y reducir reprocesos en seguridad y salud laboral.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y ordena tu cumplimiento SG-SST con IA. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": ("Cu\u00e1nto cuesta instalar c\u00e1maras para negocio en Bogot\u00e1 2026: precios reales de 800 mil a 8 millones con IA y ROI. Cotiza con datos.", "Presenta precios reales 2026 en Bogot\u00e1 desde ochocientos mil pesos hasta ocho millones seg\u00fan c\u00e1maras, grabador y cableado, explica qu\u00e9 incluye cada propuesta y cu\u00e1ndo sumar IA para convertir el gasto en datos y retorno medible para tu negocio cada mes.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y cotiza tu sistema con precios claros. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"mejores-camaras-seguridad-local-comercial-bogota": ("Mejores c\u00e1maras para local comercial en Bogot\u00e1 2026: comparativa Hikvision y Dahua por tipo de negocio. Elige eficiencia, no precio.", "Gu\u00eda los tipos bullet, dome y PTZ para locales en Bogot\u00e1, con modelos Hikvision recomendados por entrada, interior y caja, criterios de resoluci\u00f3n y luz, para elegir el equipo que ordene la operaci\u00f3n y reduzca errores diarios sin pagar de m\u00e1s.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y elige la c\u00e1mara ideal para tu local. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"camaras-seguridad-bodega-bogota-monitoreo-inteligente": ("C\u00e1maras para bodega en Bogot\u00e1 con monitoreo inteligente e IA: intrusi\u00f3n, conteo y mapas de calor. Ordena tu log\u00edstica con datos.", "Propone soluciones con IA para bodegas en Bogot\u00e1 con techos altos y movimiento constante: detecci\u00f3n perimetral, conteo, mapas de calor y verificaci\u00f3n nocturna, para ordenar inventarios, reducir p\u00e9rdidas operativas y decidir con datos centralizados todos los d\u00edas desde tu celular.", "Agenda un diagn\u00f3stico gratuito con Servicios APC y ordena tu bodega con monitoreo inteligente. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
"instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": ("Instalaci\u00f3n de c\u00e1maras para negocio peque\u00f1o en Bogot\u00e1: gu\u00eda paso a paso, ubicaci\u00f3n y errores comunes. Instala orden desde el inicio.", "Gu\u00eda paso a paso para negocios de veinte a ciento cincuenta metros en Bogot\u00e1: cu\u00e1ntas c\u00e1maras comprar, d\u00f3nde ubicarlas, errores de altura y red, acceso remoto y mantenimiento, para instalar un sistema ordenado que crezca con tu negocio.", "Agenda un diagn\u00f3stico gratuito con Servicios APC e instala orden desde el inicio. Escr\u00edbenos al WhatsApp 333 745 0634 y cotiza ahora."),
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
        return base + quote(fix_mojibake(cta_map[slug]), safe=""), "Cotizar por WhatsApp"
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
    return base + quote(fix_mojibake(msg), safe=""), "Cotizar por WhatsApp"



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
