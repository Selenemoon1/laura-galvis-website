import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import AnimatedSection from '@/components/AnimatedSection';

const Services = () => {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 bg-gray-50 overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Áreas de Práctica
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Servicios <span className="font-light text-gray-500">Jurídicos</span>
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed text-lg">
            Ofrezco soluciones jurídicas integrales adaptadas a las necesidades específicas
            de cada cliente, con un enfoque estratégico y resultados concretos.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.slug}
              animation="fade-up"
              delay={index * 100}
              className="group"
            >
              <Link
                to={`/servicios/${service.slug}`}
                className="block h-full bg-white p-8 border-l-4 border-transparent hover:border-gold transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Ver más detalles
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={600} className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-black">
            <div className="text-left">
              <p className="text-white font-semibold text-lg">¿Necesita asesoría especializada?</p>
              <p className="text-gray-400 text-sm">Estoy aquí para ayudarle con su caso</p>
            </div>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 font-semibold hover:bg-white transition-colors whitespace-nowrap"
            >
              Solicitar consulta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
