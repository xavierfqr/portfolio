import '@fontsource/league-spartan';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config/theme';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  font-family: 'League Spartan';
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  );
}
