import { useEffect, useState, useRef } from 'react';
import { Scale, Users, Building2, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      ref={ref}
      className={`text-center p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 mb-6">
        <Icon className="w-8 h-8 text-gold" />
      </div>
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Scale, value: 10, suffix: '+', label: 'Años de experiencia' },
    { icon: Users, value: 500, suffix: '+', label: 'Casos atendidos' },
    { icon: Building2, value: 100, suffix: '+', label: 'Empresas asesoradas' },
    { icon: Award, value: 100, suffix: '%', label: 'Compromiso' },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-black overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

      {/* Background pattern */}
      <div 
        className={`absolute inset-0 opacity-5 transition-opacity duration-1000 ${
          isVisible ? 'opacity-5' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Resultados que <span className="text-gold">respaldan</span> mi trabajo
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
