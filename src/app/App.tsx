import { useState, useEffect } from "react";
import CristalChat from "./components/CristalChat";
import { CamarasNegocio } from "./pages/CamarasNegocio";
import { CamarasSuba } from "./pages/CamarasSuba";
import { CamarasKennedy } from "./pages/CamarasKennedy";
import { CamarasChapinero } from "./pages/CamarasChapinero";
import { CamarasUsaquen } from "./pages/CamarasUsaquen";
import { CamarasFontibon } from "./pages/CamarasFontibon";
import { CamerasInstalacion } from "./pages/CamerasInstalacion";
import { CamerasCasa } from "./pages/CamerasCasa";
import { CamerasPrecios } from "./pages/CamerasPrecios";
import { MantenimientoCamaras } from "./pages/MantenimientoCamaras";
import { ConsultorTecnologico } from "./pages/ConsultorTecnologico";
import { BlogLanding } from "./pages/BlogLanding";
import {
  Menu,
  X,
  Camera,
  MessageCircle,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  Users,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  Send,
  Video,
  Globe,
  LayoutDashboard,
  Server,
  WifiOff,
  Quote,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  FileText,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const services = [
  {
    id: "camaras",
    icon: Camera,
    color: "#c94a0a",
    title: "Analítica de Video con IA para Hikvision/Dahua",
    tagline: "Sus cámaras dejan de vigilar y empiezan a auditar.",
    description:
      "Reprogramamos sus cámaras Hikvision/Dahua RTSP/ONVIF actuales con módulos YOLO: conteo de personas, mapas de calor, arqueo de caja asistido, detección de intrusión y reportes automáticos. No necesita comprar hardware nuevo: su CCTV existente ya es compatible con la mayoría de modelos Hikvision 2018+. Integración a n8n para alertas en Telegram/Email/WhatsApp.",
    bullets: [
      "Conteo de personas y control de aforo en tiempo real",
      "Mapas de calor y ocupación por zonas (heatmaps)",
      "Arqueo de caja asistido por IA: video del cajón + monto",
      "Detección de intrusión y alertas 24/7 sin vigilar pantallas",
      "Se integra a su CCTV actual Hikvision/Dahua sin comprar hardware nuevo",
      "Alertas por Telegram, Email y WhatsApp vía n8n",
    ],
    image:
      "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Dashboard analítica de video IA sobre cámaras Hikvision",
  },
  {
    id: "cctv",
    icon: Video,
    color: "#0ea5e9",
    title: "Instalación CCTV Inteligente Hikvision en Bogotá",
    tagline: "Cobertura total, sin puntos ciegos, lista para IA.",
    description:
      "Planificamos e instalamos infraestructura CCTV profesional con cámaras Hikvision certificadas ya listas para analítica IA. Cableado estructurado, configuración RTSP/ONVIF, reprogramación de equipos existentes que cumplan estándar, cobertura 100% sin puntos ciegos. Soporte técnico presencial en Bogotá y remoto en toda Colombia. ¿Ya tiene Hikvision? Lo preparamos para IA sin cambiar cámaras.",
    bullets: [
      "Planificación y tendido de cableado profesional estructurado",
      "Cámaras Hikvision compatibles IA (RTSP/ONVIF) instaladas y configuradas",
      "Reprogramación de hardware existente Hikvision/Dahua que cumpla estándar",
      "Cobertura del 100% de puntos ciegos con mapas de calor",
      "Soporte técnico remoto y presencial en Bogotá",
      "Garantía extendida Hikvision + capa IA incluida",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Instalación profesional cámaras Hikvision con analítica IA",
  },
  {
    id: "bots",
    icon: MessageCircle,
    color: "#25d366",
    title: "Bots de WhatsApp con IA",
    tagline: "Atienda a sus clientes 24/7, sin contratar más personal.",
    description:
      "Desarrollamos bots de WhatsApp con identidad propia que responden, agendan citas, procesan pedidos y califican leads de forma automática. Desde un menú interactivo básico hasta ecosistemas con APIs, pagos y agendamiento. Se conectan a su CRM y a la analítica de video: si una cámara detecta aforo lleno, el bot avisa al gerente.",
    bullets: [
      "Atención automática 24 horas con IA conversacional",
      "Menú interactivo, catálogos y respuestas con IA",
      "Agendamiento de citas y pedidos integrados",
      "Calificación y seguimiento de leads automático",
      "Transferencia a agente humano cuando se necesita",
      "Integración con analítica de video: alertas de aforo → WhatsApp",
    ],
    image:
      "https://images.unsplash.com/photo-1636751364472-12bfad09b451?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Bot de WhatsApp para atención automática de clientes",
  },
  {
    id: "automatizacion",
    icon: Zap,
    color: "#7c3aed",
    title: "Automatización de Procesos (n8n + APIs)",
    tagline: "Menos trabajo manual, más resultados.",
    description:
      "Diseñamos flujos de trabajo indestructibles que conectan sus herramientas, eliminan tareas repetitivas y entregan reportes programados. Menos errores humanos, menos tiempo perdido, más control. Conectamos su CCTV, CRM, ERP y WhatsApp en un solo cerebro n8n.",
    bullets: [
      "Flujos automáticos e integraciones API (n8n self-hosted)",
      "Onboarding digital de clientes con validación IA",
      "CRM con seguimiento post-venta automatizado",
      "Reportes programados 24 horas vía Email/Telegram",
      "Notificaciones y alertas automáticas cruzadas",
      "Integración CCTV → Alerta → Acción (WhatsApp, CRM, Dashboard)",
    ],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Automatización de procesos empresariales con n8n",
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    color: "#f59e0b",
    title: "Dashboards e Integración de Datos",
    tagline: "Todos sus datos CCTV + CRM + ERP, en una sola pantalla.",
    description:
      "Centralizamos la información dispersa de su operación en tableros ejecutivos claros. Integramos su software contable, CRM, analítica de video Hikvision y herramientas para que la gerencia tome decisiones con datos, no con corazonadas. Mapas de calor, conteo histórico, arqueos, tickets WhatsApp: todo unificado.",
    bullets: [
      "Dashboards ejecutivos en tiempo real (Looker Studio / Grafana)",
      "Integración entre CCTV Hikvision, CRM, ERP y WhatsApp",
      "Bases de datos operativas centralizadas y replicadas",
      "Reportería automatizada (Looker / PDF / Telegram)",
      "Control de acceso a la información por roles",
      "Exportación a Excel/CSV para contabilidad",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Dashboard ejecutivo con métricas CCTV + CRM + ventas",
  },
  {
    id: "web",
    icon: Globe,
    color: "#10b981",
    title: "Desarrollo Web y SEO Local en Bogotá (DogWeb)",
    tagline: "Presencia digital que atrae clientes reales en Google Maps.",
    description:
      "Creamos sitios web resilientes y posicionamos su negocio donde sus clientes en Bogotá lo buscan: Google Maps y búsquedas locales de la ciudad. Desde landings hasta portales corporativos con bases de datos y SEO técnico. Conectamos el sitio a su CRM y WhatsApp: lead web → bot → cita → venta.",
    bullets: [
      "Sitios web corporativos y landings de alta conversión",
      "Posicionamiento en Google Maps / SEO local Bogotá",
      "Infraestructura web resiliente (Cloudflare + CDN)",
      "Formularios, bases de datos y CRM integrado",
      "Soporte y mantenimiento mensual incluido",
      "CTAs cruzados: Web → WhatsApp Bot → CCTV Demo",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Desarrollo web y posicionamiento SEO local en Bogotá",
  },
];

const ecosystem = [
  {
    domain: "apccore.site",
    name: "APC Core",
    description:
      "Sistemas de control, bases de datos operativas y tableros centralizados. El cerebro que une CCTV + IA + CRM.",
    icon: Server,
  },
  {
    domain: "apcautomatizacion.site",
    name: "APC Automatización",
    description:
      "Flujos n8n que conectan su CCTV Hikvision + WhatsApp + CRM + ERP. Alerta de intrusión → WhatsApp al gerente → Ticket en CRM.",
    icon: Zap,
  },
  {
    domain: "apcvisionai.site",
    name: "APC Visión AI",
    description:
      "Especialistas en analítica YOLO sobre Hikvision/Dahua: conteo, mapas de calor, arqueo de caja, detección PPE, intrusión perimetral.",
    icon: Camera,
  },
  {
    domain: "dogweb.lat",
    name: "DogWeb",
    description:
      "Desarrollo web, SEO local / Google Maps y resiliencia de red. Su web posicionada en Bogotá + formularios → WhatsApp Bot → Venta.",
    icon: Globe,
  },
];

const differentiators = [
  {
    icon: WifiOff,
    title: "Arquitectura resiliente (Offline-First)",
    description:
      "Si se corta el internet, su Hikvision + IA sigue grabando y analizando en local (conteo, intrusión, arqueo). Sincroniza al volver la señal. Nada se pierde.",
  },
  {
    icon: CheckCircle2,
    title: "Cero tecnicismos, solo datos accionables",
    description:
      "Reportes diarios limpios vía Email/Telegram/WhatsApp. No necesita saber de IA ni YOLO; solo leer: 'Arqueo OK', 'Aforo 78%', 'Intrusión 0'.",
  },
  {
    icon: Shield,
    title: "Hardware Hikvision reutilizable + IA",
    description:
      "No lo obligamos a comprar equipos costosos: reprogramamos su Hikvision/Dahua actual si cumple RTSP/ONVIF. Si necesita nuevo, instalamos Hikvision certificado IA-ready.",
  },
];

const cases = [
  {
    client: "Ferretería El Progreso",
    sector: "Ferretería · Suba, Bogotá",
    implementation:
      "Hikvision 4K ColorVu + IA YOLO: detección de placas vehiculares nocturnas, conteo de clientes, arqueo de caja asistido.",
    result:
      "Recuperaron 3 bultos robados en 48h gracias a placa legible a las 2am. Aforo optimizado en horas pico. Cero discrepancias en arqueos mensuales.",
  },
  {
    client: "Clínica Dental Sonrisa Viva",
    sector: "Salud · Chapinero, Bogotá",
    implementation:
      "Hikvision 2MP WDR + IA: control de aforo salas de espera, detección de caídas de pacientes, analítica de acceso a zonas restringidas (RX, esterilización).",
    result:
      "Cumplimiento normativo HIPAA/Ley 1581. Cero incidentes en zona RX. Alerta automática a enfermería ante caída (tiempo respuesta < 30 seg).",
  },
  {
    client: "Distribuidora Jone",
    sector: "Distribución · Bogotá",
    implementation:
      "Analítica YOLO sobre Hikvision existentes + CCTV nuevo en bodega + SEO local Google Maps + embudos conversión WhatsApp Bot.",
    result:
      "Visibilidad 100% puntos ciegos bodega. Aumento 340% cotizaciones orgánicas Bogotá. Bot WhatsApp atiende 80% consultas sin humano.",
  },
];

const faqs = [
  {
    q: "¿Tengo que cambiar todas las cámaras Hikvision de mi negocio para tener Inteligencia Artificial?",
    a: "No. Si sus cámaras Hikvision/Dahua actuales admiten RTSP u ONVIF (la mayoría desde 2018), las reprogramamos para inyectarles módulos YOLO sin gasto extra en hardware. Modelos Hikvision 2MP/4MP/4K ColorVu, AcuSense, DeepinView son 100% compatibles.",
  },
  {
    q: "¿Qué pasa si en el local se corta el internet o la luz?",
    a: "Nuestro ecosistema cuenta con arquitectura Offline-First: el procesamiento IA ocurre en local (edge) en su red. Si el internet se va por horas, el sistema sigue grabando, contando personas, detectando intrusos y arqueando cajas, y sincroniza automáticamente al recuperar la señal. Nada se pierde.",
  },
  {
    q: "¿La Inteligencia Artificial escucha conversaciones privadas de empleados o clientes?",
    a: "No. La IA de audio se activa solo bajo disparador específico (ej. sonido del cajón de la caja al abrirse) durante los segundos necesarios para documentar el monto. El resto de la jornada se protege la privacidad del equipo por diseño (privacy by design).",
  },
  {
    q: "¿Ustedes venden cámaras Hikvision o solo el software de IA?",
    a: "Ofrecemos ambas opciones: (1) Si ya tiene Hikvision/Dahua RTSP/ONVIF, solo instalamos la capa IA (analítica YOLO, alertas, dashboard). (2) Si necesita infraestructura nueva, instalamos CCTV Hikvision certificado IA-ready (ColorVu, AcuSense, DeepinView) + configuramos la analítica completa. Usted elige según su presupuesto.",
  },
  {
    q: "¿Cómo se ve el análisis de video con IA en tiempo real en mi celular?",
    a: "Recibe alertas por Telegram/Email/WhatsApp con clip de video del evento (intrusión, aforo excedido, arqueo discrepante) y accede a dashboard web con mapas de calor, conteo histórico, arqueos diarios y reportes automáticos. Todo desde su celular, sin apps extra: usa Telegram o WhatsApp.",
  },
  {
    q: "¿Qué modelos Hikvision recomiendan para analítica de video con IA?",
    a: "Para analítica YOLO recomendamos: (1) Hikvision ColorVu 4K/4MP — visión nocturna a color real, ideal para placas y rostros. (2) Hikvision AcuSense 2MP/4MP — filtrado falso positivo (persona/vehículo), costo/beneficio óptimo. (3) Hikvision DeepinView — IA embebida en cámara (conteo, PPE, cola), máxima precisión. Lo asesoramos según su caso y presupuesto.",
  },
  {
    q: "¿La analítica de video funciona con Dahua u otras marcas?",
    a: "Sí. Cualquier cámara que exponga stream RTSP u ONVIF Profile S/T/G es compatible. Dahua, Uniview, Axis, Hanwha, TP-Link VIGI: si tiene stream estándar, le inyectamos YOLO. La diferencia es que Hikvision ColorVu/AcuSense nos da mejor calidad de imagen nocturna para IA.",
  },
  {
    q: "¿Ustedes administran mi negocio o mi personal?",
    a: "No. Diseñamos, instalamos y mantenemos la infraestructura digital que automatiza su control. Le entregamos las herramientas exactas para que usted administre su empresa en minutos desde su celular, con datos claros y decisiones respaldadas. No supervisamos personal ni tomamos decisiones gerenciales.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Cámaras Hikvision que auditan, no solo vigilan",
    description:
      "YOLO convierte cada frame en dato accionable: conteo, intrusión, aforo, arqueo. Sus cámaras dejan de ser gasto pasivo y se convierten en centro de ganancia.",
  },
  {
    icon: Shield,
    title: "Offline-First: si se va el internet, la IA sigue",
    description:
      "Procesamiento edge en su red local. Sin internet, la IA sigue contando, detectando, arqueando. Sincroniza al volver la señal. Cero pérdida de datos.",
  },
  {
    icon: MessageCircle,
    title: "Alertas en Telegram/WhatsApp en segundos",
    description:
      "Intrusión, aforo excedido, arqueo discrepante: recibe clip de video + ubicación en Telegram/Email/WhatsApp al instante. Decides desde el celular.",
  },
  {
    icon: Clock,
    title: "Dashboard 24/7 sin vigilar pantallas",
    description:
      "Mapas de calor, conteo histórico, arqueos diarios, alertas configurables. Todo en un dashboard web accesible desde el celular. Cero tecnicismos.",
  },
  {
    icon: Users,
    title: "Hikvision ColorVu 4K: vea la placa a las 2 AM",
    description:
      "Instalamos ColorVu 4K / AcuSense / DeepinView. Visión nocturna a color real: vea placas, rostros, billetes en oscuridad total. No más 'cámaras borrosas'.",
  },
  {
    icon: CheckCircle2,
    title: "Su Hikvision actual ya sirve: sin comprar hardware nuevo",
    description:
      "RTSP/ONVIF estándar = compatible. La mayoría de Hikvision 2018+ ya sirven. Le inyectamos YOLO por red. Ahorro real: 0€ en cámaras nuevas si ya tiene compatibles.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [hash, setHash] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const seoMeta: Record<string, { title: string; description: string }> = {
    "negocio": {
      title: "Cámaras de Seguridad para Negocio en Bogotá | 500+ instalaciones",
      description: "Instalación de cámaras para negocio en Bogotá con IA. Hikvision ColorVu, analítica YOLO, aforo, arqueo y alertas WhatsApp. Desde $1.800.000. Cotiza gratis.",
    },
    "instalacion": {
      title: "Instalación de Cámaras de Seguridad en Bogotá | Hikvision Certificado",
      description: "Instalación profesional de cámaras de seguridad en Bogotá: cableado estructurado sin puntos ciegos, configuración remota y equipos IA-ready. Cotización con visita técnica.",
    },
    "casa": {
      title: "Cámaras para Instalar en Casa en Bogotá | Instalación el mismo día",
      description: "Cámaras para casa en Bogotá con visión nocturna a color y acceso desde el celular. Desde $600.000 por cámara, instalación el mismo día en toda la ciudad.",
    },
    "precios-camaras": {
      title: "Precios de Instalación de Cámaras de Seguridad en Bogotá 2026",
      description: "Cuánto cuesta instalar cámaras de seguridad en Bogotá: desde $1.800.000 para 4 cámaras con instalación. Precios cerrados, IVA incluido y cotización gratis.",
    },
    "mantenimiento-camaras": {
      title: "Mantenimiento de Cámaras de Seguridad en Bogotá | Preventivo y Correctivo",
      description: "Mantenimiento de cámaras de seguridad en Bogotá: preventivo, correctivo y supervisión remota para Hikvision/Dahua. Limpieza, firmware, cableado y configuración. Desde $180.000. Diagnóstico gratis.",
    },
    "consultor": {
      title: "Consultor Tecnológico para Empresas en Bogotá | Diagnóstico con ROI",
      description: "Consultor tecnológico en Bogotá: auditoría de seguridad CCTV con IA, automatización de procesos y dashboards. Diagnóstico gratis con implementación.",
    },
    "blog": {
      title: "Blog de Cámaras de Seguridad e IA | Servicios APC Bogotá",
      description: "Guías, comparativas y casos reales sobre CCTV Hikvision con inteligencia artificial en Bogotá: precios, instalación, analítica IA, automatización y seguridad empresarial.",
    },
  };

  useEffect(() => {
    const meta = seoMeta[hash];
    if (!meta) return;
    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description);
  }, [hash]);

  const landingPages: Record<string, () => JSX.Element> = {
    "negocio": CamarasNegocio,
    "suba": CamarasSuba,
    "kennedy": CamarasKennedy,
    "chapinero": CamarasChapinero,
    "usaquen": CamarasUsaquen,
    "fontibon": CamarasFontibon,
    "instalacion": CamerasInstalacion,
    "casa": CamerasCasa,
    "precios-camaras": CamerasPrecios,
    "mantenimiento-camaras": MantenimientoCamaras,
    "consultor": ConsultorTecnologico,
    "blog": BlogLanding,
  };

  const blogSlug = hash.startsWith("blog/") ? hash.slice("blog/".length) : null;
  const LandingPage = landingPages[hash];

  if (LandingPage || blogSlug) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
            <button onClick={() => { window.location.hash = ""; }} className="flex items-center gap-2.5">
              <img src="/logo.webp" alt="Servicios APC" className="h-8 w-auto" />
              <span className="text-foreground font-semibold text-sm hidden sm:block">Servicios APC</span>
            </button>
            <a href="https://wa.me/573337450634" target="_blank" rel="noopener noreferrer"
               className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              WhatsApp Gratis
            </a>
          </div>
        </nav>
        {blogSlug ? <BlogLanding slug={blogSlug} /> : <LandingPage />}
        <CristalChat />
      </div>
    );
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c5cdb094-a9cd-4e68-9041-2fafe475fff6",
          subject: "Nuevo mensaje desde serviciosapc.site",
          from_name: "Servicios APC Website",
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setError(
          "No pudimos enviar tu mensaje. Escríbenos por WhatsApp o inténtalo de nuevo."
        );
      }
    } catch {
      setError(
        "Error de conexión. Escríbenos por WhatsApp o inténtalo de nuevo."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-2.5"
          >
            <img
              src="/logo.webp"
              alt="Servicios APC"
              className="h-9 w-auto"
            />
            <span className="text-foreground font-semibold text-sm tracking-wide hidden sm:block">
              Servicios APC
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {[
              ["Servicios", "servicios"],
              ["Ecosistema", "ecosistema"],
              ["Casos", "casos"],
              ["Preguntas", "faq"],
              ["Quiénes somos", "nosotros"],
              ["Contacto", "contacto"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {label}
              </button>
            ))}
            <a
              href="#blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Blog
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/573337450634`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-2 text-sm font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-5 space-y-3">
            {[
              ["Servicios", "servicios"],
              ["Ecosistema", "ecosistema"],
              ["Casos", "casos"],
              ["Preguntas", "faq"],
              ["Quiénes somos", "nosotros"],
              ["Contacto", "contacto"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5"
              >
                {label}
              </button>
            ))}
            <a
              href="#blog"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-1.5"
            >
              Blog
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1782743549510-926bf57fc98c?w=1200&h=675&fit=crop&auto=format&fm=webp&q=40"
            alt="Ciudad moderna iluminada representando tecnología e innovación en Bogotá"
            className="w-full h-full object-cover opacity-25"
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
              Servicios APC · Bogotá, Colombia
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Cámaras de seguridad para empresas que piensan: Hikvision + IA en tiempo real.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              ¿Cuánto te costó la última vez que tu cámara Hikvision justo NO grabó? Desde Bogotá, convertimos sus cámaras Hikvision/Dahua actuales en auditores inteligentes 24/7: analítica YOLO, CCTV offline-first, bots WhatsApp 24/7 y SEO local. No vendemos cámaras borrosas. Instalamos pruebas 4K reales. Asesoría gratis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("servicios")}
                className="bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
              >
                Descubre cómo podemos ayudarte <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("contacto")}
                className="border border-border text-foreground px-8 py-4 font-medium hover:bg-secondary transition-colors"
              >
                Hablar con un asesor
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border">
              {[
                ["Control del dinero", "Auditoría con IA"],
                ["Offline-First", "Nunca se pierde nada"],
                ["Sin tecnicismos", "Reportes claros"],
              ].map(([label, sub]) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero side card */}
          <div className="hidden lg:block">
            <div className="border border-border bg-card/80 backdrop-blur-sm p-8 space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Nuestros servicios
              </p>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveService(i);
                      scrollTo("servicios");
                    }}
                    className="w-full flex items-center gap-4 p-4 border border-border hover:border-accent/30 hover:bg-secondary transition-all duration-200 text-left group"
                  >
                    <Icon
                      size={18}
                      style={{ color: s.color }}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">
                        {s.title}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {s.tagline}
                      </p>
                    </div>
                    <ChevronRight
                      size={14}
                      className="text-muted-foreground flex-shrink-0"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="servicios" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Nuestros Servicios
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Servicios de tecnología y automatización para empresas
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Soluciones tecnológicas diseñadas para empresas en Bogotá y toda
                Colombia que quieren operar mejor, reducir pérdidas y crecer con
                inteligencia.
              </p>
            </div>
          </div>

          {/* Accordion (lista desplegable) */}
          <div className="border-t border-border">
            {services.map((s, i) => {
              const Icon = s.icon;
              const open = activeService === i;
              return (
                <div key={s.id} className="border-b border-border">
                  {/* Header / toggle */}
                  <button
                    onClick={() => setActiveService(open ? -1 : i)}
                    aria-expanded={open}
                    className="w-full flex items-center gap-4 py-6 text-left group"
                  >
                    <Icon
                      size={22}
                      style={{ color: s.color }}
                      className="flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                        {s.title}
                      </h3>
                      <p
                        className="font-mono text-xs tracking-widest uppercase mt-1"
                        style={{ color: s.color }}
                      >
                        {s.tagline}
                      </p>
                    </div>
                    <ChevronRight
                      size={22}
                      className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {/* Panel */}
                  {open && (
                    <div className="pb-10 grid lg:grid-cols-2 gap-10 items-center">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {s.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {s.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-3 text-sm"
                            >
                              <CheckCircle2
                                size={15}
                                className="mt-0.5 flex-shrink-0"
                                style={{ color: s.color }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => scrollTo("contacto")}
                          className="flex items-center gap-2 font-medium text-sm px-6 py-3 border transition-colors hover:opacity-80"
                          style={{ borderColor: s.color, color: s.color }}
                        >
                          Solicitar información <ArrowRight size={14} />
                        </button>
                      </div>
                      <div className="relative order-first lg:order-last">
                        <div
                          className="bg-secondary h-2 w-full absolute -top-2 left-0"
                          style={{ backgroundColor: s.color, opacity: 0.3 }}
                        />
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          className="w-full aspect-[4/3] object-cover"
                          width={800}
                          height={560}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────── */}
      <section id="beneficios" className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Beneficios
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Beneficios de automatizar su empresa con Servicios APC
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Mejore la eficiencia y competitividad de su empresa con
                soluciones tecnológicas hechas para la realidad colombiana.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-secondary p-8 hover:bg-background transition-colors duration-200"
                >
                  <Icon size={24} className="text-accent mb-5" />
                  <h3 className="font-serif text-lg font-bold mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ────────────────────────────────── */}
      <section id="nosotros" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-accent/30"
                aria-hidden="true"
              />
              <img
                src="/alejandro-perfil.png"
                alt="Fundador de Servicios APC — experto en soluciones tecnológicas para empresas en Bogotá, Colombia"
                width={800}
                height={800}
                className="w-full object-cover aspect-square relative z-10"
                loading="lazy"
                decoding="async"
              />
              {/* Accent strip */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-accent px-6 py-4">
                <p className="text-accent-foreground font-mono text-xs tracking-widest uppercase">
                  Fundador — Servicios APC
                </p>
                <p className="text-accent-foreground/70 text-xs mt-0.5 font-mono">
                  Bogotá, Colombia
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-7">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Quiénes somos
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Empresa de tecnología con base en Bogotá.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Servicios APC</strong> es
                  una empresa de tecnología con sede en Bogotá (Cra. 52c
                  #39b-22). No vendemos tecnología por moda: diseñamos,
                  instalamos y mantenemos la infraestructura digital que le
                  devuelve el control de su dinero, su productividad y su
                  operación.
                </p>
                <p>
                  Nuestra presencia local nos permite ofrecer{" "}
                  <strong className="text-foreground">
                    soporte técnico presencial en Bogotá
                  </strong>{" "}
                  con respuesta rápida, y desplegar arquitectura y desarrollo
                  de forma remota para clientes en el resto de Colombia.
                </p>
                <p>
                  No administramos su negocio ni supervisamos a su personal. Le
                  entregamos las herramientas exactas para que usted administre
                  su empresa en minutos desde su celular, con datos claros y
                  decisiones respaldadas.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="border border-border p-6">
                  <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Misión
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Blindar la operación de cada negocio con infraestructura
                    digital resiliente y control automatizado, eliminando la
                    pérdida de dinero y el desorden — sin exigir conocimientos
                    técnicos al empresario.
                  </p>
                </div>
                <div className="border border-border p-6">
                  <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                    Visión
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ser el estándar de infraestructura digital indestructible en
                    Colombia y la región, donde cada cámara, cada flujo y cada
                    dato trabajan para proteger y hacer crecer el negocio.
                  </p>
                </div>
              </div>

              {/* Diferenciadores */}
              <div className="mt-10 pt-10 border-t border-border space-y-6">
                {differentiators.map((d) => {
                  const Icon = d.icon;
                  return (
                    <div key={d.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">
                          {d.title}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {d.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSISTEMA ───────────────────────────────────── */}
      <section id="ecosistema" className="py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Ecosistema APC
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Un ecosistema, todo bajo control
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Servicios APC integra cuatro líneas especializadas que se
                conectan entre sí para blindar cada frente de su operación.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {ecosystem.map((e) => {
              const Icon = e.icon;
              return (
                <a
                  key={e.domain}
                  href={`https://${e.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-secondary p-8 hover:bg-background transition-colors duration-200 block"
                >
                  <Icon size={24} className="text-accent mb-5" />
                  <h3 className="font-serif text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                    {e.name}
                  </h3>
                  <p className="font-mono text-xs text-accent mb-3 flex items-center gap-1">
                    <ExternalLink size={11} /> {e.domain}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {e.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Visitar sitio <ArrowRight size={12} />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CASOS DE ÉXITO ───────────────────────────────── */}
      <section id="casos" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Casos de éxito
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Casos de éxito de clientes en Bogotá
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Empresas de Bogotá que ya operan con más control y menos
                pérdidas gracias a la infraestructura de Servicios APC.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {cases.map((c) => (
              <div key={c.client} className="bg-background p-8">
                <Quote size={24} className="text-accent mb-5" />
                <h3 className="font-serif text-lg font-bold mb-1">
                  {c.client}
                </h3>
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-5">
                  {c.sector}
                </p>
                <p className="text-xs font-semibold text-foreground mb-1">
                  Implementación
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {c.implementation}
                </p>
                <p className="text-xs font-semibold text-foreground mb-1">
                  Resultado
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER FRASE ──────────────────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <picture>
          <source srcSet="/banner-frase.webp" type="image/webp" />
          <img
            src="/banner-frase.jpg"
            alt="De la seguridad aprendí a pensar más rápido y mis asistentes IA me conectan un segundo cerebro"
            width={1920}
            height={1097}
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section id="faq" className="py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Preguntas frecuentes
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Preguntas frecuentes
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Resolvemos las dudas más comunes sobre nuestra infraestructura,
                privacidad y funcionamiento sin tecnicismos.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto border-t border-border">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  >
                    <span className="font-serif text-lg font-bold group-hover:text-accent transition-colors">
                      {f.q}
                    </span>
                    <ChevronRight
                      size={20}
                      className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {open && (
                    <p className="text-muted-foreground leading-relaxed pb-6 -mt-1">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contacto" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left info */}
            <div className="lg:col-span-5">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Contacto
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Contacte a Servicios APC en Bogotá
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Cuéntanos tu necesidad. Te respondemos en menos de 24 horas
                hábiles con una propuesta concreta para tu empresa.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <a
                  href="https://wa.me/573337450634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors">
                    <Phone size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5">
                      Teléfono / WhatsApp
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      +57 333 7450634
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:serviciosapcsoporte@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors">
                    <Mail size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5">
                      Correo electrónico
                    </p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      serviciosapcsoporte@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-0.5">
                      Dirección
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Cra. 52c #39b-22, Bogotá
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/573337450634?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20soluciones%20tecnol%C3%B3gicas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-10 bg-[#25d366] text-white px-6 py-3 font-medium text-sm hover:bg-[#22c55e] transition-colors"
              >
                <MessageCircle size={15} />
                Escribir por WhatsApp ahora
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-7">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center border border-border p-12 text-center">
                  <CheckCircle2 size={48} className="text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Gracias por contactarnos. Te responderemos en menos de 24
                    horas hábiles.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-medium text-accent underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-border p-8 lg:p-10 space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nombre"
                        className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        required
                        value={form.nombre}
                        onChange={(e) =>
                          setForm({ ...form, nombre: e.target.value })
                        }
                        placeholder="Tu nombre"
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="tu@empresa.com"
                        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={(e) =>
                        setForm({ ...form, telefono: e.target.value })
                      }
                      placeholder="+57 333 745 0634"
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={(e) =>
                        setForm({ ...form, mensaje: e.target.value })
                      }
                      placeholder="¿Tiene Hikvision? ¿Necesita analítica? Cuéntenos..."
                      className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-accent text-accent-foreground py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={15} />
                    {sending ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  <p className="text-xs text-muted-foreground text-center font-mono">
                    Tu información es confidencial y no será compartida con terceros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 pb-10 border-b border-border">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/logo.webp" alt="Servicios APC" className="h-9 w-auto" />
                <span className="text-foreground font-semibold text-sm">
                  Servicios APC
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cámaras de seguridad para negocio y empresas con IA Hikvision. Analítica YOLO, CCTV offline-first, bots WhatsApp 24/7 y SEO local en Bogotá.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <a href="https://apcvisionai.site" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                  <Camera size={11} /> APC Visión AI — Analítica Hikvision
                </a>
                <span className="text-muted-foreground">·</span>
                <a href="https://apcautomatizacion.site" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                  <Zap size={11} /> APC Automatización — n8n + IA
                </a>
                <span className="text-muted-foreground">·</span>
                <a href="https://dogweb.lat" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                  <Globe size={11} /> DogWeb — Web + SEO Local
                </a>
                <span className="text-muted-foreground">·</span>
                <a href="https://apccore.site" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                  <Server size={11} /> APC Core — Infraestructura
                </a>
              </div>
            </div>

            {/* Hikvision Quick Links */}
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Hikvision + IA
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#servicios" onClick={() => { const i = services.findIndex(s => s.id === 'camaras'); setActiveService(i); scrollTo("servicios"); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Analítica YOLO para Hikvision
                  </a>
                </li>
                <li>
                  <a href="#servicios" onClick={() => { const i = services.findIndex(s => s.id === 'cctv'); setActiveService(i); scrollTo("servicios"); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Instalación Hikvision IA-ready
                  </a>
                </li>
                <li>
                  <a href="https://apcvisionai.site" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ExternalLink size={11} /> Ver APC Visión AI
                  </a>
                </li>
                <li>
                  <a href="https://www.hikvision.com/es/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ExternalLink size={11} /> Catálogo oficial Hikvision
                  </a>
                </li>
              </ul>
            </div>

            {/* Services links */}
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Servicios
              </p>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => {
                        const i = services.indexOf(s);
                        setActiveService(i);
                        scrollTo("servicios");
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight size={12} /> {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Internal navigation */}
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Páginas SEO
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#negocio" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Cámaras para Negocio
                  </a>
                </li>
                <li>
                  <a href="#instalacion" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Instalación de Cámaras
                  </a>
                </li>
                <li>
                  <a href="#casa" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Cámaras para Casa
                  </a>
                </li>
                <li>
                  <a href="#precios-camaras" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Precios Instalación
                  </a>
                </li>
                <li>
                  <a href="#consultor" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Consultor Tecnológico
                  </a>
                </li>
                {[
                  ["Suba", "suba"],
                  ["Kennedy", "kennedy"],
                  ["Chapinero", "chapinero"],
                  ["Usaquén", "usaquen"],
                  ["Fontibón", "fontibon"],
                ].map(([label, h]) => (
                  <li key={h}>
                    <a href={`#${h}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> Cámaras {label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Contacto
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={13} className="text-accent mt-0.5 flex-shrink-0" />
                  Cra. 52c #39b-22, Bogotá
                </li>
                <li>
                  <a
                    href="mailto:serviciosapcsoporte@gmail.com"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={13} className="text-accent flex-shrink-0" />
                    serviciosapcsoporte@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573337450634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone size={13} className="text-accent flex-shrink-0" />
                    +57 333 7450634
                  </a>
                </li>
                <li>
                  <a
                    href="https://search.google.com/local/writereview?placeid=ChIJ3YMe_3yfP44R1bbtdfSOqSQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors font-medium"
                  >
                    ⭐ Dejar reseña en Google
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.facebook.com/alejandropiraquiveapc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://www.instagram.com/serviciosapc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://www.linkedin.com/in/alejandropiraquive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="mb-8 pb-8 border-b border-border space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Aviso de privacidad y tratamiento de datos.</strong>{" "}
              En cumplimiento de la Ley 1581 de 2012 (Habeas Data), Servicios
              APC declara que todo flujo de video y audio capturado en las sedes
              de sus clientes tiene como única finalidad la auditoría
              transaccional de seguridad empresarial, excluyendo la difusión
              pública de material visual de terceros sin consentimiento.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Términos del servicio.</strong>{" "}
              Los módulos lógicos e integraciones en la nube operan bajo el
              marco de Arrendamiento de Software e Infraestructura Tecnológica
              como Servicio (SaaS). El control patrimonial, claves de seguridad
              y marcas pertenecen exclusivamente a Servicios APC y al titular de
              la infraestructura.
            </p>
            <a
              href="/documentos/Politica_Tratamiento_Datos_serviciosapc.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-1"
            >
              Descargar Política de Tratamiento de Datos Personales (PDF)
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © 2026 Servicios APC — Todos los derechos reservados
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              serviciosapc.site · Bogotá, Colombia
            </p>
          </div>
        </div>
      </footer>

      {/* Social float (right, para no tapar el boton Cristal a la izquierda) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://www.facebook.com/alejandropiraquiveapc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg"
        >
          <Facebook size={18} />
        </a>
        <a
          href="https://www.instagram.com/serviciosapc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg"
        >
          <Instagram size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/alejandropiraquive/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors shadow-lg"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://wa.me/573337450634"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-11 h-11 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:bg-[#22c55e] transition-colors shadow-lg"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      <CristalChat />
    </div>
  );
}
