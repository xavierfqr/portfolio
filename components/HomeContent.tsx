import { Box } from '@chakra-ui/react';
import React, { forwardRef, RefObject } from 'react';

// eslint-disable-next-line react/display-name
export const HomeContent = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Box ref={ref} mt={'1000px'} mb={'500px'}>
      HomeContent
    </Box>
  );
});
