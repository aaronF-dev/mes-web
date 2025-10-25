import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
}

export const ScrollAnimationWrapper = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: ScrollAnimationWrapperProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'scroll-fade-in';
      case 'slide-left':
        return 'scroll-slide-left';
      case 'slide-right':
        return 'scroll-slide-right';
      case 'scale':
        return 'scroll-scale-in';
      default:
        return 'scroll-fade-in';
    }
  };

  return (
    <div
      ref={elementRef as any}
      className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
