import { Building, GraduationCap, User, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const Clients = () => {
  const clientTypes = [
    {
      icon: Building,
      title: 'Empresas',
      description: 'Sociedades comerciales, grupos empresariales y startups que requieren asesoría jurídica integral para su operación y crecimiento.',
      examples: ['Constitución de sociedades', 'Contratos comerciales', 'Gobierno corporativo', 'Fusiones y adquisiciones'],
    },
    {
      icon: User,
      title: 'Personas Naturales',
      description: 'Individuos que necesitan protección patrimonial, defensa en procesos judiciales o asesoría en materia contractual.',
      examples: ['Defensa de deudores', 'Procesos civiles', 'Contratos personales', 'Reorganización patrimonial'],
    },
    {
      icon: GraduationCap,
      title: 'Instituciones Educativas',
      description: 'Entidades del sector educativo que requieren asesoría especializada en aspectos legales y contractuales.',
      examples: ['Contratos educativos', 'Aspectos societarios', 'Protección de datos', 'Propiedad intelectual'],
    },
  ];

  const testimonials = [
    {
      quote: 'Excelente profesional. Su rigor técnico y capacidad de análisis fueron fundamentales para resolver nuestro caso corporativo de manera exitosa.',
      author: 'Director Ejecutivo',
      company: 'Empresa del sector tecnológico',
    },
    {
      quote: 'La doctora Galvis combina conocimiento jurídico sólido con una comunicación clara que facilita entender procesos complejos. Altamente recomendada.',
      author: 'Gerente General',
      company: 'Grupo empresarial',
    },
  ];

  return (
    <section id="clientes" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            ¿A quiénes <span className="font-light text-gray-500">atiendo</span>?
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 leading-relaxed text-lg">
            Mi práctica jurídica atiende a una diversidad de clientes, 
            adaptando soluciones específicas a cada necesidad.
          </p>
        </AnimatedSection>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {clientTypes.map((type, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="group h-full p-8 bg-gray-50 border-l-4 border-transparent hover:border-gold hover:bg-black transition-all duration-500">
                {/* Icon */}
                <div className="w-16 h-16 bg-black flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                  <type.icon className="w-8 h-8 text-gold group-hover:text-black transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-white transition-colors duration-300">
                  {type.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {type.description}
                </p>

                {/* Examples */}
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="bg-black p-10 lg:p-16 relative overflow-hidden">
            {/* Decorative quote marks */}
            <div className="absolute top-8 left-8 text-gold/10 text-9xl font-serif leading-none">"</div>
            <div className="absolute bottom-8 right-8 text-gold/10 text-9xl font-serif leading-none rotate-180">"</div>

            <div className="text-center mb-12 relative z-10">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                Testimonios
              </p>
              <h3 className="text-2xl font-bold text-white mt-2">
                Lo que dicen mis clientes
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative">
                  <Quote className="w-10 h-10 text-gold mb-4" />
                  <p className="text-white text-lg font-light italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-l-2 border-gold pl-4">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Clients;
