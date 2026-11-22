import { useEffect } from "react";

// Bot de ventas "Cristal" (scriptado, sin LLM). Reutiliza chat/cristal.js del public.
// Se arranca POST-LOAD + idle para sacar chat/cristal.css|js de la cadena crítica.
// Cache-bust: Cloudflare guarda estos archivos estáticos en borde con la misma URL.
const CHAT_CACHE_BUST = "?v=20261122a11y";

export default function CristalChat() {
  useEffect(() => {
    let cancelled = false;

    const boot = () => {
      if (cancelled || document.getElementById("cristal-css")) return;
      // CSS
      const link = document.createElement("link");
      link.id = "cristal-css";
      link.rel = "stylesheet";
      link.href = `${import.meta.env.BASE_URL}chat/cristal.css${CHAT_CACHE_BUST}`;
      document.head.appendChild(link);
      // Config (define window.CRISTAL_CONFIG)
      const cfg = document.createElement("script");
      cfg.src = `${import.meta.env.BASE_URL}chat/cristal-config.js${CHAT_CACHE_BUST}`;
      cfg.onload = () => {
        if (cancelled) return;
        const engine = document.createElement("script");
        engine.src = `${import.meta.env.BASE_URL}chat/cristal.js${CHAT_CACHE_BUST}`;
        document.body.appendChild(engine);
      };
      document.body.appendChild(cfg);
    };

    const schedule = () => {
      const w = window as unknown as {
        requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void;
      };
      if (w.requestIdleCallback) w.requestIdleCallback(boot, { timeout: 4000 });
      else setTimeout(boot, 2000);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      const mount = document.getElementById("cristal-mount");
      if (mount) mount.remove();
    };
  }, []);

  return null;
}
