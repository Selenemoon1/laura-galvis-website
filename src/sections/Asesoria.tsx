import { useEffect, useRef } from 'react';
import {
  Clock,
  Video,
  Scale,
  ShieldCheck,
  CheckCircle,
  CreditCard,
  CalendarCheck,
  CircleAlert,
  XCircle,
  AlertTriangle,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { ASESORIA, BOLD, CONTACT } from '@/constants/config';

const features = [
  { icon: Clock, title: 'Duración', description: ASESORIA.duracion },
  { icon: Video, title: 'Modalidad', description: ASESORIA.modalidad },
  { icon: Scale, title: 'Áreas', description: 'Comercial, societario, insolvencia, reorganización y liquidaciones' },
  { icon: ShieldCheck, title: 'Confidencial', description: 'Tu información está protegida' },
];

const includes = [
  'Análisis inicial de tu situación jurídica',
  'Explicación clara de tus derechos y opciones legales',
  'Recomendación profesional sobre los pasos a seguir',
  'Resolución de dudas sobre tu caso particular',
];

const cancellationPolicies = [
  {
    icon: CheckCircle,
    title: 'Cancelación gratuita',
    subtitle: 'Con más de 24 horas de anticipación',
    description:
      'Puedes cancelar o reprogramar tu cita sin costo alguno siempre que lo hagas con al menos 24 horas de antelación.',
    badge: 'Sin costo',
    badgeColor: 'bg-green-600',
  },
  {
    icon: AlertTriangle,
    title: 'Reprogramación por única vez',
    subtitle: 'Entre 24 y 2 horas antes',
    description:
      'Podrás reprogramar por única vez sin cargo adicional, sujeto a disponibilidad. No se realizan reembolsos si decides no reprogramar.',
    badge: 'Sujeta a disponibilidad',
    badgeColor: 'bg-yellow-600',
  },
  {
    icon: XCircle,
    title: 'Sin reembolso',
    subtitle: 'Menos de 2 horas o no asistencia',
    description:
      'Las cancelaciones con menos de 2 horas o la inasistencia sin previo aviso no dan derecho a reembolso ni a reprogramación.',
    badge: 'No reembolsable',
    badgeColor: 'bg-red-600',
  },
];

const cancelSteps = [
  'Abre el correo de confirmación que recibiste al agendar tu cita',
  'Haz clic en el enlace de "Gestionar reserva" o "Modificar cita"',
  'Selecciona cancelar o elige una nueva fecha y hora disponible',
];

const BoldPaymentButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !BOLD.identityKey) return;

    const existing = containerRef.current.querySelector('script');
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.bold.co/library/boldPaymentButton.js';
    script.setAttribute('data-bold-button', 'dark-L');
    script.setAttribute('data-api-key', BOLD.identityKey);
    script.setAttribute('data-amount', BOLD.amount);
    script.setAttribute('data-currency', BOLD.currency);
    script.setAttribute('data-description', BOLD.description);
    script.setAttribute('data-order-id', `asesoria-${Date.now()}`);
    script.setAttribute('data-redirection-url', BOLD.redirectionUrl);
    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} className="flex justify-center" />;
};

const Asesoria = () => {
  return (
    <section id="asesorias" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* ============================================ */}
        {/* BLOQUE 1: Información del Servicio           */}
        {/* ============================================ */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Agenda de Asesorías
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Asesoría Legal <span className="font-light text-gray-500">Personalizada</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed text-lg">
            Reserva tu cita para recibir orientación jurídica clara, profesional y
            confidencial sobre tu situación legal. Cada asesoría está diseñada para
            brindarte un análisis detallado de tu caso y las posibles rutas de acción.
          </p>
        </AnimatedSection>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation="fade-up" delay={index * 100}>
              <div className="bg-gray-50 p-6 text-center group hover:bg-black transition-colors duration-300">
                <div className="w-14 h-14 bg-black flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Qué incluye */}
        <AnimatedSection animation="fade-up" className="max-w-2xl mx-auto mb-20">
          <h3 className="text-xl font-bold text-black text-center mb-8">
            ¿Qué incluye tu asesoría?
          </h3>
          <div className="space-y-4">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-gold">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* ============================================ */}
        {/* BLOQUE 2: Precio y Disclaimer                */}
        {/* ============================================ */}
        <AnimatedSection animation="scale-in" className="max-w-2xl mx-auto mb-20">
          <div className="bg-black p-8 lg:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <CreditCard className="w-10 h-10 text-gold mx-auto mb-4" />
              <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
                Asesoría sencilla
              </p>
              <p className="text-white text-5xl font-bold mb-2">{ASESORIA.precioDisplay}</p>
              <p className="text-gray-400 text-sm mb-6">Pesos colombianos</p>
              <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Para asuntos especializados se procederá a cotizar el valor según la complejidad del caso.
              </p>
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="flex items-start gap-3">
                  <CircleAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400 text-xs leading-relaxed text-left">
                    <strong className="text-gray-300">Nota:</strong> La asesoría sencilla no incluye
                    elaboración de documentos ni análisis a profundidad de documentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ============================================ */}
        {/* BLOQUE 3: Flujo — Agenda y Paga              */}
        {/* ============================================ */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            ¿Cómo agendar?
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Tres pasos <span className="font-light text-gray-500">sencillos</span>
          </h3>
          <div className="w-20 h-1 bg-gold mx-auto" />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto mb-20 space-y-12">
          {/* Paso 1: Agendar */}
          <AnimatedSection animation="slide-left">
            <div className="bg-gray-50 p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold text-black flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Paso uno</p>
                  <h4 className="text-xl font-bold text-black">Agenda tu cita</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Selecciona el día y la hora que mejor te convenga. Recibirás un correo de confirmación
                con el enlace de Google Meet.
              </p>
              <a
                href={ASESORIA.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-bold hover:bg-gold hover:text-black transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />
                Agendar cita en Google Calendar
              </a>
            </div>
          </AnimatedSection>

          {/* Paso 2: Pagar */}
          <AnimatedSection animation="slide-right">
            <div className="bg-gray-50 p-6 lg:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gold text-black flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Paso dos</p>
                  <h4 className="text-xl font-bold text-black">Realiza el pago</h4>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Paga de forma segura con tarjeta de crédito, débito, PSE, Nequi, Daviplata o
                Botón Bancolombia a través de Bold.
              </p>
              <BoldPaymentButton />
            </div>
          </AnimatedSection>

          {/* Paso 3: Confirmación */}
          <AnimatedSection animation="slide-left">
            <div className="bg-black p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 bg-gold text-black flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-medium">Paso tres</p>
                  <h4 className="text-xl font-bold text-white">Confirmación</h4>
                </div>
              </div>
              <p className="text-gray-300 text-sm relative z-10">
                Una vez confirmado tu pago, tu cita queda agendada. Recibirás un correo con el
                enlace de Google Meet para conectarte el día y hora seleccionados. Te recomendamos
                tener a la mano cualquier documento relacionado con tu consulta.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* ============================================ */}
        {/* BLOQUE 4: Política de Cancelación             */}
        {/* ============================================ */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Importante
          </p>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Política de <span className="font-light text-gray-500">Cancelación</span>
          </h3>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed">
            Tu tiempo y el mío son valiosos. Por favor, lee con atención las condiciones
            de cancelación y reprogramación antes de realizar tu reserva.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          {cancellationPolicies.map((policy, index) => (
            <AnimatedSection key={policy.title} animation="fade-up" delay={index * 100}>
              <div className="bg-gray-50 p-6 border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                    <policy.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gold text-xs tracking-[0.15em] uppercase font-medium mb-1">
                      {policy.subtitle}
                    </p>
                    <h4 className="text-lg font-bold text-black mb-2">{policy.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{policy.description}</p>
                    <span className={`inline-block ${policy.badgeColor} text-white text-xs font-bold px-3 py-1 uppercase tracking-wider`}>
                      {policy.badge}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Cómo cancelar */}
        <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto mb-8">
          <h4 className="text-lg font-bold text-black text-center mb-6">
            ¿Cómo cancelar o reprogramar?
          </h4>
          <div className="space-y-3">
            {cancelSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50">
                <div className="w-8 h-8 bg-gold text-black flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Nota fuerza mayor */}
        <AnimatedSection animation="fade-in" className="max-w-3xl mx-auto">
          <div className="border border-gold/30 p-6 text-center">
            <p className="text-gray-500 text-sm italic leading-relaxed">
              Si presentas una situación de fuerza mayor, comunícate directamente a través de
              WhatsApp al{' '}
              <a href={CONTACT.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                {CONTACT.whatsapp.display}
              </a>{' '}
              o al correo{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-gold hover:underline">
                {CONTACT.email}
              </a>{' '}
              para evaluar tu caso de forma individual.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Asesoria;
