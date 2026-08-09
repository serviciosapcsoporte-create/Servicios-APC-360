import { marked } from "marked";
import {
  Shield,
  Camera,
  Home,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  Lock,
  Wifi,
  AlertTriangle,
  Moon,
  Eye,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

/* ─── CONFIG ──────────────────────────────────────────────── */

const WHATSAPP =
  "https://wa.me/573337450634?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20c%C3%A1maras%20para%20instalar%20en%20mi%20casa%20en%20Bogot%C3%A1";

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

/* ─── FAQ DATA ─────────────────────────────────────────────── */

const faqs = [
  {
    q: "¿Cuánto cuesta instalar cámaras de seguridad en casa en Bogotá?",
    a: "Una cámara de seguridad para el hogar cuesta desde $600.000 COP instalada. Un sistema de 4 cámaras para casa parte de $1.800.000 COP con DVR y app móvil. Incluye instalación, configuración y asesoría del punto exacto.",
  },
  {
    q: "¿Qué cámaras son las mejores para una casa?",
    a: "Para viviendas recomendamos Hikvision ColorVu (imagen a color de noche) en fachadas y puntos críticos, mini-dome o cámaras Wi-Fi en interiores. Todas se ven desde el celular con la app Hik-Connect/Remotion.",
  },
  {
    q: "¿Puedo instalar las cámaras yo mismo o debo contratar?",
    a: "Una cámara Wi-Fi se puede instalar con el manual en 30 minutos. Para sistemas cableados con grabación 24/7 recomendamos un profesional: la orientación mal calculada crea puntos ciegos y el video pierde utilidad como evidencia.",
  },
  {
    q: "¿La cámara funciona sin internet o si se va la luz?",
    a: "El DVR graba localmente sin internet; el internet se usa solo para ver desde el celular. Para el corte de luz recomendamos un UPS que mantiene el sistema 30-45 minutos, y batería de respaldo de hasta 4 horas si necesita más.",
  },
  {
    q: "¿Puedo ver las cámaras de mi casa desde el trabajo?",
    a: "Sí. Toda instalación incluye la app móvil: ver en vivo, alertas de movimiento y grabaciones desde cualquier lugar con internet.",
  },
  {
    q: "¿Es legal instalar cámaras en el exterior de una casa en Colombia?",
    a: "En propiedad privada sí es legal. Recomendamos cubrir solo su vivienda, evitar grabar la casa del vecino directamente y cumplir la Ley 1581 de tratamiento de datos si captura zonas comunes o terceros de forma recurrente.",
  },
  {
    q: "¿En qué zonas de Bogotá instalan cámaras de hogar?",
    a: "Instalamos en toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Engativá, Bosa, Soacha y abrindamos. Los sistemas de 1 a 4 cámaras se pueden instalar el mismo día.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */

export function CamerasCasa() {
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
            <Home className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span
              className="text-sm font-sans uppercase tracking-widest"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Cámaras para el hogar · Bogotá 2026
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cámaras para Instalar en Casa en Bogotá
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Proteja su hogar con cámaras Hikvision de visión nocturna a color, instalación profesional y app de celular. Desde $600.000 por cámara, instalación el mismo día en Bogotá.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              Cotizar Cámaras para Casa <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              Ver Precios Residenciales <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Camera, label: "Desde", sub: "$600.000 la cámara" },
              { icon: Clock, label: "Instalación", sub: "el mismo día" },
              { icon: Lock, label: "Garantía", sub: "1-3 años" },
              { icon: Moon, label: "Color de noche", sub: "Hikvision ColorVu" },
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

      {/* ═══════════ POR QUÉ CÁMARAS EN CASA ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Protecta su hogar antes de que pase lo mismo del vecino
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            En Bogotá más de 1 de cada 5 hurtos denunciados ocurre en residencias. Una cámara es disuasión, evidencia y tranquilidad:
          </p>

          <div className="space-y-8">
            {[
              {
                icon: AlertTriangle,
                title: "Dentrada y fachada vigiladas",
                desc: "El 65% de los ingresos a viviendas ocurren por la fachada. Una cámara ColorVu graba en color incluso de noche la persona, el vehículo y la placa. Muchas intrusos cambian de objetivo al ver cámaras.",
                stat: "65%",
                statLabel: "ingresos por la fachada",
              },
              {
                icon: Eye,
                title: "Ve a tu familia desde el celular",
                desc: "Mira a los niños desde la oficina, verifica si llegaron los adultos mayores o revisa a la empleada doméstica sin pedir explicaciones. Live streaming y alertas en segundos.",
                stat: "24/7",
                statLabel: "acceso remoto desde la app",
              },
              {
                icon: Lock,
                title: "Evidencia que vale para el seguro",
                desc: "Las aseguradoras exigen videos nítidos para cubrir daños y hurtos. Con grabación de 90 días y respaldo, su denuncia avanza más rápido y el ajustador tiene material real.",
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

      {/* ═══════════ CÁMARAS POR ZONA DE LA CASA ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Qué cámara sirve en cada parte de la casa?
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            No hay una sola cámara universal. Recomendamos el tipo correcto para cada punto:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Fachada y entrada",
                desc: "Cámara bullet ColorVu (imagen a color de noche). Detecta y disuade desde el momento en que alguien se acerca. Gran angular para cubrir puerta y garaje.",
                tag: "Bullet ColorVu",
              },
              {
                icon: Shield,
                title: "Interiores y salón",
                desc: "Mini-dome de techo discreta para sala y pasillos. Cubre gran área sin ser invasiva y su cables se oculta en ductos.",
                tag: "Mini-dome",
              },
              {
                icon: Camera,
                title: "Cocina y zonas de servicio",
                desc: "Cámara IP con máscara de privacidad para proteger zonas íntimas mientras vigila los puntos que importan.",
                tag: "IP máscara privacidad",
              },
              {
                icon: Moon,
                title: "Garaje y parqueadero",
                desc: "Cámara IR de largo alcance para leer placas en la oscuridad. Alertas de movimiento a a las 2 a. m.",
                tag: "IR 60-80m",
              },
              {
                icon: Wifi,
                title: "Cámara Wi-Fi de instalación rápida",
                desc: "Parta de prueba o para arriendo: se instala 10 minutos, se alimenta por cable y se ve desde la app. Idéalo para entrar si no quiere hacer obras.",
                tag: "Wi-Fi Plug & Play",
              },
              {
                icon: Lock,
                title: "+ Sensores de puertas y humo",
                desc: "Combine la cámara con contactos de puertas/ventanas y detector de humo. Recibirá notificación el instante en que algo se abre o se alarma.",
                tag: "Avero + sensores",
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
                <span
                  className="text-xs font-sans px-3 py-1 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)", opacity: 0.9 }}
                >
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRECIOS RESIDENCIALES ═══════════ */}
      <section id="precios" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Precios de cámaras para instalar en casa, Bogotá 2026
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Precios referenciales incluyendo instalación y configuración (COP, IVA incluido):
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "1 cámara",
                price: "$600.000",
                desc: "Para una entrada o punto crítico",
                features: ["1 cámara HD/ColorVu", "App móvil configurada", "Instalación el mismo día"],
                highlight: false,
              },
              {
                name: "Sistema 4 cámaras",
                price: "$1.800.000",
                desc: "Cobertura completa de la casa",
                features: ["4 cámaras + DVR", "1 TB almacenamiento", "Visión nocturna a color", "Acceso remoto incluido"],
                highlight: true,
              },
              {
                name: "Sistema 8 cámaras",
                price: "$3.200.000",
                desc: "Para casas amplias y conjuntos",
                features: ["8 cámaras ColorVu", "NVR 8ch / 2 TB", "Alertas IA incluidas", "Soporte 90 días"],
                highlight: false,
              },
            ].map((plan) => (
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
                    + Elegido por hogares
                  </div>
                )}
                <h3 className="font-serif text-xl font-bold mb-1">{plan.name}</h3>
                <div className="font-serif text-3xl font-bold my-4">{plan.price}</div>
                <p className="text-sm mb-6" style={{ opacity: 0.7 }}>{plan.desc}</p>
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
              * Precios referenciales Bogotá. El valor final depende del tipo de vivienda y la distancia de cableado. Cotización sin compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Preguntas frecuentes sobre cámaras para casa
          </h2>
          <p className="font-sans text-lg text-center mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            Todo lo que necesita saber antes de proteger su hogar:
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
            Proteja su hogar hoy
          </h2>
          <p className="font-sans text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Asesoría gratuita: le decimos cuántas cámaras necesita, con qué tipo y el precio final antes de que perforamos cualquier muro.
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