import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, Clock, ExternalLink, Bookmark, Share2, ChevronRight } from "lucide-react";
import { marked } from "marked";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { cn } from "../components/ui/utils";

/* ─── POST TYPES ──────────────────────────────────────────── */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  publishDate?: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
  coverImage?: string;
  content: string;
  cta?: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
    tertiary?: { label: string; href: string };
  };
}

/* ─── POSTS REGISTRY ──────────────────────────────────────── */
import post1 from "./posts/guia-camaras-hikvision-ia-empresas-bogota-2026.mdx?raw";
import post2 from "./posts/costo-camaras-seguridad-empresas-2026-hardware-vs-ia.mdx?raw";
import post3 from "./posts/que-es-analitica-video-ia-empresas-bogota.mdx?raw";
import post4 from "./posts/5-senales-camaras-no-protegen-empresa-bogota.mdx?raw";
import post5 from "./posts/negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues.mdx?raw";
import post6 from "./posts/analitica-video-ia-ferreterias-bogota-caso-real-suba.mdx?raw";
import post7 from "./posts/analitica-video-ia-clinicas-bogota-cumplimiento-seguridad.mdx?raw";
import post8 from "./posts/hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026.mdx?raw";
import post9 from "./posts/normativa-videovigilancia-colombia-2026-ley-1581-habeas-data.mdx?raw";
import post10 from "./posts/automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard.mdx?raw";
import post11 from "./posts/seo-local-google-maps-empresas-seguridad-bogota.mdx?raw";
import post12 from "./posts/servidores-edge-gpu-para-ia-video-analitica-bogota.mdx?raw";
import post13 from "./posts/hikvision-vs-dahua-vs-uniview-comparativa-ia-2026.mdx?raw";
import post14 from "./posts/bot-whatsapp-ia-atencion-clientes-seguridad-bogota.mdx?raw";
import post15 from "./posts/deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento.mdx?raw";
import post16 from "./posts/cuanto-cuesta-camaras-seguridad-negocio-bogota-2026.mdx?raw";
import post17 from "./posts/mejores-camaras-seguridad-local-comercial-bogota.mdx?raw";
import post18 from "./posts/camaras-seguridad-bodega-bogota-monitoreo-inteligente.mdx?raw";
import post19 from "./posts/instalacion-camaras-seguridad-negocio-pequeno-bogota-guia.mdx?raw";

const POSTS_RAW: Record<string, string> = {
  "guia-camaras-hikvision-ia-empresas-bogota-2026": post1,
  "costo-camaras-seguridad-empresas-2026-hardware-vs-ia": post2,
  "que-es-analitica-video-ia-empresas-bogota": post3,
  "5-senales-camaras-no-protegen-empresa-bogota": post4,
  "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": post5,
  "analitica-video-ia-ferreterias-bogota-caso-real-suba": post6,
  "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": post7,
  "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": post8,
  "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": post9,
  "automatizacion-n8n-cctv-alerta-whatsapp-crm-dashboard": post10,
  "seo-local-google-maps-empresas-seguridad-bogota": post11,
  "servidores-edge-gpu-para-ia-video-analitica-bogota": post12,
  "hikvision-vs-dahua-vs-uniview-comparativa-ia-2026": post13,
  "bot-whatsapp-ia-atencion-clientes-seguridad-bogota": post14,
  "deteccion-ppe-ia-construccion-fabrica-bogota-cumplimiento": post15,
  "cuanto-cuesta-camaras-seguridad-negocio-bogota-2026": post16,
  "mejores-camaras-seguridad-local-comercial-bogota": post17,
  "camaras-seguridad-bodega-bogota-monitoreo-inteligente": post18,
  "instalacion-camaras-seguridad-negocio-pequeno-bogota-guia": post19,
};

function parseFrontmatter(raw: string): { fm: Partial<BlogPost>; content: string } {
  const normalized = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  const fmMatch = normalized.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { fm: {}, content: normalized };
  const fmText = fmMatch[1];
  const fm: Record<string, string> = {};
  fmText.split("\n").forEach((line) => {
    const i = line.indexOf(":");
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  });
  const content = normalized.slice(fmMatch[0].length).trim();
  return { fm: fm as Partial<BlogPost>, content };
}

function getAllPosts(): BlogPost[] {
  const now = new Date();
  return Object.entries(POSTS_RAW)
    .map(([slug, raw]) => {
      const { fm, content } = parseFrontmatter(raw);
      const publishDate = fm.publishDate || fm.date;
      if (publishDate && new Date(publishDate) > now) return null;
      return {
        slug,
        title: fm.title || "Sin título",
        excerpt: fm.excerpt || "",
        date: fm.date || "",
        publishDate,
        author: fm.author || "Servicios APC",
        category: fm.category || "IA & Seguridad",
        tags: fm.tags ? fm.tags.split(",").map((t) => t.trim()) : [],
        readTime: fm.readTime || "5 min",
        coverImage: fm.coverImage,
        content: marked.parse(content) as string,
        cta: fm.cta ? JSON.parse(fm.cta.replace(/\\"/g, '"')) : undefined,
      } as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/* ─── LEGACY ARTICLES (static SEO pages) ────────────────────
 * Estos 8 artículos existen como páginas estáticas en /blog/<slug>/
 * y se listan aquí para que su miniatura aparezca en #blog.
 * Al hacer clic se abre la página estática completa.
 * ───────────────────────────────────────────────────────────── */
const LEGACY_POSTS: BlogPost[] = [
  {
    slug: "arqueo-caja-automatico-guia",
    title: "Arqueo de Caja Automático con Cámaras: Guía Completa (2026)",
    excerpt: "Cómo funciona el arqueo de caja automático con cámaras IA. Conciliación POS en tiempo real.",
    date: "2025-10-01",
    author: "Servicios APC",
    category: "IA & Seguridad",
    tags: ["arqueo", "pos", "ia"],
    readTime: "6 min",
    coverImage: "/blog-img/arqueo-caja-automatico-guia.webp",
    content: "",
  },
  {
    slug: "automatizacion-procesos-pymes",
    title: "Automatización de Procesos para Pymes en Bogotá: Guía Completa",
    excerpt: "Cómo automatizar procesos en tu pyme con IA, n8n, WhatsApp y dashboards.",
    date: "2025-10-02",
    author: "Servicios APC",
    category: "Automatización",
    tags: ["automatizacion", "pymes", "n8n"],
    readTime: "6 min",
    coverImage: "/blog-img/automatizacion-procesos-pymes.webp",
    content: "",
  },
  {
    slug: "camaras-ia-vs-tradicionales",
    title: "Cámaras IA vs Cámaras Tradicionales: ¿Cuál Elegir en 2026?",
    excerpt: "Comparación completa: cámaras con inteligencia artificial vs cámaras CCTV tradicionales.",
    date: "2025-10-03",
    author: "Servicios APC",
    category: "Cámaras IA",
    tags: ["camaras", "ia", "comparativa"],
    readTime: "6 min",
    coverImage: "/blog-img/camaras-ia-vs-tradicionales.webp",
    content: "",
  },
  {
    slug: "como-elegir-camaras-seguridad",
    title: "Cómo Elegir Cámaras de Seguridad para tu Negocio en Bogotá",
    excerpt: "Guía para elegir las cámaras de seguridad correctas para tu negocio. Rangos de precio y recomendaciones.",
    date: "2025-10-04",
    author: "Servicios APC",
    category: "Cámaras IA",
    tags: ["camaras", "guia", "bogota"],
    readTime: "6 min",
    coverImage: "/blog-img/como-elegir-camaras-seguridad.webp",
    content: "",
  },
  {
    slug: "conteo-personas-negocio",
    title: "Conteo de Personas con Cámaras: Cómo Medir el Flujo de Clientes",
    excerpt: "Cómo usar cámaras con IA para contar personas en tu negocio y medir el flujo de clientes.",
    date: "2025-10-05",
    author: "Servicios APC",
    category: "Analítica",
    tags: ["conteo", "aforo", "ia"],
    readTime: "6 min",
    coverImage: "/blog-img/conteo-personas-negocio.webp",
    content: "",
  },
  {
    slug: "guia-mantenimiento-camaras",
    title: "Guía Completa de Mantenimiento de Cámaras de Seguridad en Bogotá",
    excerpt: "Cómo mantener tus cámaras de seguridad CCTV funcionando al 100% con mantenimiento preventivo.",
    date: "2025-10-06",
    author: "Servicios APC",
    category: "Mantenimiento",
    tags: ["mantenimiento", "camaras", "cctv"],
    readTime: "6 min",
    coverImage: "/blog-img/guia-mantenimiento-camaras.webp",
    content: "",
  },
  {
    slug: "instalacion-cctv-guia-completa",
    title: "Cómo Instalar Cámaras de Seguridad CCTV en tu Negocio (Guía Completa)",
    excerpt: "Guía paso a paso para instalar cámaras de seguridad CCTV en tu negocio en Bogotá.",
    date: "2025-10-07",
    author: "Servicios APC",
    category: "Instalación",
    tags: ["instalacion", "cctv", "guia"],
    readTime: "6 min",
    coverImage: "/blog-img/instalacion-cctv-guia-completa.webp",
    content: "",
  },
  {
    slug: "precio-camaras-seguridad-bogota",
    title: "Precio de Cámaras de Seguridad en Bogotá: Guía Actualizada 2026",
    excerpt: "Precios reales de cámaras de seguridad CCTV en Bogotá 2026. Hikvision y más.",
    date: "2025-10-08",
    author: "Servicios APC",
    category: "Precios",
    tags: ["precio", "camaras", "bogota"],
    readTime: "6 min",
    coverImage: "/blog-img/precio-camaras-seguridad-bogota.webp",
    content: "",
  },
];

const LEGACY_SLUGS = new Set(LEGACY_POSTS.map((p) => p.slug));

// Función para formatear fechas de forma segura
const formatDate = (dateString: string) => {
  if (!dateString) return "Reciente";
  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? "Reciente"
    : date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
};

/* ─── ARTICLE VIEW ────────────────────────────────────────── */
function ArticleView({
  post,
  allPosts,
  onBack,
  onSelect,
}: {
  post: BlogPost;
  allPosts: BlogPost[];
  onBack: () => void;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="min-h-screen">
      <div className="max-w-[728px] mx-auto px-5">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors py-8"
        >
          <ArrowLeft size={14} />
          <span>Volver al blog</span>
        </button>

        <article>
          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-medium text-[var(--color-accent)]">
              {post.category}
            </span>
            <span className="text-[var(--color-border)]">·</span>
            <time className="text-sm text-[var(--color-muted-foreground)]" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[2.5rem] md:text-[3rem] leading-[1.15] font-bold text-[var(--color-foreground)] mb-5">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-[var(--color-muted-foreground)] leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author bar */}
          <div className="flex items-center justify-between py-6 border-t border-b border-[var(--color-border)] mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-sm font-bold text-[var(--color-accent)]">
                SA
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-foreground)]">
                  {post.author}
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  {post.readTime} de lectura · {formatDate(post.date)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[var(--color-muted-foreground)]">
              <button className="hover:text-[var(--color-foreground)] transition-colors">
                <Bookmark size={18} />
              </button>
              <button className="hover:text-[var(--color-foreground)] transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Cover */}
          {post.coverImage && (
            <figure className="mb-10">
              <ImageWithFallback
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
                decoding="async"
              />
            </figure>
          )}

          {/* Content */}
          {post.content ? (
            <div
              className="blog-content max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="my-8 p-6 bg-[var(--color-secondary)] rounded-2xl text-center">
              <p className="text-[var(--color-muted-foreground)] mb-4">
                Este artículo está disponible en su versión completa.
              </p>
              <a
                href={`/blog/${post.slug}/`}
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Leer artículo completo
              </a>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          {post.cta && (
            <div className="my-12 p-8 bg-[var(--color-secondary)] rounded-2xl">
              <p className="text-xs uppercase tracking-widest text-[var(--color-accent)] font-medium mb-3">
                ¿Necesitas esto para tu empresa?
              </p>
              <h3 className="font-serif text-2xl font-bold text-[var(--color-foreground)] mb-5">
                {post.cta.primary.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={post.cta.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Solicitar cotización
                  <ExternalLink size={14} />
                </a>
                {post.cta.secondary && (
                  <a
                    href={post.cta.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-full font-medium text-sm hover:bg-[var(--color-secondary)] transition-colors"
                  >
                    {post.cta.secondary.label}
                    <ExternalLink size={14} />
                  </a>
                )}
                {post.cta.tertiary && (
                  <a
                    href={post.cta.tertiary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-foreground)] px-6 py-3 rounded-full font-medium text-sm hover:bg-[var(--color-secondary)] transition-colors"
                  >
                    {post.cta.tertiary.label}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* More posts */}
          <div className="border-t border-[var(--color-border)] pt-10 pb-16">
            <h3 className="text-sm uppercase tracking-widest text-[var(--color-muted-foreground)] mb-6">
              Sigue leyendo
            </h3>
            <div className="space-y-8">
              {allPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => onSelect(p.slug)}
                    className="flex gap-6 text-left group w-full"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[var(--color-muted-foreground)] mb-1">
                        {p.category}
                      </p>
                      <h4 className="font-serif text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-1">
                        {p.title}
                      </h4>
                      <p className="text-sm text-[var(--color-muted-foreground)] line-clamp-2">
                        {p.excerpt}
                      </p>
                      <p className="text-xs text-[var(--color-muted-foreground)] mt-2">
                        {p.readTime} · {formatDate(p.date)}
                      </p>
                    </div>
                    {p.coverImage && (
                      <ImageWithFallback
                        src={p.coverImage}
                        alt={p.title}
                        className="w-[120px] h-[80px] object-cover rounded-lg flex-shrink-0"
                      />
                    )}
                  </button>
                ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

/* ─── INDEX VIEW ──────────────────────────────────────────── */
function slugFromHash(): string | null {
  const h = window.location.hash.slice(1);
  if (h.startsWith("blog/")) {
    const slug = h.slice("blog/".length);
    return slug || null; // evita string vacío si hash es "#blog/"
  }
  return null;
}

const BLOG_TABS = ["Todos", "Cámaras & IA", "Automatización & n8n", "Normativa Colombia", "Precios"];

function tabOf(post: BlogPost): string {
  const slug = post.slug;
  const cat = (post.category || "").toLowerCase();
  if (slug.includes("normativa") || slug.includes("habeas") || slug.includes("ley-1581")) return "Normativa Colombia";
  if (cat.includes("automatiz") || slug.includes("automatizacion") || slug.includes("n8n") || slug.includes("bot-whatsapp")) return "Automatización & n8n";
  if (cat.includes("precio") || cat.includes("costo") || slug.includes("precio") || slug.includes("costo") || slug.includes("cuanto-cuesta")) return "Precios";
  return "Cámaras & IA";
}

export function BlogIndex({ initialSlug }: { initialSlug?: string | null }) {
  const [selected, setSelected] = useState<string | null>(
    initialSlug !== null && initialSlug !== undefined ? initialSlug : slugFromHash()
  );
  const [filter, setFilter] = useState<string>("Todos");
  const posts = [...getAllPosts(), ...LEGACY_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const activePost = posts.find((p) => p.slug === selected);

  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} | Servicios APC Bogotá`;
    }
  }, [activePost]);

  useEffect(() => {
    let isMounted = true;
    const onHashChange = () => {
      if (!isMounted) return;
      const slug = slugFromHash();
      setSelected(slug);
      // Scroll al top solo al navegar a un artículo (no al volver al índice)
      if (slug) window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      isMounted = false;
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const openPost = useCallback((slug: string) => {
    if (LEGACY_SLUGS.has(slug)) {
      window.location.href = `/blog/${slug}/`;
      return;
    }
    setSelected(slug);
    window.location.hash = `blog/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const onBack = useCallback(() => {
    setSelected(null);
    // Usar replaceState para no añadir entrada al historial si ya estamos en #blog
    if (window.location.hash === "#blog") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = "blog";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (activePost) {
    return (
      <ArticleView
        post={activePost}
        allPosts={posts}
        onBack={onBack}
        onSelect={openPost}
      />
    );
  }

  const visible = filter === "Todos" ? posts : posts.filter((p) => tabOf(p) === filter);
  const featured = visible[0];
  const rest = visible.slice(1);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 pt-6 pb-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-2">
          Blog · Servicios APC
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-foreground)] leading-tight max-w-3xl">
          Cámaras Hikvision + IA para empresas
        </h2>
        <p className="text-sm text-[var(--color-muted-foreground)] mt-2 max-w-2xl leading-relaxed">
          Guías técnicas, comparativas y casos reales sobre CCTV con inteligencia artificial,
          automatización y seguridad empresarial en Bogotá.
        </p>
        {/* Filtros por categoría */}
        <div className="flex flex-wrap gap-2 mt-5">
          {BLOG_TABS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                filter === t
                  ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                  : "bg-[var(--color-secondary)] text-[var(--color-muted-foreground)] border-[var(--color-border)] hover:text-[var(--color-foreground)] hover:border-[var(--color-accent)]/50"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Featured post */}
      {featured && (
        <div className="max-w-[1200px] mx-auto px-5 mb-16">
            <button
              onClick={() => openPost(featured.slug)}
              className="group grid md:grid-cols-[1fr_1fr] gap-8 items-center text-left w-full rounded-2xl border border-[var(--color-border)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]"
            >
            {featured.coverImage && (
              <div className="overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            )}
            <div className="space-y-4 py-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-accent)] font-medium">
                Destacado
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-[1.15]">
                {featured.title}
              </h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed text-lg">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-xs font-bold text-[var(--color-accent)]">
                  SA
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-foreground)]">
                    {featured.author}
                  </p>
                  <p className="text-xs text-[var(--color-muted-foreground)]">
                    {featured.readTime} · {formatDate(featured.date)}
                  </p>
                </div>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Divider */}
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="border-t border-[var(--color-border)]" />
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {rest.map((post) => (
            <button
              key={post.slug}
              onClick={() => openPost(post.slug)}
              className="group text-left rounded-xl border border-[var(--color-border)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.2)]"
            >
              {post.coverImage && (
                <div className="overflow-hidden rounded-xl mb-4">
                  <ImageWithFallback
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}
              <div className="space-y-2.5">
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  {post.category}
                </p>
                <h3 className="font-serif text-xl font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-[9px] font-bold text-[var(--color-accent)]">
                    SA
                  </div>
                  <p className="text-xs text-[var(--color-muted-foreground)]">
                    {post.readTime} · {formatDate(post.date)}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 text-[var(--color-muted-foreground)]">
            <p className="text-lg">Próximamente más artículos...</p>
          </div>
        )}
      </div>
    </div>
  );
}
