import { Phone, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CONTACT } from '@/constants/config';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(CONTACT.whatsapp.url, '_blank');
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Gold accent line - thicker and more prominent */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-2 bg-gold z-20 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Background Image with overlay - BLACK AND WHITE */}
      <div className="absolute inset-0">
        <div
          className={`absolute right-0 top-0 bottom-0 w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <img
            src="/laura-galvis.jpg"
            alt="Laura Marcela Galvis Castro - Abogada Especialista"
            className="w-full h-full object-cover object-top grayscale"
          />
          {/* Gradient overlays for dramatic effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        {/* Dark background for left side */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-2/3 bg-black" />
      </div>

      {/* Decorative gold elements */}
      <div
        className={`absolute top-20 right-20 w-32 h-32 border border-gold/20 rotate-45 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />
      <div
        className={`absolute bottom-40 right-40 w-20 h-20 border border-gold/30 rotate-12 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-36 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl">
          {/* Logo Mark - Solo L|G */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
              L<span className="text-gold">|</span>G
            </span>
          </div>

          {/* Main Title - Much larger and more impactful */}
          <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-10">
            <p
              className={`text-gold text-xs lg:text-sm tracking-[0.4em] uppercase font-medium transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Abogada Especialista
            </p>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Laura
              <br />
              <span className="font-light">Marcela</span>
              <br />
              <span className="text-gold">Galvis</span>
            </h1>

            <div
              className={`flex items-center gap-4 transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="w-24 h-1 bg-gold" />
              <p className="text-xl md:text-2xl text-white/90 font-light">
                Especialista en <span className="font-semibold text-white">Derecho Comercial</span>
              </p>
            </div>
          </div>

          {/* Tagline - More prominent */}
          <p
            className={`text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mb-10 border-l-2 border-gold pl-6 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            Soluciones jurídicas con <span className="text-white font-medium">rigor técnico</span> y{' '}
            <span className="text-white font-medium">visión estratégica</span>. Protejo su patrimonio
            con la misma dedicación que protegería el mío.
          </p>

          {/* CTA Buttons - More prominent */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center justify-center gap-3 bg-gold hover:bg-white text-black px-8 py-5 font-bold text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
            >
              <Phone size={22} className="group-hover:scale-110 transition-transform" />
              Consulta por WhatsApp
            </button>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-5 font-medium hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
            >
              Conozca mis servicios
            </a>
          </div>

          {/* Trust indicators - More visual */}
          <div
            className={`flex flex-wrap items-center gap-8 transition-all duration-700 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { label: 'Atención nacional', icon: '●' },
              { label: 'Presencial y virtual', icon: '●' },
              { label: '10+ años de experiencia', icon: '●' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-gold text-xs">{item.icon}</span>
                <span className="text-gray-400 text-sm uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">Descubra más</span>
        <ChevronDown className="w-5 h-5 text-gold animate-bounce" />
      </div>

      {/* Bottom gold line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent transition-all duration-1000 delay-800 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  );
};

export default Hero;
