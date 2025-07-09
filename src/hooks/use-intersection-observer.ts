"use client";

import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement>(
  options: IntersectionObserverOptions = {}
): [React.RefObject<T>, boolean] {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
  const targetRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const node = targetRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else {
          if (!triggerOnce) {
             setIsIntersecting(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      if(node) {
        observer.unobserve(node);
      }
    };
  }, [targetRef, threshold, root, rootMargin, triggerOnce]);

  return [targetRef, isIntersecting];
}
