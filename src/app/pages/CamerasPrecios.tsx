import { marked } from "marked";
import {
  Shield,
  Camera,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  DollarSign,
  FileText,
  BadgeCheck,
  Info,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

/* ─── CONFIG ──────────────────────────────────────────────── */

const WHATSAPP =
  "https://wa.me/573337450634?text=Hola%2C%20quiero%20el%20precio%20de%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";

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

const pricePlans = [
  {
    name: "Básico",
    cameras: "4 cámaras",
    price: "$1.800.000",
    desc: "Locales pequeños, consultorios, casa",
    features: [
      "4 cámaras HD 4MP",
      "DVR 4 canales",
      "1 TB almacenamiento",
      "Instalación incluida",
      "Configuración app móvil",
      "Soporte 30 días",
    ],
    highlight: false,
  },
  {
    name: "Profesional",
    cameras: "8 cámaras",
    price: "$3.200.000",
    desc: "Negocios medianos con alta rotación",
    features: [
      "8 cámaras 4MP ColorVu",
      "DVR 8 canales",
      "2 TB almacenamiento",
      "Instalación incluida",
      "Alertas automáticas IA",
      "App móvil + escritorio",
      "Soporte 90 días",
    ],
    highlight: true,
  },
  {
    name: "Empresarial",
    cameras: "16 cámaras",
    price: "$5.600.000",
    desc: "Bodegas, clínicas, franquicias",
    features: [
      "16 cámaras 4MP",
      "NVR 16 canales PoE",
      "4 TB almacenamiento RAID",
      "Instalación incluida",
      "Analítica IA completa",
      "Dashboard remoto 24/7",
      "Integración WhatsApp/CRM",
      "Soporte 6 meses",
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
      "YOLO v8 detección de objetos",
      "PPE detection (EPP obligatorio)",
      "Control de aforo en tiempo real",
      "Arqueo de caja por video",
      "Alertas WhatsApp/CRM automáticas",
      "Dashboard ejecutivo",
      "Soporte prioritario 12 meses",
    ],
    highlight: false,
  },
];

/* ─── FAQ DATA ─────────────────────────────────────────────── */

const faqs = [
  {
    q: "¿Cuánto cuesta la instalación de un sistema de cámaras de seguridad en Bogotá?",
    a: "Un sistema de 4 cámaras cuesta desde $1.800.000 COP con instalación y configuración incluida. Uno de 8 cámaras ColorVu ronda los $3.200.000 y uno de 16 con NVR PoE, $5.600.000. La cotización varía por distancia de cableado, número de puntos y accesibilidad.",
  },
  {
    q: "¿El precio incluye el valor de la instalación o solo las cámaras?",
    a: "Nuestros precios incluyen hardware, instalación, configuración y app móvil. No cobramos extra por los técnicos. Solo servicios adicionales (cableado extendido > 40m, acceso especial, servidor IA) se cotizan por separado.",
  },
  {
    q: "¿Por qué un sistema de cámaras cuesta $1.800.000 cuando veo cámaras wifi en $150.000?",
    a: "La diferencia está en la grabación. Una cámara wifi barata graba en SD (que se llena, o se roban), no tiene retención de 90 días ni garantía. Un sistema Hikvision con DVR graba 24/7 en local, con respaldo y visión nocturna. Son cosas diferentes: una es un juguete, la otra es evidencia.",
  },
  {
    q: "¿Ofrecen pagos a cuotas o financiación?",
    a: "Sí. Sistemas desde $1.800.000 se pueden financiar en cuotas con tarjeta de crédito (3, 6 y 12 cuotas) y también recibimos transferencia y efectivo. La cotización detalla las opciones.",
  },
  {
    q: "¿La cotización es gratis y sin compromiso?",
    a: "Sí, completamente gratis. Hacemos diagnóstico por llamada/video o visita: medimos el punto, calculamos cableado y le entregamos precio cerrado antes de que usted se decida.",
  },
  {
    q: "¿Qué incluye la garantía?",
    a: "Hardware con garantía de fábrica de 1 a 3 años. Instalación con respaldo técnico por plan (30 días a 12 meses). Los contratos de soporte mensual desde $250.000 incluyen mantenimiento preventivo cada 6 meses.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */

export function CamerasPrecios() {
  return (
    <div className="min-h-screen" style={{ color: "var(--color-foreground)" }}>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden py-20 md:py-28 px-6"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--color-foreground) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <DollarSign className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span
              className="text-sm font-sans uppercase tracking-widest"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Precios reales · Bogotá 2026
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Precios de Instalación de Cámaras de Seguridad
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Cuánto cuesta realmente instalar cámaras de seguridad en Bogotá en 2026: sin letra pequeña, incluyendo hardware, instalación, configuración y acceso desde el celular.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              Pedir Cotización <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#tabla"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              Ver Tabla de Precios <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Camera, label: "4 cámaras", sub: "desde $1.800.000" },
              { icon: Clock, label: "Instalación", sub: "incluida en el precio" },
              { icon: Shield, label: "Garantía", sub: "1 a 3 años" },
              { icon: CheckCircle2, label: "Cotización", sub: "gratis y cerrada" },
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

      {/* ═══════════ CHANDAS DE PRECIO ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Qué afecta el precio?
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            El mismo sistema puede costar diferente en dos locales en Bogotá. Estos son los 4 factores que tocan el valor final:
          </p>

          <div className="space-y-6">
            {[
              {
                icon: Camera,
                title: "Número de cámaras (puntos)",
                desc: "Cada punto adicional suma cámara + capacidad del DVR/NVR + tiempo de instalación. De 4 a 8 puntos suele ser 1 día; de 16+ puntos, 2-3 días.",
              },
              {
                icon: Info,
                title: "Tipo de cámara",
                desc: "Una HD 4MP básica cuesta menos que una ColorVu (color de noche) o una IP con IA. En zonas oscuras recomendamos ColorVu para que la evidencia sea útil.",
              },
              {
                icon: FileText,
                title: "Distancia de cableado",
                desc: "Los precios incluyen una base de cableado. Pasillos muy largos o techos altos agregan cable y tiempo de trabajo. Por eso la cotización con previa visita es cerrada, no estimada.",
              },
              {
                icon: Shield,
                title: "Tipo de negocio y Cobertura",
                desc: "Restaurantes con aforo IA, bodegas con LPR (placas), clínicas con requisitos de Normativa 1581: cada operación pide hardware y config distinta. Nuestra cotización la arma sobre eso.",
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
                  <p className="font-sans leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TABLA DE PRECIOS ═══════════ */}
      <section id="tabla" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Tabla de precios de instalación de cámaras 2026
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Precios en pesos colombianos, incluyen instalación y configuración. Cotice a su medida vía WhatsApp:
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
              * Precios referenciales Bogotá. La cotización final es cerrada solo después de la visita técnica. Financiación a 12 cuotas con tarjeta de crédito.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ POR QUÉ PRECIOS TRANSPARENTES ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Por qué nuestros precios no se 'chotan'
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            No publicamos precio de gancho de $300.000 para luego cobrar $1.800.000 en partes. Esta es de a diferencia:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Precio cerrado",
                desc: "La cotización con los puntos exactos y el cableado real, no una estimación que 'se puede pasar'.",
              },
              {
                icon: Phone,
                title: "WhatsApp directo, no call center",
                desc: "Habla directo con el instalador/consultor, no con un operador que solo agenda citas. Las preguntas de precios se responden ahí mismo.",
              },
              {
                icon: ChevronRight,
                title: "IVA incluido",
                desc: "Todos los precios publicados están en COP e incluyen IVA. No le agregan 'detallitos' al final.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 md:p-8 rounded-xl border"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-background)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-accent)", opacity: 0.1 }}
                >
                  <item.icon className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Preguntas frecuentes sobre precios
          </h2>
          <p className="font-sans text-lg text-center mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            Las dudas más comunes cuando se compara el precio de instalar cámaras:
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
            Cotice su sistema hoy
          </h2>
          <p className="font-sans text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Mándenos WhatsApp cuántas cámaras necesita y el sector: recibe precio indicativo en minutos y cotización cerrada tras la visita técnica.
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
| **APC Visión IA** | Analítica YOLO, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |
| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |
| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |
| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |

---

## Servicios en barrios de Bogotá

- [Cámaras de seguridad en Suba](#suba)
- [Cámaras de seguridad en Kennedy](#kennedy)
- [Cámaras de seguridad en Chapinero](#chapinero)
- [Cámaras de seguridad en Usaquén](#usaquen)
- [Cámaras de seguridad en Fontibón](#fontibon)

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