import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { CONTACT } from '@/constants/config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Gold accent line - thicker */}
      <div className="w-full h-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold tracking-tight">
                L<span className="text-gold">|</span>G
              </span>
              <div className="h-8 w-px bg-gold/50" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                Grupo Lada
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Abogada especialista en Derecho Comercial. Soluciones jurídicas
              con rigor técnico y visión estratégica para empresas y personas
              naturales en Colombia.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={CONTACT.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 bg-gold/10 flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Phone className="w-5 h-5 text-gold group-hover:text-black transition-colors" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Correo electrónico"
                className="w-12 h-12 bg-gold/10 flex items-center justify-center hover:bg-gold transition-colors group"
              >
                <Mail className="w-5 h-5 text-gold group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#sobre-mi', label: 'Sobre mí' },
                { href: '#grupo-lada', label: 'Grupo LADA' },
                { href: '#servicios', label: 'Servicios' },
                { href: '#clientes', label: 'Clientes' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-sm">WhatsApp</p>
                  <p className="text-white font-medium">{CONTACT.whatsapp.display}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-white text-sm">{CONTACT.email}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-500 text-sm">Ubicación</p>
                  <p className="text-white text-sm">{CONTACT.location.city1}</p>
                  <p className="text-white text-sm">{CONTACT.location.city2}</p>
                  <p className="text-gray-500 text-xs">{CONTACT.location.country}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Laura Marcela Galvis Castro. Todos los derechos reservados.
          </p>
          <p className="text-gold/60 text-xs uppercase tracking-wider">
            GRUPO LADA - Firma Jurídica y Tecnológica
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gold text-black flex items-center justify-center hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
