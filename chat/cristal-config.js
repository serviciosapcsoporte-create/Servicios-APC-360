// Configuración de Cristal para serviciosapc.site
window.CRISTAL_CONFIG = {
  site: "serviciosapc",
  brand: "Servicios APC",
  waUrl: "https://wa.me/573337450634",
  formUrl: "https://api.web3forms.com/submit",
  policyUrl: "https://serviciosapc.site/documentos/Politica_Tratamiento_Datos_serviciosapc.pdf",
  pains: [
    { label: "Cámaras Hikvision + IA", step: "pain_camaras" },
    { label: "Control personal / aforo", step: "pain_flujo" },
    { label: "GPS / flotas + IA", step: "pain_datos" },
    { label: "Automatización n8n + IA", step: "pain_ia" },
    { label: "Página web + SEO Local", step: "pain_web" },
    { label: "Otro", step: "pain_otro" },
  ],
  servicesByPain: {
    camaras: "<strong>Analítica YOLO para Hikvision/Dahua:</strong> Convierte tus cámaras actuales en auditores IA (conteo, intrusión, aforo, arqueo, PPE). RTSP/ONVIF = compatible. Instalación Hikvision ColorVu/AcuSense IA-ready en Bogotá. <a href='https://apcvisionai.site' target='_blank'>Ver APC Visión AI ↗</a>",
    flujo: "<strong>Control de personal y aforo IA:</strong> Conteo personas, mapas de calor, detección caídas, PPE (casco/chaleco), arqueo de caja. Alertas WhatsApp/Telegram al supervisor. <a href='https://apcvisionai.site' target='_blank'>Ver APC Visión AI ↗</a>",
    datos: "<strong>GPS flotas + IA perimetral:</strong> Rastreo vehículos + geocercas + analítica perimetral Hikvision en patios/bodegas. Alertas intrusión → WhatsApp gerente. <a href='https://apcautomatizacion.site' target='_blank'>Ver APC Automatización ↗</a>",
    ia: "<strong>Automatización n8n + IA cruzada:</strong> CCTV Hikvision → Alerta IA → n8n → WhatsApp gerente + Ticket CRM + Dashboard. Bots WhatsApp 24/7 con identidad propia. <a href='https://apcautomatizacion.site' target='_blank'>Ver APC Automatización ↗</a>",
    web: "<strong>Web + SEO Local Bogotá (DogWeb):</strong> Sitio rápido, Google Maps top 3, formularios → WhatsApp Bot → Cita → Venta. SEO técnico + Core Web Vitals. <a href='https://dogweb.lat' target='_blank'>Ver DogWeb ↗</a>",
    otro: "Cubrimos tu seguridad y tecnología: Hikvision + IA (APC Visión AI), CCTV IA-ready, Automatización n8n (APC Automatización), Web/SEO Local (DogWeb), Infraestructura (APC Core). Te armo el plan exacto.",
  },
  fallbackService: "Hikvision + IA, CCTV, Automatización n8n, Web/SEO Local, Infraestructura. Te armo el plan.",
};