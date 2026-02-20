import type { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  duration?: number;
}

const AnimatedSection = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}ms`,
    };

    const hiddenStates = {
      'fade-up': { opacity: 0, transform: 'translateY(40px)' },
      'fade-in': { opacity: 0 },
      'slide-left': { opacity: 0, transform: 'translateX(-60px)' },
      'slide-right': { opacity: 0, transform: 'translateX(60px)' },
      'scale-in': { opacity: 0, transform: 'scale(0.9)' },
    };

    const visibleStates = {
      'fade-up': { opacity: 1, transform: 'translateY(0)' },
      'fade-in': { opacity: 1 },
      'slide-left': { opacity: 1, transform: 'translateX(0)' },
      'slide-right': { opacity: 1, transform: 'translateX(0)' },
      'scale-in': { opacity: 1, transform: 'scale(1)' },
    };

    return {
      ...baseStyles,
      ...(isVisible ? visibleStates[animation] : hiddenStates[animation]),
    };
  };

  return (
    <div ref={ref} className={className} style={getAnimationStyles()}>
      {children}
    </div>
  );
};

export default AnimatedSection;
