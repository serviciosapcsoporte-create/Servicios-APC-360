import os

base = "C:/Users/pc/Documents/serviciosapc-site/dist"

perf_hints = """  <link rel="preload" href="/assets/index-CLeSbt-4.css" as="style">
  <link rel="preload" href="/assets/index-DkdZy7S1.js" as="script">
  <link rel="preload" href="/logo.png" as="image" fetchpriority="high">
  <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
  <link rel="preconnect" href="https://www.google-analytics.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
  <link rel="preconnect" href="https://wa.me" crossorigin>
  <meta name="theme-color" content="#1a365d">
"""

# 1. Update dist/index.html
with open(os.path.join(base, "index.html"), "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace(
    '<link rel="stylesheet" href="/assets/index-CLeSbt-4.css">',
    perf_hints + '\n  <link rel="stylesheet" href="/assets/index-CLeSbt-4.css">'
)
content = content.replace(
    '<style>html, body { height: 100%; margin: 0; } #root { height: 100%; }</style>',
    '<style>html, body { height: 100%; margin: 0; font-display: swap; } #root { height: 100%; }</style>'
)
with open(os.path.join(base, "index.html"), "w", encoding="utf-8") as f:
    f.write(content)
print("Updated dist/index.html")

# 2. Update all blog posts
blog_folders = ["guia-mantenimiento-camaras", "instalacion-cctv-guia-completa", "precio-camaras-seguridad-bogota", "camaras-ia-vs-tradicionales", "como-elegir-camaras-seguridad", "arqueo-caja-automatico-guia", "conteo-personas-negocio", "automatizacion-procesos-pymes"]
for folder in blog_folders:
    path = os.path.join(base, "blog", folder, "index.html")
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        if "<head>\n" in content:
            content = content.replace(
                "<head>\n",
                "<head>\n  <link rel=\"preload\" href=\"/logo.png\" as=\"image\" fetchpriority=\"high\">\n  <link rel=\"preconnect\" href=\"https://www.googletagmanager.com\" crossorigin>\n  <link rel=\"preconnect\" href=\"https://wa.me\" crossorigin>\n  <meta name=\"theme-color\" content=\"#1a365d\">\n"
            )
        content = content.replace(
            "font-family:system-ui,-apple-system,sans-serif",
            "font-family:system-ui,-apple-system,sans-serif;font-display:swap"
        )
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated blog/{folder}")

# 3. Update ubicacion pages
loc_pages = ["kennedy", "suba", "engativa", "fontibon", "puente-aranda"]
for loc in loc_pages:
    path = os.path.join(base, "ubicacion", loc, "index.html")
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        if "<head>\n" in content:
            content = content.replace(
                "<head>\n",
                "<head>\n  <link rel=\"preload\" href=\"/logo.png\" as=\"image\" fetchpriority=\"high\">\n  <link rel=\"preconnect\" href=\"https://www.googletagmanager.com\" crossorigin>\n  <link rel=\"preconnect\" href=\"https://wa.me\" crossorigin>\n  <meta name=\"theme-color\" content=\"#1a365d\">\n"
            )
        content = content.replace(
            "font-family:system-ui,-apple-system,sans-serif",
            "font-family:system-ui,-apple-system,sans-serif;font-display:swap"
        )
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated ubicacion/{loc}")

# 4. Create _headers for GitHub Pages cache
headers_content = """/*
  Cache-Control: public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/index.html
  Cache-Control: public, max-age=0, must-revalidate
"""
with open(os.path.join(base, "_headers"), "w", encoding="utf-8") as f:
    f.write(headers_content)
print("Created _headers")
print("Done!")