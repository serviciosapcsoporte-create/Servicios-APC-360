# Skills para Servicios APC

## Información General
- **Nombre del Proyecto:** Servicios APC
- **URL:** https://serviciosapc.site
- **Propósito:** Automatización de WhatsApp, chatbots con IA y flujos n8n para clínicas, consultorios, pymes y flotas en Bogotá.
- **Tecnologías:** React 19 + Vite, Tailwind CSS v4, Lucide icons, reCAPTCHA v2

## Contexto del Proyecto
Landing page principal del ecosistema APC. Muestra servicios de automatización de procesos usando WhatsApp + n8n + Groq LLaMA. incluye chat flotante scriptado (Cristal), formulario de contacto que envía a n8n webhook, y planes de suscripción con precios. Cliente final: negocios bogotanos que quieren automatizar comunicación con sus clientes.

## Funcionalidades Principales
1. **Chat Cristal** — Bot flotante scriptado con árbol de decisión: cotizar/soporte/agendar → formulario o WhatsApp directo. Afirmaciones libres redirigen a form o WA. Oculta `.social-float` al abrir panel.
2. **Formulario de contacto** — Nombre, email, teléfono, mensaje. Envía POST a webhook n8n (`5680/n8n`). Protegido con reCAPTCHA v2 (site key `6LfD5gwrAAAAAPMLqNS1pL9sWF10t2kQFlW8AE3C`).
3. **Planes de suscripción** — Básico, Profesional, Empresarial con precios y características.
4. **WhatsApp flotante** — Eliminado, reemplazado por Cristal.

## Información que debe conocer la IA
- **Bases de datos:** No tiene. Los formularios se envían a n8n webhook que gestiona los datos.
- **APIs usadas:** n8n webhook interno, reCAPTCHA v2, WhatsApp Business API (a través de n8n), Facebook Graph API (pixel).
- **Usuarios objetivo:** Clínicas, consultorios, pymes (5–80 empleados), flotas y servicios de atención en Bogotá.
- **Problemas comunes:** El botón "Cotizar" del plan Básico debe abrir WhatsApp directo, no el formulario. El placeholder de teléfono es `+57 333 745 0634`.
- **Contacto unificado:** Email `serviciosapcsoporte@gmail.com`, WA `wa.me/573337450634`, dirección `Cra. 52c #39b-22, Bogotá`.

## Instrucciones para el Skill
La IA debe:
- Usar `+57 333 745 0634` como teléfono de contacto estándar.
- No eliminar ni modificar el chat Cristal sin autorización.
- Los datos de contacto son los mismos en los 5 sitios del ecosistema (serviciosapc, dogweb, apcvisionai, apccore, apcautomatizacion).
- Para cambios en Cristal, modificar `/public/chat/cristal.js`.

## Documentación de referencia
- `/public/chat/cristal.js` — Motor del chat flotante
- `src/app/App.tsx` — Componente principal con planes y contacto
- `src/app/components/contact/ContactForm.tsx` — Formulario de contacto
