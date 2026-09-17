import re

p = r'C:\Users\pc\Documents\serviciosapc-site\public\Auditoria-Minutos-Serviciosapc.html'
with open(p, encoding='utf-8') as f:
    t = f.read()

t = t.replace("@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');", '')
t = t.replace('*{font-family:Inter,system-ui,sans-serif}', '*{font-family:system-ui,sans-serif}')
t = t.replace('font-family:Inter,system-ui,sans-serif', 'font-family:system-ui,sans-serif')
t = t.replace('font-family:Inter,ui-sans-serif,system-ui,', 'font-family:ui-sans-serif,system-ui,')
t = t.replace('font-[Inter,system-ui,sans-serif]', 'font-[system-ui,sans-serif]')
t = t.replace(r'.font-\[Inter\2c system-ui\2c sans-serif\]{font-family:Inter,system-ui,sans-serif}', r'.font-\[system-ui\2c sans-serif\]{font-family:system-ui,sans-serif}')

with open(p, 'w', encoding='utf-8') as f:
    f.write(t)

print('public/Auditoria fonts.googleapis:', 'fonts.googleapis' in t)
print('public/Auditoria font-family:Inter:', 'font-family:Inter' in t)
print('Inter restante (esperado 21 react internals):', len(re.findall(r'Inter', t)))