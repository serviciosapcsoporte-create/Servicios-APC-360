import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, MotionConfig, useMotionValue, useSpring } from "motion/react";
import CristalChat from "./components/CristalChat";
import MobileCTA from "./components/MobileCTA";
import { VideoHero } from "./components/VideoHero";
import { ErrorBoundary } from "../components/ErrorBoundary";
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
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  FileText,
  ClipboardCheck,
  Wrench,
  Package,
  Sparkles,
  Building2,
  Car,
  CreditCard,
  BadgeCheck,
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { cn } from "./components/ui/utils";

/* ─── CONSTANTES ─────────────────────────────────────────── */

const WHATSAPP = "https://wa.me/573337450634";

const waLink = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const WA_HERO = waLink(
  "Hola Servicios APC, quiero cotizar la instalación de cámaras de seguridad para mi negocio en Bogotá"
);

const fmtCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);

const SPRING = { type: "spring", bounce: 0, duration: 0.45 } as const;
const SPRING_SOFT = { type: "spring", bounce: 0.2, duration: 0.4 } as const;

/* ─── DATA ────────────────────────────────────────────────── */

const services = [
  {
    id: "camaras",
    icon: Camera,
    color: "#c94a0a",
    title: "Analítica de Video con IA para Hikvision/Dahua",
    tagline: "Sus cámaras dejan de vigilar y empiezan a auditar.",
    description:
      "Reprogramamos sus cámaras Hikvision/Dahua RTSP/ONVIF actuales con módulos YOLO: conteo de personas, mapas de calor, arqueo de caja asistido, detección de anomalías operativas y reportes automáticos. No necesita comprar hardware nuevo: su CCTV existente ya es compatible con la mayoría de modelos Hikvision 2018+. Integración a n8n para alertas en Telegram/Email/WhatsApp.",
    bullets: [
      "Conteo de personas y control de aforo en tiempo real",
      "Mapas de calor y ocupación por zonas (heatmaps)",
      "Arqueo de caja asistido por IA: video del cajón + monto",
      "Detección de anomalías operativas y alertas 24/7",
      "Se integra a su CCTV actual Hikvision/Dahua sin comprar hardware nuevo",
      "Alertas por Telegram, Email y WhatsApp vía n8n",
    ],
    image: "/blog-img/dashboard-ejecutivo.webp",
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
    image: "/blog-img/automatizacion-procesos.webp",
    imageAlt: "Instalación profesional cámaras Hikvision con analítica IA",
  },
];

const plans = [
  {
    id: "basico",
    name: "Básico 4C",
    cameras: "4 cámaras HD 4MP",
    price: 1800000,
    tagline: "Monitoreo HD local + acceso remoto.",
    features: [
      "4 cámaras HD 4MP + DVR 4 canales",
      "1 TB de almacenamiento",
      "Acceso remoto desde tu móvil",
      "Instalación y cableado incluidos",
      "Soporte 30 días",
    ],
    icon: Package,
    highlight: false,
  },
  {
    id: "profesional",
    name: "Profesional 8C ColorVu",
    cameras: "8 cámaras 4MP ColorVu",
    price: 3200000,
    tagline: "Visión nocturna a color 24/7 + audio bidireccional.",
    features: [
      "8 cámaras 4MP ColorVu + DVR 8 canales",
      "2 TB de almacenamiento",
      "Visión nocturna a color y audio bidireccional",
      "Alertas automáticas IA",
      "App móvil + escritorio",
      "Soporte 90 días",
    ],
    icon: Sparkles,
    highlight: true,
  },
  {
    id: "empresarial",
    name: "Empresarial IA 16C",
    cameras: "16 cámaras 4MP + analítica IA",
    price: 5600000,
    tagline: "Analítica de video, conteo y detección inteligente.",
    features: [
      "16 cámaras 4MP + NVR 16 canales PoE",
      "4 TB de almacenamiento RAID",
      "Analítica IA: conteo y detección inteligente",
      "Dashboard remoto 24/7",
      "Integración WhatsApp / CRM / n8n",
      "Soporte 6 meses",
    ],
    icon: Building2,
    highlight: false,
  },
];

const process = [
  {
    icon: ClipboardCheck,
    step: "Paso 1",
    title: "Diagnóstico",
    desc: "Evaluación de puntos ciegos y cableado en Bogotá.",
  },
  {
    icon: FileText,
    step: "Paso 2",
    title: "Propuesta",
    desc: "Cotización transparente a la medida en menos de 24 horas.",
  },
  {
    icon: Wrench,
    step: "Paso 3",
    title: "Instalación",
    desc: "Montaje técnico profesional con orden de cableado certificado.",
  },
  {
    icon: LayoutDashboard,
    step: "Paso 4",
    title: "Control Total",
    desc: "Configuración de app y entrega del panel operativo.",
  },
];

const cases = [
  {
    icon: Building2,
    client: "Distribuidora JONE",
    sector: "Distribución · Bogotá",
    metric: "24/7",
    result:
      "Infraestructura de CCTV HD, control de perímetros y mantenimiento preventivo continuo para una operación monitoreada sin interrupciones.",
  },
  {
    icon: Car,
    client: "Taller Excelencia Automotriz",
    sector: "Automotriz · Bogotá",
    metric: "Top 3",
    result:
      "CRM de atención B2B, panel de control operativo y financiero, y posicionamiento SEO orgánico activo — Top 3 en “Baterías Willard a domicilio”.",
  },
  {
    icon: Globe,
    client: "DogWeb.lat",
    sector: "Agencia digital · LATAM",
    metric: "SEO",
    result:
      "Despliegue de arquitectura web ágil y presencia digital B2B optimizada para motores de búsqueda.",
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
      "Especialistas en analítica YOLO sobre Hikvision/Dahua: conteo, mapas de calor, arqueo de caja, detección de anomalías, perímetros.",
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

const faqs = [
  {
    q: "¿Tengo que cambiar todas las cámaras Hikvision de mi negocio para tener Inteligencia Artificial?",
    a: "No. Si sus cámaras Hikvision/Dahua actuales admiten RTSP u ONVIF (la mayoría desde 2018), las reprogramamos para inyectarles módulos YOLO sin gasto extra en hardware. Modelos Hikvision 2MP/4MP/4K ColorVu, AcuSense, DeepinView son 100% compatibles.",
  },
  {
    q: "¿Qué pasa si en el local se corta el internet o la luz?",
    a: "Nuestro ecosistema cuenta con arquitectura Offline-First: el procesamiento IA ocurre en local (edge) en su red. Si el internet se va por horas, el sistema sigue grabando, contando personas, detectando anomalías y arqueando cajas, y sincroniza automáticamente al recuperar la señal. Nada se pierde.",
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
    a: "Recibe alertas por Telegram/Email/WhatsApp con clip de video del evento y accede a dashboard web con mapas de calor, conteo histórico, arqueos diarios y reportes automáticos. Todo desde su celular, sin apps extra: usa Telegram o WhatsApp.",
  },
  {
    q: "¿Qué modelos Hikvision recomiendan para analítica de video con IA?",
    a: "Para analítica YOLO recomendamos: (1) Hikvision ColorVu 4K/4MP — visión nocturna a color real, ideal para placas y rostros. (2) Hikvision AcuSense 2MP/4MP — filtrado de falsos positivos (persona/vehículo), costo/beneficio óptimo. (3) Hikvision DeepinView — IA embebida en cámara (conteo, cola), máxima precisión. Lo asesoramos según su caso y presupuesto.",
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
    title: "Cámaras que auditan, no solo vigilan",
    description:
      "YOLO convierte cada frame en dato accionable: conteo, anomalías, aforo, arqueo. Sus cámaras dejan de ser un gasto pasivo y se convierten en fuente de orden y eficiencia.",
  },
  {
    icon: Shield,
    title: "Offline-First: si se va el internet, el sistema sigue",
    description:
      "Procesamiento edge en su red local. Sin internet, la IA sigue contando, detectando y arqueando. Sincroniza al volver la señal. Cero pérdida de datos.",
  },
  {
    icon: MessageCircle,
    title: "Alertas en Telegram/WhatsApp en segundos",
    description:
      "Aforo excedido, arqueo discrepante o anomalía operativa: recibe clip de video + contexto en Telegram/Email/WhatsApp al instante. Decides desde el celular.",
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
      "RTSP/ONVIF estándar = compatible. La mayoría de Hikvision 2018+ ya sirven. Le inyectamos YOLO por red. Ahorro real: cero pesos en cámaras nuevas si ya tiene compatibles.",
  },
];

/* ─── PRIMITIVAS DE MOTION (Apple-style) ──────────────────── */

function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", bounce: 0, duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}

function Tilt({
  children,
  className,
  max = 1.8,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });
  const ry = useSpring(useMotionValue(0), { stiffness: 180, damping: 22 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={SPRING}
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 mb-16">
      <div className="lg:col-span-3">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase">
            {kicker}
          </p>
        </Reveal>
      </div>
      <div className="lg:col-span-9">
        <Reveal delay={0.06}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-[-0.02em] leading-[1.05]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            {desc}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

function WhatsAppChip({ label, href, small = false }: { label: string; href: string; small?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366]/90 text-white border border-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:bg-[#22c55e] transition-colors font-medium",
        small ? "px-4 py-2 text-sm" : "px-6 py-3.5 text-[15px]"
      )}
    >
      <MessageCircle size={small ? 15 : 17} />
      {label}
    </motion.a>
  );
}

/* Acordeón sin layout jank: anima grid-template-rows 0fr→1fr
   (CSS nativo, sin medir altura ni reflujo por frame). */
function AccordionPanel({
  open,
  children,
  className,
  durationMs = 300,
}: {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  durationMs?: number;
}) {
  return (
    <div
      className={cn(
        "grid",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        className
      )}
      style={{
        transitionProperty: "grid-template-rows, opacity",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "grid-template-rows",
      }}
      aria-hidden={!open}
    >
      <div className="overflow-hidden min-h-0">{children}</div>
    </div>
  );
}

/* ─── APP ──────────────────────────────────────────────────── */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    mensaje?: string;
  }>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(-1);
  const [cuotas, setCuotas] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [hash, setHash] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const seoMeta: Record<string, { title: string; description: string }> = {
    negocio: {
      title: "Cámaras de Seguridad para Negocio en Bogotá | 500+ instalaciones",
      description:
        "Instalación de cámaras para negocio en Bogotá con IA. Hikvision ColorVu, analítica YOLO, aforo, arqueo y alertas WhatsApp. Desde $1.800.000. Cotiza gratis.",
    },
    instalacion: {
      title: "Instalación de Cámaras de Seguridad en Bogotá | Hikvision Certificado",
      description:
        "Instalación profesional de cámaras de seguridad en Bogotá: cableado estructurado sin puntos ciegos, configuración remota y equipos IA-ready. Cotización con visita técnica.",
    },
    casa: {
      title: "Cámaras para Instalar en Casa en Bogotá | Instalación el mismo día",
      description:
        "Cámaras para casa en Bogotá con visión nocturna a color y acceso desde el celular. Desde $600.000 por cámara, instalación el mismo día en toda la ciudad.",
    },
    "precios-camaras": {
      title: "Precios de Instalación de Cámaras de Seguridad en Bogotá 2026",
      description:
        "Cuánto cuesta instalar cámaras de seguridad en Bogotá: desde $1.800.000 para 4 cámaras con instalación. Precios cerrados, IVA incluido y cotización gratis.",
    },
    "mantenimiento-camaras": {
      title: "Mantenimiento de Cámaras de Seguridad en Bogotá | Preventivo y Correctivo",
      description:
        "Mantenimiento de cámaras de seguridad en Bogotá: preventivo, correctivo y supervisión remota para Hikvision/Dahua. Limpieza, firmware, cableado y configuración. Desde $180.000. Diagnóstico gratis.",
    },
    consultor: {
      title: "Consultor Tecnológico para Empresas en Bogotá | Diagnóstico con ROI",
      description:
        "Consultor tecnológico en Bogotá: auditoría de seguridad CCTV con IA, automatización de procesos y dashboards. Diagnóstico gratis con implementación.",
    },
    blog: {
      title: "Blog de Cámaras de Seguridad e IA | Servicios APC Bogotá",
      description:
        "Guías, comparativas y casos reales sobre CCTV Hikvision con inteligencia artificial en Bogotá: precios, instalación, analítica IA, automatización y seguridad empresarial.",
    },
  };

  const landingPages: Record<string, () => React.ReactElement> = {
    negocio: () => <DynamicPage page="negocio" />,
    suba: () => <DynamicPage page="suba" />,
    kennedy: () => <DynamicPage page="kennedy" />,
    chapinero: () => <DynamicPage page="chapinero" />,
    usaquen: () => <DynamicPage page="usaquen" />,
    fontibon: () => <DynamicPage page="fontibon" />,
    instalacion: () => <DynamicPage page="instalacion" />,
    casa: () => <DynamicPage page="casa" />,
    "precios-camaras": () => <DynamicPage page="precios-camaras" />,
    "mantenimiento-camaras": () => <DynamicPage page="mantenimiento-camaras" />,
    consultor: () => <DynamicPage page="consultor" />,
    blog: () => <LazyBlog />,
  };

  const blogSlug = hash.startsWith("blog/") ? hash.slice("blog/".length) : null;
  const LandingPage = landingPages[hash];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validate = () => {
    const e: typeof errors = {};
    if (form.nombre.trim().length < 3)
      e.nombre = "Escribe tu nombre completo.";
    if (!validEmail(form.email.trim()))
      e.email = "El correo no parece válido.";
    if (form.mensaje.trim().length < 10)
      e.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
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

  if (LandingPage || blogSlug) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <nav className="sticky top-0 z-50 glass-nav">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
            <button
              onClick={() => {
                window.location.hash = "";
              }}
              className="press flex items-center gap-2.5"
            >
              <ImageWithFallback
                src="/logo.webp"
                alt="Servicios APC"
                className="h-8 w-auto"
              />
              <span className="text-foreground font-semibold text-sm hidden sm:block">
                Servicios APC
              </span>
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="press bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Cotizar
            </a>
          </div>
        </nav>
        {blogSlug ? <DynamicBlog slug={blogSlug} /> : <LandingPage />}
        <ErrorBoundary fallback={null}>
          <CristalChat />
        </ErrorBoundary>
        <MobileCTA ctaLabel="Cotizar por WhatsApp" />
      </div>
    );
  }

  const navItems: Array<[string, string]> = [
    ["Servicios", "servicios"],
    ["Planes", "planes"],
    ["Proceso", "proceso"],
    ["Casos", "casos"],
    ["Preguntas", "faq"],
    ["Nosotros", "nosotros"],
    ["Contacto", "contacto"],
  ];

  return (
    <MotionConfig reducedMotion="user">
      <ErrorBoundary>
        <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
        {/* ── NAV ─────────────────────────────────────────── */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 edge-fade ${
            scrolled ? "glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.35)]" : "bg-transparent border-b border-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("inicio")}
              className="press flex items-center gap-2.5"
            >
              <ImageWithFallback
                src="/logo.webp"
                alt="Servicios APC"
                className="h-9 w-auto"
              />
              <span className="text-foreground font-semibold text-sm tracking-wide hidden sm:block">
                Servicios APC
              </span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="press text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {label}
                </button>
              ))}
              <a
                href="#blog"
                className="press text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Blog
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.96 }}
                className="press bg-accent text-accent-foreground px-5 py-2 text-sm font-medium hover:bg-accent/90 transition-colors flex items-center gap-2 rounded-full"
              >
                <MessageCircle size={14} /> WhatsApp
              </motion.a>
            </div>

            <button
              className="press md:hidden text-foreground p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AccordionPanel
            open={mobileOpen}
            durationMs={280}
            className="md:hidden glass-nav border-t border-border/50"
          >
            <div className="px-6 py-5 space-y-3">
              {navItems.map(([label, id]) => (
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
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#25d366] text-white rounded-full px-5 py-2.5 text-sm font-medium"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </AccordionPanel>
        </nav>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section id="inicio" className="relative min-h-[92vh] flex items-center overflow-hidden vignette">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/reels-poster.webp"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
            style={{ filter: "brightness(0.78) contrast(1.06) saturate(1.12)", opacity: videoReady ? 1 : 0 }}
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoReady(true)}
            aria-hidden="true"
          >
            <source src="/videos/reels-10s.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.30)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/25" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 w-full">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="font-mono text-xs md:text-sm text-[#25d366] tracking-widest uppercase mb-6 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366]" />
              Hikvision + IA en Bogotá · Respuesta &lt; 30 min
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.05 }}
              className="font-serif font-bold text-foreground tracking-[-0.02em] leading-[1.05] text-[clamp(2.5rem,5vw,4.5rem)] mb-6"
            >
              Instalación de Cámaras de Seguridad e IA en Bogotá
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.1 }}
              className="text-foreground/85 text-lg md:text-xl leading-relaxed max-w-2xl mb-9"
            >
              Transformamos sistemas tradicionales en redes de monitoreo
              inteligente con visión artificial y control en tiempo real desde
              tu móvil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <WhatsAppChip label="Cotizar Instalación por WhatsApp" href={WA_HERO} />
              <button
                onClick={() => scrollTo("planes")}
                className="press inline-flex items-center gap-2 text-foreground/90 font-medium px-6 py-3.5 rounded-full border border-foreground/20 backdrop-blur-md hover:border-foreground/40 hover:bg-foreground/5 transition-colors text-[15px]"
              >
                Ver Planes y Precios 2026 <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="mt-14 flex items-center gap-5 flex-wrap"
            >
              {[
                "Monitoreo inteligente 24/7",
                "Control desde tu móvil",
                "IA offline-first",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={15} className="text-[#25d366]" /> {t}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.35 }}
            onClick={() => scrollTo("servicios")}
            aria-label="Bajar"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronRight size={22} className="rotate-90" />
            </motion.div>
          </motion.button>
        </section>

        {/* Trust strip */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                ["Tiempo de respuesta", "<30 min + soporte local"],
                ["Offline-First", "Nunca se pierde nada"],
                ["Sin tecnicismos", "Reportes claros"],
              ].map(([label, sub]) => (
                <Reveal key={label} y={10} delay={0.05}>
                  <div className="flex items-center gap-2.5">
                    <BadgeCheck size={16} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-xs text-muted-foreground">{sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ─────────────────────────────────────── */}
        <section id="servicios" className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Nuestros Servicios"
              title="Instalación de cámaras y analítica de video con IA"
              desc="Cámaras Hikvision certificadas, cableado profesional y analítica que convierte su video en datos: conteo, aforo, mapas de calor y arqueo de caja. Todo en Bogotá."
            />

            <Reveal>
              <div className="border-t border-border">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  const open = activeService === i;
                  return (
                    <div key={s.id} className="border-b border-border">
                      <button
                        onClick={() => setActiveService(open ? -1 : i)}
                        aria-expanded={open}
                        className="press w-full flex items-center gap-4 py-6 text-left group"
                      >
                        <Icon
                          size={22}
                          style={{ color: s.color }}
                          className="flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors tracking-[-0.01em]">
                            {s.title}
                          </h3>
                          <p
                            className="font-mono text-xs tracking-widest uppercase mt-1"
                            style={{ color: s.color }}
                          >
                            {s.tagline}
                          </p>
                        </div>
                        <motion.span
                          animate={{ rotate: open ? 90 : 0 }}
                          transition={SPRING_SOFT}
                          className="text-muted-foreground flex-shrink-0"
                        >
                          <ChevronRight size={22} />
                        </motion.span>
                      </button>

                      <AccordionPanel open={open} durationMs={320}>
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
                                <motion.a
                                  href={waLink(
                                    `Hola Servicios APC, quiero información sobre ${s.title}`
                                  )}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileTap={{ scale: 0.97 }}
                                  className="flex items-center gap-2 font-medium text-sm px-6 py-3 border transition-colors hover:opacity-80 rounded-full"
                                  style={{ borderColor: s.color, color: s.color }}
                                >
                                  Solicitar información <ArrowRight size={14} />
                                </motion.a>
                              </div>
                              <div className="relative order-first lg:order-last">
                                <div
                                  className="bg-secondary h-2 w-full absolute -top-2 left-0"
                                  style={{ backgroundColor: s.color, opacity: 0.3 }}
                                />
                                <ImageWithFallback
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
                          </AccordionPanel>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── BENEFICIOS ─────────────────────────────────────── */}
        <section id="beneficios" className="py-24 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Beneficios"
              title="Beneficios de automatizar su empresa con Servicios APC"
              desc="Mejore la eficiencia y competitividad de su empresa con soluciones tecnológicas hechas para la realidad colombiana."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <Reveal key={b.title} delay={(i % 3) * 0.08} className="bg-secondary">
                    <Tilt className="bg-secondary p-8 h-full hover:bg-background transition-colors duration-200">
                      <Icon size={24} className="text-accent mb-5" />
                      <h3 className="font-serif text-lg font-bold mb-3">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {b.description}
                      </p>
                    </Tilt>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PLANES & TRANSPARENCIA ─────────────────────────── */}
        <section id="planes" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Planes y Precios 2026"
              title="Precios transparentes, sin letra pequeña"
              desc="Instalación con cableado certificado, IVA incluido y soporte local en Bogotá. Elige pago único o cuotas."
            />

            <Reveal className="mb-10">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1 glass rounded-full p-1">
                  <button
                    onClick={() => setCuotas(false)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
                      !cuotas
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <CreditCard size={14} /> Pago único
                  </button>
                  <button
                    onClick={() => setCuotas(true)}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5",
                      cuotas
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Clock size={14} /> En cuotas
                  </button>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <BadgeCheck size={13} className="text-accent" /> IVA incluido ·
                  financiación directa
                </span>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {plans.map((p, i) => {
                const Icon = p.icon;
                const monthly = Math.round(p.price / 12 / 5000) * 5000;
                return (
                  <Reveal key={p.id} delay={i * 0.08} className="h-full">
                    <Tilt
                      max={1.5}
                      className={cn(
                        "glass-card rounded-2xl p-8 h-full flex flex-col relative overflow-hidden",
                        p.highlight &&
                          "ring-1 ring-[#25d366]/50 shadow-[0_20px_70px_rgba(37,211,102,0.15)]"
                      )}
                    >
                      {p.highlight && (
                        <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[#25d366]/15 border border-[#25d366]/30 px-3 py-1 text-[11px] font-semibold text-[#25d366]">
                          <Sparkles size={11} /> Más pedido
                        </span>
                      )}
                      <Icon size={26} className="text-accent mb-4" />
                      <h3 className="font-serif text-2xl font-bold tracking-[-0.01em]">
                        {p.name}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mt-1 mb-4">
                        {p.cameras}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {p.tagline}
                      </p>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={cuotas ? "cuotas" : "unico"}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                          className="mb-6"
                        >
                          {cuotas ? (
                            <div>
                              <p className="text-sm text-muted-foreground">12 cuotas de</p>
                              <p className="font-serif text-4xl font-bold tracking-[-0.02em]">
                                {fmtCOP(monthly)}
                                <span className="text-lg text-muted-foreground font-normal"> /mes</span>
                              </p>
                            </div>
                          ) : (
                            <p className="font-serif text-4xl font-bold tracking-[-0.02em]">
                              {fmtCOP(p.price)}
                            </p>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <ul className="space-y-3 text-sm mb-8 flex-1">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="mt-0.5 text-[#25d366] flex-shrink-0" />
                            <span className="text-foreground/85">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <WhatsAppChip
                        small
                        label="Cotizar este plan"
                        href={waLink(
                          `Hola Servicios APC, quiero cotizar el plan ${p.name} para mi negocio en Bogotá`
                        )}
                      />
                    </Tilt>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESO 4 PASOS ────────────────────────────────── */}
        <section id="proceso" className="py-24 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Proceso"
              title="Su proyecto en 4 pasos"
              desc="Un proceso claro y sin sorpresas, desde el primer diagnóstico hasta el control total desde su celular."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.step} delay={i * 0.09} className="h-full">
                    <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
                      <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-foreground/5 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-12 h-12 rounded-xl border border-[#25d366]/30 bg-[#25d366]/10 flex items-center justify-center mb-5">
                        <Icon size={20} className="text-[#25d366]" />
                      </div>
                      <p className="font-mono text-xs text-[#25d366] tracking-widest uppercase mb-1.5">
                        {p.step}
                      </p>
                      <h3 className="font-serif text-xl font-bold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15} className="mt-12 text-center">
              <p className="text-muted-foreground mb-5 text-sm">
                ¿Listo para empezar? Diagnóstico en Bogotá sin costo.
              </p>
              <WhatsAppChip label="Agendar diagnóstico gratis" href={waLink("Hola Servicios APC, quiero agendar un diagnóstico gratuito para mi negocio en Bogotá")} />
            </Reveal>
          </div>
        </section>

        {/* ── CASOS DE ÉXITO ─────────────────────────────────── */}
        <section id="casos" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Casos de éxito"
              title="Resultados que se ven en el día a día"
              desc="Clientes en Bogotá y LATAM que ya operan con más control, orden y datos gracias a la infraestructura de Servicios APC."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {cases.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.client} delay={i * 0.09} className="h-full">
                    <Tilt className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl border border-accent/30 bg-accent/10 flex items-center justify-center">
                          <Icon size={20} className="text-accent" />
                        </div>
                        <span className="rounded-full bg-foreground/5 border border-foreground/10 px-3 py-1 font-mono text-[11px] text-accent">
                          {c.metric}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-1">{c.client}</h3>
                      <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
                        {c.sector}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.result}
                      </p>
                    </Tilt>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ECOSISTEMA ─────────────────────────────────────── */}
        <section id="ecosistema" className="py-24 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Ecosistema APC"
              title="Un ecosistema, todo bajo control"
              desc="Servicios APC integra cuatro líneas especializadas que se conectan entre sí para blindar cada frente de su operación."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {ecosystem.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.domain} delay={(i % 4) * 0.06} className="bg-secondary">
                    <motion.a
                      href={`https://${e.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileTap={{ scale: 0.98 }}
                      transition={SPRING}
                      className="group bg-secondary p-8 hover:bg-background transition-colors duration-200 block h-full"
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
                    </motion.a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NOSOTROS ───────────────────────────────────────── */}
        <section id="nosotros" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <Reveal className="lg:col-span-5">
                <div className="relative">
                  <div
                    className="absolute -top-4 -left-4 w-full h-full border border-accent/30"
                    aria-hidden="true"
                  />
                  <picture>
                    <source srcSet="/servicios-apc.webp" type="image/webp" />
                    <ImageWithFallback
                      src="/servicios-apc.jpeg"
                      alt="Tecnología — Servicios APC"
                      width={1600}
                      height={900}
                      className="w-full object-cover aspect-video relative z-10"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-accent px-6 py-4">
                    <p className="text-accent-foreground font-mono text-xs tracking-widest uppercase">
                      Tecnología — Servicios APC
                    </p>
                    <p className="text-accent-foreground/70 text-xs mt-0.5 font-mono">
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <Reveal>
                  <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                    Quiénes somos
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-[1.05] tracking-[-0.02em]">
                    Empresa de tecnología con base en Bogotá.
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Servicios APC</strong>{" "}
                      es una empresa de tecnología con sede en Bogotá (Cra. 52c
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
                      No administramos su negocio ni supervisamos a su personal.
                      Le entregamos las herramientas exactas para que usted
                      administre su empresa en minutos desde su celular, con datos
                      claros y decisiones respaldadas.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    <div className="border border-border p-6">
                      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                        Misión
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Poner la operación de cada negocio bajo control con
                        infraestructura digital resiliente y automatización,
                        eliminando el desorden y las fugas de tiempo y dinero — sin
                        exigir conocimientos técnicos al empresario.
                      </p>
                    </div>
                    <div className="border border-border p-6">
                      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                        Visión
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ser el estándar de infraestructura digital indestructible en
                        Colombia y la región, donde cada cámara, cada flujo y cada
                        dato trabajan para ordenar y hacer crecer el negocio.
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-10 pt-10 border-t border-border space-y-6">
                  {differentiators.map((d, i) => {
                    const Icon = d.icon;
                    return (
                      <Reveal key={d.title} delay={i * 0.05}>
                        <div className="flex items-start gap-4">
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
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ────────────────────────────────────────────── */}
        <section id="faq" className="py-24 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Preguntas frecuentes"
              title="Preguntas frecuentes"
              desc="Resolvemos las dudas más comunes sobre nuestra infraestructura, privacidad y funcionamiento sin tecnicismos."
            />

            <div className="max-w-3xl mx-auto border-t border-border">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} className="border-b border-border">
                    <button
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                      className="press w-full flex items-center justify-between gap-4 py-6 text-left group"
                    >
                      <span className="font-serif text-lg font-bold group-hover:text-accent transition-colors">
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={SPRING_SOFT}
                        className="text-muted-foreground flex-shrink-0"
                      >
                        <ChevronRight size={20} />
                      </motion.span>
                    </button>
                    <AccordionPanel open={open} durationMs={280}>
                          <p className="text-muted-foreground leading-relaxed pb-6 -mt-1">
                            {f.a}
                          </p>
                        </AccordionPanel>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CONTACTO ───────────────────────────────────────── */}
        <section id="contacto" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <Reveal>
                  <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                    Contacto
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-[1.05] tracking-[-0.02em]">
                    Contacte a Servicios APC en Bogotá
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    Cuéntanos tu necesidad. Te respondemos en menos de 24 horas
                    hábiles con una propuesta concreta para tu empresa.
                  </p>
                </Reveal>

                <div className="space-y-5">
                  <Reveal delay={0.14}>
                    <a
                      href={WHATSAPP}
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
                  </Reveal>
                  <Reveal delay={0.17}>
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
                  </Reveal>
                  <Reveal delay={0.2}>
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
                  </Reveal>
                </div>

                <Reveal delay={0.22}>
                  <WhatsAppChip
                    label="Escribir por WhatsApp ahora"
                    href={WA_HERO}
                    className="mt-10"
                  />
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={0.08}>
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={SPRING}
                      className="h-full flex flex-col items-center justify-center border border-border p-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0.6 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      >
                        <CheckCircle2 size={48} className="text-accent mb-4" />
                      </motion.div>
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
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      noValidate
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
                            value={form.nombre}
                            onChange={(e) => {
                              setForm({ ...form, nombre: e.target.value });
                              if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                            }}
                            placeholder="Tu nombre"
                            aria-invalid={!!errors.nombre}
                            className={cn(
                              "w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors",
                              errors.nombre ? "border-red-500" : "border-border"
                            )}
                          />
                          {errors.nombre && (
                            <p className="text-xs text-red-500 mt-1.5">{errors.nombre}</p>
                          )}
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
                            value={form.email}
                            onChange={(e) => {
                              setForm({ ...form, email: e.target.value });
                              if (errors.email) setErrors({ ...errors, email: undefined });
                            }}
                            placeholder="tu@empresa.com"
                            aria-invalid={!!errors.email}
                            className={cn(
                              "w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors",
                              errors.email ? "border-red-500" : "border-border"
                            )}
                          />
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                          )}
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
                          rows={5}
                          value={form.mensaje}
                          onChange={(e) => {
                            setForm({ ...form, mensaje: e.target.value });
                            if (errors.mensaje) setErrors({ ...errors, mensaje: undefined });
                          }}
                          placeholder="¿Tiene Hikvision? ¿Necesita analítica? Cuéntenos..."
                          aria-invalid={!!errors.mensaje}
                          className={cn(
                            "w-full bg-background border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none",
                            errors.mensaje ? "border-red-500" : "border-border"
                          )}
                        />
                        {errors.mensaje && (
                          <p className="text-xs text-red-500 mt-1.5">{errors.mensaje}</p>
                        )}
                      </div>

                      {error && (
                        <p className="text-sm text-red-500 text-center">{error}</p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={sending}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-accent text-accent-foreground py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl"
                      >
                        <Send size={15} />
                        {sending ? "Enviando..." : "Enviar mensaje"}
                      </motion.button>

                      <p className="text-xs text-muted-foreground text-center font-mono">
                        Tu información es confidencial y no será compartida con
                        terceros.
                      </p>
                    </form>
                  )}
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOG EN LANDING ─────────────────────────────────── */}
        <section id="blog" className="relative py-24 overflow-hidden">
          <VideoHero
            title="Blog de Cámaras IA y Automatización"
            subtitle="Guías, casos reales y novedades sobre analítica de video con IA, CCTV Hikvision, bots WhatsApp y automatización de procesos para empresas en Bogotá."
            ctaLabel="Ver todos los artículos"
            onCta={() => { window.location.hash = "blog"; }}
            className="absolute inset-0 z-0"
            overlayClassName="bg-black/80"
            videoClassName="object-cover"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4 text-center">
                Artículos y Recursos
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 leading-[1.05] tracking-[-0.02em]">
                Lo último en IA, CCTV y Automatización
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
                Guías técnicas, casos reales y comparativas para que tus cámaras generen datos,
                no solo grabaciones.
              </p>
            </Reveal>

            {/* ── 4 CATEGORÍAS PRINCIPALES ── */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <CategoryCard
                image="/blog-img/cctv-ia-bogota.webp"
                title="CCTV + IA Bogotá"
                desc="Analítica de video con Hikvision DeepinView: conteo, PPE, calor, ANPR."
                href="/blog/category/cctv-ia"
              />
              <CategoryCard
                image="/blog-img/automatizacion-n8n.webp"
                title="Automatización n8n + IA"
                desc="Flujos WhatsApp, CRM, dashboards y alertas sin código con n8n."
                href="/blog/category/automatizacion"
              />
              <CategoryCard
                image="/blog-img/control-acceso.webp"
                title="Control de Acceso + Nómina"
                desc="Biometría, ANPR, torniquetes integrados a nómina y RRHH."
                href="/blog/category/control-acceso"
              />
              <CategoryCard
                image="/blog-img/diagnostico-b2b.webp"
                title="Diagnóstico B2B Gratis"
                desc="Auditoría de 1-2h sin costo si implementas. ROI medido en semanas."
                href="/blog/category/diagnostico"
              />
            </div>

            {/* ── 3 ARTÍCULOS RECIENTES ── */}
            <Reveal>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">
                Artículos recientes
              </h3>
            </Reveal>
            <RecentArticlesGrid />
          </div>
        </section>

        {/* ── CTA FINAL BANNER ───────────────────────────────── */}
        <section className="py-20 relative overflow-hidden vignette">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#25d366]/10" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                ¿Listo para poner tus cámaras a trabajar con IA?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Diagnóstico gratuito en Bogotá. Cotización a la medida en menos
                de 24 horas.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppChip label="Cotizar por WhatsApp" href={WA_HERO} />
                <button
                  onClick={() => scrollTo("planes")}
                  className="press inline-flex items-center gap-2 text-foreground/90 font-medium px-6 py-3.5 rounded-full border border-foreground/20 backdrop-blur-md hover:border-foreground/40 hover:bg-foreground/5 transition-colors"
                >
                  Ver planes <ArrowRight size={15} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────── */}
        <footer className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 pb-10 border-b border-border">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <ImageWithFallback src="/logo.webp" alt="Servicios APC" className="h-9 w-auto" />
                  <span className="text-foreground font-semibold text-sm">
                    Servicios APC
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Automatización e IA para empresas en Bogotá. Instalación de
                  CCTV Hikvision, analítica de video con IA, bots WhatsApp 24/7,
                  dashboards y SEO local. Soporte &lt;30 min.
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

              <div>
                <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                  Hikvision + IA
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#servicios" onClick={() => { setActiveService(services.findIndex((s) => s.id === "camaras")); scrollTo("servicios"); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> Analítica YOLO para Hikvision
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" onClick={() => { setActiveService(services.findIndex((s) => s.id === "cctv")); scrollTo("servicios"); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
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
                  <li>
                    <a href="#planes" onClick={() => scrollTo("planes")} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> Planes y Precios 2026
                    </a>
                  </li>
                </ul>
              </div>

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
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-left"
                      >
                        <ChevronRight size={12} /> {s.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

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
                    <a href="mailto:serviciosapcsoporte@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Mail size={13} className="text-accent flex-shrink-0" />
                      serviciosapcsoporte@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
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

        {/* ── SOCIAL FLOAT ───────────────────────────────────── */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          <div className="flex flex-col gap-2.5">
            {[
              ["https://www.facebook.com/alejandropiraquiveapc", Facebook, "Facebook"],
              ["https://www.instagram.com/serviciosapc", Instagram, "Instagram"],
              ["https://www.linkedin.com/in/alejandropiraquive/", Linkedin, "LinkedIn"],
            ].map(([href, Icon, label]) => (
              <a
                key={label as string}
                href={href as string}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label as string}
                className="press w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                {(() => {
                  const I = Icon as typeof Facebook;
                  return <I size={16} />;
                })()}
              </a>
            ))}
          </div>

          <motion.a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.93 }}
            aria-label="Cotizar por WhatsApp"
            className="relative w-14 h-14 rounded-full bg-[#25d366]/95 border border-white/20 shadow-[0_10px_40px_rgba(37,211,102,0.45)] flex items-center justify-center backdrop-blur-md"
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25d366]/45"
              animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <MessageCircle size={22} className="relative text-white" />
              <span className="hidden md:inline text-sm font-medium">Cotizar</span>
          </motion.a>
        </div>

        <ErrorBoundary fallback={null}>
          <CristalChat />
        </ErrorBoundary>
        <MobileCTA ctaLabel="Cotizar por WhatsApp" />
      </div>
    </ErrorBoundary>
    </MotionConfig>
  );
}

/* ─── Componentes de la sección Blog en Landing ─── */

interface CategoryCardProps {
  image: string;
  title: string;
  desc: string;
  href: string;
}

function CategoryCard({ image, title, desc, href }: CategoryCardProps) {
  return (
    <a
      href={href}
      className="press group relative rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl p-6 hover:border-accent/30 hover:bg-background transition-all duration-300"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
        <ImageWithFallback
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </a>
  );
}

function RecentArticlesGrid() {
  // 3 artículos más recientes (hardcoded para evitar bundle pesado)
  const posts = [
    {
      slug: "guia-camaras-hikvision-ia-empresas-bogota-2026",
      title: "Guía Hikvision IA 2026: ColorVu, AcuSense y DeepinView para empresas",
      excerpt: "Comparativa completa de líneas Hikvision con IA integrada para empresas en Bogotá: precios, analítica y casos de uso.",
      date: "2026-07-20",
      category: "CCTV + IA",
      readTime: "8 min",
      coverImage: "/blog-img/guia-camaras-hikvision-ia-empresas-bogota-2026.webp",
    },
    {
      slug: "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard",
      title: "Automatización n8n + CCTV: alertas WhatsApp, CRM y dashboard en tiempo real",
      excerpt: "Cómo conectar tus cámaras Hikvision a n8n para disparar alertas, crear tickets y poblar dashboards sin programar.",
      date: "2026-07-15",
      category: "Automatización",
      readTime: "6 min",
      coverImage: "/blog-img/automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard.webp",
    },
    {
      slug: "que-es-analitica-video-ia-empresas-bogota",
      title: "¿Qué es analítica de video con IA? Guía para empresas en Bogotá",
      excerpt: "Definición, casos de uso (conteo, PPE, calor, ANPR) y cómo elegir proveedor Hikvision/Dahua/Uniview en Colombia.",
      date: "2026-07-10",
      category: "Analítica IA",
      readTime: "7 min",
      coverImage: "/blog-img/que-es-analitica-video-ia-empresas-bogota.webp",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, i) => (
        <article
          key={post.slug}
          className="press group relative rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(37,211,102,0.1)] transition-all duration-300"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="relative aspect-video overflow-hidden">
            <ImageWithFallback
              src={post.coverImage}
              alt={post.title}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span
              className="absolute top-3 left-3 text-xs font-medium text-accent px-2 py-1 rounded bg-black/80 backdrop-blur"
            >
              {post.category}
            </span>
          </div>
          <div className="p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" })}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}/`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-2"
            >
              Leer artículo completo
              <ChevronRight size={14} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ─── Wrappers dinámicos (Carga diferida de páginas hash) ─── */

function DynamicPage({ page }: { page: string }) {
  const map: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    negocio: () => import("./pages/CamarasNegocio").then((m) => ({ default: m.CamarasNegocio })),
    suba: () => import("./pages/CamarasSuba").then((m) => ({ default: m.CamarasSuba })),
    kennedy: () => import("./pages/CamarasKennedy").then((m) => ({ default: m.CamarasKennedy })),
    chapinero: () => import("./pages/CamarasChapinero").then((m) => ({ default: m.CamarasChapinero })),
    usaquen: () => import("./pages/CamarasUsaquen").then((m) => ({ default: m.CamarasUsaquen })),
    fontibon: () => import("./pages/CamarasFontibon").then((m) => ({ default: m.CamarasFontibon })),
    instalacion: () => import("./pages/CamerasInstalacion").then((m) => ({ default: m.CamerasInstalacion })),
    casa: () => import("./pages/CamerasCasa").then((m) => ({ default: m.CamerasCasa })),
    "precios-camaras": () => import("./pages/CamerasPrecios").then((m) => ({ default: m.CamerasPrecios })),
    "mantenimiento-camaras": () => import("./pages/MantenimientoCamaras").then((m) => ({ default: m.MantenimientoCamaras })),
    consultor: () => import("./pages/ConsultorTecnologico").then((m) => ({ default: m.ConsultorTecnologico })),
  };
  const loader = map[page] ?? map["consultor"];
  const Comp = lazy(loader);
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center p-6">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-medium mb-2">No se pudo cargar la página</p>
            <p className="text-sm">Intenta recargar o vuelve al <a href="/" className="text-accent underline">inicio</a>.</p>
          </div>
        </div>
      }
    >
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Comp />
      </Suspense>
    </ErrorBoundary>
  );
}

function DynamicBlog({ slug }: { slug: string }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center p-6">
          <div className="text-center text-muted-foreground">
            <p className="text-lg font-medium mb-2">No se pudo cargar el blog</p>
            <p className="text-sm">Intenta recargar o vuelve al <a href="/" className="text-accent underline">inicio</a>.</p>
          </div>
        </div>
      }
    >
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <LazyBlog slug={slug} />
      </Suspense>
    </ErrorBoundary>
  );
}

const LazyBlog = lazy(() =>
  import("./pages/BlogLanding").then((m) => ({ default: m.BlogLanding }))
);