import { BlogIndex } from "../blog/Blog";
import { VideoHero } from "../components/VideoHero";

/* ─── MAIN COMPONENT ─────────────────────────────────────────
 * Página dedicada del blog accesible vía #blog, con el mismo
 * patrón de navegación que las demás landings de serviciosapc.site.
 * ───────────────────────────────────────────────────────────── */

export function BlogLanding({ slug }: { slug?: string | null }) {
  return (
    <div className="min-h-screen" style={{ color: "var(--color-foreground)" }}>
      <VideoHero
        title="Blog de Cámaras IA y Automatización"
        subtitle="Guías, casos reales y novedades sobre analítica de video con IA, CCTV Hikvision, bots WhatsApp y automatización de procesos para empresas en Bogotá."
        ctaLabel="Ver artículos"
        onCta={() => {}}
      />
      <BlogIndex initialSlug={slug} />
    </div>
  );
}