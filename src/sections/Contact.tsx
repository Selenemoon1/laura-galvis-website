import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Clock, MessageSquare, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import AnimatedSection from '@/components/AnimatedSection';
import { CONTACT, EMAILJS } from '@/constants/config';

// Inicializar EmailJS
emailjs.init(EMAILJS.publicKey);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      email: formData.email,
      phone: formData.phone || 'No proporcionado',
      subject: formData.subject,
      message: formData.message,
      to_email: CONTACT.email,
      reply_to: formData.email,
    };

    try {
      // Enviar notificacion a Laura
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.notificationTemplateId,
        templateParams,
      );

      // Enviar auto-respuesta al cliente
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.autoReplyTemplateId,
        templateParams,
      );

      setIsSent(true);
      toast.success('Mensaje enviado correctamente', {
        description: 'Recibirá una confirmación en su correo electrónico.',
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 8000);
    } catch {
      toast.error('Error al enviar', {
        description: 'Por favor intente nuevamente o contácteme por WhatsApp.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: CONTACT.whatsapp.display,
      href: CONTACT.whatsapp.url,
      action: 'Escríbame ahora',
    },
    {
      icon: Mail,
      title: 'Correo electrónico',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      action: 'Envíeme un correo',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: CONTACT.location.cities,
      subtitle: CONTACT.location.country,
      action: null,
    },
    {
      icon: Clock,
      title: 'Atención',
      value: 'Presencial y virtual',
      subtitle: 'En todo el país',
      action: null,
    },
  ];

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Estemos en <span className="font-light text-gray-500">contacto</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed text-lg">
            Estoy disponible para atender sus consultas y brindarle la asesoría
            jurídica que necesita. Contácteme por cualquiera de estos medios.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <AnimatedSection animation="slide-left" className="space-y-6">
            <h3 className="text-xl font-bold text-black mb-6">
              Información de contacto
            </h3>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-5 bg-white border-l-4 border-transparent hover:border-gold transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                  <p className="text-black font-semibold">{item.value}</p>
                  {item.subtitle && (
                    <p className="text-gray-500 text-sm">{item.subtitle}</p>
                  )}
                  {item.action && item.href && (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-gold text-sm font-medium mt-2 hover:underline"
                    >
                      {item.action}
                      <Send className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <div className="p-8 bg-black mt-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              <MessageSquare className="w-10 h-10 text-gold mb-4" />
              <p className="text-white font-bold text-lg mb-2">¿Necesita una consulta urgente?</p>
              <p className="text-gray-400 text-sm mb-6">
                Escríbame directamente por WhatsApp para una respuesta más rápida.
              </p>
              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 font-bold hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="bg-white p-8 lg:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-black mb-2">
                Envíeme un mensaje
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Complete el formulario y recibiré su mensaje directamente en mi correo.
              </p>

              {isSent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-gold/10 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-black mb-2">Mensaje enviado</h4>
                  <p className="text-gray-500 max-w-sm">
                    Gracias por contactarme. Revise su correo electrónico, le envié una confirmación.
                    Me pondré en contacto con usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Nombre completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Su nombre"
                        required
                        aria-required="true"
                        className="border-gray-200 focus:border-gold focus:ring-gold h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Correo electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="su@email.com"
                        required
                        aria-required="true"
                        className="border-gray-200 focus:border-gold focus:ring-gold h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Teléfono
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Su número de contacto"
                        className="border-gray-200 focus:border-gold focus:ring-gold h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Asunto *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿Sobre qué necesita asesoría?"
                        required
                        aria-required="true"
                        className="border-gray-200 focus:border-gold focus:ring-gold h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describa brevemente su caso o consulta..."
                      required
                      aria-required="true"
                      rows={5}
                      className="border-gray-200 focus:border-gold focus:ring-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:bg-gold hover:text-black transition-all duration-300 py-6 h-auto text-base font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar mensaje
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
