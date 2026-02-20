import { ArrowRight, Briefcase, Cpu, Scale } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const GrupoLada = () => {
  return (
    <section id="grupo-lada" className="relative py-20 lg:py-28 bg-black overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              {/* Left side - Logo/Brand */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="text-6xl lg:text-7xl font-bold text-white tracking-tight">
                    L<span className="text-gold">|</span>G
                  </span>
                </div>
                <div className="w-20 h-1 bg-gold mx-auto lg:mx-0 mb-4" />
                <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
                  Grupo LADA
                </p>
              </div>

              {/* Divider */}
              <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

              {/* Right side - Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Tecnología <span className="text-gold">&</span> Derecho
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                  Hago parte de <strong className="text-white">GRUPO LADA</strong>, una sociedad 
                  multisectorial que fusiona el mundo jurídico con la tecnología. Un grupo versátil 
                  dedicado a ofrecer soluciones integrales que combinan el rigor legal con la 
                  innovación tecnológica.
                </p>

                {/* Pillars */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10">
                    <Scale className="w-4 h-4 text-gold" />
                    <span className="text-white text-sm">Servicios Jurídicos</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10">
                    <Cpu className="w-4 h-4 text-gold" />
                    <span className="text-white text-sm">Tecnología</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10">
                    <Briefcase className="w-4 h-4 text-gold" />
                    <span className="text-white text-sm">Consultoría</span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="https://grupolada.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-medium hover:text-white transition-colors group"
                >
                  Conozca más sobre GRUPO LADA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default GrupoLada;
