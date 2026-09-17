import os, re

base = "C:/Users/pc/Documents/serviciosapc-site/dist"

# Fix the CSS bundle: replace Google Font references with system fonts
css_path = os.path.join(base, "assets/index-CLeSbt-4.css")
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# Replace Google Font font-family references with system fonts
css = css.replace('"Archivo", system-ui', 'system-ui')
css = css.replace('"DM Mono", monospace', 'monospace')
css = css.replace('"Playfair Display", Georgia', 'Georgia')
css = css.replace('"Archivo"', 'system-ui')
css = css.replace('"DM Mono"', 'monospace')
css = css.replace('"Playfair Display"', 'Georgia')

# Remove any Google Fonts @import that might still exist
css = re.sub(r'@import[^;]*fonts\.googleapis[^;]*;', '', css)
css = re.sub(r'@import[^;]*fonts\.gstatic[^;]*;', '', css)

# Remove any url() references to fonts.googleapis.com or fonts.gstatic.com in CSS
css = re.sub(r'url\([^)]*fonts\.googleapis[^)]*\)', '', css)
css = re.sub(r'url\([^)]*fonts\.gstatic[^)]*\)', '', css)

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)
print("Fixed CSS: removed Google Font references")

# Also fix src/styles/theme.css for future builds
src_theme = "C:/Users/pc/Documents/serviciosapc-site/src/styles/theme.css"
with open(src_theme, "r", encoding="utf-8") as f:
    theme = f.read()

# Already fixed via edit tool, but verify
if '"Archivo"' in theme:
    theme = theme.replace('"Archivo"', 'system-ui')
if '"Playfair Display"' in theme:
    theme = theme.replace('"Playfair Display"', 'Georgia')

with open(src_theme, "w", encoding="utf-8") as f:
    f.write(theme)
print("Verified src/theme.css")

# Update dist/index.html to add fonts.gstatic.com preconnect
html_path = os.path.join(base, "index.html")
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Add fonts.gstatic.com preconnect if not already there
if "fonts.gstatic.com" not in html:
    html = html.replace(
        '<link rel="preconnect" href="https://wa.me" crossorigin>',
        '<link rel="preconnect" href="https://wa.me" crossorigin>\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    )
    print("Added fonts.gstatic.com preconnect")

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

# Update public/index.html if it exists
public_index = os.path.join(base, "public_index.html")
if not os.path.exists(public_index):
    pass

print("\nDone!")
