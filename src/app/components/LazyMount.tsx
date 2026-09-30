import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Monta secciones below-fold solo cuando se acercan al viewport (IO),
 * cuando se piden explícitamente (evento "section:reveal" desde scrollTo)
 * o cuando el hash inicial las referencia. Reduce el DOM inicial sin
 * romper la navegación por anclas.
 */
export default function LazyMount({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const reveal = () => setShown(true);
    const onReveal = (e: Event) => {
      if (!id || (e as CustomEvent).detail === id) reveal();
    };
    const onHash = () => {
      if (id && window.location.hash === "#" + id) reveal();
    };
    window.addEventListener("section:reveal", onReveal);
    window.addEventListener("hashchange", onHash);
    if (id && window.location.hash === "#" + id) reveal();

    let io: IntersectionObserver | undefined;
    if (ref.current) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((en) => en.isIntersecting)) {
            reveal();
            io?.disconnect();
          }
        },
        { rootMargin: "800px 0px" }
      );
      io.observe(ref.current);
    }
    return () => {
      window.removeEventListener("section:reveal", onReveal);
      window.removeEventListener("hashchange", onHash);
      io?.disconnect();
    };
  }, [shown, id]);

  if (shown) return <div ref={ref}>{children}</div>;
  return <div ref={ref} aria-hidden />;
}
