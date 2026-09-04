import os, re

base = "C:/Users/pc/Documents/serviciosapc-site/dist"

# 1. Fix CSS: remove Google Fonts @import, add system font stack
css_path = os.path.join(base, "assets", "index-CLeSbt-4.css")
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Remove Google Fonts @import
css = re.sub(r'@import"https://fonts\.googleapis\.com/css2\?family=[^"]+";', '', css)

# Add system font stack at the beginning
font_stack = '@font-face{font-family:system-ui;font-display:swap;src:local(system-ui);}@font-face{font-family:system-ui;font-display:swap;src:local(Segoe UI);font-weight:500;}@font-face{font-family:serif;font-display:swap;src:local(Georgia);font-weight:700;}'
css = font_stack + css

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)
print("CSS fixed: removed Google Fonts, added system fonts")

# 2. Fix HTML: make CSS async load
html_path = os.path.join(base, "index.html")
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Replace stylesheet link with async pattern
old_link = '<link rel="stylesheet" href="/assets/index-CLeSbt-4.css">'
new_link = '<link rel="preload" href="/assets/index-CLeSbt-4.css" as="style" onload="this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="/assets/index-CLeSbt-4.css"></noscript>'

if old_link in html:
    html = html.replace(old_link, new_link)
    print("HTML: CSS async pattern applied")
else:
    print("HTML: CSS link already modified or not found")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

# 3. Fix source fonts.css for future builds
src_fonts = "C:/Users/pc/Documents/serviciosapc-site/src/styles/fonts.css"
with open(src_fonts, "w", encoding="utf-8") as f:
    f.write("/* Fonts loaded via system-ui fallback - no external Google Fonts */\n")
print("src/fonts.css: removed Google Fonts import")

print("\nDone! All optimizations applied.")
