import { CheckCircle, MessageCircle, Target, TrendingUp } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const WhyChooseMe = () => {
  const differentiators = [
    {
      icon: Target,
      title: 'Rigor Técnico',
      description: 'Análisis exhaustivo de cada caso con fundamentación jurídica sólida y actualizada. Cada estrategia está respaldada por años de experiencia.',
    },
    {
      icon: MessageCircle,
      title: 'Trato Humano',
      description: 'Atención personalizada y cercana, entendiendo las necesidades reales de cada cliente. Su caso es mi prioridad.',
    },
    {
      icon: CheckCircle,
      title: 'Comunicación Clara',
      description: 'Explico los procesos en lenguaje comprensible, sin tecnicismos innecesarios. Usted entenderá cada paso del camino.',
    },
    {
      icon: TrendingUp,
      title: 'Experiencia Comprobada',
      description: 'Trayectoria sólida representando empresas, personas e instituciones educativas. Resultados que hablan por sí mismos.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #C9A84C 1px, transparent 1px),
                           linear-gradient(to bottom, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/3 right-20 w-24 h-24 border border-gold/20 rotate-45" />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <AnimatedSection animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Diferenciadores
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué <span className="text-gold">elegirme</span>?
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-400 leading-relaxed text-lg">
            Mi práctica jurídica se distingue por combinar la excelencia técnica 
            con un enfoque humano y estratégico.
          </p>
        </AnimatedSection>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <div className="group h-full p-8 border border-white/10 hover:border-gold/50 bg-white/5 hover:bg-white/10 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-500">
                    <item.icon className="w-7 h-7 text-gold group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote */}
        <AnimatedSection animation="scale-in" delay={400}>
          <div className="relative max-w-4xl mx-auto text-center py-12 px-8 border-y border-gold/30">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-6">
              <div className="w-8 h-8 bg-gold/20 flex items-center justify-center">
                <span className="text-gold text-2xl font-serif">"</span>
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed">
              Derecho comercial con enfoque humano y resultados concretos.
            </blockquote>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-8" />
            <p className="text-gold text-sm uppercase tracking-wider mt-4">
              Laura Marcela Galvis Castro
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyChooseMe;
