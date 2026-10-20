import { lazy, Suspense, useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, MotionConfig, useMotionValue, useSpring } from "motion/react";
import CristalChat from "./components/CristalChat";
import LazyMount from "./components/LazyMount";
import MobileCTA from "./components/MobileCTA";
import { VideoHero } from "./components/VideoHero";
import { SOCIALS, WhatsAppLogo } from "./components/SocialIcons";
import { WhatsAppCTA, ChipCTA } from "./components/WhatsAppCTA";
import { ErrorBoundary } from "../components/ErrorBoundary";
import {
  Menu,
  X,
  Camera,
  Zap,
  Shield,
  Users,
  ArrowRight,
  MapPin,
  Mail,
  ChevronRight,
  CheckCircle2,
  Send,
  Video,
  Globe,
  LayoutDashboard,
  Server,
  WifiOff,
  ExternalLink,
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

/* â”€â”€â”€ CONSTANTES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const WHATSAPP = "https://wa.me/573337450634";

const waLink = (msg: string) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`;

const WA_HERO = waLink(
  "Hola Servicios APC, quiero cotizar la instalaciÃ³n de cÃ¡maras de seguridad para mi negocio en BogotÃ¡"
);

const WA_HERO_ESTUDIO = waLink(
  "Hola Servicios APC, quiero agendar el estudio de seguridad gratis y cotizar la instalaciÃ³n de cÃ¡maras de seguridad e IA en BogotÃ¡"
);

const fmtCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(n);

const SPRING = { type: "spring", bounce: 0, duration: 0.45 } as const;
const SPRING_SOFT = { type: "spring", bounce: 0.2, duration: 0.4 } as const;

/* â”€â”€â”€ DATA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const services = [
  {
    id: "camaras",
    icon: Camera,
    color: "#c94a0a",
    title: "AnalÃ­tica de Video con IA para Hikvision/Dahua",
    tagline: "Sus cÃ¡maras dejan de vigilar y empiezan a auditar.",
    description:
      "Reprogramamos sus cÃ¡maras Hikvision/Dahua RTSP/ONVIF actuales con mÃ³dulos YOLO: conteo de personas, mapas de calor, arqueo de caja asistido, detecciÃ³n de anomalÃ­as operativas y reportes automÃ¡ticos. No necesita comprar hardware nuevo: su CCTV existente ya es compatible con la mayorÃ­a de modelos Hikvision 2018+. IntegraciÃ³n a n8n para alertas en Telegram/Email/WhatsApp.",
    bullets: [
      "Conteo de personas y control de aforo en tiempo real",
      "Mapas de calor y ocupaciÃ³n por zonas (heatmaps)",
      "Arqueo de caja asistido por IA: video del cajÃ³n + monto",
      "DetecciÃ³n de anomalÃ­as operativas y alertas 24/7",
      "Se integra a su CCTV actual Hikvision/Dahua sin comprar hardware nuevo",
      "Alertas por Telegram, Email y WhatsApp vÃ­a n8n",
    ],
    image: "/blog-img/dashboard-ejecutivo.webp",
    imageAlt: "Dashboard analÃ­tica de video IA sobre cÃ¡maras Hikvision",
  },
  {
    id: "cctv",
    icon: Video,
    color: "#0ea5e9",
    title: "InstalaciÃ³n CCTV Inteligente Hikvision en BogotÃ¡",
    tagline: "Cobertura total, sin puntos ciegos, lista para IA.",
    description:
      "Planificamos e instalamos infraestructura CCTV profesional con cÃ¡maras Hikvision certificadas ya listas para analÃ­tica IA. Cableado estructurado, configuraciÃ³n RTSP/ONVIF, reprogramaciÃ³n de equipos existentes que cumplan estÃ¡ndar, cobertura 100% sin puntos ciegos. Soporte tÃ©cnico presencial en BogotÃ¡ y remoto en toda Colombia. Â¿Ya tiene Hikvision? Lo preparamos para IA sin cambiar cÃ¡maras.",
    bullets: [
      "PlanificaciÃ³n y tendido de cableado profesional estructurado",
      "CÃ¡maras Hikvision compatibles IA (RTSP/ONVIF) instaladas y configuradas",
      "ReprogramaciÃ³n de hardware existente Hikvision/Dahua que cumpla estÃ¡ndar",
      "Cobertura del 100% de puntos ciegos con mapas de calor",
      "Soporte tÃ©cnico remoto y presencial en BogotÃ¡",
      "GarantÃ­a extendida Hikvision + capa IA incluida",
    ],
    image: "/blog-img/automatizacion-procesos.webp",
    imageAlt: "InstalaciÃ³n profesional cÃ¡maras Hikvision con analÃ­tica IA",
  },
];

const plans = [
  {
    id: "unico",
    name: "Pago Ãºnico",
    cameras: "Kit instalado Â· todo incluido",
    price: 1500000,
    priceSuffix: " total",
    tagline:
      "Un solo pago con instalaciÃ³n, cableado, configuraciÃ³n y entrega funcionando.",
    features: [
      "Kit de cÃ¡maras y grabador definidos en el estudio",
      "InstalaciÃ³n y cableado certificado incluidos",
      "ConfiguraciÃ³n de app y acceso remoto",
      "Prueba conjunta y entrega funcionando",
      "GarantÃ­a de fÃ¡brica del equipo",
      "Soporte post-instalaciÃ³n en BogotÃ¡",
    ],
    ctaLabel: "Cotizar mi instalaciÃ³n",
    ctaMsg:
      "Hola Servicios APC, quiero cotizar la instalaciÃ³n con pago Ãºnico para mi negocio en BogotÃ¡",
    icon: Package,
    highlight: true,
  },
  {
    id: "financiado",
    name: "Financiado",
    cameras: "Mismo kit Â· pagos semanales",
    price: 50000,
    priceSuffix: "/semana",
    tagline:
      "Sin pagar el kit de una sola vez: cuotas semanales acordadas segÃºn su instalaciÃ³n.",
    features: [
      "Mismo kit y misma instalaciÃ³n del pago Ãºnico",
      "Pagos semanales desde $50.000",
      "Total de referencia del kit: desde $1.800.000",
      "Cronograma de cuotas acordado por escrito",
      "Sin cuotas de tarjeta: pago directo a nosotros",
      "El nÃºmero de cuotas lo define el estudio",
    ],
    ctaLabel: "Cotizar mi kit financiado",
    ctaMsg:
      "Hola Servicios APC, quiero cotizar el kit de cÃ¡maras financiado en cuotas semanales para mi negocio en BogotÃ¡",
    icon: CreditCard,
    highlight: false,
  },
];

const process = [
  {
    icon: ClipboardCheck,
    step: "Paso 1",
    title: "DiagnÃ³stico",
    desc: "EvaluaciÃ³n de puntos ciegos y cableado en BogotÃ¡.",
  },
  {
    icon: FileText,
    step: "Paso 2",
    title: "Propuesta",
    desc: "CotizaciÃ³n transparente a la medida en menos de 24 horas.",
  },
  {
    icon: Wrench,
    step: "Paso 3",
    title: "InstalaciÃ³n",
    desc: "Montaje tÃ©cnico profesional con orden de cableado certificado.",
  },
  {
    icon: LayoutDashboard,
    step: "Paso 4",
    title: "Control Total",
    desc: "ConfiguraciÃ³n de app y entrega del panel operativo.",
  },
];

const cases = [
  {
    icon: Building2,
    image: "/casos-distribuidora-jone.webp",
    client: "Distribuidora JONE",
    sector: "DistribuciÃ³n Â· BogotÃ¡",
    metric: "24/7",
    result:
      "Infraestructura de CCTV HD, control de perÃ­metros y mantenimiento preventivo continuo para una operaciÃ³n monitoreada sin interrupciones.",
  },
  {
    icon: Car,
    image: "/casos-taller-excelencia.webp",
    client: "Taller Excelencia Automotriz",
    sector: "Automotriz Â· BogotÃ¡",
    metric: "Top 3",
    result:
      "CRM de atenciÃ³n B2B, panel de control operativo y financiero, y posicionamiento SEO orgÃ¡nico activo â€” Top 3 en â€œBaterÃ­as Willard a domicilioâ€.",
  },
  {
    icon: Globe,
    image: "/casos-dogweb-agencia.webp",
    client: "DogWeb.lat",
    sector: "Agencia digital Â· LATAM",
    metric: "SEO",
    result:
      "Despliegue de arquitectura web Ã¡gil y presencia digital B2B optimizada para motores de bÃºsqueda.",
  },
];

const differentiators = [
  {
    icon: WifiOff,
    title: "Arquitectura resiliente (Offline-First)",
    description:
      "Si se corta el internet, su Hikvision + IA sigue grabando y analizando en local (conteo, intrusiÃ³n, arqueo). Sincroniza al volver la seÃ±al. Nada se pierde.",
  },
  {
    icon: CheckCircle2,
    title: "Cero tecnicismos, solo datos accionables",
    description:
      "Reportes diarios limpios vÃ­a Email/Telegram/WhatsApp. No necesita saber de IA ni YOLO; solo leer: 'Arqueo OK', 'Aforo 78%', 'IntrusiÃ³n 0'.",
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
    image: "/ecosistema-apc-core.webp",
    description:
      "Sistemas de control, bases de datos operativas y tableros centralizados. El cerebro que une CCTV + IA + CRM.",
    icon: Server,
  },
  {
    domain: "apcautomatizacion.site",
    name: "APC AutomatizaciÃ³n",
    image: "/ecosistema-apc-automatizacion.webp",
    description:
      "Flujos n8n que conectan su CCTV Hikvision + WhatsApp + CRM + ERP. Alerta de intrusiÃ³n â†’ WhatsApp al gerente â†’ Ticket en CRM.",
    icon: Zap,
  },
  {
    domain: "apcvisionai.site",
    name: "APC VisiÃ³n AI",
    image: "/ecosistema-apc-vision-ia.webp",
    description:
      "Especialistas en analÃ­tica YOLO sobre Hikvision/Dahua: conteo, mapas de calor, arqueo de caja, detecciÃ³n de anomalÃ­as, perÃ­metros.",
    icon: Camera,
  },
  {
    domain: "dogweb.lat",
    name: "DogWeb",
    image: "/ecosistema-dogweb.webp",
    description:
      "Desarrollo web, SEO local / Google Maps y resiliencia de red. Su web posicionada en BogotÃ¡ + formularios â†’ WhatsApp Bot â†’ Venta.",
    icon: Globe,
  },
];

const faqs = [
  {
    q: "Â¿Tengo que cambiar todas las cÃ¡maras Hikvision de mi negocio para tener Inteligencia Artificial?",
    a: "No. Si sus cÃ¡maras Hikvision/Dahua actuales admiten RTSP u ONVIF (la mayorÃ­a desde 2018), las reprogramamos para inyectarles mÃ³dulos YOLO sin gasto extra en hardware. Modelos Hikvision 2MP/4MP/4K ColorVu, AcuSense, DeepinView son 100% compatibles.",
  },
  {
    q: "Â¿QuÃ© pasa si en el local se corta el internet o la luz?",
    a: "Nuestro ecosistema cuenta con arquitectura Offline-First: el procesamiento IA ocurre en local (edge) en su red. Si el internet se va por horas, el sistema sigue grabando, contando personas, detectando anomalÃ­as y arqueando cajas, y sincroniza automÃ¡ticamente al recuperar la seÃ±al. Nada se pierde.",
  },
  {
    q: "Â¿La Inteligencia Artificial escucha conversaciones privadas de empleados o clientes?",
    a: "No. La IA de audio se activa solo bajo disparador especÃ­fico (ej. sonido del cajÃ³n de la caja al abrirse) durante los segundos necesarios para documentar el monto. El resto de la jornada se protege la privacidad del equipo por diseÃ±o (privacy by design).",
  },
  {
    q: "Â¿Ustedes venden cÃ¡maras Hikvision o solo el software de IA?",
    a: "Ofrecemos ambas opciones: (1) Si ya tiene Hikvision/Dahua RTSP/ONVIF, solo instalamos la capa IA (analÃ­tica YOLO, alertas, dashboard). (2) Si necesita infraestructura nueva, instalamos CCTV Hikvision certificado IA-ready (ColorVu, AcuSense, DeepinView) + configuramos la analÃ­tica completa. Usted elige segÃºn su presupuesto.",
  },
  {
    q: "Â¿CÃ³mo se ve el anÃ¡lisis de video con IA en tiempo real en mi celular?",
    a: "Recibe alertas por Telegram/Email/WhatsApp con clip de video del evento y accede a dashboard web con mapas de calor, conteo histÃ³rico, arqueos diarios y reportes automÃ¡ticos. Todo desde su celular, sin apps extra: usa Telegram o WhatsApp.",
  },
  {
    q: "Â¿QuÃ© modelos Hikvision recomiendan para analÃ­tica de video con IA?",
    a: "Para analÃ­tica YOLO recomendamos: (1) Hikvision ColorVu 4K/4MP â€” visiÃ³n nocturna a color real, ideal para placas y rostros. (2) Hikvision AcuSense 2MP/4MP â€” filtrado de falsos positivos (persona/vehÃ­culo), costo/beneficio Ã³ptimo. (3) Hikvision DeepinView â€” IA embebida en cÃ¡mara (conteo, cola), mÃ¡xima precisiÃ³n. Lo asesoramos segÃºn su caso y presupuesto.",
  },
  {
    q: "Â¿La analÃ­tica de video funciona con Dahua u otras marcas?",
    a: "SÃ­. Cualquier cÃ¡mara que exponga stream RTSP u ONVIF Profile S/T/G es compatible. Dahua, Uniview, Axis, Hanwha, TP-Link VIGI: si tiene stream estÃ¡ndar, le inyectamos YOLO. La diferencia es que Hikvision ColorVu/AcuSense nos da mejor calidad de imagen nocturna para IA.",
  },
  {
    q: "Â¿Ustedes administran mi negocio o mi personal?",
    a: "No. DiseÃ±amos, instalamos y mantenemos la infraestructura digital que automatiza su control. Le entregamos las herramientas exactas para que usted administre su empresa en minutos desde su celular, con datos claros y decisiones respaldadas. No supervisamos personal ni tomamos decisiones gerenciales.",
  },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Estudio antes que precio",
    description:
      "Vamos a ver su sitio antes de darle un nÃºmero: puntos, cableado y acceso definen el trabajo. Por eso el precio que le cotizamos es el que termina pagando, casi sin sorpresas en la factura.",
  },
  {
    icon: Users,
    title: "El que instala es el que responde",
    description:
      "Un solo equipo de punta a punta en BogotÃ¡: diagnÃ³stico, instalaciÃ³n, configuraciÃ³n y soporte. Sin terceros de por medio y con un solo interlocutor cuando algo necesita ajuste.",
  },
  {
    icon: Shield,
    title: "Cableado certificado y ordenado",
    description:
      "Puntos elegidos con criterio, rutas marcadas y etiquetadas, canaletas y conexiones probadas. Nada de cables sueltos ni Ã¡ngulos ciegos dejados 'para despuÃ©s'.",
  },
  {
    icon: Package,
    title: "Si su equipo sirve, lo reutilizamos",
    description:
      "Antes de proponer hardware nuevo revisamos si sus cÃ¡maras actuales sirven. Si sirven, las aprovechamos: no le vendemos lo que no necesita.",
  },
  {
    icon: CheckCircle2,
    title: "Entregamos el sistema funcionando",
    description:
      "Instalamos, configuramos la app y el acceso remoto, probamos con usted y dejamos todo andando. No le dejamos la caja abierta ni una contraseÃ±a suelta.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento con visita programada",
    description:
      "RevisiÃ³n, limpieza, firmware y soporte con agenda definida. Su sistema sigue grabando todo el aÃ±o, no solo el dÃ­a de la instalaciÃ³n.",
  },
];

/* â”€â”€â”€ PRIMITIVAS DE MOTION (Apple-style) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

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
  return <WhatsAppCTA label={label} href={href} size={small ? "sm" : "md"} />;
}

/* AcordeÃ³n sin layout jank: anima grid-template-rows 0frâ†’1fr
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
      {...(!open ? { inert: "" } : {})}
    >
      <div className="overflow-hidden min-h-0">{children}</div>
    </div>
  );
}

/* â”€â”€â”€ APP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

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
      title: "CÃ¡maras de Seguridad para Negocio en BogotÃ¡ | 500+ instalaciones",
      description:
        "CÃ¡maras para negocio en BogotÃ¡: Hikvision, cableado certificado y acceso remoto. Desde $1.500.000 o $50.000 semanales. Cotiza gratis.",
    },
    instalacion: {
      title: "InstalaciÃ³n de CÃ¡maras de Seguridad en BogotÃ¡ | Hikvision Certificado",
      description:
        "InstalaciÃ³n profesional de cÃ¡maras de seguridad en BogotÃ¡: cableado estructurado sin puntos ciegos, configuraciÃ³n remota y equipos IA-ready. CotizaciÃ³n con visita tÃ©cnica.",
    },
    casa: {
      title: "CÃ¡maras para Instalar en Casa en BogotÃ¡ | InstalaciÃ³n el mismo dÃ­a",
      description:
        "CÃ¡maras para casa en BogotÃ¡ con visiÃ³n nocturna a color y acceso desde el celular. Kit desde $1.500.000 instalado el mismo dÃ­a en toda la ciudad.",
    },
    "precios-camaras": {
      title: "Precios de InstalaciÃ³n de CÃ¡maras de Seguridad en BogotÃ¡ 2026",
      description:
        "CuÃ¡nto cuesta instalar cÃ¡maras de seguridad en BogotÃ¡: desde $1.500.000 todo incluido o desde $50.000 semanales. El precio final sale del estudio. Cotiza gratis.",
    },
    "mantenimiento-camaras": {
      title: "Mantenimiento de CÃ¡maras de Seguridad en BogotÃ¡ | Preventivo y Correctivo",
      description:
        "Mantenimiento de cÃ¡maras en BogotÃ¡: preventivo, correctivo y supervisiÃ³n remota para Hikvision/Dahua. Limpieza, firmware y cableado. DiagnÃ³stico gratis.",
    },
    consultor: {
      title: "Consultor TecnolÃ³gico para Empresas en BogotÃ¡ | DiagnÃ³stico con ROI",
      description:
        "Consultor tecnolÃ³gico en BogotÃ¡: auditorÃ­a de seguridad CCTV con IA, automatizaciÃ³n de procesos y dashboards. DiagnÃ³stico gratis con implementaciÃ³n.",
    },
    blog: {
      title: "Blog de CÃ¡maras de Seguridad e IA | Servicios APC BogotÃ¡",
      description:
        "GuÃ­as, comparativas y casos reales sobre CCTV Hikvision con inteligencia artificial en BogotÃ¡: precios, instalaciÃ³n, analÃ­tica IA, automatizaciÃ³n y seguridad empresarial.",
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
    window.dispatchEvent(new CustomEvent("section:reveal", { detail: id }));
    const jump = (tries = 0) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else if (tries < 40) requestAnimationFrame(() => jump(tries + 1));
    };
    requestAnimationFrame(() => jump());
    setMobileOpen(false);
  };

  const validEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validate = () => {
    const e: typeof errors = {};
    if (form.nombre.trim().length < 3)
      e.nombre = "Escribe tu nombre completo.";
    if (!validEmail(form.email.trim()))
      e.email = "El correo no parece vÃ¡lido.";
    if (form.mensaje.trim().length < 10)
      e.mensaje = "CuÃ©ntanos un poco mÃ¡s (mÃ­nimo 10 caracteres).";
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
          "No pudimos enviar tu mensaje. EscrÃ­benos por WhatsApp o intÃ©ntalo de nuevo."
        );
      }
    } catch {
      setError(
        "Error de conexiÃ³n. EscrÃ­benos por WhatsApp o intÃ©ntalo de nuevo."
      );
    } finally {
      setSending(false);
    }
  };

  if (LandingPage || blogSlug) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-5 focus:py-2.5 focus:rounded-full focus:font-medium focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        <nav aria-label="NavegaciÃ³n principal" className="sticky top-0 z-50 glass-nav">
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
                width={128}
                height={128}
                className="h-8 w-auto"
              />
              <span className="text-foreground font-semibold text-sm hidden sm:block">
                Servicios APC
              </span>
            </button>
            <WhatsAppCTA href={WHATSAPP} label="Cotizar" size="sm" />
          </div>
        </nav>
        <main id="contenido">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            {blogSlug ? <DynamicBlog slug={blogSlug} /> : <LandingPage />}
          </Suspense>
        </main>
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
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-accent focus:text-accent-foreground focus:px-5 focus:py-2.5 focus:rounded-full focus:font-medium focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        {/* â”€â”€ NAV â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <nav
          aria-label="NavegaciÃ³n principal"
          className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-200 edge-fade ${
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
                width={128}
                height={128}
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
              <WhatsAppCTA href={WHATSAPP} label="WhatsApp" size="sm" />
            </div>

            <button
              className="press md:hidden text-foreground p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menÃº"
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
              <WhatsAppCTA href={WA_HERO} label="Cotizar por WhatsApp" size="md" fullWidth />
            </div>
          </AccordionPanel>
        </nav>

        <main id="contenido">
        {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section
          id="inicio"
          className="relative min-h-[92vh] flex items-center overflow-hidden"
          style={{ backgroundColor: "#080C18" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/reels-poster.webp"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
            style={{ filter: "brightness(0.72) contrast(1.06) saturate(1.05)", opacity: videoReady ? 1 : 0 }}
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoReady(true)}
            aria-hidden="true"
          >
            <source src="/videos/reels-10s.webm" type="video/webm" />
            <source src="/videos/reels-10s.mp4" type="video/mp4" />
          </video>

          {/* Oscurecido base hacia #080C18 */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(8,12,24,0.72)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080C18]/95 via-[#080C18]/70 to-[#080C18]/35" />

          {/* Grilla tÃ©cnica sutil */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #22d3ee 1px, transparent 1px), linear-gradient(to bottom, #22d3ee 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 30% 40%, black 20%, transparent 72%)",
              WebkitMaskImage: "radial-gradient(ellipse at 30% 40%, black 20%, transparent 72%)",
            }}
          />

          {/* IluminaciÃ³n cian / verde */}
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#22d3ee]/20 blur-[120px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-0 h-[460px] w-[460px] rounded-full bg-[#25d366]/15 blur-[130px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 w-full">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="font-mono text-[9px] sm:text-xs text-[#8ef2b8] tracking-[0.12em] sm:tracking-[0.16em] uppercase mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0B1220]/85 px-3.5 py-2 sm:px-4 text-center leading-snug backdrop-blur-md"
            >
              <span aria-hidden="true">ðŸ“</span>
              InstalaciÃ³n en BogotÃ¡ Â· CrÃ©dito directo Â· Hikvision &amp; Dahua
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.05 }}
              className="font-serif font-bold text-foreground tracking-[-0.02em] leading-[1.05] text-[clamp(2.15rem,5vw,4.5rem)] mb-5 sm:mb-6"
            >
              InstalaciÃ³n Profesional de CÃ¡maras de Seguridad e IA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#25d366]">
                en BogotÃ¡
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.1 }}
              className="text-foreground/85 text-lg md:text-xl leading-relaxed max-w-2xl mb-9"
            >
              Protege tu negocio o hogar con tecnologÃ­a ColorVu y analÃ­tica inteligente.
              Estudio de seguridad sin costo en BogotÃ¡ e instalaciones a crÃ©dito desde
              $1.500.000 con cuotas semanales desde $50.000.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4, delay: 0.15 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <a
                href={WA_HERO_ESTUDIO}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-sm sm:px-7 sm:text-[15px] font-semibold leading-tight text-[#062014] shadow-[0_14px_34px_-12px_rgba(37,211,102,0.75)] transition-colors hover:bg-[#20c05c]"
              >
                <WhatsAppLogo size={19} />
                Cotizar con Estudio Gratis por WhatsApp
              </a>
              <button
                onClick={() => scrollTo("planes")}
                className="press inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm sm:px-7 sm:text-[15px] font-medium text-foreground backdrop-blur-md transition-colors hover:border-[#22d3ee]/60 hover:bg-white/10"
              >
                Ver Planes, Precios y Kits <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="mt-12"
            >
              <ul className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
                {[
                  "Estudio previo sin costo en BogotÃ¡",
                  "Cuotas semanales desde $50k o $75k",
                  "Equipos originales con garantÃ­a",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[13px] sm:text-sm text-foreground/80">
                    <CheckCircle2 size={16} className="text-[#25d366] shrink-0" /> {t}
                  </li>
                ))}
              </ul>
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

        {/* â”€â”€ SERVICIOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <LazyMount id="servicios">
        <section id="servicios" className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Nuestros Servicios"
              title="InstalaciÃ³n de cÃ¡maras y analÃ­tica de video con IA"
              desc="CÃ¡maras Hikvision certificadas, cableado profesional y analÃ­tica que convierte su video en datos: conteo, aforo, mapas de calor y arqueo de caja. Todo en BogotÃ¡."
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
                                <WhatsAppCTA
                                  label="Solicitar informaciÃ³n"
                                  href={waLink(
                                    `Hola Servicios APC, quiero informaciÃ³n sobre ${s.title}`
                                  )}
                                  size="sm"
                                  brand={s.color}
                                />
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

        {/* â”€â”€ BENEFICIOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="beneficios">
        <section id="beneficios" className="py-24 bg-secondary border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Beneficios"
              title="Por quÃ© instalar y contratar el mantenimiento con Servicios APC"
              desc="No vendemos equipos sueltos: instalamos, configuramos y mantenemos su sistema de cÃ¡maras en BogotÃ¡. Estos son los motivos por los que nuestros clientes nos siguen llamando."
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

        {/* â”€â”€ PLANES & TRANSPARENCIA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="planes">
        <section id="planes" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Precios"
              title="Precios que se ajustan a su instalaciÃ³n, no al revÃ©s"
              desc="Pago Ãºnico desde $1.500.000 con todo incluido, o financiado desde $50.000 semanales. Publicamos precios 'desde' a propÃ³sito: el valor final siempre sale de un estudio de instalaciÃ³n."
            />

            <Reveal className="mb-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <BadgeCheck size={13} className="text-accent" /> Precios de
                  referencia Â· el valor final se define en el estudio de
                  instalaciÃ³n
                </span>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 items-stretch max-w-4xl">
              {plans.map((p, i) => {
                const Icon = p.icon;
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
                          <Sparkles size={11} /> MÃ¡s pedido
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

                      <div className="mb-6">
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                          Desde
                        </p>
                        <p className="font-serif text-4xl font-bold tracking-[-0.02em]">
                          {fmtCOP(p.price)}
                          <span className="text-lg text-muted-foreground font-normal">
                            {p.priceSuffix}
                          </span>
                        </p>
                      </div>

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
                        label={p.ctaLabel}
                        href={waLink(p.ctaMsg)}
                      />
                    </Tilt>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15} className="mt-10 max-w-4xl">
              <p className="text-sm text-muted-foreground leading-relaxed bg-secondary border border-border rounded-xl px-5 py-4">
                <strong className="text-foreground">
                  Â¿Por quÃ© decimos "desde"?
                </strong>{" "}
                El valor final depende del nÃºmero de puntos, la distancia del
                cableado y las condiciones del sitio. Publicamos precios mÃ­nimos
                de referencia a propÃ³sito: es la Ãºnica forma de que el nÃºmero
                que reciba sea el que termina pagando. Lo concretamos en el
                estudio de instalaciÃ³n, sin compromiso.
              </p>
            </Reveal>
          </div>
        </section>

        {/* â”€â”€ PROCESO 4 PASOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="proceso">
        <section id="proceso" className="py-24 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Proceso"
              title="Su proyecto en 4 pasos"
              desc="Un proceso claro y sin sorpresas, desde el primer diagnÃ³stico hasta el control total desde su celular."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.step} delay={i * 0.09} className="h-full">
                    <div className="relative glass-card rounded-2xl p-6 h-full overflow-hidden">
                      <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-foreground/5 select-none" aria-hidden="true">
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
                Â¿Listo para empezar? DiagnÃ³stico en BogotÃ¡ sin costo.
              </p>
              <WhatsAppChip label="Agendar diagnÃ³stico gratis" href={waLink("Hola Servicios APC, quiero agendar un diagnÃ³stico gratuito para mi negocio en BogotÃ¡")} />
            </Reveal>
          </div>
        </section>

        {/* â”€â”€ CASOS DE Ã‰XITO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="casos">
        <section id="casos" className="py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Casos de Ã©xito"
              title="Resultados que se ven en el dÃ­a a dÃ­a"
              desc="Clientes en BogotÃ¡ y LATAM que ya operan con mÃ¡s control, orden y datos gracias a la infraestructura de Servicios APC."
            />

            <div className="grid md:grid-cols-3 gap-6">
              {cases.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.client} delay={i * 0.09} className="h-full">
                    <Tilt className="glass-card rounded-2xl p-8 h-full relative overflow-hidden">
                      <ImageWithFallback
                        src={c.image}
                        alt={c.client}
                        className="w-full h-40 object-cover rounded-xl mb-5"
                        loading="lazy"
                        decoding="async"
                      />
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

        {/* â”€â”€ ECOSISTEMA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="ecosistema">
        <section id="ecosistema" className="py-24 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Ecosistema APC"
              title="Un ecosistema, todo bajo control"
              desc="Servicios APC integra cuatro lÃ­neas especializadas que se conectan entre sÃ­ para blindar cada frente de su operaciÃ³n."
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
                      <ImageWithFallback
                        src={e.image}
                        alt={e.name}
                        className="w-full h-32 object-cover rounded-lg mb-5"
                        loading="lazy"
                        decoding="async"
                      />
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

        {/* â”€â”€ NOSOTROS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="nosotros">
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
                    <source srcSet="/fundador.webp" type="image/webp" />
                    <ImageWithFallback
                      src="/fundador.jpeg"
                      alt="Alejandro Piraquive â€” Fundador de Servicios APC"
                      width={1600}
                      height={900}
                      className="w-full object-cover aspect-video relative z-10"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute bottom-0 left-0 right-0 z-20 bg-accent px-6 py-4">
                    <p className="text-accent-foreground font-mono text-xs tracking-widest uppercase">
                      Alejandro Piraquive â€” Fundador
                    </p>
                    <p className="text-accent-foreground text-xs mt-0.5 font-mono">
                      BogotÃ¡, Colombia
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <Reveal>
                  <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                    QuiÃ©nes somos
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-[1.05] tracking-[-0.02em]">
                    Empresa de tecnologÃ­a con base en BogotÃ¡.
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong className="text-foreground">Servicios APC</strong>{" "}
                      es una empresa de tecnologÃ­a con sede en BogotÃ¡ (Cra. 52c
                      #39b-22). No vendemos tecnologÃ­a por moda: diseÃ±amos,
                      instalamos y mantenemos la infraestructura digital que le
                      devuelve el control de su dinero, su productividad y su
                      operaciÃ³n.
                    </p>
                    <p>
                      Nuestra presencia local nos permite ofrecer{" "}
                      <strong className="text-foreground">
                        soporte tÃ©cnico presencial en BogotÃ¡
                      </strong>{" "}
                      con respuesta rÃ¡pida, y desplegar arquitectura y desarrollo
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
                        MisiÃ³n
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Poner la operaciÃ³n de cada negocio bajo control con
                        infraestructura digital resiliente y automatizaciÃ³n,
                        eliminando el desorden y las fugas de tiempo y dinero â€” sin
                        exigir conocimientos tÃ©cnicos al empresario.
                      </p>
                    </div>
                    <div className="border border-border p-6">
                      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
                        VisiÃ³n
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ser el estÃ¡ndar de infraestructura digital indestructible en
                        Colombia y la regiÃ³n, donde cada cÃ¡mara, cada flujo y cada
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

        {/* â”€â”€ FAQ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="faq">
        <section id="faq" className="py-24 bg-secondary border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <SectionHeader
              kicker="Preguntas frecuentes"
              title="Preguntas frecuentes"
              desc="Resolvemos las dudas mÃ¡s comunes sobre nuestra infraestructura, privacidad y funcionamiento sin tecnicismos."
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

        {/* â”€â”€ CONTACTO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="contacto">
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
                    Contacte a Servicios APC en BogotÃ¡
                  </h2>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="text-muted-foreground leading-relaxed mb-10">
                    CuÃ©ntanos tu necesidad. Te respondemos en menos de 24 horas
                    hÃ¡biles con una propuesta concreta para tu empresa.
                  </p>
                </Reveal>

                <div className="space-y-5">
                  <Reveal delay={0.14}>
                    <WhatsAppCTA
                      label="WhatsApp: +57 333 7450634"
                      href={WHATSAPP}
                      size="md"
                    />
                  </Reveal>
                  <Reveal delay={0.17}>
                    <ChipCTA
                      label="serviciosapcsoporte@gmail.com"
                      href="mailto:serviciosapcsoporte@gmail.com"
                      size="md"
                      brand="var(--color-accent)"
                      logo={<Mail size={18} className="text-accent" />}
                    />
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="text-sm text-muted-foreground">
                      Cra. 52c #39b-22, BogotÃ¡
                    </p>
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
                        Â¡Mensaje enviado!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Gracias por contactarnos. Te responderemos en menos de 24
                        horas hÃ¡biles.
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
                      toolname="instalacion_cctv"
                      tooldescription="InstalaciÃ³n de CCTV con inteligencia artificial en BogotÃ¡. Solicita tu diagnÃ³stico gratuito a Servicios APC; requiere nombre, correo electrÃ³nico y un mensaje con la necesidad del negocio."
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
                            toolparamdescription="Nombre completo de la persona de contacto"
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
                            Correo electrÃ³nico *
                          </label>
                          <input
                            id="email"
                            type="email"
                            toolparamdescription="Correo electronico para recibir la respuesta"
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
                          TelÃ©fono
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          toolparamdescription="Telefono o WhatsApp de contacto (opcional)"
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
                          toolparamdescription="Descripcion de la necesidad: procesos a automatizar, integraciones de sistemas o analitica de negocio"
                          value={form.mensaje}
                          onChange={(e) => {
                            setForm({ ...form, mensaje: e.target.value });
                            if (errors.mensaje) setErrors({ ...errors, mensaje: undefined });
                          }}
                          placeholder="Â¿Tiene Hikvision? Â¿Necesita analÃ­tica? CuÃ©ntenos..."
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
                        Tu informaciÃ³n es confidencial y no serÃ¡ compartida con
                        terceros.
                      </p>
                    </form>
                  )}
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ BLOG EN LANDING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="blog">
        <section id="blog" className="relative py-24 overflow-hidden">
          <VideoHero
            title="Blog de CÃ¡maras IA y AutomatizaciÃ³n"
            subtitle="GuÃ­as, casos reales y novedades sobre analÃ­tica de video con IA, CCTV Hikvision, bots WhatsApp y automatizaciÃ³n de procesos para empresas en BogotÃ¡."
            ctaLabel="Ver todos los artÃ­culos"
            onCta={() => { window.location.hash = "blog"; }}
            className="absolute inset-0 z-0"
            overlayClassName="bg-black/80"
            videoClassName="object-cover"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <Reveal>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4 text-center">
                ArtÃ­culos y Recursos
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 leading-[1.05] tracking-[-0.02em]">
                Lo Ãºltimo en IA, CCTV y AutomatizaciÃ³n
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16">
                GuÃ­as tÃ©cnicas, casos reales y comparativas para que tus cÃ¡maras generen datos,
                no solo grabaciones.
              </p>
            </Reveal>

            {/* â”€â”€ 4 CATEGORÃAS PRINCIPALES â”€â”€ */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <CategoryCard
                image="/blog-img/cctv-ia-bogota.webp"
                title="CCTV + IA BogotÃ¡"
                desc="AnalÃ­tica de video con Hikvision DeepinView: conteo, PPE, calor, ANPR."
                href="/#blog"
              />
              <CategoryCard
                image="/blog-img/automatizacion-n8n.webp"
                title="AutomatizaciÃ³n n8n + IA"
                desc="Flujos WhatsApp, CRM, dashboards y alertas sin cÃ³digo con n8n."
                href="/#blog"
              />
              <CategoryCard
                image="/blog-img/control-acceso.webp"
                title="Control de Acceso + NÃ³mina"
                desc="BiometrÃ­a, ANPR, torniquetes integrados a nÃ³mina y RRHH."
                href="/#blog"
              />
              <CategoryCard
                image="/blog-img/diagnostico-b2b.webp"
                title="DiagnÃ³stico B2B Gratis"
                desc="AuditorÃ­a de 1-2h sin costo si implementas. ROI medido en semanas."
                href="/#blog"
              />
            </div>

            {/* â”€â”€ 3 ARTÃCULOS RECIENTES â”€â”€ */}
            <Reveal>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">
                ArtÃ­culos recientes
              </h3>
            </Reveal>
            <RecentArticlesGrid />
          </div>
        </section>

        {/* â”€â”€ CTA FINAL BANNER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        </LazyMount>
        <LazyMount id="cta">
        <section className="py-20 relative overflow-hidden vignette">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#25d366]/10" />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-[1.05] mb-5">
                Â¿Listo para poner tus cÃ¡maras a trabajar con IA?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                DiagnÃ³stico gratuito en BogotÃ¡. CotizaciÃ³n a la medida en menos
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
        </LazyMount>

        </main>

        {/* â”€â”€ FOOTER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <footer className="py-10 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 pb-10 border-b border-border">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <ImageWithFallback src="/logo.webp" alt="Servicios APC" width={128} height={128} className="h-9 w-auto" />
                  <span className="text-foreground font-semibold text-sm">
                    Servicios APC
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  AutomatizaciÃ³n e IA para empresas en BogotÃ¡. InstalaciÃ³n de
                  CCTV Hikvision, analÃ­tica de video con IA, bots WhatsApp 24/7,
                  dashboards y SEO local. Soporte &lt;30 min.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a href="https://apcvisionai.site" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                    <Camera size={11} /> APC VisiÃ³n AI â€” AnalÃ­tica Hikvision
                  </a>
                  <span className="text-muted-foreground">Â·</span>
                  <a href="https://apcautomatizacion.site" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                    <Zap size={11} /> APC AutomatizaciÃ³n â€” n8n + IA
                  </a>
                  <span className="text-muted-foreground">Â·</span>
                  <a href="https://dogweb.lat" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                    <Globe size={11} /> DogWeb â€” Web + SEO Local
                  </a>
                  <span className="text-muted-foreground">Â·</span>
                  <a href="https://apccore.site" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1">
                    <Server size={11} /> APC Core â€” Infraestructura
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
                      <ChevronRight size={12} /> AnalÃ­tica YOLO para Hikvision
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" onClick={() => { setActiveService(services.findIndex((s) => s.id === "cctv")); scrollTo("servicios"); }} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> InstalaciÃ³n Hikvision IA-ready
                    </a>
                  </li>
                  <li>
                    <a href="https://apcvisionai.site" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ExternalLink size={11} /> Ver APC VisiÃ³n AI
                    </a>
                  </li>
                  <li>
                    <a href="https://www.hikvision.com/es/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ExternalLink size={11} /> CatÃ¡logo oficial Hikvision
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
                  PÃ¡ginas SEO
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#negocio" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> CÃ¡maras para Negocio
                    </a>
                  </li>
                  <li>
                    <a href="#instalacion" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> InstalaciÃ³n de CÃ¡maras
                    </a>
                  </li>
                  <li>
                    <a href="#casa" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> CÃ¡maras para Casa
                    </a>
                  </li>
                  <li>
                    <a href="#precios-camaras" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> Precios InstalaciÃ³n
                    </a>
                  </li>
                  <li>
                    <a href="#consultor" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                      <ChevronRight size={12} /> Consultor TecnolÃ³gico
                    </a>
                  </li>
                  {[
                    ["Suba", "suba"],
                    ["Kennedy", "kennedy"],
                    ["Chapinero", "chapinero"],
                    ["UsaquÃ©n", "usaquen"],
                    ["FontibÃ³n", "fontibon"],
                  ].map(([label, h]) => (
                    <li key={h}>
                      <a href={`#${h}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                        <ChevronRight size={12} /> CÃ¡maras {label}
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
                    Cra. 52c #39b-22, BogotÃ¡
                  </li>
                  <li>
                    <ChipCTA
                      label="serviciosapcsoporte@gmail.com"
                      href="mailto:serviciosapcsoporte@gmail.com"
                      size="sm"
                      brand="var(--color-accent)"
                      logo={<Mail size={16} className="text-accent" />}
                    />
                  </li>
                  <li>
                    <WhatsAppCTA label="+57 333 7450634" href={WHATSAPP} size="sm" />
                  </li>
                  <li>
                    <a
                      href="https://search.google.com/local/writereview?placeid=ChIJ3YMe_3yfP44R1bbtdfSOqSQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-accent hover:text-foreground transition-colors font-medium"
                    >
                      â­ Dejar reseÃ±a en Google
                    </a>
                  </li>
                </ul>
                <div className="flex flex-wrap items-center gap-2.5 mt-4">
                  {SOCIALS.map(({ name, href, Logo, brand }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      title={name}
                      style={{ "--brand": brand } as CSSProperties}
                      className="social-chip group flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/5"
                    >
                      <Logo
                        size={18}
                        className="transition-transform duration-200 ease-out group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8 pb-8 border-b border-border space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aviso de privacidad y tratamiento de datos.</strong>{" "}
                En cumplimiento de la Ley 1581 de 2012 (Habeas Data), Servicios
                APC declara que todo flujo de video y audio capturado en las sedes
                de sus clientes tiene como Ãºnica finalidad la auditorÃ­a
                transaccional de seguridad empresarial, excluyendo la difusiÃ³n
                pÃºblica de material visual de terceros sin consentimiento.
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">TÃ©rminos del servicio.</strong>{" "}
                Los mÃ³dulos lÃ³gicos e integraciones en la nube operan bajo el
                marco de Arrendamiento de Software e Infraestructura TecnolÃ³gica
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
                Descargar PolÃ­tica de Tratamiento de Datos Personales (PDF)
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground font-mono">
                Â© 2026 Servicios APC â€” Todos los derechos reservados
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                serviciosapc.site Â· BogotÃ¡, Colombia
              </p>
            </div>
          </div>
        </footer>

        {/* â”€â”€ SOCIAL FLOAT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
          <div className="flex flex-col gap-2.5">
            {SOCIALS.filter((s) => s.name !== "WhatsApp").map(
              ({ name, href, Logo, brand }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  style={{ "--brand": brand } as CSSProperties}
                  className="social-chip group flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5"
                >
                  <Logo
                    size={20}
                    className="transition-transform duration-200 ease-out group-hover:scale-110"
                  />
                </a>
              )
            )}
          </div>

          <motion.a
            href={WA_HERO}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.93 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Cotizar por WhatsApp"
            style={{ "--brand": "#25D366" } as CSSProperties}
            className="cta-chip relative w-14 h-14 rounded-full bg-white border-2 border-accent flex items-center justify-center shadow-[0_10px_40px_rgba(234,88,12,0.35)]"
          >
            <WhatsAppLogo size={26} fill="#25D366" className="relative" />
            <span className="sr-only">Cotizar por WhatsApp</span>
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

/* â”€â”€â”€ Componentes de la secciÃ³n Blog en Landing â”€â”€â”€ */

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
      <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </a>
  );
}

function RecentArticlesGrid() {
  // 3 artÃ­culos mÃ¡s recientes (hardcoded para evitar bundle pesado)
  const posts = [
    {
      slug: "guia-camaras-hikvision-ia-empresas-bogota-2026",
      title: "GuÃ­a Hikvision IA 2026: ColorVu, AcuSense y DeepinView para empresas",
      excerpt: "Comparativa completa de lÃ­neas Hikvision con IA integrada para empresas en BogotÃ¡: precios, analÃ­tica y casos de uso.",
      date: "2026-07-20",
      category: "CCTV + IA",
      readTime: "8 min",
      coverImage: "/blog-img/guia-camaras-hikvision-ia-empresas-bogota-2026.webp",
    },
    {
      slug: "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard",
      title: "AutomatizaciÃ³n n8n + CCTV: alertas WhatsApp, CRM y dashboard en tiempo real",
      excerpt: "CÃ³mo conectar tus cÃ¡maras Hikvision a n8n para disparar alertas, crear tickets y poblar dashboards sin programar.",
      date: "2026-07-15",
      category: "AutomatizaciÃ³n",
      readTime: "6 min",
      coverImage: "/blog-img/automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard.webp",
    },
    {
      slug: "que-es-analitica-video-ia-empresas-bogota",
      title: "Â¿QuÃ© es analÃ­tica de video con IA? GuÃ­a para empresas en BogotÃ¡",
      excerpt: "DefiniciÃ³n, casos de uso (conteo, PPE, calor, ANPR) y cÃ³mo elegir proveedor Hikvision/Dahua/Uniview en Colombia.",
      date: "2026-07-10",
      category: "AnalÃ­tica IA",
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
              <span>Â·</span>
              <span>{post.readTime}</span>
            </div>
            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
            <a
              href={`/blog/${post.slug}/`}
              aria-label={`Leer artÃ­culo completo: ${post.title}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline mt-2"
            >
              Leer artÃ­culo completo
              <ChevronRight size={14} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

/* â”€â”€â”€ Wrappers dinÃ¡micos (Carga diferida de pÃ¡ginas hash) â”€â”€â”€ */

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
            <p className="text-lg font-medium mb-2">No se pudo cargar la pÃ¡gina</p>
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
