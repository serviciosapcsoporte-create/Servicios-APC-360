import { useEffect, useState } from "react";
import { ArrowLeft, Clock, ExternalLink, Bookmark, Share2, ChevronRight } from "lucide-react";
import { marked } from "marked";

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
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { fm: {}, content: raw };
  const fmText = fmMatch[1];
  const fm: Record<string, string> = {};
  fmText.split("\n").forEach((line) => {
    const i = line.indexOf(":");
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
  });
  const content = raw.slice(fmMatch[0].length).trim();
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

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
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </figure>
          )}

          {/* Content */}
          <div
            className="blog-content max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
                      <img
                        src={p.coverImage}
                        alt=""
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
  if (h.startsWith("blog/")) return h.slice("blog/".length);
  return null;
}

export function BlogIndex({ initialSlug }: { initialSlug?: string | null }) {
  const [selected, setSelected] = useState<string | null>(
    initialSlug !== null && initialSlug !== undefined ? initialSlug : slugFromHash()
  );
  const posts = getAllPosts();
  const activePost = posts.find((p) => p.slug === selected);

  useEffect(() => {
    if (activePost) {
      document.title = `${activePost.title} | Servicios APC Bogotá`;
    }
  }, [activePost]);

  useEffect(() => {
    const onHashChange = () => {
      const slug = slugFromHash();
      setSelected(slug);
      if (slug) window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const openPost = (slug: string) => {
    setSelected(slug);
    window.location.hash = `blog/${slug}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onBack = () => {
    setSelected(null);
    window.location.hash = "blog";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-medium mb-4">
          Blog · Servicios APC
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-foreground)] leading-tight max-w-3xl">
          Cámaras Hikvision + IA para empresas
        </h2>
        <p className="text-lg text-[var(--color-muted-foreground)] mt-4 max-w-2xl leading-relaxed">
          Guías técnicas, comparativas y casos reales sobre CCTV con inteligencia artificial,
          automatización y seguridad empresarial en Bogotá.
        </p>
      </div>

      {/* Featured post */}
      {featured && (
        <div className="max-w-[1200px] mx-auto px-5 mb-16">
          <button
            onClick={() => openPost(featured.slug)}
            className="group grid md:grid-cols-[1fr_1fr] gap-8 items-center text-left w-full"
          >
            {featured.coverImage && (
              <div className="overflow-hidden rounded-2xl">
                <img
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {rest.map((post) => (
            <button
              key={post.slug}
              onClick={() => openPost(post.slug)}
              className="group text-left"
            >
              {post.coverImage && (
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
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
