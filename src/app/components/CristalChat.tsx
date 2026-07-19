import { useEffect } from "react";

// Bot de ventas "Cristal" (scriptado, sin LLM). Reutiliza chat/cristal.js del public.
export default function CristalChat() {
  useEffect(() => {
    // CSS
    if (!document.getElementById("cristal-css")) {
      const link = document.createElement("link");
      link.id = "cristal-css";
      link.rel = "stylesheet";
      link.href = `${import.meta.env.BASE_URL}chat/cristal.css`;
      document.head.appendChild(link);
    }
    // Config (define window.CRISTAL_CONFIG)
    const cfg = document.createElement("script");
    cfg.src = `${import.meta.env.BASE_URL}chat/cristal-config.js`;
    cfg.onload = () => {
      const engine = document.createElement("script");
      engine.src = `${import.meta.env.BASE_URL}chat/cristal.js`;
      document.body.appendChild(engine);
    };
    document.body.appendChild(cfg);

    return () => {
      const mount = document.getElementById("cristal-mount");
      if (mount) mount.remove();
    };
  }, []);

  return null;
}
