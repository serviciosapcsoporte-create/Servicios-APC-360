import { marked } from "marked";

export function CamarasChapinero() {
  const barrios = [
    "Chapinero Alto",
    "Chapinero Central",
    "Chicó",
    "Rosales",
    "Tintal",
  ];

  const negocios = [
    {
      titulo: "Clínicas y Consultorios",
      desc: "Control de aforo, cumplimiento de normas PPE para personal sanitario y analítica de áreas restringidas con alertas en tiempo real.",
      icon: "🏥",
    },
    {
      titulo: "Restaurantes",
      desc: "Analítica de aforo para optimizar servicio, detección de intrusión nocturna y analítica de cocina con cámaras ambientadas.",
      icon: "🍽️",
    },
    {
      titulo: "Oficinas y Consultorios",
      desc: "Control de acceso con reconocimiento facial, registro de visitantes y vigilancia de salas de datos con analítica IA.",
      icon: "💼",
    },
  ];

  const razones = [
    {
      titulo: "Exigencia normativa Chapinero",
      desc: "Conocemos los requisitos de seguridad de clínicas y oficinas en Chapinero. Cumplimos Norma 17025 y resoluciones MinSalud.",
      icon: "📋",
    },
    {
      titulo: "Tecnología invisible",
      desc: "Cámaras compactas que se integran al diseño interior de clínicas y restaurantes sin alterar la estética.",
      icon: "🎨",
    },
    {
      titulo: "Integración con software clínico",
      desc: "Nuestros sistemas se conectan con historiales de pacientes y sistemas de gestión de turnos para auditoría completa.",
      icon: "🔗",
    },
    {
      titulo: "Respuesta garantizada en 2 horas",
      desc: "Para clínicas y consultorios en Chicó, Rosales y Chapinero Alto, garantizamos soporte técnico presencial en máximo 2 horas.",
      icon: "⚡",
    },
  ];

  const casoReal = `
### Clínica Dental Sonrisa — Chapinero Alto

**Problema:** La clínica necesitaba cumplir con las normas de protección para personal y pacientes, pero no tenía sistema de aforo ni evidencia de uso de EPP. Además, las caídas de pacientes en zonas comunes eran un riesgo legal sin grabación.

**Solución:** Instalación de 8 cámaras con analítica de aforo por zona (sala de espera, consultorios, recepción). Detección automática de uso de mascarilla (PPE) para personal. Cámaras de caída con alerta inmediata a administración.

**Resultado:** Cumplimiento total de normativa MinSalud. Reducción de tiempos de espera en 35% gracias a optimización de aforo. Dos incidentes de caída documentados y resueltos sin litigios. ROI en 4 meses por ahorro en pólizas de responsabilidad civil.
  `;

  const faqs = [
    {
      q: "¿Cuánto cuesta el sistema de aforo para clínicas en Chapinero?",
      a: "El sistema completo con 8 cámaras, analítica de aforo, detección PPE e instalación cuesta desde $4.200.000 COP. Incluye configuración personalizada por zona y capacitación al personal.",
    },
    {
      q: "¿Las cámaras cumplen normativa MinSalud?",
      a: "Sí, nuestros sistemas generan reportes de cumplimiento PPE y aforo que cumplen con las resoluciones 2020 y 2021 del MinSalud. Incluimos dashboards exportables para auditorías.",
    },
    {
      q: "¿Pueden integrarse con nuestro software de gestión?",
      a: "Sí, ofrecemos integración vía API REST con los principales software de gestión clínica. La integración permite cruzar datos de video con registros de pacientes para auditorías completas.",
    },
    {
      q: "¿Instalan en restaurantes de Chicó y Rosales?",
      a: "Sí, cubrimos toda la localidad de Chapinero. Los restaurantes en Chicó y Rosales suelen requerir analítica de aforo + intrusiones nocturnas. Tenemos packs especializados.",
    },
    {
      q: "¿Las cámaras son invasivas para los pacientes?",
      a: "No. Usamos modelos compactos tipo dome que se integran al diseño interior. Son discretas y no generan incomodidad. En clínicas, colocamos señalización visible según normativa.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Servicios APC - Cámaras de Seguridad en Chapinero",
    description: "Cámaras de seguridad para clínicas, restaurantes y oficinas en Chapinero, Bogotá. Analítica IA, PPE, aforo. Cobertura Chicó, Rosales, Tintal.",
    areaServed: {
      "@type": "City",
      name: "Chapinero, Bogotá",
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
          Servicios APC · Chapinero, Bogotá
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-foreground)" }}
        >
          Cámaras de Seguridad en Chapinero, Bogotá
        </h1>
        <p className="text-lg mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Soluciones de video con IA para clínicas, restaurantes y oficinas en Chapinero.
          Cumplimiento normativo, control de aforo y protección de personal con tecnología
          de analítica de IA y reconocimiento PPE.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Chapinero"
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
          Cobertura en Chapinero
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
          Soluciones para negocios en Chapinero
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
          ¿Por qué elegir Servicios APC en Chapinero?
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
          Casos reales en Chapinero
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
          Preguntas frecuentes sobre cámaras en Chapinero
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
          ¿Listo para proteger tu clínica u oficina en Chapinero?
        </h2>
        <p className="mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Cotización sin compromiso en menos de 2 horas.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Chapinero"
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
