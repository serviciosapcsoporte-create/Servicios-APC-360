import { marked } from "marked";

export function CamarasKennedy() {
  const barrios = [
    "Kennedy Central",
    "Castilla",
    "Timiza",
    "Patio Bonito",
    "Carrera 68",
  ];

  const negocios = [
    {
      titulo: "Tiendas de Barrio",
      desc: "Detección de hurtos internos con IA que identifica movimientos sospechosos fuera de horario laboral y envía alertas al propietario.",
      icon: "🏪",
    },
    {
      titulo: "Talleres Mecánicos",
      desc: "Cobertura de herramientas y vehículos en proceso con grabación 24/7 y visión nocturna ColorVu.",
      icon: "🔧",
    },
    {
      titulo: "Bodegas de Ropa",
      desc: "Control de inventario visual con analítica YOLO que registra entrada y salida de mercancía en tiempo real.",
      icon: "👔",
    },
  ];

  const razones = [
    {
      titulo: "Cobertura express en Kennedy",
      desc: "Técnicos驻扎 en la localidad. Llegamos a Castilla, Timiza y Patio Bonito en menos de 4 horas.",
      icon: "🚀",
    },
    {
      titulo: "IA que aprende de tu negocio",
      desc: "Nuestros sistemas se adaptan a los patrones de tu tienda o taller para reducir falsas alarmas al mínimo.",
      icon: "🧠",
    },
    {
      titulo: "Soporte local sin outsourcing",
      desc: "Equipo propio en Kennedy. No tercerizamos el soporte técnico ni la instalación.",
      icon: "👨‍🔧",
    },
    {
      titulo: "Financiación directa",
      desc: "Paga en 3 cuotas sin intereses. Incluimos kit de 4 cámaras + DVR + instalación desde $850.000.",
      icon: "💳",
    },
  ];

  const casoReal = `
### Tienda de Barrio — Kennedy Central

**Problema:** El propietario notó faltantes en caja de $180.000 semanales pero no podía identificar al responsable. Las cámaras antiguas no grababan en la noche y la resolución era insuficiente.

**Solución:** Reemplazo de 4 cámaras legacy por kit Hikvision ColorVu 4MP con visión nocturna a color. Instalación de cámara oculta en punto de venta con analítica de movimiento. Configuración de alertas WhatsApp cuando有人 se acerca a la caja fuera de horario.

**Resultado:** En 72 horas se identificó al empleado que realizaba retiros no autorizados. El propietario obtuvo evidencia de video con timestamp. Hurto interno eliminado. Ahorro anual estimado: $9.360.000 COP.
  `;

  const faqs = [
    {
      q: "¿Cuánto cuesta instalar cámaras de seguridad en Kennedy?",
      a: "Un kit de 4 cámaras Hikvision ColorVu con DVR e instalación cuesta desde $850.000 COP en Kennedy. Para tiendas y talleres, ofrecemos packs especializados con analítica IA desde $1.400.000 COP.",
    },
    {
      q: "¿Cubren Patio Bonito y Castilla?",
      a: "Sí, cubrimos toda la localidad de Kennedy: Kennedy Central, Castilla, Timiza, Patio Bonito y la zona de Carrera 68. Nuestros técnicos están en la localidad y llegan el mismo día.",
    },
    {
      q: "¿Las cámaras detectan hurtos internos?",
      a: "Sí, nuestra analítica IA detecta movimientos sospechosos cerca de cajas fuertes, puntos de venta y zonas restringidas. Puedes configurar alertas automáticas por WhatsApp cuando se Active el detector.",
    },
    {
      q: "¿Funcionan con el apagón de luz?",
      a: "Todas nuestras cámaras ColorVu tienen visión nocturna con luz infrarroja integrada. Funcionan perfectamente en oscuridad total, captando imagen a color con detalle de rostros.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Servicios APC - Cámaras de Seguridad en Kennedy",
    description: "Instalación de cámaras de seguridad en Kennedy, Bogotá. Hikvision ColorVu, IA antihurto, detección de intrusiones. Cobertura Castilla, Timiza, Patio Bonito.",
    areaServed: {
      "@type": "City",
      name: "Kennedy, Bogotá",
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
          Servicios APC · Kennedy, Bogotá
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-foreground)" }}
        >
          Cámaras de Seguridad en Kennedy, Bogotá
        </h1>
        <p className="text-lg mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Protege tu tienda, taller o bodega en Kennedy con tecnología de última generación.
          Desde Kennedy Central hasta Patio Bonito, instalamos sistemas de video con IA
          con inteligencia artificial que previenen hurtos y controlan accesos.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Kennedy"
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
          Cobertura en Kennedy
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
          Soluciones para negocios en Kennedy
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
          ¿Por qué elegir Servicios APC en Kennedy?
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
          Casos reales en Kennedy
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
          Preguntas frecuentes sobre cámaras en Kennedy
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
          ¿Listo para proteger tu negocio en Kennedy?
        </h2>
        <p className="mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Cotización sin compromiso en menos de 2 horas.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Kennedy"
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
