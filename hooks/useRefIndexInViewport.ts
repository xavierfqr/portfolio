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
