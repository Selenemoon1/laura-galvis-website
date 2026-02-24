import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronDown, Phone, CalendarCheck, ArrowRight } from 'lucide-react';
import { getServiceBySlug, services } from '@/data/services';
import { CONTACT } from '@/constants/config';
import type { ServiceData } from '@/data/services';
import AnimatedSection from '@/components/AnimatedSection';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-black font-semibold pr-4 group-hover:text-gold transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = service.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', service.seoDescription);
    }
    return () => {
      document.title = 'Laura Marcela Galvis Castro | Abogada Derecho Comercial, Societario e Insolvencia en Colombia';
    };
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const relatedServices = service.relatedSlugs
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean) as ServiceData[];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-black pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-gold/20 rotate-45" />
        <div className="absolute bottom-10 right-40 w-20 h-20 border border-gold/10 rotate-12" />
        <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-gray-500 hover:text-gold transition-colors">
              Inicio
            </Link>
            <span className="text-gray-600">/</span>
            <Link
              to="/#servicios"
              className="text-gray-500 hover:text-gold transition-colors"
            >
              Servicios
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gold">{service.title}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="w-16 h-16 bg-gold flex items-center justify-center mb-6">
              <service.icon className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 font-light">{service.heroSubtitle}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <Link
                to="/#servicios"
                className="inline-flex items-center gap-2 text-gold text-sm font-medium mb-8 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a servicios
              </Link>
              <div className="space-y-6">
                {service.fullDescription.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <AnimatedSection animation="fade-up">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Servicios específicos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
              ¿Qué <span className="font-light text-gray-500">ofrecemos?</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-4">
            {service.whatWeOffer.map((item, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <div className="flex items-start gap-4 p-4 bg-white border-l-4 border-gold">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up" className="text-center mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Preguntas frecuentes
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Resolvemos sus <span className="font-light text-gray-500">dudas</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="border-t border-gray-200">
                {service.commonQuestions.map((faq, index) => (
                  <FAQ key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
          <AnimatedSection animation="scale-in" className="max-w-2xl mx-auto text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              ¿Necesita asesoría?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Estoy aquí para ayudarle
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Agende una asesoría virtual para recibir orientación jurídica profesional
              sobre su caso en {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 font-bold hover:bg-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                to="/#asesorias"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold px-8 py-4 font-bold hover:bg-gold hover:text-black transition-colors"
              >
                <CalendarCheck className="w-5 h-5" />
                Agendar asesoría
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <AnimatedSection animation="fade-up" className="mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Servicios relacionados
              </p>
              <h2 className="text-3xl font-bold text-black">
                También le puede <span className="font-light text-gray-500">interesar</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedServices.map((related, index) => (
                <AnimatedSection key={related.slug} animation="fade-up" delay={index * 100}>
                  <Link
                    to={`/servicios/${related.slug}`}
                    className="group block bg-gray-50 p-8 border-l-4 border-transparent hover:border-gold transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 bg-black flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                      <related.icon className="w-7 h-7 text-gold group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gold transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{related.shortDescription}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                      Ver detalles
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
