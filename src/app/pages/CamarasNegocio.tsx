import { marked } from "marked";
import { VideoHero } from "../components/VideoHero";
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
    name: "Kit 4 Cámaras HD",
    cameras: "4 Cámaras",
    price: "$1.800.000",
    desc: "El más vendido - Ideal para locales pequeños y consultorios",
    features: [
      "4 Cámaras de alta definición (Exterior/Interior)",
      "DVR + Disco Duro de almacenamiento",
      "Cableado, fuentes y conectores + Instalación Técnica Completa",
      "BONUS GRATIS: Inducción de uso + Asesoría Básica de Escalado con IA",
    ],
    highlight: true,
  },
  {
    name: "Kit 8 Cámaras HD",
    cameras: "8 Cámaras",
    price: "$2.800.000",
    desc: "Para Bodegas / Locales Grandes",
    features: [
      "8 Cámaras HD + DVR de 8 canales + Disco Duro",
      "Cableado estructurado completo + Instalación Profesional",
      "BONUS GRATIS: Inducción de uso + Diagnóstico de Infraestructura para Analítica de Video",
    ],
    highlight: false,
  },
  {
    name: "Mano de Obra por Punto",
    cameras: "Instalación por punto",
    price: "$80.000 - $150.000",
    desc: "Mano de obra por punto según altura y complejidad",
    features: [
      "Instalación por punto (según altura y complejidad)",
      "Cableado estético y estructurado",
      "Configuración e inducción en celular GRATIS",
      "Asesoría de potencial con IA INCLUIDA",
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
            <VideoHero
        title="Instalación de Cámaras de Seguridad en Bogotá"
        subtitle="Instalación técnica profesional, cableado estético y configuración en tu celular. Desde mano de obra por punto hasta kits completos listos para proteger tu negocio o casa."
        ctaLabel="Cotizar Mi Instalación por WhatsApp"
        ctaHref={"https://wa.me/573337450634?text=Hola%20Servicios%20APC,%20quiero%20cotizar%20la%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20para%20mi%20negocio%20en%20Bogot%C3%A1"}
        showSecondaryCta={true}
        secondaryCtaLabel="Ver Planes y Precios"
        secondaryCtaHref="/#precios"
      />
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
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
                desc: "Analítica de cocina, sala y barra. Control de aforo para cumplimiento IDEA. Cámaras resistentes a humedad y grasas industriales.",
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
                desc: "LPR (reconocimiento de placas) para control de acceso. Cámaras ANPR con flash IR para lectura 24/7. Analítica de cajones y control de permanencia.",
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
        {/* 
        {/* BLOQUE 2: VALOR AGREGADO EN LA INSTALACIÓN */}
        <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
              Valor Agregado en la Instalación: ¿Por qué elegirnos?
            </h2>
            <p className="font-sans text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
              Mostramos brevemente por qué la mano de obra vale entre $80k y $150k:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-border bg-background/50 hover:border-accent/30 transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }}>
                  <UtensilsCrossed className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Estética y Limpieza</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Cableado estructurado oculto, sin cables colgados ni instalaciones ordinarias. Dejamos tu espacio impecable.</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background/50 hover:border-accent/30 transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }}>
                  <Eye className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ángulo de Visión Estratégico</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Estudio previo del espacio para evitar puntos ciegos. Cobertura total sin zonas muertas.</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background/50 hover:border-accent/30 transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }}>
                  <Brain className="w-6 h-6" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Inducción Técnica</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Te enseñamos a ti y a tu personal a usar la app paso a paso. Soporte vitalicio incluido.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 3: KITS TODO INCLUIDO (reemplaza sección de precios) */}
        <section id="precios" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
              Kits Todo Incluido: Instalación + Materiales + Bonus IA
            </h2>
            <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
              Kits llave en mano: hardware + instalación + inducción + bonus de escalado con IA. Sin sorpresas, todo incluido.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Kit 4 Cámaras HD */}
              <div className="relative flex flex-col p-6 rounded-2xl border-2 transition-all" style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-background)" }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  El más vendido
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 text-center">Kit 4 Cámaras HD</h3>
                <p className="text-center text-muted-foreground mb-4">El más vendido - Ideal para locales pequeños, consultorios y oficinas</p>
                <div className="text-center text-3xl font-bold text-accent mb-6">$1.800.000 COP</div>
                <ul className="space-y-3 mb-6">
                  {[
                    "4 Cámaras de alta definición (Exterior/Interior)",
                    "DVR + Disco Duro de almacenamiento",
                    "Cableado, fuentes y conectores + Instalación Técnica Completa",
                    "BONUS GRATIS: Inducción de uso + Asesoría Básica de Escalado con IA"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573337450634?text=Hola%20Servicios%20APC,%20me%20interesa%20cotizar%20el%20Plan%20Kit%204%20C%C3%A1maras%20HD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-accent text-accent-foreground py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Cotizar Kit 4 Cámaras
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Kit 8 Cámaras HD */}
              <div className="relative flex flex-col p-6 rounded-2xl border-2 border-border transition-all hover:border-accent/50" style={{ backgroundColor: "var(--color-background)" }}>
                <h3 className="font-serif text-2xl font-bold mb-2 text-center">Kit 8 Cámaras HD</h3>
                <p className="text-center text-muted-foreground mb-4">Para Bodegas / Locales Grandes</p>
                <div className="text-center text-3xl font-bold text-foreground mb-6">$2.800.000 COP</div>
                <ul className="space-y-3 mb-6">
                  {[
                    "8 Cámaras HD + DVR de 8 canales + Disco Duro",
                    "Cableado estructurado completo + Instalación Profesional",
                    "BONUS GRATIS: Inducción de uso + Diagnóstico de Infraestructura para Analítica de Video"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/573337450634?text=Hola%20Servicios%20APC,%20me%20interesa%20cotizar%20el%20Kit%208%20C%C3%A1maras%20HD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 border-accent text-accent py-3 rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-colors inline-flex items-center justify-center gap-2"
                >
                  Cotizar Kit 8 Cámaras
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Mano de obra por punto */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="p-6 rounded-2xl border border-border bg-background/50 text-center">
                <h3 className="font-serif text-xl font-bold mb-2">¿Ya tienes las cámaras? Solo necesitas la mano de obra</h3>
                <p className="text-muted-foreground mb-4">Te cobramos entre $80.000 y $150.000 por punto según la altura y complejidad</p>
                <a
                  href="https://wa.me/573337450634?text=Hola%20Servicios%20APC,%20ya%20tengo%20las%20c%C3%A1maras%20y%20necesito%20solo%20la%20mano%20de%20obra%20de%20instalaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={18} />
                  Agenda la Visita del Técnico
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 4: PRIMER LLAMADO A LA ACCIÓN */}
        <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              ¿Ya tienes las cámaras y solo necesitas la mano de obra de instalación?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Te cobramos entre $80.000 y $150.000 por punto según la altura y complejidad.
            </p>
            <a
              href="https://wa.me/573337450634?text=Hola%20Servicios%20APC,%20ya%20tengo%20las%20c%C3%A1maras%20y%20necesito%20solo%20la%20mano%20de%20obra%20de%20instalaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} />
              Agenda la Visita del Técnico
            </a>
          </div>
        </section>

        {/* BLOQUE 5: EL ESCALADO - "¿QUÉ MÁS PUEDES HACER CON TUS CÁMARAS?" */}
        <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
              El Escalado: ¿Qué más puedes hacer con tus cámaras?
            </h2>
            <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
              Una cámara no solo debe grabar robos, debe ayudarte a controlar tu negocio.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/analitica-video-ia-empresas-bogota"
                className="press group relative rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl p-6 hover:border-accent/30 hover:bg-background transition-all"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#001135] to-[#0a1c3f]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white/20" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  Conectar tus cámaras a IA YOLO
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Para conteo de personas, mapas de calor, aforo y detección de intrusión.
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                  Ver Analítica IA
                  <ChevronRight size={14} />
                </div>
              </a>

              <a
                href="/automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard"
                className="press group relative rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl hover:border-accent/30 hover:bg-background transition-all"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#001135] to-[#0a1c3f]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-12 h-12 text-white/20" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  Automatizar reportes y alertas
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Integración con WhatsApp, CRM y dashboards en tiempo real vía n8n.
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                  Ver Automatización
                  <ChevronRight size={14} />
                </div>
              </a>

              <a
                href="/seo-local-google-maps-empresas-seguridad-bogota"
                className="press group relative rounded-2xl overflow-hidden border border-border bg-background/50 backdrop-blur-xl hover:border-accent/30 hover:bg-background transition-all"
                style={{ backdropFilter: "blur(20px)" }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#001135] to-[#0a1c3f]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-white/20" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  Aumentar visibilidad en Google Maps
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  SEO Local y Google Business Profile para empresas de seguridad en Bogotá.
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">
                  Ver SEO Local
                  <ChevronRight size={14} />
                </div>
              </a>
            </div>
          </div>
        </section>CTA FINAL ═══════════ */
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
