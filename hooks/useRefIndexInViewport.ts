import { RefObject, useEffect, useMemo, useState } from 'react';

export const useRefIndexInViewport = (refs: RefObject<HTMLElement>[]) => {
  const [indexInViewport, setIndexInViewport] = useState(0);

  const observer = useMemo(
    () => (index: number) =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIndexInViewport(index);
          }
        },
        { threshold: 0.5 }
      ),
    []
  );

  useEffect(() => {
    refs.forEach((ref, index) => {
      if (ref.current) {
        observer(index).observe(ref.current);
      }
    });
    return () => Array(refs.length).forEach((_, index) => observer(index).disconnect());
  }, [observer, refs]);

  return indexInViewport;
};

export const useIsInViewport = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
