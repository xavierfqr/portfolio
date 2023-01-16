import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#f5ebe0', 'gray.900')(props),
    },
  }),
};

const colors = {
  brand: '#50E3C2',
  brand_dark: '#319795',
  secondary: '#F56565',
};

export const theme = extendTheme({ config, colors, styles });
