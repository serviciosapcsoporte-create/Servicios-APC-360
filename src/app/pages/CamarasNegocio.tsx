import { marked } from "marked";
import {
  Shield,
  Camera,
  Eye,
  Brain,
  Wifi,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  MapPin,
  Lock,
  AlertTriangle,
  Users,
  Building2,
  Warehouse,
  UtensilsCrossed,
  Briefcase,
  Car,
  ChevronRight,
  ArrowRight,
  Zap,
  Settings,
  Headphones,
  ClipboardCheck,
} from "lucide-react";

/* ─── CONFIG ──────────────────────────────────────────────── */

const WHATSAPP =
  "https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20c%C3%A1maras%20de%20seguridad%20para%20mi%20negocio%20en%20Bogot%C3%A1";

const LINKS = {
  vision: "https://apcvisionai.site",
  automacion: "https://apcautomatizacion.site",
  dogweb: "https://dogweb.lat",
  core: "https://apccore.site",
};

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-2 hover:opacity-80 transition-opacity"
    style={{ color: "var(--color-accent)" }}
  >
    {children}
  </a>
);

/* ─── MARKDOWN RENDERER ────────────────────────────────────── */

function RenderMD({ md }: { md: string }) {
  return (
    <div
      className="prose prose-lg max-w-none font-sans"
      style={{ color: "var(--color-foreground)" }}
      dangerouslySetInnerHTML={{ __html: marked.parse(md) as string }}
    />
  );
}

/* ─── PRICING DATA ─────────────────────────────────────────── */

const pricingPlans = [
  {
    name: "Básico",
    cameras: "4 cámaras",
    price: "$1.800.000",
    desc: "Ideal para locales pequeños y consultorios",
    features: [
      "4 cámaras HD 4MP",
      "DVR 4 canales",
      "1 TB almacenamiento",
      "Instalación incluida",
      "Soporte 30 días",
      "App móvil Remotion",
    ],
    highlight: false,
  },
  {
    name: "Profesional",
    cameras: "8 cámaras",
    price: "$3.200.000",
    desc: "Para negocios medianos con alta rotación",
    features: [
      "8 cámaras 4MP ColorVu",
      "DVR 8 canales",
      "2 TB almacenamiento",
      "Instalación incluida",
      "Soporte 90 días",
      "Alertas automáticas IA",
      "App móvil + escritorio",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    cameras: "16 cámaras",
    price: "$5.600.000",
    desc: "Cobertura completa para bodegas y franquicias",
    features: [
      "16 cámaras 4MP",
      "NVR 16 canales PoE",
      "4 TB almacenamiento RAID",
      "Instalación incluida",
      "Soporte 6 meses",
      "Analítica IA completa",
      "Dashboard remoto 24/7",
      "Integración WhatsApp/CRM",
    ],
    highlight: false,
  },
  {
    name: "IA Total",
    cameras: "8-16 cámaras + IA",
    price: "Desde $4.500.000",
    desc: "Analítica inteligente: aforo, intrusión, PPE, arqueo",
    features: [
      "Hardware + servidor edge GPU",
      "YOLO v8 detección objetos",
      "PPE detection (EPP obligatorio)",
      "Control de aforo en tiempo real",
      "Arqueo de caja por video",
      "Alertas WhatsApp/CRM automáticas",
      "Dashboard ejecutivo con métricas",
      "Soporte prioritario 12 meses",
    ],
    highlight: false,
  },
];

/* ─── FAQ DATA ─────────────────────────────────────────────── */

const faqs = [
  {
    q: "¿Cuánto cuestan las cámaras de seguridad para un negocio en Bogotá?",
    a: "El rango va desde $1.800.000 COP para 4 cámaras básicas hasta $5.600.000 para 16 cámaras con NVR. El plan con analítica IA cuesta desde $4.500.000 incluyendo servidor edge. El precio depende del hardware, cantidad de puntos y complejidad de instalación.",
  },
  {
    q: "¿Cuánto tarda la instalación?",
    a: "Un sistema de 4 a 8 cámaras se instala en 1 día hábil. Sistemas de 16+ cámaras con cableado estructurado y servidor IA pueden tomar 2 a 3 días. Siempre coordinamos la instalación en horarios que no interrumpan la operación de su negocio.",
  },
  {
    q: "¿Puedo ver las cámaras desde mi celular?",
    a: "Sí. Todas nuestras instalaciones incluyen configuración de app móvil (Remotion Hik-Connect o HiK-Connect). Puede ver en vivo, recibir alertas, y reproducir grabaciones desde cualquier lugar con internet.",
  },
  {
    q: "¿Qué es la analítica de video con IA?",
    a: "Es software que analiza el video en tiempo real usando inteligencia artificial (YOLO v8). Detecta personas, vehículos, objetos olvidados, controla aforo, verifica uso de EPP, y puede hacer arqueo de caja. Las alertas se envían por WhatsApp o email automáticamente.",
  },
  {
    q: "¿Necesito internet para que funcionen las cámaras?",
    a: "Las cámaras graban localmente al DVR/NVR sin necesidad de internet. El internet se necesita para: ver desde el celular, recibir alertas IA, y acceso remoto. Recomendamos mínimo 10 Mbps simétricos para sistemas con IA.",
  },
  {
    q: "¿Ofrecen garantía y soporte?",
    a: "Sí. Hardware con garantía de fábrica (1-3 años según marca). Soporte técnico incluido según plan: 30 días (Básico) hasta 12 meses (IA Total). Extendemos soporte con contratos mensuales desde $250.000/mes.",
  },
  {
    q: "¿Funciona en caso de apagón o corte de luz?",
    a: "Recomendamos incluir un UPS (no Break) que mantiene el DVR y módem funcionando 30-45 minutos. Si necesita cobertura total, ofrecemos soluciones con baterías de respaldo de hasta 4 horas. Las cámaras IP PoE se alimentan por el cable Ethernet.",
  },
  {
    q: "¿En qué zonas de Bogotá instalan?",
    a: "Cubrimos toda Bogotá y área metropolitana: Centro, Norte (Chicó, Chapinero, Usaquén), Sur (Kennedy, Bosa, Ciudad Bolívar), Occidente (Engativá, Suba, Fontibón), y oriente (Santa Fe, Usme). También atendemos municipalities cercanos.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */

export function CamarasNegocio() {
  return (
    <div className="min-h-screen" style={{ color: "var(--color-foreground)" }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-6"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span className="text-sm font-sans uppercase tracking-widest" style={{ color: "var(--color-muted-foreground)" }}>
              Servicios APC · Bogotá 2026
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cámaras de Seguridad para Negocio en Bogotá
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Instalación profesional de cámaras con inteligencia artificial para locales comerciales, bodegas, restaurantes y oficinas. Hardware Hikvision, analítica YOLO v8, alertas automáticas por WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              Cotizar Ahora <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              Ver Precios 2026 <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Camera, label: "500+ instalaciones", sub: "en Bogotá" },
              { icon: Brain, label: "IA en tiempo real", sub: "YOLO v8" },
              { icon: Lock, label: "Garantía 3 años", sub: "hardware Hikvision" },
              { icon: Phone, label: "Soporte 24/7", sub: "WhatsApp directo" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: "var(--color-accent)" }} />
                <p className="font-sans font-semibold text-sm">{item.label}</p>
                <p className="font-sans text-xs" style={{ color: "var(--color-muted-foreground)" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ POR QUÉ NECESITA CÁMARAS ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Por qué su negocio necesita cámaras de seguridad?
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Bogotá registra más de 45.000 hurtos al año. El 70% de negocios sin cámaras no logra identificar responsables. Estos son los problemas que resolvemos:
          </p>

          <div className="space-y-8">
            {[
              {
                icon: AlertTriangle,
                title: "Robos externos sin evidencia",
                desc: "Asaltos a mano armada, rompimiento de vidrieras, hurtos de mercancía. Sin cámaras, la policía no tiene pistas y el seguro no cubre la pérdida. Con grabaciones en HD, aumentamos las probabilidades de recuperación en un 340%.",
                stat: "340%",
                statLabel: "más recuperaciones con video",
              },
              {
                icon: Users,
                title: "Robo interno y mermas injustificadas",
                desc: "El 22% de las pérdidas en retail son por robo interno. Nuestros clientes en Kennedy redujeron mermas en 68% al instalar cámaras en cajas, almacenes y zonas de personal. La analítica de IA detecta comportamientos anómalos en tiempo real.",
                stat: "68%",
                statLabel: "reducción de mermas reportada",
              },
              {
                icon: Lock,
                title: "Cierres sin evidencia para seguros",
                desc: "Los aseguradores exigen pruebas de video para cubrir siniestros. Sin cámaras, una inundación o incendio puede costarle millones sin compensación. Guardamos 90 días de grabación en almacenamiento seguro con RAID.",
                stat: "90 días",
                statLabel: "de respaldo automático",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-xl border"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-background)" }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="font-sans leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                    {item.desc}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-2xl font-bold" style={{ color: "var(--color-accent)" }}>
                      {item.stat}
                    </span>
                    <span className="font-sans text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                      {item.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOLUCIONES POR NEGOCIO ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Soluciones para cada tipo de negocio
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Cada comercio en Bogotá tiene riesgos diferentes. Diseñamos sistemas específicos para su operación:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Building2,
                title: "Local Comercial",
                desc: "Cobertura de vitrina, caja y área de clientes. Cámaras dome para interior, bullet para fachada. Detección de horarios y alerta fuera de horario.",
                cameras: "4-8 cámaras",
                zones: "Fachada · Caja · Almacén",
              },
              {
                icon: Warehouse,
                title: "Bodega",
                desc: "Cámaras bullet con alcance largo para pasillos amplios. Visión nocturna ColorVu para patios de carga. Control de acceso por plate recognition.",
                cameras: "8-16 cámaras",
                zones: "Accesos · Pasillos · Patio carga",
              },
              {
                icon: UtensilsCrossed,
                title: "Restaurante",
                desc: "Monitoreo de cocina, sala y barra. Control de aforo para cumplimiento IDEA. Cámaras resistentes a humedad y grasas industriales.",
                cameras: "6-12 cámaras",
                zones: "Cocina · Sala · Barra · Bodega",
              },
              {
                icon: Briefcase,
                title: "Oficina",
                desc: "Acceso por人脸识别, control de visitantes, zonas restringidas. Integración con Sistemas de control de acceso existentes. Cámaras discretas tipo mini-dome.",
                cameras: "4-8 cámaras",
                zones: "Recepción · Piso · Servidores · Salas",
              },
              {
                icon: Car,
                title: "Estacionamiento",
                desc: "LPR (reconocimiento de placas) para control de acceso. Cámaras ANPR con flash IR para lectura 24/7. Monitoreo de cajones y control de permanencia.",
                cameras: "8-16 cámaras",
                zones: "Entrada · Salida · Pisos · Vigilancia",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border transition-all hover:shadow-lg"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: "var(--color-muted-foreground)" }}>
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="text-xs font-sans px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)", opacity: 0.9 }}
                  >
                    {item.cameras}
                  </span>
                  <span
                    className="text-xs font-sans px-3 py-1 rounded-full border"
                    style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }}
                  >
                    {item.zones}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRECIOS 2026 ═══════════ */}
      <section id="precios" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Precios reales 2026
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Sin sorpresas. Incluye hardware, instalación y configuración. Los precios son COP e IVA incluido.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col p-6 rounded-xl border-2 transition-all"
                style={{
                  borderColor: plan.highlight ? "var(--color-accent)" : "var(--color-border)",
                  backgroundColor: plan.highlight ? "var(--color-accent)" : "var(--color-background)",
                  color: plan.highlight ? "var(--color-background)" : "var(--color-foreground)",
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-sans font-bold px-4 py-1 rounded-full"
                    style={{ backgroundColor: "var(--color-background)", color: "var(--color-accent)" }}
                  >
                    Más vendido
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold mb-1">{plan.name}</h3>
                <p className="font-sans text-sm mb-1" style={{ opacity: 0.8 }}>{plan.cameras}</p>
                <div className="font-serif text-3xl font-bold my-4">{plan.price}</div>
                <p className="font-sans text-sm mb-6" style={{ opacity: 0.7 }}>{plan.desc}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm font-sans">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ opacity: 0.7 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-6 py-3 rounded-lg font-sans font-semibold text-sm transition-all hover:scale-105 block"
                  style={{
                    backgroundColor: plan.highlight ? "var(--color-background)" : "var(--color-accent)",
                    color: plan.highlight ? "var(--color-accent)" : "var(--color-background)",
                    border: plan.highlight ? "2px solid var(--color-background)" : "none",
                  }}
                >
                  Cotizar {plan.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-sans text-sm" style={{ color: "var(--color-muted-foreground)" }}>
              * Precios referenciales para Bogotá. El costo final depende de distancias, cantidad de puntos y accesibilidad. Cotización sin compromiso vía WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ CÓMO FUNCIONA ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Cómo funciona nuestro servicio
          </h2>
          <p className="font-sans text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            De la primera llamada al sistema funcionando en 4 pasos claros:
          </p>

          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--color-border)" }} />

            {[
              {
                icon: ClipboardCheck,
                step: "01",
                title: "Auditoría Gratuita",
                desc: "Visitamos su negocio en Bogotá, identificamos puntos críticos, medimos distancias, evaluamos infraestructura eléctrica y de red. Le entregamos un plano con ubicación óptima de cada cámara. Sin compromiso.",
                time: "1-2 horas",
              },
              {
                icon: Settings,
                step: "02",
                title: "Instalación Profesional",
                desc: "Nuestro equipo técnico instala el hardware en menos de 24 horas para sistemas de hasta 8 cámaras. Cableado estructurado o inalámbrico según su caso. No dejamos cables expuestos ni destornilladores olvidados.",
                time: "1-3 días",
              },
              {
                icon: Brain,
                step: "03",
                title: "Configuración IA y Monitoreo",
                desc: "Configuramos la analítica de video (YOLO v8): detección de personas, control de aforo, alertas de intrusión. Conectamos las alertas a su WhatsApp o CRM. Le entrenamos para usar la app Remotion.",
                time: "2-4 horas",
              },
              {
                icon: Headphones,
                step: "04",
                title: "Soporte Continuo",
                desc: "Monitoreo remoto del sistema. Si una cámara falla, la detectamos antes de que usted. Soporte técnico vía WhatsApp. Actualizaciones de firmware incluidas. Mantenimiento preventivo cada 6 meses.",
                time: "24/7",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 z-10">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-serif font-bold text-lg md:text-xl border-4"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: "var(--color-accent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2 md:pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                    <h3 className="font-serif text-xl md:text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="font-sans leading-relaxed mb-3" style={{ color: "var(--color-muted-foreground)" }}>
                    {item.desc}
                  </p>
                  <span
                    className="inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)", opacity: 0.8 }}
                  >
                    ⏱ {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CASOS REALES ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Casos reales en Bogotá
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Negocios que ya protegemos con cámaras e inteligencia artificial:
          </p>

          <div className="space-y-8">
            {[
              {
                business: "Ferretería Los 3 Amigos — Suba",
                problem: "Pérdidas de $8 millones/mes por mermas no identificadas. Sin cámaras, el dueño no podía saber si eran robos internos o errores de inventario.",
                solution: "Instalación de 8 cámaras Hikvision ColorVu con analítica IA. Detección de personas en zona de almacén y arqueo de caja por video.",
                result: "Mermas reducidas en 68% en 3 meses. ROI recuperado en 5 semanas. Ahorro anual estimado: $65 millones.",
                icon: Building2,
              },
              {
                business: "Restaurante La Brasa — Chapinero",
                problem: "Sanciones del IDEA por exceder aforo. El local tenía un sistema de conteo manual que fallaba los fines de semana.",
                solution: "6 cámaras con control de aforo en tiempo real por IA. Alertas automáticas cuando se alcanza el 80% de capacidad. Dashboard para gerencia.",
                result: "Cero multas en 12 meses. Mejor control de inventario de comida. Satisfacción de clientes aumentó por evitar esperas.",
                icon: UtensilsCrossed,
              },
              {
                business: "Bodega Distribuidora Norte — Kennedy",
                problem: "2 asaltos en 6 meses. Los ladrones entraban por la noche y no había evidencia para la policía ni para el seguro.",
                solution: "12 cámaras bullet con IR 80m, sensores de movimiento IA, alertas WhatsApp en 3 segundos. Server edge con grabación 90 días.",
                result: "Intento de robo capturado en HD. Policía identificó y capturó sospechosos. Prima de seguro redujo un 40% el siguiente año.",
                icon: Warehouse,
              },
            ].map((c) => (
              <div
                key={c.business}
                className="p-6 md:p-8 rounded-xl border"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-background)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <c.icon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                  <h3 className="font-serif text-lg font-bold">{c.business}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-accent)" }}>Problema</p>
                    <p className="font-sans text-sm" style={{ color: "var(--color-muted-foreground)" }}>{c.problem}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-accent)" }}>Solución</p>
                    <p className="font-sans text-sm" style={{ color: "var(--color-muted-foreground)" }}>{c.solution}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-accent)" }}>Resultado</p>
                    <p className="font-sans text-sm" style={{ color: "var(--color-muted-foreground)" }}>{c.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Preguntas frecuentes
          </h2>
          <p className="font-sans text-lg text-center mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            Todo lo que necesita saber sobre cámaras de seguridad para su negocio en Bogotá:
          </p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border rounded-xl overflow-hidden"
                style={{ borderColor: "var(--color-border)" }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 font-sans font-semibold cursor-pointer select-none list-none">
                  <span>{faq.q}</span>
                  <ChevronRight
                    className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-90"
                    style={{ color: "var(--color-accent)" }}
                  />
                </summary>
                <div
                  className="px-5 pb-5 font-sans text-sm leading-relaxed"
                  style={{ color: "var(--color-muted-foreground)", borderTop: "1px solid var(--color-border)" }}
                >
                  <p className="pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA FINAL ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Proteja su negocio hoy
          </h2>
          <p className="font-sans text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Cada día sin cámaras es un día sin evidencia. Solicite su auditoría gratuita y reciba un plano personalizado para su negocio en Bogotá.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              <Phone className="w-4 h-4" /> WhatsApp: 333 745 0634
            </a>
            <a
              href="mailto:serviciosapcsoporte@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              <Mail className="w-4 h-4" /> Email Directo
            </a>
          </div>

          {/* Ecosystem table */}
          <div className="text-left">
            <RenderMD md={`
## Ecosistema APC: Todo conectado

| Línea | Qué hace | Enlace |
|-------|----------|--------|
| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

**Servicios APC** — Bogotá, Cra. 52c #39b-22
📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com
🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)
`} />
          </div>
        </div>
      </section>
    </div>
  );
}
