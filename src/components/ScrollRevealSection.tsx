import React, { useRef, useState, useEffect } from 'react';
import {
  createScrollObserverConfig,
  computeRevealClasses,
  ScrollObserverOptions,
} from '../utils/scrollObserver.ts';

interface ScrollRevealSectionProps extends ScrollObserverOptions {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  as: Component = 'div',
  threshold,
  rootMargin,
  triggerOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const config = createScrollObserverConfig({ threshold, rootMargin, triggerOnce });

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (config.triggerOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      } else if (!config.triggerOnce) {
        setIsVisible(false);
      }
    }, {
      threshold: config.threshold,
      rootMargin: config.rootMargin,
    });

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  const Tag = Component as any;

  return (
    <Tag
      id={id}
      ref={elementRef}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
      className={computeRevealClasses(isVisible, className)}
    >
      {children}
    </Tag>
  );
};
