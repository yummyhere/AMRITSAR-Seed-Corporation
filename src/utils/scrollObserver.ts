export interface ScrollObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const DEFAULT_SCROLL_OBSERVER_OPTIONS: Required<ScrollObserverOptions> = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
  triggerOnce: true,
};

export function createScrollObserverConfig(
  custom?: ScrollObserverOptions
): Required<ScrollObserverOptions> {
  const threshold =
    typeof custom?.threshold === 'number'
      ? Math.max(0, Math.min(1, custom.threshold))
      : DEFAULT_SCROLL_OBSERVER_OPTIONS.threshold;

  return {
    threshold,
    rootMargin: custom?.rootMargin || DEFAULT_SCROLL_OBSERVER_OPTIONS.rootMargin,
    triggerOnce: custom?.triggerOnce ?? DEFAULT_SCROLL_OBSERVER_OPTIONS.triggerOnce,
  };
}

export function computeRevealClasses(isVisible: boolean, extraClass = ''): string {
  const base =
    'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]';
  const state = isVisible
    ? 'opacity-100 translate-y-0 filter-none'
    : 'opacity-0 translate-y-9';
  return `${base} ${state} ${extraClass}`.trim();
}
