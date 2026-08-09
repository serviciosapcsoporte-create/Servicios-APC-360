import { marked } from "marked";
import {
  Shield,
  Camera,
  Brain,
  Search,
  ClipboardCheck,
  Phone,
  Mail,
  BarChart3,
  Workflow,
  Server,
  Globe,
  Lock,
  Lightbulb,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

/* ─── CONFIG ──────────────────────────────────────────────── */

const WHATSAPP =
  "https://wa.me/573337450634?text=Hola%2C%20necesito%20un%20consultor%20tecnol%C3%B3gico%20para%20mi%20negocio%20en%20Bogot%C3%A1";

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
    q: "¿Qué hace exactamente un consultor tecnológico?",
    a: "Analiza cómo usa su negocio la tecnología, encuentra costos escondidos y flujos manuales que se pueden automatizar, y diseña un plan de implementación con retorno medible. No vendemos tecnología por vender: priorizamos lo que le genera ROI en el corto plazo.",
  },
  {
    q: "¿En qué se diferencia de un ingeniero de sistemas tradicional?",
    a: "Un ingeniero de sistemas suele mantener la infraestructura. Un consultor tecnológico evalúa, decide y estructura: cuántas cámaras necesita realmente, si su CCTV sirve o hay que reprogramarlo, qué procesos se automatizan primero y cómo se conectan con su CRM.",
  },
  {
    q: "¿Trabajan solo con empresas o también con negocios pequeños?",
    a: "Con ambos. Hemos hecho diagnósticos desde una ferretería de barrio en Kennedy hasta bodegas de distribución. Para PYMES el diagnóstico se enfoca en seguridad (cámaras), atención (WhatsApp bot) y automatización básica con retorno rápido.",
  },
  {
    q: "¿Cuánto cuesta un diagnóstico tecnológico?",
    a: "El diagnóstico inicial de diagnóstico de 1 a 2 horas es gratuito cuando se concreta la implementación. Si solo quiere el informe sin ejecutar nada, tiene un costo desde $350.000 COP según el alcance.",
  },
  {
    q: "¿Me obligan a comprar hardware nuevo?",
    a: "No. Nuestra filosofía es reutilizar: si sus cámaras Hikvision/Dahua cumplen RTSP/ONVIF las reprogramamos con IA en lugar de venderle equipos nuevos. Solo proponemos compra cuando el equipo existente no sirve y se lo explicamos con datos.",
  },
  {
    q: "¿En qué zonas de Bogotá ofrecen consultoría?",
    a: "En toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Centro y sur. El diagnóstico remoto se hace por video-llamada; la visita técnica presencial se agenda dentro de los 2 días hábiles.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */

export function ConsultorTecnologico() {
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
            <Brain className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span
              className="text-sm font-sans uppercase tracking-widest"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Consultoría tecnológica · Bogotá
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Consultor Tecnológico para Empresas en Bogotá
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Convertimos la tecnología que ya paga en resultados medibles: seguridad con IA, automatización de procesos y datos que toman decisiones. Diagnóstico con retorno de inversión, sin tecnicismos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              Ver Metodología <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Search, label: "Diagnóstico", sub: "gratis con implementación" },
              { icon: BarChart3, label: "ROI", sub: "medido en semanas" },
              { icon: Lock, label: "Reutiliza", sub: "su CCTV actual" },
              { icon: Workflow, label: "Procesos", sub: "automatizados con n8n" },
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

      {/* ═══════════ DÓNDE EL CONSULTOR ENCUENTRA VALOR ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            El costo escondido de NO tener consultoría
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            La mayoría de PYMES paga tecnología que no usan o usa tecnología que no funciona. Un consultor detecta esto en semanas:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                title: "Cámaras que no graban como deberían",
                desc: "Equipos instalados sin orientación correcta, SD llena, DVR sin configurar. El dueño cree que está protegido y descubre que no tiene video hasta después del robo.",
                tag: "Seguridad",
              },
              {
                icon: Workflow,
                title: "Tareas repetitivas que nadie mide",
                desc: "Reportes a mano, confirmaciones por WhatsApp copiadas una a una, inventario en Excel desactualizado. Horas que se convierten en dinero perdido cada mes.",
                tag: "Automatización",
              },
              {
                icon: BarChart3,
                title: "Datos que no se usan para decidir",
                desc: "El negocio tiene datos (ventas, aforo, arqueos) pero la gerencia decide por intuición porque nadie los consolidó en un tablero.",
                tag: "Datos",
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

      {/* ═══════════ METODOLOGÍA ═══════════ */}
      <section id="metodo" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Cómo trabaja el consultor
          </h2>
          <p className="font-sans text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Un método claro, con entregables en cada etapa y retorno medido:
          </p>

          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--color-border)" }} />

            {[
              {
                icon: ClipboardCheck,
                step: "01",
                title: "Diagnóstico tecnológico",
                desc: "Auditoría de su infraestructura actual: CCTV, conectividad, herramientas de gestión. Identificamos los 3 problemas que más plata le cuestan y los priorizamos por ROI.",
                time: "1-2 horas",
              },
              {
                icon: Lightbulb,
                step: "02",
                title: "Plan de acción con ROI",
                desc: "Le entregamos un plan concreto: qué se automatiza primero, si sus cámaras se reprograman o se reemplazan, y cuánto cuesta cada paso. Cada recomendación tiene costo y retorno estimado.",
                time: "2-3 días",
              },
              {
                icon: Workflow,
                step: "03",
                title: "Implementación por fases",
                desc: "Ejecutamos por fases pequeñas: primero lo que se paga solo (seguridad IA o automatización de WhatsApp), luego lo que agrega control (dashboards y reportes).",
                time: "Semanas",
              },
              {
                icon: BarChart3,
                step: "04",
                title: "Seguimiento y ajuste",
                desc: "Medimos el resultado real: mermas reducidas, horas ahorradas, respuestas más rápidas. Ajustamos lo que no esté dando el retorno prometido. Usted recibe reportes claros.",
                time: "Mensual",
              },
            ].map((item) => (
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

      {/* ═══════════ ÁREAS DE CONSULTORÍA ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Áreas donde un consultor tecnológico agrega valor
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Del CCTV a los datos, todo conectado en un solo plan:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                title: "Seguridad con IA (CCTV)",
                desc: "¿Sus cámaras Hikvision/Dahua sirven? Las auditamos, reprogramamos con analítica YOLO y conectamos alertas a WhatsApp. Reducción de mermas documentada del 68% en clientes de retail.",
                tag: "APC Visión AI",
              },
              {
                icon: Workflow,
                title: "Automatización de procesos",
                desc: "n8n + APIs: del dato de la cámara al CRM, del pedido al inventario, de la alerta al WhatsApp del gerente. Flujos que eliminan tareas manuales.",
                tag: "APC Automatización",
              },
              {
                icon: BarChart3,
                title: "Datos y tableros ejecutivos",
                desc: "Centralizamos CCTV + CRM + ventas en dashboards (Looker/Grafana) para que la gerencia decida con datos reales, no con corazonadas.",
                tag: "APC Core",
              },
              {
                icon: Globe,
                title: "Presencia digital y SEO local",
                desc: "Su negocio en Google Maps y búsquedas locales de Bogotá, con landing de alta conversión conectada a WhatsApp. CTA web → bot → cita → venta.",
                tag: "DogWeb",
              },
              {
                icon: Server,
                title: "Infraestructura y resiliencia",
                desc: "Servidores edge GPU, redes, bases de datos replicadas y respaldo. Si se cae el internet, su CCTV + IA siguen grabando en local.",
                tag: "APC Core",
              },
              {
                icon: Phone,
                title: "Bots de WhatsApp con IA",
                desc: "Atención 24/7: responden, agendan, califican leads. Conectado a su CRM y a la analítica de video para alertas automáticas.",
                tag: "APC Automatización",
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

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Preguntas frecuentes sobre consultoría tecnológica
          </h2>
          <p className="font-sans text-lg text-center mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            Lo que las empresas en Bogotá preguntan antes de empezar:
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
            Agende su diagnóstico tecnológico
          </h2>
          <p className="font-sans text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            En 1-2 horas sabrá si su tecnología está protegiendo su dinero o gastándolo. Diagnóstico gratis si concreta la implementación.
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