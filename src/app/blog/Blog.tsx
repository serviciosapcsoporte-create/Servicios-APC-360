import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Calendar, Clock, ExternalLink, Tag } from "lucide-react";

/* ─── POST TYPES ──────────────────────────────────────────── */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;           // ISO "2026-07-25"
  publishDate?: string;   // ISO "2026-07-25" — si es futuro, no se muestra
  author: string;
  category: string;
  tags: string[];
  readTime: string;       // "8 min"
  coverImage?: string;
  content: string;        // MDX/HTML string
  cta?: {
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
}

/* ─── POSTS REGISTRY (add new .mdx files here) ─────────────── */
import post1 from "./posts/guia-camaras-hikvision-ia-empresas-bogota-2026.mdx?raw";
import post2 from "./posts/5-senales-camaras-no-protegen-empresa-bogota.mdx?raw";
import post3 from "./posts/negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues.mdx?raw";
import post4 from "./posts/analitica-video-ia-ferreterias-bogota-caso-real-suba.mdx?raw";
import post5 from "./posts/analitica-video-ia-clinicas-bogota-cumplimiento-seguridad.mdx?raw";
import post6 from "./posts/hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026.mdx?raw";
import post7 from "./posts/normativa-videovigilancia-colombia-2026-ley-1581-habeas-data.mdx?raw";

const POSTS_RAW = {
  "guia-camaras-hikvision-ia-empresas-bogota-2026": post1,
  "5-senales-camaras-no-protegen-empresa-bogota": post2,
  "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": post3,
  "analitica-video-ia-ferreterias-bogota-caso-real-suba": post4,
  "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": post5,
  "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": post6,
  "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": post7,
  // "proximo-articulo": post8,  // ← descomenta cuando añadas más
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
      if (publishDate && new Date(publishDate) > now) return null; // futuro → no publica
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
        content,
        cta: fm.cta ? JSON.parse(fm.cta) : undefined,
      } as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/* ─── BLOG INDEX PAGE ──────────────────────────────────────── */
export function BlogIndex() {
  const posts = getAllPosts();
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <header className="mb-16 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            Blog · Servicios APC
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Cámaras Hikvision + IA: guías, casos y estrategia
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Análisis de video YOLO, CCTV offline-first, automatización n8n, SEO local Bogotá.
            Publicamos guías técnicas, casos reales y comparativas para que tomes decisiones con datos.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-accent/30 hover:shadow-xl"
            >
              {post.coverImage && (
                <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
              )}
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-accent tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("es-CO", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    · {post.readTime}
                  </span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium bg-secondary text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-medium text-sm text-accent hover:gap-2 transition-all mt-4"
                >
                  Leer artículo <ChevronRight size={14} />
                </Link>
              </div>
            </article>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Próximamente más artículos...
            </div>
          )}
        </div>

        <nav className="mt-12 flex justify-center gap-2" aria-label="Paginación">
          <button className="px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors" disabled>
            Anterior
          </button>
          <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:border-accent hover:text-accent transition-colors">
            Siguiente
          </button>
        </nav>
      </div>
    </section>
  );
}

/* ─── SINGLE POST PAGE ─────────────────────────────────────── */
export function BlogPost({ slug }: { slug: string }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="py-24 text-center text-muted-foreground">Artículo no encontrado</div>;

  return (
    <article className="py-16 lg:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <header className="mb-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              {post.category}
            </span>
            <Calendar size={12} className="text-muted-foreground" />
            <time dateTime={post.date} className="text-muted-foreground">
              {new Date(post.date).toLocaleDateString("es-CO", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <Clock size={12} className="text-muted-foreground" />
            <span className="text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Cover */}
        {post.coverImage && (
          <div className="mb-12 rounded-xl overflow-hidden border border-border">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg prose-invert max-w-none space-y-8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        {post.cta && (
          <div className="mt-16 p-8 bg-secondary/50 border border-border rounded-xl space-y-4">
            <h3 className="font-serif text-2xl font-bold">¿Quieres aplicar esto en tu negocio?</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={post.cta.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                {post.cta.primary.label}
                <ExternalLink size={14} />
              </a>
              {post.cta.secondary && (
                <a
                  href={post.cta.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 font-medium rounded-lg hover:bg-secondary transition-colors"
                >
                  {post.cta.secondary.label}
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Cross-links a otros posts */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-serif text-xl font-bold mb-6">Más artículos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {getAllPosts()
              .filter((p) => p.slug !== post.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="p-4 border border-border rounded-xl hover:border-accent/30 transition-colors group"
                >
                  <p className="font-mono text-xs text-accent tracking-widest uppercase mb-2">
                    {p.category}
                  </p>
                  <h4 className="font-semibold group-hover:text-accent transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── HELPER: get all posts for cross-linking ──────────────── */
function getAllPosts(): BlogPost[] {
  return Object.entries(POSTS_RAW)
    .map(([slug, raw]) => {
      const { fm } = parseFrontmatter(raw);
      const publishDate = fm.publishDate || fm.date;
      const now = new Date();
      if (publishDate && new Date(publishDate) > now) return null;
      return {
        slug,
        title: fm.title || "",
        excerpt: fm.excerpt || "",
        date: fm.date || "",
        category: fm.category || "",
        tags: fm.tags ? fm.tags.split(",").map((t) => t.trim()) : [],
        coverImage: fm.coverImage,
      } as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}