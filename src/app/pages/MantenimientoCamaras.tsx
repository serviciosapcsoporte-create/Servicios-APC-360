import { marked } from "marked";
import {
  ShieldCheck,
  Camera,
  Video,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  Cable,
  Settings2,
  Headphones,
  ClipboardCheck,
  Wrench,
  ScanLine,
  HardDriveDownload,
  Building2,
  Store,
  Utensils,
  Warehouse,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

/* ─── CONFIG ──────────────────────────────────────────────── */

const WHATSAPP =
  "https://wa.me/573337450634?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20el%20mantenimiento%20de%20c%C3%A1maras%20de%20seguridad%20en%20Bogot%C3%A1";

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
    q: "¿En qué consiste el mantenimiento de cámaras de seguridad?",
    a: "Es un servicio periódico (preventivo) y de reparación (correctivo) que garantiza que sus cámaras graben siempre con calidad. Incluye limpieza de lentes, revisión de cableado y conexiones, actualización de firmware, verificación de almacenamiento (DVR/NVR) y revisión de configuración de grabación continua por eventos. En Servicios APC añadimos una capa extra: alineamos el sistema para que esté listo para analítica IA y alertas por WhatsApp.",
  },
  {
    q: "¿Cada cuánto debo hacer mantenimiento preventivo de cámaras?",
    a: "Recomendamos una revisión preventiva cada 6 meses. En Bogotá, el polvo, la humedad y las lluvias (cámaras exteriores) degradan lentes y conectores. Un mantenimiento semestral evita que una cámara grabando 'a negro' pase semanas sin notarse. Si su negocio es crítico (caja, bodega), puede optar por supervisión remota mensual de caídas.",
  },
  {
    q: "¿Cuánto cuesta el mantenimiento de cámaras en Bogotá?",
    a: "El mantenimiento preventivo por visita parte de $180.000 COP e incluye la revisión de hasta 4 cámaras (limpieza, firmware, cableado y configuración). Cada cámara adicional suma un costo menor. El mantenimiento correctivo (reemplazo de equipo o reparación) se cotiza según la falla. Ofrecemos planes de supervisión remota mensual desde $250.000 COP.",
  },
  {
    q: "¿Revisan y reparaman cámaras de cualquier marca?",
    a: "Sí. Trabajamos principalmente con Hikvision y Dahua, pero revisamos y optimizamos cámaras de cualquier marca que exponga RTSP/ONVIF: Uniview, Axis, Hanwha, TP-Link VIGI, entre otras. Si su sistema está en mal estado, lo ponemos a grabar correctamente y, si aplica, lo dejamos listo para IA sin comprar hardware nuevo.",
  },
  {
    q: "¿Pueden diagnosticar una cámara que no graba o se ve borrosa?",
    a: "Sí. Ese es uno de los servicios más solicitados. Detectamos si el problema es el lente (sucio o velado), el cableado, la fuente de alimentación, la red o la configuración del DVR. Le entregamos diagnóstico con causa exacta y cotización antes de intervenir. Solo damos solución cuando usted lo aprueba.",
  },
  {
    q: "¿El mantenimiento incluye revisión de la grabación y el respaldo?",
    a: "Sí. Revisamos que el DVR/NVR esté grabando de forma continua o por eventos, que la retención de video sea la correcta (recomendamos 90 días) y que el almacenamiento no esté saturado. Le dejamos configurado el respaldo y las alertas de fallo para que un problema de grabación no pase desapercibido.",
  },
  {
    q: "¿En qué zonas de Bogotá realizan mantenimiento de cámaras?",
    a: "Cubrimos toda Bogotá: Suba, Kennedy, Chapinero, Usaquén, Fontibón, Bosa, Engativá, Centro y sur de la ciudad. También atendemos municipios cercanos de Cundinamarca con visita técnica. También ofrecemos supervisión remota y diagnóstico por video-llamada para el resto de Colombia.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────── */

export function MantenimientoCamaras() {
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
            <Wrench className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
            <span
              className="text-sm font-sans uppercase tracking-widest"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Mantenimiento de cámaras · Bogotá 2026
            </span>
          </div>

          <span className="inline-block text-xs font-sans font-semibold px-3 py-1 rounded-full mb-6 border" style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}>
            Hikvision / Dahua · Preventivo y correctivo · Visita el mismo día
          </span>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Mantenimiento de Cámaras de Seguridad en Bogotá
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            ¿Su cámara graba a negro, se ve borrosa o dejó de grabar? Servicio de mantenimiento preventivo y correctivo para sistemas CCTV Hikvision / Dahua en Bogotá: limpieza, firmware, cableado y configuración. Diagnóstico con causa exacta y cotización antes de intervenir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-sans font-semibold text-base transition-all hover:scale-105"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
            >
              Agendar Revisión <ArrowRight className="w-4 h-4" />
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
              { icon: Camera, label: "Preventivo", sub: "desde $180.000 / visita" },
              { icon: Clock, label: "Respuesta", sub: "< 24 horas" },
              { icon: ScanLine, label: "Diagnóstico", sub: "causa exacta" },
              { icon: ShieldCheck, label: "Reparación", sub: "todas las marcas" },
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

      {/* ═══════════ POR QUÉ EL MANTENIMIENTO ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            ¿Por qué mantener sus cámaras y no esperar a que fallen?
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            La cámara que no graba es un gasto, no un activo. Casi nunca falla 'de golpe': se degrada poco a poco —lente velado, señal intermitente, almacenamiento lleno— hasta que un día necesita justo el video que no tiene. Esto es lo que un mantenimiento profesional previene:
          </p>

          <div className="space-y-8">
            {[
              {
                icon: ScanLine,
                title: "Cámaras que graban con calidad real",
                desc: "Limpieza de lentes, ajuste de enfoque y balance de color. Sin cámaras que 'se ven grises' o veladas. En exteriores de Bogotá, polvo y lluvia degradan rápido la imagen nocturna.",
              },
              {
                icon: HardDriveDownload,
                title: "Nunca más 'no estaba grabando'",
                desc: "Verificamos almacenamiento (DVR/NVR), retención de 90 días, grabación continua o por eventos y respaldo. Detectamos discos saturados o zonas que dejaron de grabar sin avisar.",
              },
              {
                icon: Cable,
                title: "Cableado sano y conexiones estables",
                desc: "Revisamos sujeción, conectores, fuentes de alimentación y signos de corto o interferencia. Un cable flojo en un canal es la causa #1 de cámaras que 'caen' intermitentemente.",
              },
              {
                icon: Settings2,
                title: "Firmware y seguridad actualizados",
                desc: "Actualizamos el firmware de su DVR/NVR y cámaras. Sistemas desactualizados son vulnerables y pierden compatibilidad. Correcta configuración de contraseñas y acceso remoto seguro.",
              },
              {
                icon: CheckCircle2,
                title: "Dejamos el sistema listo para IA",
                desc: "Alinear su CCTV para que esté listo para analítica (conteo, aforo, arqueo, alertas por WhatsApp) sin comprar hardware nuevo. Mantenimiento hoy, analítica cuando la necesite.",
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

      {/* ═══════════ TIPOS DE MANTENIMIENTO ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Servicios de mantenimiento de cámaras que ofrecemos
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Desde una revisión puntual hasta contratos de soporte continuo para su negocio:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Mantenimiento preventivo",
                desc: "Revisión programada: limpieza, firmware, cableado y configuración. El mejor costo/beneficio para que su sistema nunca lo deje a ciegas.",
                bullets: "Visita semestral · desde $180.000",
              },
              {
                icon: Settings2,
                title: "Mantenimiento correctivo",
                desc: "Reparación de cámaras, DVR/NVR, fuentes y cableado. Reemplazo de equipos defectuosos con diagnóstico y cotización aprobada.",
                bullets: "Respuesta < 24h · todas las marcas",
              },
              {
                icon: ScanLine,
                title: "Diagnóstico técnico",
                desc: "¿Cámara a negro, borrosa, que se cae? Detectamos la causa exacta del fallo (lente, cable, red, configuración) y le entregamos plan de solución.",
                bullets: "Visita o video-llamada · gratis al contratar",
              },
              {
                icon: Headphones,
                title: "Supervisión remota mensual",
                desc: "Monitoreo de caídas de cámaras, estado de grabación y alertas por WhatsApp/Email. Detectamos problemas antes de que usted los note.",
                bullets: "Desde $250.000 / mes",
              },
              {
                icon: Building2,
                title: "Mantenimiento empresarial",
                desc: "Contrato de soporte para oficinas, clínicas, colegios y empresas: visitas periódicas, SLA de respuesta y reporte técnico mensual del estado de su sistema.",
                bullets: "Multi-site · SLA garantizado",
              },
              {
                icon: Video,
                title: "Puesta en marcha de IA",
                desc: "Sobre su CCTV ya mantenido: activamos conteo de personas, control de aforo, arqueo asistido y alertas automáticas. Su cámara pasa de vigilar a auditar.",
                bullets: "Hikvision/Dahua RTSP/ONVIF",
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

      {/* ═══════════ QUIÉNES LO NECESITAN ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Negocios de Bogotá que más necesitan mantenimiento de cámaras
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Si depende de sus cámaras para auditar caja, mercancía o el flujo de clientes, un sistema descuidado es un riesgo silencioso:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Store,
                title: "Tiendas y minimercados",
                desc: "Arqueo de caja, fachada y bodega. Si la cámara de caja no graba bien, pierde la evidencia de las discrepancias de dinero.",
              },
              {
                icon: Restaurant,
                title: "Restaurantes y cafés",
                desc: "Control de salón, cocina y barra. Aforo y cumplimiento de normas con analítica opcional.",
              },
              {
                icon: Building2,
                title: "Oficinas y servicios",
                desc: "Accesos, recepción y zonas restringidas. Control de ingreso y respaldo de incidentes.",
              },
              {
                icon: Warehouse,
                title: "Bodegas y talleres",
                desc: "Patios de carga, perimetrales y zonas de almacenamiento. Cámaras tecnologizadas que graban día y noche.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border"
                style={{ borderColor: "var(--color-border)" }}
              >
                <item.icon className="w-6 h-6 mb-4" style={{ color: "var(--color-accent)" }} />
                <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESO ═══════════ */}
      <section id="proceso" className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Cómo funciona el servicio de mantenimiento
          </h2>
          <p className="font-sans text-lg text-center mb-16 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Del primer mensaje al sistema grabando correctamente en 4 pasos:
          </p>

          <div className="space-y-12 relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--color-border)" }} />

            {[
              {
                icon: ClipboardCheck,
                step: "01",
                title: "Diagnóstico técnico",
                desc: "Coordinamos visita o video-llamada. Reportamos el estado de sus cámaras, la causa de cualquier falla y le entregamos cotización cerrada. Sin intervenir hasta que usted apruebe.",
                time: "mismo día",
              },
              {
                icon: Wrench,
                step: "02",
                title: "Mantenimiento preventivo / correctivo",
                desc: "Limpiamos lentes, revisamos cableado y fuentes, actualizamos firmware, verificamos almacenamiento y reparamos lo aprobado. Dejamos todo limpio y ordenado.",
                time: "2-4 horas",
              },
              {
                icon: Settings2,
                step: "03",
                title: "Configuración y reporte",
                desc: "Dejamos grabación continua correcta, retención de 90 días y acceso remoto. Le entregamos un reporte claro del estado de cada cámara: qué se corrigió y qué se recomienda.",
                time: "entrega del día",
              },
              {
                icon: Headphones,
                step: "04",
                title: "Seguimiento y soporte",
                desc: "Según el plan, activamos supervisión remota y alertas por WhatsApp/Email ante caídas. Un problema se detecta en minutos, no en semanas.",
                time: "24/7 opcional",
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

      {/* ═══════════ TABLA DE PRECIOS ═══════════ */}
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Precios de mantenimiento de cámaras 2026
          </h2>
          <p className="font-sans text-lg mb-12 max-w-2xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Tarifas referenciales en Bogotá para mantenimiento preventivo y correctivo (COP, IVA incluido). Cotización cerrada según su sistema.
          </p>

          <div className="overflow-x-auto mb-8 rounded-xl border" style={{ borderColor: "var(--color-border)" }}>
            <table className="w-full text-sm font-sans">
              <thead>
                <tr style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}>
                  <th className="px-4 py-3 text-left font-sans font-semibold">Servicio</th>
                  <th className="px-4 py-3 text-left font-sans font-semibold">Alcance</th>
                  <th className="px-4 py-3 text-left font-sans font-semibold">Precio desde</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mantenimiento preventivo", "Hasta 4 cámaras: limpieza, firmware, cableado", "$180.000 / visita"],
                  ["Cámara adicional", "Cada punto extra de revisión", "$35.000 / cámara"],
                  ["Diagnóstico correctivo", "Causa exacta + cotización de reparación", "Gratis al contratar"],
                  ["Supervisión remota mensual", "Monitoreo de caídas + alertas WhatsApp", "$250.000 / mes"],
                  ["Correctivo (equipo/reparación)", "Según falla aprobada", "Cotizado por caso"],
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
            * El valor final depende del número de puntos, distancia de cableado y el estado del sistema. Diagnóstico y cotización sin costo.
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
      <section className="py-16 md:py-24 px-6" style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-background)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-center">
            Preguntas frecuentes sobre mantenimiento de cámaras
          </h2>
          <p className="font-sans text-lg text-center mb-12" style={{ color: "var(--color-muted-foreground)" }}>
            Todo lo que necesita saber antes de agendar su revisión en Bogotá:
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
            Agende su revisión de cámaras gratis
          </h2>
          <p className="font-sans text-lg mb-8 max-w-xl mx-auto" style={{ color: "var(--color-muted-foreground)" }}>
            Visitamos su negocio o casa en Bogotá, revisamos el estado de sus cámaras y le entregamos diagnóstico y cotización. Sin compromiso.
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

## Más servicios de cámaras en Bogotá

- [Instalación de cámaras de seguridad](#instalacion)
- [Cámaras de seguridad para negocio](#negocio)
- [Precios de instalación de cámaras](#precios-camaras)
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
