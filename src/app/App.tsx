import { useState, useEffect } from "react";
import CristalChat from "./components/CristalChat";
import { MessageCircle } from "lucide-react";
import { CamarasNegocio } from "./pages/CamarasNegocio";
import { CamarasSuba } from "./pages/CamarasSuba";
import { CamarasKennedy } from "./pages/CamarasKennedy";
import { CamarasChapinero } from "./pages/CamarasChapinero";
import { CamarasUsaquen } from "./pages/CamarasUsaquen";
import { CamarasFontibon } from "./pages/CamarasFontibon";
import { CamerasInstalacion } from "./pages/CamerasInstalacion";
import { CamerasCasa } from "./pages/CamerasCasa";
import { CamerasPrecios } from "./pages/CamerasPrecios";
import { MantenimientoCamaras } from "./pages/MantenimientoCamaras";
import { ConsultorTecnologico } from "./pages/ConsultorTecnologico";
import { BlogLanding } from "./pages/BlogLanding";
import Home from "./pages/Home";

/* ─── COMPONENT ─────────────────────────────────────────── */

export default function App() {
  const [hash, setHash] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const seoMeta: Record<string, { title: string; description: string }> = {
    "negocio": {
      title: "Cámaras de Seguridad para Negocio en Bogotá | 500+ instalaciones",
      description: "Instalación de cámaras para negocio en Bogotá con IA. Hikvision ColorVu, analítica YOLO, aforo, arqueo y alertas WhatsApp. Desde $1.800.000. Cotiza gratis.",
    },
    "instalacion": {
      title: "Instalación de Cámaras de Seguridad en Bogotá | Hikvision Certificado",
      description: "Instalación profesional de cámaras de seguridad en Bogotá: cableado estructurado sin puntos ciegos, configuración remota y equipos IA-ready. Cotización con visita técnica.",
    },
    "casa": {
      title: "Cámaras para Instalar en Casa en Bogotá | Instalación el mismo día",
      description: "Cámaras para casa en Bogotá con visión nocturna a color y acceso desde el celular. Desde $600.000 por cámara, instalación el mismo día en toda la ciudad.",
    },
    "precios-camaras": {
      title: "Precios de Instalación de Cámaras de Seguridad en Bogotá 2026",
      description: "Cuánto cuesta instalar cámaras de seguridad en Bogotá: desde $1.800.000 para 4 cámaras con instalación. Precios cerrados, IVA incluido y cotización gratis.",
    },
    "mantenimiento-camaras": {
      title: "Mantenimiento de Cámaras de Seguridad en Bogotá | Preventivo y Correctivo",
      description: "Mantenimiento de cámaras de seguridad en Bogotá: preventivo, correctivo y supervisión remota para Hikvision/Dahua. Limpieza, firmware, cableado y configuración. Desde $180.000. Diagnóstico gratis.",
    },
    "consultor": {
      title: "Consultor Tecnológico para Empresas en Bogotá | Diagnóstico con ROI",
      description: "Consultor tecnológico en Bogotá: auditoría de seguridad CCTV con IA, automatización de procesos y dashboards. Diagnóstico gratis con implementación.",
    },
    "blog": {
      title: "Blog de Cámaras de Seguridad e IA | Servicios APC Bogotá",
      description: "Guías, comparativas y casos reales sobre CCTV Hikvision con inteligencia artificial en Bogotá: precios, instalación, analítica IA, automatización y seguridad empresarial.",
    },
  };

  useEffect(() => {
    const meta = seoMeta[hash];
    if (!meta) return;
    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", meta.description);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://serviciosapc.site/${hash === "inicio" ? "" : hash + "/"}`);
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", meta.title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", meta.description);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", `https://serviciosapc.site/${hash === "inicio" ? "" : hash + "/"}`);
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement("meta");
      ogType.setAttribute("property", "og:type");
      document.head.appendChild(ogType);
    }
    ogType.setAttribute("content", hash.startsWith("blog") ? "article" : "website");
    if (hash.startsWith("blog")) {
      const existing = document.querySelector('script[type="application/ld+json"]');
      if (existing) existing.remove();
      const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": meta.title,
        "description": meta.description,
        "image": "https://serviciosapc.site/blog/mantenimiento-de-camaras-de-seguridad/hero.jpg",
        "author": { "@type": "Organization", "name": "Servicios APC" },
        "publisher": { "@type": "Organization", "name": "Servicios APC", "logo": { "@type": "ImageObject", "url": "https://serviciosapc.site/logo.png" } },
        "datePublished": "2026-09-06",
        "dateModified": "2026-09-07",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://serviciosapc.site/blog/${hash}/` },
        "keywords": "mantenimiento de cámaras de seguridad, mantenimiento CCTV Bogotá, Hikvision, analítica video IA",
        "articleSection": "Mantenimiento & IA"
      };
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [hash]);

  const landingPages: Record<string, () => JSX.Element> = {
    "negocio": CamarasNegocio,
    "suba": CamarasSuba,
    "kennedy": CamarasKennedy,
    "chapinero": CamarasChapinero,
    "usaquen": CamarasUsaquen,
    "fontibon": CamarasFontibon,
    "instalacion": CamerasInstalacion,
    "casa": CamerasCasa,
    "precios-camaras": CamerasPrecios,
    "mantenimiento-camaras": MantenimientoCamaras,
    "consultor": ConsultorTecnologico,
    "blog": BlogLanding,
  };

  const blogSlug = hash.startsWith("blog/") ? hash.slice("blog/".length) : null;
  const LandingPage = landingPages[hash];

  if (LandingPage || blogSlug) {
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-14">
            <button onClick={() => { window.location.hash = ""; }} className="flex items-center gap-2.5">
              <img src="/logo.webp" alt="Servicios APC" className="h-8 w-auto" />
              <span className="text-foreground font-semibold text-sm hidden sm:block">Servicios APC</span>
            </button>
            <a href="https://wa.me/573337450634" target="_blank" rel="noopener noreferrer"
               className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              WhatsApp Gratis
            </a>
          </div>
        </nav>
        {blogSlug ? <BlogLanding slug={blogSlug} /> : <LandingPage />}
        <CristalChat />
      </div>
    );
  }

  return <Home />;
}