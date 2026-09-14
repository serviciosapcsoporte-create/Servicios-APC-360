import { useState, useEffect } from "react";
import CristalChat from "../components/CristalChat";
import {
  Menu,
  X,
  Camera,
  Video,
  MessageCircle,
  Zap,
  TrendingUp,
  Clock,
  Users,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  Send,
  Globe,
  LayoutDashboard,
  Server,
  WifiOff,
  Quote,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Wrench,
  HardDrive,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────── */

const homeIncludes = [
  {
    icon: Video,
    title: "Cámaras Hikvision y Dahua instaladas",
    description:
      "Equipos ColorVu, AcuSense y DeepinView certificados, configurados y orientados para cobertura total. Sin puntos ciegos.",
    bullets: [
      "Visión nocturna a color real (ColorVu)",
      "Filtrado de falsas alarmas persona/vehículo (AcuSense)",
      "IA a bordo para conteo y analítica (DeepinView)",
    ],
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "Instalación profesional de cámaras Hikvision en Bogotá",
  },
  {
    icon: HardDrive,
    title: "DVR/NVR + acceso desde tu celular",
    description:
      "Grabación continua verificada y visualización en tiempo real por Hik-Connect desde cualquier parte del mundo.",
    bullets: [
      "Grabación 24/7 con verificación de continuidad",
      "Acceso remoto Hik-Connect en tu celular",
      "Notificaciones y reproducción rápida de eventos",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=683&h=478&fit=crop&auto=format&fm=webp&q=50",
    imageAlt: "DVR/NVR con grabación continua y acceso remoto desde el celular",
  },
  {
    icon: Wrench,
    title: "Cableado estructurado sin punto ciego",
    description:
      "Tendido profesional, fuentes de poder y protección que evitan los fallos más comunes del CCTV en Colombia.",
    bullets: [
      "Canalización y cableado limpio y ordenado",
      "Revisión de fuentes, conectores y supresores",
      "Cobertura verificada con mapa de puntos ciegos",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=683&h=478&fit=crop&auto=format&fm=webp&q=70",
    imageAlt: "Técnico instalando cableado estructurado para cámaras de seguridad",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Diagnóstico y cotización gratis",
    description:
      "Visitamos tu local, medimos puntos ciegos y te pasamos un precio cerrado en menos de 24 horas hábiles.",
  },
  {
    n: "02",
    title: "Cotización cerrada por escrito",
    description:
      "Precio fijo, IVA incluido, sin sorpresas ni cargos ocultos al finalizar la instalación.",
  },
  {
    n: "03",
    title: "Instalación profesional",
    description:
      "Cableado estructurado, configuración de DVR/NVR y prueba de calidad de cada cámara.",
  },
  {
    n: "04",
    title: "Prueba 4K real y entrega",
    description:
      "Verificas la imagen en tu celular antes de firmar. Garantía y soporte posterior incluidos.",
  },
];

const trojan = [
  {
    icon: TrendingUp,
    brand: "APC Visión IA",
    domain: "apcvisionai.site",
    desc: "Conteo de personas, mapas de calor y arqueo de caja en tiempo real.",
  },
  {
    icon: Zap,
    brand: "APC Automatización",
    domain: "apcautomatizacion.site",
    desc: "Dashboards y chatbots con n8n que atienden y agendan sin intervención.",
  },
  {
    icon: Globe,
    brand: "DogWeb",
    domain: "dogweb.lat",
    desc: "Tu web y SEO Local para aparecer en Google Maps en tu localidad.",
  },
  {
    icon: Server,
    brand: "APC Core",
    domain: "apccore.site",
    desc: "Cableado estructurado pesado y kits industriales para operaciones exigentes.",
  },
];

const differentiators = [
  {
    icon: WifiOff,
    title: "Arquitectura resiliente (Offline-First)",
    description:
      "Si se corta el internet, su Hikvision + IA sigue grabando y analizando en local. Nada se pierde.",
  },
  {
    icon: CheckCircle2,
    title: "Cero tecnicismos, solo datos accionables",
    description:
      "Reportes diarios limpios vía Email/Telegram/WhatsApp. Solo leer: 'Arqueo OK', 'Aforo 78%', 'Intrusión 0'.",
  },
  {
    icon: Shield,
    title: "Su Hikvision actual ya sirve",
    description:
      "No lo obligamos a comprar equipos costosos: reprogramamos su Hikvision/Dahua actual si cumple RTSP/ONVIF.",
  },
];

const cases = [
  {
    client: "Excelencia Automotriz JAS",
    sector: "Automotriz · Puente Aranda, Bogotá",
    implementation:
      "Dashboard KPI personalizado para flujo de vehículos (recepción → autorización → reparación → entrega) + página SEO optimizada para 'Baterías Willard en Bogotá a domicilio' + chatbot WhatsApp automatizado.",
    result:
      "Visibilidad #1 en Google para baterías Willard a domicilio en Bogotá. Cotizaciones por WhatsApp automatizadas 24/7. Control total del taller con dashboard en tiempo real.",
  },
];

const faqs = [
  {
    q: "¿Debo cambiar todas mis cámaras Hikvision para tener Inteligencia Artificial?",
    a: "No. Si sus cámaras Hikvision/Dahua actuales admiten RTSP u ONVIF (la mayoría desde 2018), las reprogramamos para inyectarles módulos YOLO sin gasto extra en hardware. Modelos 2MP/4MP/4K ColorVu, AcuSense y DeepinView son 100% compatibles.",
  },
  {
    q: "¿Qué pasa si en el local se corta el internet?",
    a: "Nuestro ecosistema cuenta con arquitectura Offline-First: el procesamiento ocurre en local (edge) en su red. Si el internet se va por horas, el sistema sigue grabando, contando personas y analizando, y sincroniza automáticamente al recuperar la señal.",
  },
  {
    q: "¿Ustedes venden e instalan las cámaras o solo la analítica con IA?",
    a: "Ofrecemos ambas opciones: (1) si ya tiene Hikvision/Dahua RTSP/ONVIF, solo instalamos la capa IA; (2) si necesita infraestructura nueva, instalamos CCTV Hikvision certificado IA-ready (ColorVu, AcuSense, DeepinView) con cableado estructurado y configuración completa.",
  },
  {
    q: "¿Qué modelos Hikvision me recomiendan para mi negocio?",
    a: "ColorVu 4K/4MP para visión nocturna a color real (placas y rostros); AcuSense 2MP/4MP para el mejor costo-beneficio con filtrado de falsos positivos; DeepinView para analítica IA embebida en cámara (conteo, PPE, cola). Lo asesoramos según su caso y presupuesto.",
  },
  {
    q: "¿Qué incluye la instalación y qué garantía tiene?",
    a: "La instalación incluye cableado estructurado, configuración de DVR/NVR y acceso desde el celular, con precio cerrado y visita técnica de diagnóstico gratis. Los precios 2026 arrancan desde $1.800.000 COP IVA incluido para un kit de 4 cámaras. Ver tabla detallada en Ver precios 2026.",
  },
];

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function Home() {
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
  const [openFaq, setOpenFaq] = useState(-1);

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

  const navLinks: Array<[string, string]> = [
    ["Instalación", "inicio"],
    ["Qué incluye", "incluye"],
    ["Proceso", "proceso"],
    ["Casos", "casos"],
    ["Preguntas", "faq"],
    ["Contacto", "contacto"],
  ];

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

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(([label, id]) => (
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
            {navLinks.map(([label, id]) => (
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

      {/* ── H1 · HERO ───────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1782743549510-926bf57fc98c?w=1200&h=675&fit=crop&auto=format&fm=webp&q=40"
            alt="Cámaras de seguridad con inteligencia artificial en Bogotá"
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
              Instalación de Cámaras de Seguridad en Bogotá — que sí sirve para algo más que grabar
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              Instalamos cámaras Hikvision y Dahua con cableado estructurado,
              grabación continua en DVR/NVR y acceso desde tu celular por
              Hik-Connect. Prueba 4K real antes de firmar y soporte en menos de
              30 minutos en Bogotá. Sus cámaras quedan listas para convertirse
              en <strong>datos para su negocio</strong>: conteo de personas,
              arqueo asistido y reportes automáticos. Desde{" "}
              <strong className="text-accent">$1.800.000 COP</strong> (kit 4 cámaras, IVA incluido).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/instalacion-camaras-seguridad-bogota/"
                className="bg-accent text-accent-foreground px-8 py-4 font-semibold hover:bg-accent/90 transition-colors flex items-center gap-2"
              >
                Cotizar instalación Bogotá <ArrowRight size={16} />
              </a>
              <a
                href="/precio-instalacion-camaras-bogota/"
                className="border border-border text-foreground px-8 py-4 font-medium hover:bg-secondary transition-colors"
              >
                Ver precios 2026
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-border">
              {[
                ["Instalación certificada", "Hikvision y Dahua"],
                ["Soporte < 30 min", "En Bogotá"],
                ["Prueba 4K real", "Antes de firmar"],
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

          <div className="hidden lg:block">
            <div className="border border-border bg-card/80 backdrop-blur-sm p-8 space-y-4">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Puntos rápidos
              </p>
              {[
                ["Instalación kit 4 cámaras", "Desde $1.800.000 COP · IVA incluido"],
                ["Mantenimiento preventivo", "Desde $180.000 COP/visita"],
                ["Diagnóstico de sitio", "Gratis · respuesta < 24h"],
              ].map(([label, sub]) => (
                <div
                  key={label}
                  className="w-full flex items-center gap-4 p-4 border border-border hover:border-accent/30 hover:bg-secondary transition-all duration-200 text-left"
                >
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground truncate">{sub}</p>
                  </div>
                </div>
              ))}
              <a
                href="/precio-instalacion-camaras-bogota/"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/40 px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Ver tabla de precios 2026 <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── H2 · QUÉ INCLUYE ────────────────────────────── */}
      <section id="incluye" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Qué incluye
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                En qué incluye tu instalación de cámaras en Bogotá
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Un sistema completo y listo para IA: equipos certificados,
                grabación que no se pierde y cableado que no da problemas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {homeIncludes.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-background flex flex-col"
                >
                  <div className="relative">
                    <div className="bg-secondary h-2 w-full absolute top-0 left-0" />
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
                  <div className="p-8 flex flex-col flex-1">
                    <Icon size={24} className="text-accent mb-5" />
                    <h3 className="font-serif text-lg font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {s.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 size={14} className="mt-0.5 text-accent flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/instalacion-camaras-seguridad-bogota/"
                      className="mt-auto flex items-center gap-2 font-medium text-sm text-accent border border-accent/40 px-5 py-2.5 w-fit hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Ver detalle <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── H2 · PROCESO ────────────────────────────────── */}
      <section id="proceso" className="py-24 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Proceso
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Así instalamos tus cámaras de seguridad
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Un proceso claro en 4 pasos, con precio cerrado y prueba de
                calidad antes de entregar.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {processSteps.map((p) => (
              <div
                key={p.n}
                className="bg-secondary p-8 hover:bg-background transition-colors duration-200"
              >
                <p className="font-mono text-3xl font-bold text-accent mb-5">
                  {p.n}
                </p>
                <h3 className="font-serif text-lg font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 flex-wrap">
            <a
              href="/precio-instalacion-camaras-bogota/"
              className="bg-accent text-accent-foreground px-6 py-3 font-medium text-sm hover:bg-accent/90 transition-colors flex items-center gap-2"
            >
              Ver precios 2026 <ArrowRight size={14} />
            </a>
            <a
              href="/mantenimiento-camaras/"
              className="border border-border text-foreground px-6 py-3 font-medium text-sm hover:bg-secondary transition-colors flex items-center gap-2"
            >
              ¿Ya tienes cámaras? Mantenimiento preventivo <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ── H2 · CABALLO DE TROYA · ECOSISTEMA 360 ──────── */}
      <section
        id="trojan"
        className="py-24 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">
                Ecosistema APC 360
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                ¿Tus cámaras solo graban robos o también te ayudan a vender más?
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Conecta tus cámaras (existentes o recién instaladas) al
                ecosistema inteligente de Servicios APC 360 — y empiezan a
                ordenar, ahorrar y vender por ti.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border-t border-border">
              {trojan.map((t) => {
                const Icon = t.icon;
                return (
                  <a
                    key={t.domain}
                    href={`https://${t.domain}?utm_source=serviciosapc_home_trojan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-b border-border flex items-start gap-5 py-7 hover:bg-secondary transition-colors duration-200 px-4"
                  >
                    <div className="w-11 h-11 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-base font-bold group-hover:text-accent transition-colors flex items-center gap-2 flex-wrap">
                        {t.brand}
                        <span className="font-mono text-[10px] font-normal text-muted-foreground tracking-widest uppercase">
                          {t.domain}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                        {t.desc}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-accent shrink-0 mt-1">
                      Ir al sitio <ExternalLink size={12} />
                    </span>
                  </a>
                );
              })}
            </div>
            <p className="text-center text-xs text-muted-foreground font-mono mt-6">
              Marcas del Grupo APC — un solo proveedor, un solo respaldo.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ───────────────────────────────── */}
      <section id="nosotros" className="py-24 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-accent/30"
                aria-hidden="true"
              />
              <img
                src="/alejandro-perfil.png"
                alt="Fundador de Servicios APC — socio tecnológico para empresas en Bogotá"
                width={800}
                height={800}
                className="w-full object-cover aspect-square relative z-10"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-accent px-6 py-4">
                <p className="text-accent-foreground font-mono text-xs tracking-widest uppercase">
                  Fundador — Servicios APC
                </p>
                <p className="text-accent-foreground/70 text-xs mt-0.5 font-mono">
                  Bogotá, Colombia
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Quiénes somos
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Su socio tecnológico, con base en Bogotá.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Servicios APC</strong> no
                  es una empresa de vigilancia: es su socio tecnológico de
                  automatización. Diseñamos, instalamos y mantenemos la
                  infraestructura digital que le devuelve el control de su
                  dinero, su productividad y su operación.
                </p>
                <p>
                  Nuestra presencia local nos permite ofrecer{" "}
                  <strong className="text-foreground">
                    soporte técnico presencial en Bogotá
                  </strong>{" "}
                  con respuesta en menos de 30 minutos, y desplegar
                  arquitectura y desarrollo de forma remota para clientes en el
                  resto de Colombia.
                </p>
                <p>
                  No administramos su negocio ni supervisamos a su personal. Le
                  entregamos las herramientas exactas para que usted administre
                  su empresa en minutos desde su celular, con datos claros y
                  decisiones respaldadas.
                </p>
              </div>

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

      {/* ── CASOS ───────────────────────────────────────── */}
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
                Empresas de Bogotá que ya operan con más control
              </h2>
              <p className="text-muted-foreground max-w-xl leading-relaxed">
                Menos pérdidas y más datos gracias a la infraestructura de
                Servicios APC.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border max-w-3xl mx-auto">
            {cases.map((c) => (
              <div key={c.client} className="bg-background p-8">
                <Quote size={24} className="text-accent mb-5" />
                <h3 className="font-serif text-lg font-bold mb-1">{c.client}</h3>
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

            <div className="bg-background p-8 flex flex-col justify-center">
              <p className="font-serif text-xl font-bold mb-3">
                ¿Su empresa es la próxima?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Armamos su caso con datos reales: dashboard, automatización e
                infraestructura lista para IA.
              </p>
              <a
                href="https://wa.me/573337450634?text=Hola%2C%20quiero%20ser%20el%20pr%C3%B3ximo%20caso%20de%20%C3%A9xito%20de%20Servicios%20APC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit text-sm font-medium text-accent border border-accent/40 px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <MessageCircle size={14} /> Ser el próximo caso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
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
                Resolvemos las dudas más comunes sobre instalación,
                mantenimiento y analítica, sin tecnicismos.
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

      {/* ── CONTACTO ────────────────────────────────────── */}
      <section id="contacto" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Contacto
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Contacte a Servicios APC en Bogotá
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Cuéntanos tu necesidad. Te cotizamos en menos de 24 horas
                hábiles con una propuesta concreta para tu empresa.
              </p>

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
                      placeholder="¿Tiene Hikvision? ¿Necesita instalación o analítica? Cuéntenos..."
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-10 border-b border-border">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <img src="/logo.webp" alt="Servicios APC" className="h-9 w-auto" />
                <span className="text-foreground font-semibold text-sm">
                  Servicios APC
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Instalación y mantenimiento de cámaras Hikvision y Dahua en
                Bogotá, con analítica IA como herramienta de datos. Soporte en
                menos de 30 minutos.
              </p>
              <div className="flex items-center gap-3">
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

            <div>
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
                Servicios
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="/instalacion-camaras-seguridad-bogota/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Instalación de Cámaras
                  </a>
                </li>
                <li>
                  <a href="/precio-instalacion-camaras-bogota/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Precios 2026
                  </a>
                </li>
                <li>
                  <a href="/mantenimiento-camaras/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Mantenimiento de Cámaras
                  </a>
                </li>
                <li>
                  <a href="#negocio" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Cámaras para Negocio
                  </a>
                </li>
                <li>
                  <a href="#casa" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Cámaras para Casa
                  </a>
                </li>
                <li>
                  <a href="#consultor" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} /> Consultor Tecnológico
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
            </div>
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

      {/* Social float + WhatsApp */}
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