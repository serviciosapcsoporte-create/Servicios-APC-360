import { marked } from "marked";

export function CamarasFontibon() {
  const barrios = [
    "Fontibón Centro",
    "Arrancachocha",
    "Salitre Occidente",
    "Isla del Sol",
  ];

  const negocios = [
    {
      titulo: "Bodegas Logísticas",
      desc: "Control de carga con YOLO que cuenta y registra entrada/salida de mercancía. Detección de intrusiones en zonas de carga.",
      icon: "📦",
    },
    {
      titulo: "Fábricas y Talleres Industriales",
      desc: "Videovigilancia de naves industriales con cámaras PTZ de larga distancia. Monitoreo de personal con detección de EPP obligatorio.",
      icon: "🏭",
    },
    {
      titulo: "Conjuntos Residenciales",
      desc: "Control de acceso vehicular y peatonal con reconocimiento de placas. Vigilancia perimetral con alertas automáticas por Telegram.",
      icon: "🏘️",
    },
  ];

  const razones = [
    {
      titulo: "Cobertura industrial Fontibón",
      desc: "Especialistas en seguridad para zonas industriales y logísticas de Fontibón, incluyendo Arrancachocha y Salitre Occidente.",
      icon: "🏗️",
    },
    {
      titulo: "Hardware robusto para exteriores",
      desc: "Cámaras IP67 resistentes a polvo, lluvia y temperaturas extremas. Diseñadas para naves industriales y bodegas logísticas.",
      icon: "🌧️",
    },
    {
      titulo: "Integración con sistemas logísticos",
      desc: "Conectamos nuestras cámaras con WMS y ERP para trazabilidad completa de inventario visual.",
      icon: "🔗",
    },
    {
      titulo: "Soporte técnico en zona industrial",
      desc: "Equipo técnico驻扎 en Fontibón con experiencia en infraestructura industrial y redes de alta disponibilidad.",
      icon: "🛠️",
    },
  ];

  const casoReal = `
### Bodega Logística — Fontibón Centro

**Problema:** La bodega procesaba 800 cajas diarias pero no tenía registro visual de entrada/salida. Las discrepancias de inventario costaban $8.500.000 mensuales. Las intrusiones nocturnas en el patio de carga eran frecuentes.

**Solución:** Instalación de 12 cámaras con analítica YOLO para conteo automático de cajas. Cámaras de placa en entrada/salida de vehículos. Alertas Telegram cada vez que un vehículo ingresa fuera de horario programado.

**Resultado:** Trazabilidad visual del 100% de mercancía. Discrepancias de inventario reducidas en 94%. Intrusiones eliminadas. Tiempo de auditoría de inventario reducido de 8 horas a 45 minutos con dashboard de conteo automático.
  `;

  const faqs = [
    {
      q: "¿Cuánto cuesta instalar cámaras en una bodega logística en Fontibón?",
      a: "Una bodega estándar con 8-12 cámaras, analítica YOLO y trazabilidad de mercancía cuesta desde $8.500.000 COP. Incluye hardware industrial, instalación, configuración y capacitación.",
    },
    {
      q: "¿Las cámaras soportan condiciones industriales?",
      a: "Sí, todas nuestras cámaras industriales son IP67 resistentes a polvo y agua. Funcionan en temperaturas de -30°C a 60°C, ideales para naves industriales y bodegas de Fontibón.",
    },
    {
      q: "¿El conteo YOLO es preciso para cajas?",
      a: "Sí, nuestra analítica YOLO tiene precisión del 96% en conteo de cajas estándar. Se entrena con las dimensiones específicas de tu mercancía para maximizar precisión.",
    },
    {
      q: "¿Cubren Isla del Sol y Arrancachocha?",
      a: "Sí, cubrimos toda la localidad de Fontibón: Centro, Arrancachocha, Salitre Occidente e Isla del Sol. Nuestros técnicos especializados en zona industrial llegan en menos de 4 horas.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Servicios APC - Cámaras de Seguridad en Fontibón",
    description: "Cámaras de seguridad para bodegas logísticas, fábricas y conjuntos en Fontibón, Bogotá. YOLO, trazabilidad, alertas Telegram. Cobertura Arrancachocha, Isla del Sol.",
    areaServed: {
      "@type": "City",
      name: "Fontibón, Bogotá",
    },
    telephone: "+573337450634",
    email: "serviciosapcsoporte@gmail.com",
  };

  return (
    <article
      className="max-w-3xl mx-auto px-6 py-16 font-sans"
      style={{
        color: "var(--color-foreground)",
        background: "var(--color-background)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest mb-2" style={{ color: "var(--color-muted-foreground)" }}>
          Servicios APC · Fontibón, Bogotá
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-foreground)" }}
        >
          Cámaras de Seguridad en Fontibón, Bogotá
        </h1>
        <p className="text-lg mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Seguridad industrial y logística para bodegas, fábricas y conjuntos residenciales
          en Fontibón. Trazabilidad visual con YOLO, alertas automáticas y hardware robusto
          para las condiciones más exigentes.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Fontibón"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--color-accent)" }}
        >
          Cotizar por WhatsApp
        </a>
      </header>

      <section className="mb-12">
        <h2
          className="font-serif text-2xl font-bold mb-4 pb-2"
          style={{ borderBottom: "2px solid var(--color-border)" }}
        >
          Cobertura en Fontibón
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {barrios.map((b) => (
            <li
              key={b}
              className="px-4 py-3 rounded-lg text-sm font-medium"
              style={{ background: "var(--color-secondary)", color: "var(--color-foreground)" }}
            >
              ✓ {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2
          className="font-serif text-2xl font-bold mb-6 pb-2"
          style={{ borderBottom: "2px solid var(--color-border)" }}
        >
          Soluciones para negocios en Fontibón
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {negocios.map((n) => (
            <div
              key={n.titulo}
              className="rounded-xl p-6"
              style={{ background: "var(--color-secondary)", border: "1px solid var(--color-border)" }}
            >
              <span className="text-3xl block mb-3">{n.icon}</span>
              <h3 className="font-serif font-bold text-lg mb-2">{n.titulo}</h3>
              <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>{n.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="font-serif text-2xl font-bold mb-6 pb-2"
          style={{ borderBottom: "2px solid var(--color-border)" }}
        >
          ¿Por qué elegir Servicios APC en Fontibón?
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {razones.map((r) => (
            <div key={r.titulo} className="flex gap-4 items-start">
              <span className="text-3xl flex-shrink-0">{r.icon}</span>
              <div>
                <h3 className="font-serif font-bold text-lg">{r.titulo}</h3>
                <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="font-serif text-2xl font-bold mb-6 pb-2"
          style={{ borderBottom: "2px solid var(--color-border)" }}
        >
          Casos reales en Fontibón
        </h2>
        <div
          className="rounded-xl p-6 md:p-8"
          style={{ background: "var(--color-secondary)", border: "1px solid var(--color-border)" }}
        >
          <div
            className="prose prose-sm max-w-none font-sans"
            style={{ color: "var(--color-foreground)" }}
            dangerouslySetInnerHTML={{ __html: marked.parse(casoReal) }}
          />
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="font-serif text-2xl font-bold mb-6 pb-2"
          style={{ borderBottom: "2px solid var(--color-border)" }}
        >
          Preguntas frecuentes sobre cámaras en Fontibón
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <summary
                className="px-6 py-4 cursor-pointer font-serif font-semibold text-base list-none flex justify-between items-center"
                style={{ background: "var(--color-secondary)" }}
              >
                {faq.q}
                <span className="ml-2 transition-transform group-open:rotate-45 text-xl">+</span>
              </summary>
              <div className="px-6 py-4 text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-12 text-center">
        <h2 className="font-serif text-2xl font-bold mb-4">
          ¿Listo para proteger tu bodega o fábrica en Fontibón?
        </h2>
        <p className="mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Cotización industrial sin compromiso en menos de 2 horas.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Fontibón"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--color-accent)" }}
        >
          Solicitar cotización ahora
        </a>
      </section>

      <section
        className="rounded-xl p-6 md:p-8"
        style={{ background: "var(--color-secondary)", border: "1px solid var(--color-border)" }}
      >
        <h2
          className="font-serif text-xl font-bold mb-4 pb-2"
          style={{ borderBottom: "2px solid var(--color-border)" }}
        >
          Ecosistema APC: Todo conectado
        </h2>
        <div
          className="prose prose-sm max-w-none font-sans mb-6"
          style={{ color: "var(--color-foreground)" }}
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              `| Línea | Qué hace | Enlace |\n|-------|----------|--------|\n| **APC Visión AI** | Analítica YOLO, PPE, aforo, arqueo, intrusión | [apcvisionai.site](https://apcvisionai.site) |\n| **APC Automatización** | n8n flujos: CCTV → Alerta → WhatsApp/CRM/Dashboard | [apcautomatizacion.site](https://apcautomatizacion.site) |\n| **DogWeb** | Web + SEO Local Bogotá → Formulario → WhatsApp Bot → Venta | [dogweb.lat](https://dogweb.lat) |\n| **APC Core** | Infraestructura, servidores edge GPU, bases datos, redes | [apccore.site](https://apccore.site) |`
            ),
          }}
        />
        <div
          className="text-sm font-sans"
          style={{ color: "var(--color-muted-foreground)" }}
          dangerouslySetInnerHTML={{
            __html: marked.parse(
              `---\n\n**Servicios APC** — Bogotá, Cra. 52c #39b-22  \n📞 +57 333 745 0634 | ✉️ serviciosapcsoporte@gmail.com  \n🌐 [apcvisionai.site](https://apcvisionai.site) · [apcautomatizacion.site](https://apcautomatizacion.site) · [dogweb.lat](https://dogweb.lat) · [apccore.site](https://apccore.site)`
            ),
          }}
        />
      </section>
    </article>
  );
}
