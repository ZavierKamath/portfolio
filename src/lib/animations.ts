// CSS Animation Utilities - Pixel Cosmos Theme
// Pure CSS animations with no JavaScript dependencies

export const pixelAnimations = {
  // CSS class names for animations
  fadeIn: 'pixel-fade-in',
  fadeOut: 'pixel-fade-out',
  slideInLeft: 'pixel-slide-in-left',
  slideInRight: 'pixel-slide-in-right',
  slideInUp: 'pixel-slide-in-up',
  slideInDown: 'pixel-slide-in-down',
  cardLift: 'pixel-card-lift',
  float: 'pixel-float',
  blink: 'pixel-blink',
  shake: 'pixel-shake',
  loading: 'pixel-loading',
  staggerChildren: 'pixel-stagger-children',
  scrollReveal: 'pixel-scroll-reveal',
  pageEnter: 'pixel-page-enter',
  pageExit: 'pixel-page-exit',
} as const;

export const pixelDelays = {
  delay100: 'pixel-delay-100',
  delay200: 'pixel-delay-200',
  delay300: 'pixel-delay-300',
  delay400: 'pixel-delay-400',
  delay500: 'pixel-delay-500',
} as const;

export const pixelDurations = {
  fast: 'pixel-animate-fast',
  normal: 'pixel-animate-normal',
  slow: 'pixel-animate-slow',
} as const;

// Utility functions for adding CSS animations
export const addPixelAnimation = (element: HTMLElement, animation: string, options?: {
  delay?: string;
  duration?: string;
  infinite?: boolean;
}) => {
  element.classList.add(animation);
  
  if (options?.delay) {
    element.classList.add(options.delay);
  }
  
  if (options?.duration) {
    element.classList.add(options.duration);
  }
  
  if (options?.infinite) {
    element.classList.add('pixel-animate-infinite');
  }
};

// Intersection Observer setup for scroll animations
export const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  // Observe all elements with scroll reveal class
  document.querySelectorAll('.pixel-scroll-reveal').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Stagger children animation utility
export const staggerChildren = (container: HTMLElement, delay: number = 100) => {
  const children = container.children;
  Array.from(children).forEach((child, index) => {
    (child as HTMLElement).style.animationDelay = `${index * delay}ms`;
    child.classList.add('pixel-fade-in');
  });
};

// Reduced motion configuration
export const applyReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion');
  }
  
  return prefersReducedMotion;
};

// Page transition helper
export const handlePageTransition = (exitCallback?: () => void) => {
  const currentPage = document.querySelector('main');
  
  if (currentPage) {
    currentPage.classList.add('pixel-page-exit');
    
    // Wait for exit animation to complete
    setTimeout(() => {
      if (exitCallback) {
        exitCallback();
      }
    }, 500); // Match CSS animation duration
  }
};

// Initialize page enter animation
export const initPageEnter = () => {
  const page = document.querySelector('main');
  if (page) {
    page.classList.add('pixel-page-enter');
  }
};

// Performance detection for animations
export const getAnimationPerformanceMode = (): 'high' | 'medium' | 'low' => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isLowPower = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (isLowPower) {
    return 'low';
  }
  
  if (isMobile) {
    return 'medium';
  }
  
  return 'high';
};