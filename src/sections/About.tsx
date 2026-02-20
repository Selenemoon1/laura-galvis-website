import { Award, BookOpen, Scale, Users, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  const credentials = [
    {
      icon: Scale,
      title: 'Derecho Comercial',
      description: 'Especialización avanzada en normativa comercial y societaria',
    },
    {
      icon: BookOpen,
      title: 'Insolvencia Empresarial',
      description: 'Reorganización patrimonial bajo Ley 1116 y Ley 2445 de 2025',
    },
    {
      icon: Award,
      title: 'Derecho Contractual',
      description: 'Contratos civiles, comerciales y fiduciarios complejos',
    },
    {
      icon: Users,
      title: 'Litigios Complejos',
      description: 'Representación judicial en procesos civiles y comerciales',
    },
  ];

  return (
    <section id="sobre-mi" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Image with dramatic framing */}
          <AnimatedSection animation="slide-left" className="relative">
            <div className="relative">
              {/* Gold frame accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-gold" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-gold" />
              
              {/* Main image container */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src="/laura-galvis.jpg"
                  alt="Laura Marcela Galvis Castro"
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Quote card overlay */}
              <div className="absolute -bottom-8 -right-4 lg:right-8 bg-black p-6 max-w-xs shadow-2xl">
                <Quote className="w-8 h-8 text-gold mb-3" />
                <p className="text-white text-sm leading-relaxed italic">
                  "La excelencia técnica se combina con la comunicación clara"
                </p>
                <div className="w-12 h-0.5 bg-gold mt-4" />
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Content */}
          <div className="space-y-8 lg:pt-8">
            {/* Section Header */}
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Sobre mí
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-4">
                Compromiso con la
                <span className="block font-light text-gray-600">excelencia jurídica</span>
              </h2>
              <div className="w-20 h-1 bg-gold" />
            </AnimatedSection>

            {/* Bio Text */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Soy abogada titulada con especialización en{' '}
                  <strong className="text-black">Derecho Comercial</strong> y formación 
                  complementaria en insolvencia empresarial, reorganización patrimonial, 
                  derecho contractual, societario y litigios complejos.
                </p>
                <p>
                  A lo largo de mi trayectoria he representado personas naturales, sociedades 
                  comerciales, grupos empresariales e instituciones educativas, siempre con un 
                  enfoque estratégico que privilegia la{' '}
                  <strong className="text-black">protección patrimonial</strong> y la prevención 
                  del conflicto.
                </p>
                <p className="border-l-4 border-gold pl-6 py-2 bg-gray-50">
                  Creo en un ejercicio profesional donde la excelencia técnica se combina con 
                  la comunicación clara. Explico los procesos en un lenguaje que mis clientes 
                  pueden comprender, sin sacrificar la solidez jurídica que cada caso exige.
                </p>
                <p className="text-black font-medium">
                  Acompaño casos y audiencias en todo el país, tanto de manera presencial como virtual.
                </p>
              </div>
            </AnimatedSection>

            {/* Credentials Grid */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="grid grid-cols-2 gap-4 pt-6">
                {credentials.map((item, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-gray-50 border-l-4 border-transparent hover:border-gold hover:bg-black transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
