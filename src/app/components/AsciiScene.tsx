import { Fragment, useEffect, useRef, type CSSProperties } from "react";
import { ChipCTA } from "./WhatsAppCTA";

/* ─── ESCENA ASCII · SERVICIOS APC ────────────────────────────
   Arte de 95 × 17 columnas en ASCII puro (sin acentos ni símbolos
   de ancho variable) para que Consolas no rompa la alineación.

   Tokens de 2 caracteres = 1 columna visible:
     SS estrella · BB bombilla · DD detalle · LL cinta · PP placa
   La capa apagada los expande a su glifo; la capa encendida los
   envuelve en <span> ya coloreados. Así el "encendido" se resuelve
   con opacidad: nunca se anima `color`.                              */

const PLAQUE = "S E R V I C I O S   A P C   -   B O G O T A";

const SCENE: string[] = [
  "                                                                                               ",
  "                                                                                               ",
  "                                               SS                                               ",
  "                                              /*\\                                              ",
  "                                             /*DD*\\                                             ",
  "                                            /***BB*\\                                            ",
  "                                           /*****DD*\\                                           ",
  "                                          /**BB****DD*\\                                          ",
  "                                         /******BB**DD*\\                                         ",
  " -  -  -  -  -  -  -  -  -  -  -  -  -  /DDBB********BBDD*\\   -  -  -  -  -  -  -  -  -  -  -  -  -",
  "                                       /**DD**BB*******DDBB\\                                       ",
  "                                      /BB***DD****BB*****DD*\\                                      ",
  "                                              |BB|                                              ",
  "                                              | |                                              ",
  "                                              | |                                              ",
  " -  -  -  -  -  -  -  -  -  -  -  -  -  - DDDDDDDDDD DDDDDDDDDD  -  -  -  -  -  -  -  -  -  -  -  -  -  -",
  "                          PP                          ",
];

/* Perro de 14 × 5, de frente y simétrico: se lee a 9 px y a 15 px, y
   no necesita espejo para avanzar desde cualquier borde. */
const DOG: string[] = [
  "  /\\      /\\  ",
  " /  \\____/  \\ ",
  "|   o    o   |",
  " \\   ____   / ",
  "  \\__/ww\\__/  ",
];

/* Regalos 21 × 3: flanquean el tronco (hueco central de 3 columnas). */
const GIFTS: string[] = [
  " ________   ________ ",
  " |LLLLLLLLLLLL|   |LLLLLLLLLLLL| ",
  " |______|   |______| ",
];

type Token = "SS" | "BB" | "DD" | "LL" | "PP";

const GLYPH: Record<Token, string> = {
  SS: "*",
  BB: "o",
  DD: "~",
  LL: "=",
  PP: PLAQUE,
};

const LIT_CLASS: Record<Token, string> = {
  SS: "a-star",
  BB: "a-bulb",
  DD: "a-detail",
  LL: "a-ribbon",
  PP: "a-ink",
};

const TOKEN_SPLIT = /(SS|BB|DD|LL|PP|-+)/;
const TOKEN_GLOBAL = /(SS|BB|DD|LL|PP)/g;

const plain = (line: string) =>
  line.replace(TOKEN_GLOBAL, (token) => GLYPH[token as Token] ?? token);

function LitLine({ line }: { line: string }) {
  return (
    <>
      {line.split(TOKEN_SPLIT).map((part, i) => {
        if (/^-+$/.test(part)) {
          return (
            <span key={i} className="a-ground">
              {part}
            </span>
          );
        }
        const cls = LIT_CLASS[part as Token];
        if (!cls) return <Fragment key={i}>{part}</Fragment>;
        return (
          <span key={i} className={cls}>
            {GLYPH[part as Token]}
          </span>
        );
      })}
    </>
  );
}

/* Posición final de cada perro (columna) y desplazamiento de entrada
   (dx en `ch`). Los de fondo (fila 4) apoyan las patas justo sobre el
   horizonte lejano; los de frente (fila 10) sobre el suelo principal. */
const DOGS = [
  { row: 4, col: 23, dx: -23, back: true },
  { row: 10, col: 21, dx: -21, back: false },
  { row: 4, col: 58, dx: 23, back: true },
  { row: 10, col: 60, dx: 21, back: false },
];

const ARIA_LABEL =
  "Escena ASCII de Servicios APC: cuatro perros avanzan desde los bordes hacia un árbol " +
  "que se enciende, aparecen los regalos en la base y se revela la firma ALEJANDRO PIRAQUIVE.";

export default function AsciiScene({ href }: { href: string }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let t = 0;
    let frame = 0;
    let ramp = 0;
    let timer = 0;
    let visible = false;
    let startY: number | null = null;
    let span = 240;

    const setT = (value: number) => {
      const clamped = Math.min(1, Math.max(0, value));
      t = clamped;
      el.style.setProperty("--t", clamped.toFixed(4));
      const phase = clamped >= 1 ? "2" : "1";
      if (el.dataset.phase !== phase) el.dataset.phase = phase;
    };

    const rampTo = (target: number) => {
      if (ramp) cancelAnimationFrame(ramp);
      const from = t;
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1100);
        setT(from + (target - from) * (1 - Math.pow(1 - k, 3)));
        ramp = k < 1 ? requestAnimationFrame(step) : 0;
      };
      ramp = requestAnimationFrame(step);
    };

    const measureSpan = () => {
      span = Math.max(160, el.getBoundingClientRect().height * 0.7);
    };

    const measure = () => {
      if (mq.matches) {
        setT(1);
        return;
      }
      if (!visible || startY === null) return;
      const p = (window.scrollY - startY) / span;
      const k = Math.min(1, Math.max(0, p));
      setT(1 - Math.pow(1 - k, 3));
    };

    const onScroll = () => {
      if (ramp) {
        cancelAnimationFrame(ramp);
        ramp = 0;
      }
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        measure();
      });
    };

    const onResize = () => {
      measureSpan();
      measure();
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting);
        if (!visible) return;
        if (startY === null) startY = window.scrollY;
        measureSpan();
        if (mq.matches) {
          setT(1);
          return;
        }
        measure();
        /* Sin desplazamiento, la escena se enciende sola a los 2,6 s. */
        if (!timer && t < 1) {
          timer = window.setTimeout(() => {
            if (!mq.matches && t < 1) rampTo(1);
          }, 2600);
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    /* En pantallas estrechas la escena desborda el contenedor: se centra
       el árbol en la ventana visible en lugar de dejarlo cortado. */
    const centerScroll = () => {
      const stage = stageRef.current;
      if (!stage) return;
      const max = stage.scrollWidth - stage.clientWidth;
      stage.scrollLeft = max > 0 ? Math.round(max / 2) : 0;
    };
    const centerRaf = requestAnimationFrame(centerScroll);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(centerScroll).catch(() => {});
    }

    const onMotionChange = () => measure();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", onMotionChange);
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", onMotionChange);
      }
      if (frame) cancelAnimationFrame(frame);
      if (ramp) cancelAnimationFrame(ramp);
      if (timer) window.clearTimeout(timer);
      cancelAnimationFrame(centerRaf);
    };
  }, []);

  return (
    <div className="a-card" ref={cardRef} data-phase="1" style={{ "--t": 0 } as CSSProperties}>
      <div className="a-hud">
        <span className="a-hud-state">
          <span className="a-hud-1">Fase 1 · Búsqueda</span>
          <span className="a-hud-2">Fase 2 · Iluminación y firma</span>
        </span>
        <span className="a-hud-brand">Servicios APC</span>
      </div>

      <div className="a-stage" ref={stageRef}>
        <div className="a-scene" role="img" aria-label={ARIA_LABEL}>
          {/* Capa apagada: define el alto de la escena (17 líneas). */}
          <pre className="a-layer a-layer--base">
            {SCENE.map((line, i) => (
              <Fragment key={i}>
                {plain(line)}
                {i < SCENE.length - 1 ? "\n" : ""}
              </Fragment>
            ))}
          </pre>

          {/* Capa encendida: misma geometría, colores ya resueltos. */}
          <pre className="a-layer a-layer--lit" aria-hidden="true">
            {SCENE.map((line, i) => (
              <Fragment key={i}>
                <LitLine line={line} />
                {i < SCENE.length - 1 ? "\n" : ""}
              </Fragment>
            ))}
          </pre>

          {DOGS.map((dog, i) => (
            <pre
              key={i}
              className={"a-dog" + (dog.back ? " a-dog--back" : "")}
              aria-hidden="true"
              style={
                {
                  "--dx": `${dog.dx}ch`,
                  left: `${dog.col}ch`,
                  top: `calc(${dog.row} * var(--a-lh) * 1em)`,
                } as CSSProperties
              }
            >
              {DOG.map((line, j) => (
                <Fragment key={j}>
                  {line}
                  {j < DOG.length - 1 ? "\n" : ""}
                </Fragment>
              ))}
            </pre>
          ))}

          <pre
            className="a-layer a-layer--gifts"
            aria-hidden="true"
            style={{ top: "calc(12 * var(--a-lh) * 1em)" }}
          >
            {GIFTS.map((line, i) => (
              <Fragment key={i}>
                <LitLine line={line} />
                {i < GIFTS.length - 1 ? "\n" : ""}
              </Fragment>
            ))}
          </pre>

          <div className="a-signature" aria-hidden="true">
            ALEJANDRO PIRAQUIVE
          </div>
        </div>
      </div>

      <div className="a-foot">
        <p className="a-note">Escena en arte ASCII · 95 × 17 · se enciende al desplazarte</p>
        <ChipCTA label="Cotizar por WhatsApp" href={href} size="sm" />
      </div>

      <div className="a-progress" aria-hidden="true">
        <i />
      </div>
    </div>
  );
}
