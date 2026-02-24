import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling when navigating from subpages to home
  useEffect(() => {
    if (isHome && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [isHome, location.hash]);

  const sectionLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#grupo-lada', label: 'Grupo LADA' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#asesorias', label: 'Asesorías' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleSectionClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/' + href);
    }
  };

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            aria-label="Laura Galvis - Inicio"
            className="flex items-center"
          >
            <span
              className={`text-2xl font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              L<span className="text-gold">|</span>G
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick(link.href);
                }}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/articulos"
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                isScrolled ? 'text-black' : 'text-white'
              } ${location.pathname.startsWith('/articulos') ? 'text-gold' : ''}`}
            >
              Artículos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-1">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick(link.href);
                }}
                className="block py-3 px-2 text-black font-medium hover:text-gold hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/articulos"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-3 px-2 font-medium hover:text-gold hover:bg-gray-50 transition-colors ${
                location.pathname.startsWith('/articulos') ? 'text-gold' : 'text-black'
              }`}
            >
              Artículos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
