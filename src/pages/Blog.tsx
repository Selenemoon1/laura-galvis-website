import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { articles, categories } from '@/data/articles';
import AnimatedSection from '@/components/AnimatedSection';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    document.title = 'Artículos Jurídicos | Laura Galvis Abogada Colombia';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
      metaDesc.setAttribute(
        'content',
        'Artículos y análisis jurídicos sobre derecho comercial, societario, insolvencia y propiedad intelectual en Colombia. Por Laura Galvis, abogada especialista.'
      );
    return () => {
      document.title =
        'Laura Marcela Galvis Castro | Abogada Derecho Comercial, Societario e Insolvencia en Colombia';
    };
  }, []);

  const filtered =
    activeCategory === 'Todos'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-black pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border border-gold/20 rotate-45" />
        <div className="absolute bottom-10 right-40 w-20 h-20 border border-gold/10 rotate-12" />
        <div className="w-full px-6 lg:px-12 xl:px-20 relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-gray-500 hover:text-gold transition-colors">
              Inicio
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gold">Artículos</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Blog Jurídico
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Artículos <span className="font-light text-gray-500">Jurídicos</span>
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Análisis y reflexiones sobre los temas jurídicos que impactan a empresas y personas
              en Colombia.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-gold text-black'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((article, index) => (
              <AnimatedSection key={article.slug} animation="fade-up" delay={index * 100}>
                <Link
                  to={`/articulos/${article.slug}`}
                  className="group block bg-white border border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-black mb-3 group-hover:text-gold transition-colors leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {article.summary}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                      Leer artículo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No hay artículos en esta categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
