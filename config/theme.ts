import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  brand: '#50E3C2',
  secondary: '#F56565',
};

export const theme = extendTheme({ config, colors });
