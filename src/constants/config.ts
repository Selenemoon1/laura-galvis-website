export const CONTACT = {
  whatsapp: {
    number: '573205698922',
    display: '320 569 8922',
    url: 'https://wa.me/573205698922',
  },
  email: 'l.galviscabogada@hotmail.com',
  location: {
    cities: 'Manizales, Caldas / Armenia, Quindío',
    city1: 'Manizales, Caldas',
    city2: 'Armenia, Quindío',
    country: 'Colombia',
  },
  social: {
    instagram: {
      url: 'https://www.instagram.com/abglauragalvis',
      handle: '@abglauragalvis',
    },
    linkedin: {
      url: 'https://co.linkedin.com/in/laura-marcela-galvis-castro-718abb198',
      name: 'Laura Marcela Galvis Castro',
    },
  },
  emailJuridica: 'direccionjuridica@lauragalvisabogada.com',
  emailContacto: 'contacto@lauragalvisabogada.com',
} as const;

export const ASESORIA = {
  calendarUrl: 'https://calendar.app.google/sQnLGx4MLRzJGCrKA',
  precio: 200000,
  precioDisplay: '$200.000 COP',
  duracion: '30 – 45 minutos',
  modalidad: 'Virtual por Google Meet',
} as const;

// Bold Payment — llave de identidad en .env
export const BOLD = {
  identityKey: import.meta.env.VITE_BOLD_IDENTITY_KEY,
  amount: '200000',
  currency: 'COP',
  description: 'Asesoría Legal - Laura Galvis',
  redirectionUrl: 'https://lauragalvisabogada.com/#asesorias',
} as const;

export const SITE = {
  name: 'Laura Marcela Galvis Castro',
  title: 'Laura Marcela Galvis Castro | Abogada Especialista en Derecho Comercial',
  description:
    'Abogada especialista en Derecho Comercial. Fundadora de GRUPO LADA. Soluciones jurídicas con rigor técnico y visión estratégica en Colombia.',
  grupoLada: 'GRUPO LADA',
  grupoLadaUrl: 'https://grupolada.com',
} as const;

// EmailJS Configuration — valores en .env (ver .env.example)
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  notificationTemplateId: import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
} as const;
