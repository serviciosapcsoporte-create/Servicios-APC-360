import { useState } from "react";
import { ChevronRight, Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";

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
import post2 from "./posts/5-senales-camaras-no-protegen-empresa-bogota.mdx?raw";
import post3 from "./posts/negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues.mdx?raw";
import post4 from "./posts/analitica-video-ia-ferreterias-bogota-caso-real-suba.mdx?raw";
import post5 from "./posts/analitica-video-ia-clinicas-bogota-cumplimiento-seguridad.mdx?raw";
import post6 from "./posts/hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026.mdx?raw";
import post7 from "./posts/normativa-videovigilancia-colombia-2026-ley-1581-habeas-data.mdx?raw";

const POSTS_RAW: Record<string, string> = {
  "guia-camaras-hikvision-ia-empresas-bogota-2026": post1,
  "5-senales-camaras-no-protegen-empresa-bogota": post2,
  "negocio-camaras-ia-vs-sin-ia-caso-visual-antes-despues": post3,
  "analitica-video-ia-ferreterias-bogota-caso-real-suba": post4,
  "analitica-video-ia-clinicas-bogota-cumplimiento-seguridad": post5,
  "hikvision-colorvu-vs-acusense-vs-deepinview-ia-2026": post6,
  "normativa-videovigilancia-colombia-2026-ley-1581-habeas-data": post7,
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
        content,
        cta: fm.cta ? JSON.parse(fm.cta) : undefined,
      } as BlogPost;
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/* ─── BLOG COMPONENT ──────────────────────────────────────── */
export function BlogIndex() {
  const [selected, setSelected] = useState<string | null>(null);
  const posts = getAllPosts();
  const activePost = posts.find((p) => p.slug === selected);

  if (activePost) {
    return (
      <div>
        <button
          onClick={() => setSelected(null)}
          className="inline-flex items-center gap-2 text-sm text-accent hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft size={16} /> Volver al blog
        </button>

        <article className="max-w-3xl mx-auto">
          <header className="mb-12 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                {activePost.category}
              </span>
              <Calendar size={12} className="text-muted-foreground" />
              <time dateTime={activePost.date} className="text-muted-foreground">
                {new Date(activePost.date).toLocaleDateString("es-CO", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <Clock size={12} className="text-muted-foreground" />
              <span className="text-muted-foreground">{activePost.readTime}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-[1.05]">
              {activePost.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              {activePost.excerpt}
            </p>
            <div className="flex flex-wrap gap-2">
              {activePost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {activePost.coverImage && (
            <div className="mb-12 rounded-xl overflow-hidden border border-border">
              <img
                src={activePost.coverImage}
                alt={activePost.title}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          )}

          <div
            className="prose prose-lg prose-invert max-w-none space-y-8"
            dangerouslySetInnerHTML={{ __html: activePost.content }}
          />

          {activePost.cta && (
            <div className="mt-16 p-8 bg-secondary/50 border border-border rounded-xl space-y-4">
              <h3 className="font-serif text-2xl font-bold">¿Qué problema necesita resolver hoy?</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={activePost.cta.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium rounded-lg hover:bg-accent/90 transition-colors"
                >
                  {activePost.cta.primary.label}
                  <ExternalLink size={14} />
                </a>
                {activePost.cta.secondary && (
                  <a
                    href={activePost.cta.secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    {activePost.cta.secondary.label}
                    <ExternalLink size={14} />
                  </a>
                )}
                {activePost.cta.tertiary && (
                  <a
                    href={activePost.cta.tertiary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 font-medium rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    {activePost.cta.tertiary.label}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="font-serif text-xl font-bold mb-6">Más artículos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {posts
                .filter((p) => p.slug !== activePost.slug)
                .slice(0, 2)
                .map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => setSelected(p.slug)}
                    className="text-left p-4 border border-border rounded-xl hover:border-accent/30 transition-colors group"
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
                  </button>
                ))}
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <header className="mb-16 text-center">
        <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
          Blog · Servicios APC
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Cámaras Hikvision + IA: guías, casos y estrategia
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Análisis de video YOLO, CCTV offline-first, automatización n8n, SEO local Bogotá.
          Publicamos guías técnicas, casos reales y comparativas para que tomes decisiones con datos.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-accent/30 hover:shadow-xl cursor-pointer"
            onClick={() => setSelected(post.slug)}
          >
            {post.coverImage && (
              <div className="block relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
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
              <h3 className="font-serif text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">
                {post.title}
              </h3>
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
              <span className="inline-flex items-center gap-1.5 font-medium text-sm text-accent hover:gap-2 transition-all mt-4">
                Leer artículo <ChevronRight size={14} />
              </span>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            Próximamente más artículos...
          </div>
        )}
      </div>
    </div>
  );
}
