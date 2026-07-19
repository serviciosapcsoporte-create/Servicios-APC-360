// Configuración de Cristal para serviciosapc.site
window.CRISTAL_CONFIG = {
  site: "serviciosapc",
  brand: "Servicios APC",
  waUrl: "https://wa.me/573337450634",
  formUrl: "https://api.web3forms.com/submit",
  policyUrl: "https://serviciosapc.site/documentos/Politica_Tratamiento_Datos_serviciosapc.pdf",
  pains: [
    { label: "Cámaras / CCTV", step: "pain_camaras" },
    { label: "Control de personal", step: "pain_flujo" },
    { label: "GPS / flotas", step: "pain_datos" },
    { label: "Automatización IA", step: "pain_ia" },
    { label: "Página web", step: "pain_web" },
    { label: "Otro", step: "pain_otro" },
  ],
  servicesByPain: {
    camaras: "<strong>Cámaras de seguridad CCTV:</strong> instalación, monitoreo remoto y videovigilancia para tu negocio o casa en Bogotá.",
    flujo: "<strong>Control de personal y asistencia:</strong> registro biométrico, gestión de turnos y reportes de horas. Sin hojas de cálculo.",
    datos: "<strong>GPS y rastreo de flotas:</strong> ubica tus vehículos en tiempo real, controla rutas y reduce costos de combustible.",
    ia: "<strong>Automatización con IA:</strong> bots de WhatsApp, respuestas automáticas y flujos que atienden por ti 24/7.",
    web: "<strong>Páginas web y presencia digital:</strong> sitios rápidos y profesionales para que te encuentren en Bogotá.",
    otro: "Cubrimos tu seguridad y tecnología: cámaras, control de personal, GPS, IA y web. Te armo el plan.",
  },
  fallbackService: "Cubrimos tu seguridad y tecnología: cámaras, control de personal, GPS, IA y web. Te armo el plan.",
};
