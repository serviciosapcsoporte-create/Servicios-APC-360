import { useState, useEffect } from "react";
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
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const services = [
  {
    id: "camaras",
    icon: Camera,
    color: "#c94a0a",
    title: "Analítica de Video con IA",
    tagline: "Sus cámaras dejan de vigilar y empiezan a auditar.",
    description:
      "Convertimos cámaras comunes en auditores inteligentes de tiempo completo. Con algoritmos de visión artificial (YOLO) analizamos el comportamiento, aseguramos el dinero y registramos transacciones sin que usted deba vigilar pantallas todo el día.",
    bullets: [
      "Conteo de personas y control de aforo",
      "Mapas de calor y ocupación por zonas",
      "Arqueo de caja asistido por IA",
      "Reportes automáticos de tráfico",
      "Se integra a su CCTV actual sin comprar hardware nuevo",
    ],
    image:
      "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?w=800&h=560&fit=crop&auto=format",
    imageAlt: "Analítica de video con IA sobre cámaras de seguridad",
  },
  {
    id: "cctv",
    icon: Video,
    color: "#0ea5e9",
    title: "Instalación de CCTV Inteligente",
    tagline: "Cobertura total, sin puntos ciegos.",
    description:
      "Planificamos y desplegamos la infraestructura física de videovigilancia lista para inyectarle inteligencia artificial. Reutilizamos su equipo actual siempre que cumpla los estándares de la industria (RTSP / ONVIF).",
    bullets: [
      "Planificación y tendido de cableado profesional",
      "Cámaras compatibles con IA (RTSP / ONVIF)",
      "Reprogramación de hardware existente",
      "Cobertura del 100% de puntos ciegos",
      "Soporte técnico remoto y presencial",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=560&fit=crop&auto=format",
    imageAlt: "Instalación profesional de cámaras CCTV",
  },
  {
    id: "bots",
    icon: MessageCircle,
    color: "#25d366",
    title: "Bots de WhatsApp con IA",
    tagline: "Atienda a sus clientes 24/7, sin contratar más personal.",
    description:
      "Desarrollamos bots de WhatsApp con identidad propia que responden, agendan citas, procesan pedidos y califican leads de forma automática. Desde un menú interactivo básico hasta ecosistemas con APIs, pagos y agendamiento.",
    bullets: [
      "Atención automática 24 horas",
      "Menú interactivo, catálogos y respuestas con IA",
      "Agendamiento de citas y pedidos",
      "Calificación y seguimiento de leads",
      "Transferencia a agente humano cuando se necesita",
    ],
    image:
      "https://images.unsplash.com/photo-1636751364472-12bfad09b451?w=800&h=560&fit=crop&auto=format",
    imageAlt: "Bot de WhatsApp para atención automática de clientes",
  },
  {
    id: "automatizacion",
    icon: Zap,
    color: "#7c3aed",
    title: "Automatización de Procesos",
    tagline: "Menos trabajo manual, más resultados.",
    description:
      "Diseñamos flujos de trabajo indestructibles que conectan sus herramientas, eliminan tareas repetitivas y entregan reportes programados. Menos errores humanos, menos tiempo perdido, más control.",
    bullets: [
      "Flujos automáticos e integraciones API",
      "Onboarding digital de clientes",
      "CRM con seguimiento post-venta",
      "Reportes programados 24 horas",
      "Notificaciones y alertas automáticas",
    ],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=560&fit=crop&auto=format",
    imageAlt: "Automatización de procesos empresariales",
  },
  {
    id: "dashboards",
    icon: LayoutDashboard,
    color: "#f59e0b",
    title: "Dashboards e Integración",
    tagline: "Todos sus datos, en una sola pantalla.",
    description:
      "Centralizamos la información dispersa de su operación en tableros ejecutivos claros. Integramos su software contable, CRM y herramientas para que la gerencia tome decisiones con datos, no con corazonadas.",
    bullets: [
      "Dashboards ejecutivos en tiempo real",
      "Integración entre sistemas y aplicaciones",
      "Bases de datos operativas centralizadas",
      "Reportería automatizada (Looker / PDF)",
      "Control de acceso a la información",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=560&fit=crop&auto=format",
    imageAlt: "Dashboard ejecutivo con métricas del negocio",
  },
  {
    id: "web",
    icon: Globe,
    color: "#10b981",
    title: "Desarrollo Web y SEO Local",
    tagline: "Presencia digital que atrae clientes reales.",
    description:
      "Creamos sitios web resilientes y los posicionamos donde sus clientes buscan: Google Maps y búsquedas locales. Desde landings hasta portales corporativos con bases de datos y SEO técnico.",
    bullets: [
      "Sitios web corporativos y landings",
      "Posicionamiento en Google Maps / SEO local",
      "Infraestructura web resiliente",
      "Formularios y bases de datos",
      "Soporte y mantenimiento mensual",
    ],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=560&fit=crop&auto=format",
    imageAlt: "Desarrollo web y posicionamiento local",
  },
];

const ecosystem = [
  {
    domain: "apccore.site",
    name: "APC Core",
    description:
      "Sistemas de control, bases de datos operativas y tableros centralizados.",
    icon: Server,
  },
  {
    domain: "apcautomatizacion.site",
    name: "APC Automatización",
    description:
      "Flujos de trabajo automáticos, integraciones API y reportes programados.",
    icon: Zap,
  },
  {
    domain: "apcvisionai.site",
    name: "APC Visión AI",
    description:
      "Análisis de video inteligente con YOLO e IA sobre cámaras CCTV.",
    icon: Camera,
  },
  {
    domain: "dogweb.lat",
    name: "DogWeb",
    description:
      "Desarrollo web, SEO local / Google Maps y resiliencia de red local.",
    icon: Globe,
  },
];

const differentiators = [
  {
    icon: WifiOff,
    title: "Arquitectura resiliente (Offline-First)",
    description:
      "Si se corta el internet, el sistema sigue registrando cajas, audios e imágenes en local y sincroniza en cuanto vuelve la red. Nada se pierde.",
  },
  {
    icon: CheckCircle2,
    title: "Cero tecnicismos, solo datos",
    description:
      "Reportes diarios limpios vía Email o Telegram. No necesita saber de IA; solo leer un informe claro.",
  },
  {
    icon: Shield,
    title: "Hardware reutilizable",
    description:
      "No lo obligamos a comprar equipos costosos: reprogramamos su CCTV actual si cumple los estándares RTSP / ONVIF.",
  },
];

const cases = [
  {
    client: "Excelencia Automotriz JAS",
    sector: "Taller automotriz",
    implementation:
      "Panel de control centralizado y base de datos operativa para el taller.",
    result:
      "Control total de órdenes de servicio en tiempo real, eliminando el desorden de hojas físicas y generando cuentas de cobro con dos clics.",
  },
  {
    client: "VALDIESEL S.A.S.",
    sector: "Comercial",
    implementation:
      "Inteligencia artificial personalizada para control operativo y mensajería comercial.",
    result:
      "Menú interactivo, respuestas automáticas y catálogos con IA que agilizan la atención comercial.",
  },
  {
    client: "Distribuidora Jone",
    sector: "Distribución",
    implementation:
      "Analítica YOLO sobre cámaras, instalación de CCTV, SEO local en Google Maps y embudos de conversión.",
    result:
      "Visibilidad del 100% de los puntos ciegos y aumento drástico de cotizaciones orgánicas gracias al posicionamiento local.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Más eficiencia y productividad",
    description:
      "Tus procesos corren solos. Tu equipo se enfoca en crecer el negocio.",
  },
  {
    icon: Shield,
    title: "Reducción de costos operativos",
    description:
      "Menos errores humanos, menos tiempo perdido, menos gastos innecesarios.",
  },
  {
    icon: MessageCircle,
    title: "Mejor comunicación con clientes",
    description:
      "Respuestas rápidas, seguimiento automatizado y experiencia coherente.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Tus soluciones trabajan mientras duermes. Sin pausas, sin días festivos.",
  },
  {
    icon: Users,
    title: "Acompañamiento real",
    description:
      "No te dejamos solo. Soporte directo con el equipo que construyó tu solución.",
  },
  {
    icon: CheckCircle2,
    title: "Soluciones a medida",
    description:
      "Nada genérico. Cada implementación se diseña para tu industria y tu operación.",
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              src="/logo.png"
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
            src="https://images.unsplash.com/photo-1782743549510-926bf57fc98c?w=1600&h=900&fit=crop&auto=format"
            alt="Ciudad moderna iluminada representando tecnología e innovación"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
              Servicios APC · Bogotá, Colombia
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Infraestructura digital indestructible y control automatizado para su negocio.
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              Eliminamos la pérdida silenciosa de dinero y el desorden
              operativo. Convertimos sus cámaras en auditores inteligentes,
              automatizamos sus procesos y blindamos su operación — sin que
              tenga que vigilar pantallas todo el día.
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

          {/* Tab selector */}
          <div className="flex border-b border-border mb-12 overflow-x-auto">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 -mb-px ${
                    activeService === i
                      ? "border-accent text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={15} style={{ color: activeService === i ? s.color : undefined }} />
                  {s.title}
                </button>
              );
            })}
          </div>

          {/* Active service content */}
          {services.map((s, i) => {
            if (i !== activeService) return null;
            const Icon = s.icon;
            return (
              <div key={s.id} className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={24} style={{ color: s.color }} />
                    <h3 className="font-serif text-3xl font-bold">{s.title}</h3>
                  </div>
                  <p
                    className="font-mono text-xs tracking-widest uppercase mb-4"
                    style={{ color: s.color }}
                  >
                    {s.tagline}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {s.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm">
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
                <div className="relative">
                  <div className="bg-secondary h-2 w-full absolute -top-2 left-0" style={{ backgroundColor: s.color, opacity: 0.3 }} />
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* Service navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className="w-2 h-2 transition-all duration-200"
                style={{
                  backgroundColor: i === activeService ? "#c94a0a" : undefined,
                }}
                aria-label={`Ver servicio ${i + 1}`}
              >
                <span
                  className={`block w-2 h-2 ${i === activeService ? "" : "bg-border"}`}
                />
              </button>
            ))}
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
                src="/servicios-apc.jpeg"
                alt="Fundador de Servicios APC — experto en soluciones tecnológicas para empresas en Colombia"
                className="w-full object-cover aspect-[3/4] relative z-10"
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
                Tecnología real, para negocios reales en Colombia.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  En <strong className="text-foreground">Servicios APC</strong>{" "}
                  no vendemos tecnología por moda. Diseñamos, instalamos y
                  mantenemos la infraestructura digital que le devuelve el
                  control de su dinero, su productividad y su operación.
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
                <div
                  key={e.domain}
                  className="bg-secondary p-8 hover:bg-background transition-colors duration-200"
                >
                  <Icon size={24} className="text-accent mb-5" />
                  <h3 className="font-serif text-lg font-bold mb-1">{e.name}</h3>
                  <p className="font-mono text-xs text-accent mb-3 flex items-center gap-1">
                    <ExternalLink size={11} /> {e.domain}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {e.description}
                  </p>
                </div>
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
                Resultados, no promesas
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Empresas colombianas que ya operan con más control y menos
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

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contacto" className="py-24 bg-secondary border-b border-border">
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
                  href="mailto:info@apccore.co"
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
                      info@apccore.co
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
                      placeholder="+57 300 000 0000"
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
                      placeholder="Cuéntanos qué necesita tu empresa..."
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
          <div className="grid md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-border">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/logo.png" alt="Servicios APC" className="h-9 w-auto" />
                <span className="text-foreground font-semibold text-sm">
                  Servicios APC
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Infraestructura digital indestructible y control automatizado
                para su negocio. Desde Bogotá, para toda Colombia.
              </p>
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
                    href="mailto:info@apccore.co"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={13} className="text-accent flex-shrink-0" />
                    info@apccore.co
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
              </ul>
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
    </div>
  );
}
