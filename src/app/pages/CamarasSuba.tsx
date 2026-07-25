import { marked } from "marked";

export function CamarasSuba() {
  const barrios = [
    "Suba Centro",
    "La Florida",
    "Salitre Oriental",
    "San Carlos",
    "El Recreo",
    "Ciudad Bolívar",
  ];

  const negocios = [
    {
      titulo: "Bodegas y Almacenes",
      desc: "Control de acceso a mercancía de alto valor con cámaras ColorVu que identifican placa y rostro a las 2 AM.",
      icon: "📦",
    },
    {
      titulo: "Ferreterías",
      desc: "Detección de hurto interno y externo con IA que alerta en tiempo real al propietario vía WhatsApp.",
      icon: "🔧",
    },
    {
      titulo: "Conjuntos Residenciales",
      desc: "Aforo de parqueaderos, control de visitantes y vigilancia perimetral con analítica YOLO.",
      icon: "🏢",
    },
  ];

  const razones = [
    {
      titulo: "Instalación en 24 horas",
      desc: "Técnicos certificados en Suba con cobertura el mismo día en La Florida y Salitre Oriental.",
      icon: "⏱️",
    },
    {
      titulo: "Monitoreo 24/7",
      desc: "Centro de operaciones remoto que vigila tus cámaras y dispara alertas automáticas.",
      icon: "👁️",
    },
    {
      titulo: "Garantía de 2 años",
      desc: "Equipos con garantía extendida y soporte técnico incluido en toda la localidad de Suba.",
      icon: "🛡️",
    },
    {
      titulo: "Precios desde $850.000",
      desc: "Kit completo de 4 cámaras Hikvision + DVR + instalación + configuración remota.",
      icon: "💰",
    },
  ];

  const casoReal = `
### Ferretería El Progreso — Suba Centro

**Problema:** Hurtos recurrentes entre las 1 AM y 4 AM. El propietario perdía mercancía por valor de $3.200.000 mensuales y no tenía evidencia para denunciar.

**Solución:** Instalación de 6 cámaras ColorVu con lente motorizado 2.8-12mm. Placa de dominio capturada a 35 metros. Detección de intrusiones con alerta WhatsApp en 8 segundos.

**Resultado:** Primer robo detectado en tiempo real. Placa capturada, video entregado a la Policía Nacional. Recuperación del 85% de mercancía en 48 horas. Hurtos reducidos a cero en los siguientes 6 meses.
  `;

  const faqs = [
    {
      q: "¿Cuánto cuestan las cámaras de seguridad en Suba?",
      a: "Los kits completos para Suba arrancan desde $850.000 COP para 4 cámaras con DVR, incluyendo instalación. Para conjuntos residenciales o bodegas grandes, cotizamos a medida según el número de puntos.",
    },
    {
      q: "¿Instalan cámaras en La Florida y Salitre Oriental?",
      a: "Sí, cubrimos toda la localidad de Suba: La Florida, Salitre Oriental, San Carlos, El Recreo, Ciudad Bolívar y Suba Centro. Nuestros técnicos llegan en menos de 24 horas.",
    },
    {
      q: "¿Las cámaras funcionan con el apagón de luz en Suba?",
      a: "Sí, todas nuestras cámaras Hikvision ColorVu tienen visión nocturna con luz artificial integrada. Incluso en oscuridad total, captan imagen a color con detalle de placas.",
    },
    {
      q: "¿Puedo ver las cámaras desde mi celular?",
      a: "Sí, configuração remota vía app Hik-Connect o HiLook. Puedes ver en vivo, reproducir grabaciones y recibir alertas desde cualquier lugar.",
    },
    {
      q: "¿Ofrecen mantenimiento preventivo en Suba?",
      a: "Sí, tenemos planes de mantenimiento trimestral que incluyen limpieza de lentes, revisión de cableado, actualización de firmware y backup de configuración.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Servicios APC - Cámaras de Seguridad en Suba",
    description: "Instalación de cámaras de seguridad en Suba, Bogotá. Hikvision, ColorVu, analítica YOLO. Cobertura La Florida, Salitre Oriental, San Carlos.",
    areaServed: {
      "@type": "City",
      name: "Suba, Bogotá",
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
          Servicios APC · Suba, Bogotá
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-foreground)" }}
        >
          Cámaras de Seguridad en Suba, Bogotá
        </h1>
        <p className="text-lg mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Soluciones de videovigilancia profesional para cada barrio de Suba.
          Desde La Florida hasta Salitre Oriental, protegemos tu negocio y tu hogar
          con tecnología Hikvision ColorVu y analítica de inteligencia artificial.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Suba"
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
          Cobertura en Suba
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
          Soluciones para negocios en Suba
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
          ¿Por qué elegir Servicios APC en Suba?
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
          Casos reales en Suba
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
          Preguntas frecuentes sobre cámaras en Suba
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
          ¿Listo para proteger tu negocio en Suba?
        </h2>
        <p className="mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Cotización sin compromiso en menos de 2 horas.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Suba"
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
