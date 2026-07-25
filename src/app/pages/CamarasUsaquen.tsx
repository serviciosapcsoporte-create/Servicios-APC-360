import { marked } from "marked";

export function CamarasUsaquen() {
  const barrios = [
    "Usaquén Centro",
    "Santa Bárbara",
    "San Patricio",
    "Los Cedros",
    "Country Club",
  ];

  const negocios = [
    {
      titulo: "Restaurantes Gourmet",
      desc: "Analítica de aforo para optimizar mesas, monitoreo de cocina y entrada/salida de personal con reconocimiento facial.",
      icon: "🍷",
    },
    {
      titulo: "Hoteles Boutique",
      desc: "Control de acceso por habitaciones, vigilancia de áreas comunes y lobby con IA que detecta comportamientos anómalos.",
      icon: "🏨",
    },
    {
      titulo: "Oficinas Corporativas",
      desc: "Seguridad perimetral, control de acceso con credenciales y monitoreo de salas de servidores con alertas en tiempo real.",
      icon: "🏢",
    },
  ];

  const razones = [
    {
      titulo: "Experiencia con sector premium",
      desc: "Trabajamos con restaurantes de alto nivel, hoteles boutique y oficinas corporativas en Usaquén. Entendemos sus estándares.",
      icon: "⭐",
    },
    {
      titulo: "Diseño arquitectónico integrado",
      desc: "Cámaras que se融合 al diseño interior sin comprometer la estética de espacios premium como hotel boutique.",
      icon: "🏛️",
    },
    {
      titulo: "Dashboard ejecutivo en tiempo real",
      desc: "Panel de control con métricas de aforo, accesos y alertas diseñado para gerentes y propietarios.",
      icon: "📊",
    },
    {
      titulo: "SLA de 1 hora para emergencias",
      desc: "Para clientes premium en Country Club y Los Cedros, garantizamos respuesta técnica en máximo 1 hora.",
      icon: "🚨",
    },
  ];

  const casoReal = `
### Restaurante La Cosecha — Usaquén Centro

**Problema:** El restaurante perdía mesas por no controlar el aforo en tiempo real. Los clientes esperaban 40+ minutos sin saber cuánto faltaba. Además, las intrusiones nocturnas en el área de vinos generaban pérdidas de $2.800.000 mensuales.

**Solución:** Sistema de analítica de aforo con 4 cámaras en zona de comedor y bar. Conteo automático de clientes por zona con dashboard para el maître. Cámaras de intrusiones en bodega de vinos con alerta WhatsApp en 5 segundos.

**Resultado:** Optimización del 40% en tiempos de espera. Ingreso adicional de $12.000.000 mensuales por mejor uso de mesas. Hurtos en bodega eliminados completamente. Dashboard de aforo integrado con sistema de reservas.
  `;

  const faqs = [
    {
      q: "¿Cuánto cuesta un sistema de videovigilancia para restaurantes en Usaquén?",
      a: "Para restaurantes de Usaquén, un sistema completo con 6-8 cámaras, analítica de aforo e intrusiones cuesta desde $5.800.000 COP. Incluye dashboard ejecutivo, configuración por zona y capacitación.",
    },
    {
      q: "¿Cubren Country Club y Los Cedros?",
      a: "Sí, cubrimos toda la localidad de Usaquén: Centro, Santa Bárbara, San Patricio, Los Cedros y Country Club. Nuestros clientes premium en estas zonas tienen SLA de 1 hora para emergencias.",
    },
    {
      q: "¿El sistema de aforo es preciso?",
      a: "Sí, nuestra analítica YOLO tiene precisión del 97% en conteo de personas. Se adapta a diferentes configuraciones de mesas y zonas, y genera reportes exportables para auditorías.",
    },
    {
      q: "¿Las cámaras se integran con nuestro sistema de reservas?",
      a: "Sí, ofrecemos integración vía API con los principales sistemas de reservas (OpenTable, Resy, sistema propio). El aforo en tiempo real se alimenta al dashboard de disponibilidad.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Servicios APC - Cámaras de Seguridad en Usaquén",
    description: "Cámaras de seguridad para restaurantes, hoteles y oficinas corporativas en Usaquén, Bogotá. Analítica de aforo, intrusiones, IA. Cobertura Country Club, Los Cedros.",
    areaServed: {
      "@type": "City",
      name: "Usaquén, Bogotá",
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
          Servicios APC · Usaquén, Bogotá
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4"
          style={{ color: "var(--color-foreground)" }}
        >
          Cámaras de Seguridad en Usaquén, Bogotá
        </h1>
        <p className="text-lg mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Videovigilancia de alto nivel para restaurantes, hoteles y oficinas corporativas
          en Usaquén. Analítica de aforo, control de acceso y protección premium con
          dashboard ejecutivo en tiempo real.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20necesito%20información%20sobre%20cámaras%20de%20seguridad%20en%20Usaquén"
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
          Cobertura en Usaquén
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
          Soluciones para negocios en Usaquén
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
          ¿Por qué elegir Servicios APC en Usaquén?
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
          Casos reales en Usaquén
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
          Preguntas frecuentes sobre cámaras en Usaquén
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
          ¿Listo para proteger tu restaurante u hotel en Usaquén?
        </h2>
        <p className="mb-6" style={{ color: "var(--color-muted-foreground)" }}>
          Cotización premium sin compromiso en menos de 2 horas.
        </p>
        <a
          href="https://wa.me/573337450634?text=Hola,%20quiero%20cotizar%20cámaras%20en%20Usaquén"
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
