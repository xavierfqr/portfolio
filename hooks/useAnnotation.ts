import { useInterval } from '@chakra-ui/react';
import { RefObject, useEffect, useState } from 'react';
import { annotate } from 'rough-notation';
import { useIsInViewport } from './useRefIndexInViewport';

export const useUnderlineAnnotation = (ref: RefObject<any>) => {
  const [isElementShowing, setIsElementShowing] = useState(false);
  const isElementInViewport = useIsInViewport(ref);

  useEffect(() => {
    if (isElementInViewport && !isElementShowing) {
      const techAnnotation = annotate(ref.current, {
        type: 'underline',
        animate: true,
        color: '#F56565',
        animationDuration: 2000,
      });
      techAnnotation.show();
      setIsElementShowing(true);
    }
  }, [isElementInViewport, isElementShowing, ref]);
};
