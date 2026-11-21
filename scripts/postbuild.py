# -*- coding: utf-8 -*-
"""Post-build del shell SPA (dist/index.html + dist/404.html).

1) dist/index.html: aplica el patron de carga no bloqueante de CSS
   (media=print + onload) y modulepreload del entry, tal como se definio en
   1658f34/c3ae390, usando SIEMPRE los hashes reales del build actual
   (evita el bug de 9ea93be: hash obsoleto index-CqtvllaK.css tras borrarse).

2) dist/404.html: conserva la pagina custom del repo (meta refresh -> /#blog,
   noindex, metas propias) y SOLO actualiza sus referencias a los hashes
   actuales. Si no existe, cae a copia del shell.

3) Cache-bust del entry JS: se anade `?v=<CACHE_BUST>` a TODAS las referencias
   del bundle entry. Motivo (21/11/2026): durante el deploy b81fda3 el HTML
   nuevo referenciaba index-BDEstDqd.js mientras docs/assets aun no lo tenia;
   el 404 resultante quedo cacheado en el edge y sobrevivia a los rebuilds.
   Con el query el CDN usa otra clave de cache y sirve el archivo real (200).
   Las regex toleran el query para que el script sea idempotente.

Idempotente. Uso:
    python scripts/postbuild.py <ruta_dist>
"""
import os
import re
import sys
import io
import shutil

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

CACHE_BUST = "20261121"

CSS_RE = re.compile(r'<link rel="stylesheet"[^>]*href="/assets/(index-[A-Za-z0-9_-]+\.css)"[^>]*>')
# El JS puede venir ya con ?v=... de una pasada anterior: tolerarlo.
JS_RE = re.compile(r'<script type="module"[^>]*src="/assets/(index-[A-Za-z0-9_-]+\.js)(?:\?[^"]*)?"')
JS_REF_RE = re.compile(r'/assets/(index-[A-Za-z0-9_-]+\.js)(?:\?[A-Za-z0-9_.=-]+)?')


def current_hashes(html: str):
    css = CSS_RE.search(html)
    js = JS_RE.search(html)
    return (css.group(1) if css else None, js.group(1) if js else None)


def add_cache_bust(html: str) -> str:
    """Normaliza los refs del entry JS a /assets/index-XXX.js?v=CACHE_BUST."""
    return JS_REF_RE.sub(lambda m: "/assets/" + m.group(1) + "?v=" + CACHE_BUST, html)


def process(dist: str) -> None:
    idx = os.path.join(dist, "index.html")
    with open(idx, encoding="utf-8") as f:
        html = f.read()

    css, js = current_hashes(html)
    mcss = CSS_RE.search(html)

    if mcss and 'media="print"' not in mcss.group(0):
        lines = []
        if js:
            lines.append(f'<link rel="modulepreload" crossorigin href="/assets/{js}?v={CACHE_BUST}">')
        lines.append(
            f'<link rel="stylesheet" href="/assets/{css}" '
            f'media="print" onload="this.media=\'all\'" crossorigin>'
        )
        lines.append(f'<noscript><link rel="stylesheet" href="/assets/{css}" crossorigin></noscript>')
        html = html.replace(mcss.group(0), "\n  ".join(lines), 1)
        print(f"OK index.html: css={css}" + (f" js={js}" if js else ""))
    elif mcss:
        print("OK index.html: ya transformado (media=print presente)")
    else:
        print("AVISO index.html: sin <link> a /assets/index-*.css")

    if not css or not js:
        sys.exit("ERROR: no se pudieron determinar los hashes actuales")

    # Cache-bust del entry (script + modulepreload).
    antes = html
    html = add_cache_bust(html)
    if html != antes:
        with open(idx, "w", encoding="utf-8", newline="") as f:
            f.write(html)
        print(f"OK index.html: cache-bust JS -> ?v={CACHE_BUST}")
    else:
        print(f"OK index.html: cache-bust JS ya aplicado (?v={CACHE_BUST})")

    p404 = os.path.join(dist, "404.html")
    if os.path.exists(p404):
        with open(p404, "rb") as f:
            raw = f.read()
        before = raw
        raw = re.sub(rb"/assets/index-[A-Za-z0-9_-]+\.css",
                     ("/assets/" + css).encode(), raw)
        raw = re.sub(rb"/assets/index-[A-Za-z0-9_-]+\.js(?:\?[A-Za-z0-9_.=-]+)?",
                     ("/assets/" + js + "?v=" + CACHE_BUST).encode(), raw)
        if raw != before:
            with open(p404, "wb") as f:
                f.write(raw)
            print(f"OK 404.html: refs actualizadas -> css={css} js={js}?v={CACHE_BUST}")
        else:
            print("OK 404.html: refs ya correctas")
    else:
        shutil.copyfile(idx, p404)
        print("OK 404.html: no existia, copia del shell")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("uso: python postbuild.py <ruta_dist>")
    process(sys.argv[1])
