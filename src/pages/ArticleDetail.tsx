import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Phone, CalendarCheck, ArrowRight } from 'lucide-react';
import { getArticleBySlug, articles } from '@/data/articles';
import { CONTACT } from '@/constants/config';
import type { ArticleData } from '@/data/articles';
import AnimatedSection from '@/components/AnimatedSection';
import Navigation from '@/sections/Navigation';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useEffect(() => {
    if (article) {
      document.title = article.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.seoDescription);
    }
    return () => {
      document.title =
        'Laura Marcela Galvis Castro | Abogada Derecho Comercial, Societario e Insolvencia en Colombia';
    };
  }, [article]);

  if (!article) return <Navigate to="/articulos" replace />;

  const relatedArticles = article.relatedSlugs
    .map((s) => articles.find((a) => a.slug === s))
    .filter(Boolean) as ArticleData[];

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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-gray-500 hover:text-gold transition-colors">
              Inicio
            </Link>
            <span className="text-gray-600">/</span>
            <Link to="/articulos" className="text-gray-500 hover:text-gold transition-colors">
              Artículos
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gold truncate max-w-[200px]">{article.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-medium bg-gold/20 text-gold px-3 py-1">
                {article.category}
              </span>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                {formatDate(article.date)}
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold via-gold/50 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl">
            <AnimatedSection animation="fade-up">
              <Link
                to="/articulos"
                className="inline-flex items-center gap-2 text-gold text-sm font-medium mb-8 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a artículos
              </Link>
              <div className="space-y-6">
                {article.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </AnimatedSection>

            {/* Author */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="mt-12 p-6 bg-gray-50 border-l-4 border-gold flex items-start gap-4">
                <img
                  src="/laura-galvis.jpg"
                  alt="Laura Marcela Galvis Castro"
                  className="w-16 h-16 object-cover rounded-full flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-black">Laura Marcela Galvis Castro</p>
                  <p className="text-gold text-sm font-medium">
                    Abogada Especialista en Derecho Comercial
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Asesora empresas y personas naturales en derecho comercial, societario,
                    insolvencia y propiedad intelectual en Colombia.
                  </p>
                </div>
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
              ¿Necesita asesoría sobre este tema?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Estoy aquí para ayudarle
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Si tiene preguntas sobre {article.category.toLowerCase()} o necesita asesoría
              jurídica personalizada, no dude en contactarme.
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

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <AnimatedSection animation="fade-up" className="mb-12">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Siga leyendo
              </p>
              <h2 className="text-3xl font-bold text-black">
                Artículos <span className="font-light text-gray-500">relacionados</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related, index) => (
                <AnimatedSection key={related.slug} animation="fade-up" delay={index * 100}>
                  <Link
                    to={`/articulos/${related.slug}`}
                    className="group block bg-gray-50 p-8 border-l-4 border-transparent hover:border-gold transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium bg-gold/10 text-gold px-3 py-1">
                        {related.category}
                      </span>
                      <span className="text-gray-400 text-xs">{related.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gold transition-colors leading-tight">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{related.summary}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                      Leer artículo
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

export default ArticleDetail;
