import { marked } from "marked";
import {
  Shield,
  Camera,
  Video,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Cable,
  Settings2,
  Headphones,
  ClipboardCheck,
  Building2,
  Home,
  Store,
  Warehouse,
  Boxes,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

/* ─── CONFIG ──────────────────────────────────────────────── */

const WHATSAPP =
  "https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20instalaci%C3%B3n%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";

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
    q: "¿Cuánto cuesta la instalación de cámaras de seguridad en Bogotá?",
    a: "Depende del número de puntos y del tipo de cableado. Un sistema de 4 cámaras parte de $1.800.000 COP, 8 cámaras ColorVu alrededor de $3.200.000 y 16 cámaras con NVR PoE cerca de $5.600.000. Todos incluyen instalación, configuración y app móvil.",
  },
  {
    q: "¿Cuánto demora la instalación?",
    a: "Un sistema residencial de 4 a 8 cámaras se instala en 1 día hábil. Sistemas comerciales de 16+ puntos con cableado estructurado y servidor de IA pueden tomar de 2 a 3 días. Coordinamos horarios que no interrumpan su operación.",
  },
  {
    q: "¿La instalación incluye acceso remoto desde el celular?",
    a: "Sí. Toda instalación incluye configuración de la app Remotion / Hik-Connect: ver en vivo, recibir alertas y reproducir grabaciones desde cualquier lugar con internet.",
  },
  {
    q: "¿Puedo reutilizar mis cámaras Hikvision actuales?",
    a: "Sí. Reprogramamos sus equipos Hikvision/Dahua que cumplan RTSP/ONVIF y los dejamos listos para analítica IA sin comprar hardware nuevo. Si necesita reemplazo, instalamos Hikvision certificado IA-ready.",
  },
  {
    q: "¿Funciona la instalación sin internet permanente?",
    a: "Las cámaras graban localmente en el DVR/NVR sin internet. El internet solo se necesita para acceso remoto y alertas IA. Recomendamos mínimo 10 Mbps simétricos para sistemas con analítica.",
  },
  {
    q: "¿Qué garantía tienen?",
    a: "Hardware con garantía de fábrica de 1 a 3 años según modelo. Soporte técnico según plan: 30 días (básico) hasta 12 meses (IA Total), extensible con contrato mensual desde $250.000.",
  },
  {
    q: "¿En qué zonas de Bogotá instalan?",
    a: "Cubrimos toda Bogotá y municipios cercanos: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Bosa, Engativá, Centro y sur de la ciudad. También atendemos Cundinamarca con visita técnica.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */

export function CamerasInstalacion() {
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
            <Video className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span
              className="text-sm font-sans uppercase tracking-widest"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Instalación de cámaras · Bogotá 2026
            </span>
          </div>

          <span className="inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full mb-6 border" style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}>
            Hikvision certificado · Garantía 1-3 años
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Instalación de Cámaras de Seguridad en Bogotá
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Instalación profesional de cámaras Hikvision para casas, negocios y empresas: cableado estructurado sin puntos ciegos, configuración de acceso remoto y equipos IA-ready. Cotización con visita técnica incluida.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              Cotizar Instalación <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base border-2 transition-all hover:scale-105"
              style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
            >
              Ver Proceso <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Camera, label: "4 cámaras", sub: "desde $1.800.000" },
              { icon: Clock, label: "Instalación", sub: "1 día hábil" },
              { icon: Settings2, label: "Sin puntos ciegos", sub: "cableado estructurado" },
              { icon: Shield, label: "Garantía", sub: "1-3 años Hikvision" },
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

      {/* ═══════════ POR QUÉ CONTRATAR EL SERVICIO ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Por qué contratar un instalador certificado y no hacerlo usted mismo?
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            En Bogotá se denuncian más de 20.000 hurtos a residencias al año. Un sistema mal instalado crea puntos ciegos, cámaras caídas y evidencia que no sirve. Esto es lo que resuelve una instalación profesional:
          </p>

          <div className="space-y-8">
            {[
              {
                icon: Cable,
                title: "Cableado profesional estructurado",
                desc: "Sujeción correcta, canaletas, protección contra descargas y etiquetado. Evitamos cortos, interferencias y cámaras que pierden señal a los 3 meses. No dejamos cables expuestos.",
              },
              {
                icon: Settings2,
                title: "Cobertura sin puntos ciegos",
                desc: "Calculamos ángulos, alcance de visión nocturna y zonas de ingreso antes de perforar. Resultado: cobertura del 100% de los puntos críticos de su casa o negocio.",
              },
              {
                icon: Shield,
                title: "Configuración y respaldo correctos",
                desc: "DVR/NVR con grabación continua o por eventos, retención de 90 días, acceso remoto y claves seguras. Un DIY típicamente deja el sistema grabando solo de día o sin respaldo.",
              },
              {
                icon: CheckCircle2,
                title: "Listo para IA sin recompra",
                desc: "Todos nuestros sistemas se entregan IA-ready: cuando quiera activar conteo, aforo o alertas, solo se reprograma el equipo. No paga dos veces por el mismo hardware.",
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

      {/* ═══════════ TIPOS DE INSTALACIÓN ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Servicios de instalación de cámaras que ofrecemos
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Desde una cámara en casa hasta 40+ puntos empresariales con analítica de video:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: "Instalación residencial en casa",
                desc: "Cámaras para unidades, entradas, jardines y parqueaderos. Sistemas de 2 a 8 cámaras con grabación local y acceso por celular.",
                bullets: "2-8 cámaras · DVR local · App móvil",
              },
              {
                icon: Store,
                title: "Locales y mini mercados",
                desc: "Cobertura de caja, bodega y fachada. Visión nocturna ColorVu y alertas fuera de horario. Ideal para tiendas y establecimientos de barrio.",
                bullets: "4-8 cámaras · IA aforo básico",
              },
              {
                icon: Building2,
                title: "Oficinas y empresas",
                desc: "Control de acceso, recepción, pisos y servidores. Integración con sistemas de control de acceso y analítica de flujo de personas.",
                bullets: "4-16 cámaras · NVR poE",
              },
              {
                icon: Warehouse,
                title: "Bodegas y distribución",
                desc: "Cámaras bullet con IR de largo alcance, patios de carga y perimetrales. Reconocimiento de placas (LPR) opcional.",
                bullets: "8-32 cámaras · Server edge",
              },
              {
                icon: Boxes,
                title: "Restaurantes",
                desc: "Analítica de cocina, barra y salón. Control de aforo para cumplimiento del IDEA y reducción de mermas.",
                bullets: "6-12 cámaras · Aforo IA",
              },
              {
                icon: Settings2,
                title: "Recuperación de sistemas viejos",
                desc: "¿Ya tiene cámaras Hikvision/Dahua instaladas mal? Los auditamos, reubicamos, recablearimos y dejamos grabando correctamente.",
                bullets: "RTSP/ONVIF · Sin hardware nuevo",
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
                  {item.bullets}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESO ═══════════ */}
      <section id="proceso" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Cómo funciona la instalación
          </h2>
          <p className="font-sans text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Del primer mensaje al sistema funcionando en 4 pasos:
          </p>

          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--color-border)" }} />

            {[
              {
                icon: ClipboardCheck,
                step: "01",
                title: "Diagnóstico técnico gratuito",
                desc: "Coordinamos visita o video-llamada: medimos distancias, revisamos la red eléctrica y de datos. Le entregamos cotización cerrada con desglose de equipos e instalación. Sin letras pequeñas.",
                time: "1 día",
              },
              {
                icon: Cable,
                step: "02",
                title: "Tendido y montaje",
                desc: "Instalamos cableado estructurado o inalámbrico según su caso, montamos las cámaras con orientación calculada y dejamos todo limpio y ordenado.",
                time: "1-3 días",
              },
              {
                icon: Settings2,
                step: "03",
                title: "Configuración y acceso remoto",
                desc: "Programamos DVR/NVR, retención de grabación, alertas y acceso por celular. Le entregamos el usuario y le enseñamos a usarlo en 15 minutos.",
                time: "2-4 horas",
              },
              {
                icon: Headphones,
                step: "04",
                title: "Soporte y garantía",
                desc: "Seguimiento remoto del sistema, detección temprana de caídas y garantía de fábrica. Con IA, usted recibe alertas por WhatsApp si algo se interrumpe.",
                time: "24/7",
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

      {/* ═══════════ PRECIOS RÁPIDOS ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Precios de instalación de cámaras 2026
          </h2>
          <p className="font-sans text-lg mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Precios referenciales en Bogotá, incluyen equipos Hikvision, instalación, configuración y app móvil (COP, IVA incluido).
          </p>

          <div className="overflow-x-auto mb-8 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}>
                  <th className="px-4 py-3 text-left font-sans font-semibold">Sistema</th>
                  <th className="px-4 py-3 text-left font-sans font-semibold">Cantidad</th>
                  <th className="px-4 py-3 text-left font-sans font-semibold">Precio desde</th>
                  <th className="px-4 py-3 text-center font-sans font-semibold">Incluye</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Casa básica", "4 cámaras HD 4MP + DVR 4ch", "$1.800.000", "Instalación + app móvil"],
                  ["Negocio medio", "8 cámaras ColorVu + DVR 8ch", "$3.200.000", "IA alertas + app móvil"],
                  ["Empresa completa", "16 cámaras + NVR PoE", "$5.600.000", "Analítica IA + dashboard"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-border)", backgroundColor: i % 2 ? "var(--color-background)" : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3" style={{ color: j === 2 ? "var(--color-accent)" : "var(--color-foreground)", fontWeight: j === 2 ? 700 : "normal" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-sans text-sm mb-8" style={{ color: "var(--color-muted-foreground)" }}>
            * El valor final depende de la distancia del cableado, número de puntos y accesibilidad. Cotización sin costo vía WhatsApp.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
          >
            <Phone className="w-4 h-4" /> Cotizar ahora por WhatsApp
          </a>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Preguntas frecuentes sobre instalación de cámaras
          </h2>
          <p className="font-sans text-lg text-center mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            Todo lo que necesita saber antes de cotizar su sistema de seguridad en Bogotá:
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
            Agenda su diagnóstico técnico gratuito
          </h2>
          <p className="font-sans text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Visitamos su casa o negocio en Bogotá, revisamos los puntos críticos y le entregamos cotización cerrada. Sin compromiso.
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