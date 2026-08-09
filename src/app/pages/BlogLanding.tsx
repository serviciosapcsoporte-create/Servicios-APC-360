import { BlogIndex } from "../blog/Blog";

/* ─── MAIN COMPONENT ─────────────────────────────────────────
 * Página dedicada del blog accesible vía #blog, con el mismo
 * patrón de navegación que las demás landings de serviciosapc.site.
 * ───────────────────────────────────────────────────────────── */

export function BlogLanding() {
  return (
    <div className="min-h-screen" style={{ color: "var(--color-foreground)" }}>
      <BlogIndex />
    </div>
  );
}