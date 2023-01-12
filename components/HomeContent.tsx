import { Box } from '@chakra-ui/react';
import React, { forwardRef, RefObject } from 'react';

// eslint-disable-next-line react/display-name
export const HomeContent = forwardRef<HTMLDivElement, any>((props, ref) => {
  return (
    <Box ref={ref} h="100vh">
      HomeContent
    </Box>
  );
});
