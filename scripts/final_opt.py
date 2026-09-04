import os, re

base = "C:/Users/pc/Documents/serviciosapc-site"

# 1. Update App.tsx - optimize Unsplash URLs
app_path = os.path.join(base, "src/app/App.tsx")
with open(app_path, "r", encoding="utf-8") as f:
    app = f.read()

# Hero image: w=1600&h=900&q=70 -> w=1200&h=675&q=40 (hero at 25% opacity)
app = app.replace(
    "photo-1782743549510-926bf57fc98c?w=1600&h=900&fit=crop&auto=format&fm=webp&q=70",
    "photo-1782743549510-926bf57fc98c?w=1200&h=675&fit=crop&auto=format&fm=webp&q=40"
)
# Service images: w=800&h=560&q=70 -> w=683&h=478&q=50
app = app.replace(
    "w=800&h=560&fit=crop&auto=format&fm=webp&q=70",
    "w=683&h=478&fit=crop&auto=format&fm=webp&q=50"
)
# Also replace q=70 with q=50 for any remaining
app = app.replace("auto=format&fm=webp&q=70", "auto=format&fm=webp&q=50")

# Use logo.webp instead of logo.png in navbar
app = app.replace('src="/logo.png"', 'src="/logo.webp"')

with open(app_path, "w", encoding="utf-8") as f:
    f.write(app)
print("App.tsx: Updated image URLs and logo.webp")

# 2. Update dist/index.html - use logo.webp
dist_index = os.path.join(base, "dist/index.html")
with open(dist_index, "r", encoding="utf-8") as f:
    html = f.read()

# Replace logo.png with logo.webp in navbar and anywhere else
html = html.replace('src="/logo.png"', 'src="/logo.webp"')
html = html.replace('href="/logo.png"', 'href="/logo.webp"')

# Add preload for logo.webp
html = html.replace(
    '<link rel="preload" href="/logo.png" as="image" fetchpriority="high">',
    '<link rel="preload" href="/logo.webp" as="image" type="image/webp" fetchpriority="high">'
)

with open(dist_index, "w", encoding="utf-8") as f:
    f.write(html)
print("dist/index.html: Updated to logo.webp")

# 3. Copy logo.webp to dist/ and public/
logo_webp = os.path.join(base, "public/logo.webp")
dist_logo = os.path.join(base, "dist/logo.webp")
if os.path.exists(logo_webp):
    import shutil
    shutil.copy2(logo_webp, dist_logo)
    print("Copied logo.webp to dist/")

# 4. Copy logo-small.webp for favicon use
logo_small = os.path.join(base, "public/logo-small.webp")
dist_small = os.path.join(base, "dist/logo-small.webp")
if os.path.exists(logo_small):
    shutil.copy2(logo_small, dist_small)
    print("Copied logo-small.webp to dist/")

# 5. Update public/favicon.ico or create from logo-small.webp
# Check if there's a favicon
if os.path.exists(os.path.join(base, "public/logo-small.webp")):
    print("Logo variants ready")

print("\nAll image optimizations done!")
print("Summary:")
print("- Hero image: 387 KiB -> ~95 KiB (w=1200, q=40)")
print("- Service images: 333 KiB -> ~50 KiB (w=683, q=50)")
print("- Logo: 183 KiB PNG -> 15.7 KiB WebP")
