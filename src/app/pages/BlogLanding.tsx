import { BlogIndex } from "../blog/Blog";
import VideoBackground from "../components/VideoBackground";

/* ─── MAIN COMPONENT ─────────────────────────────────────────
 * Página dedicada del blog accesible vía #blog, con el mismo
 * patrón de navegación que las demás landings de serviciosapc.site.
 * ───────────────────────────────────────────────────────────── */

export function BlogLanding({ slug }: { slug?: string | null }) {
  return (
    <div className="min-h-screen" style={{ color: "var(--color-foreground)" }}>
      <VideoBackground
        src="/assets/fondo-holografico.mp4"
        poster="/assets/holo-poster.jpg"
      />
      <div className="relative z-10">
        <BlogIndex initialSlug={slug} />
      </div>
    </div>
  );
}