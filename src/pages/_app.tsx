import { ChakraProvider } from '@chakra-ui/react';
import { SIdebarDrawerProvider } from 'context/SidebarDrawerContext';
import { AppProps } from 'next/app';
import { makeServer } from 'services/miragejs';
import { theme } from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SIdebarDrawerProvider>
        <Component {...pageProps} />
      </SIdebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
