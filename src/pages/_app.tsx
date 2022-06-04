import { ChakraProvider } from '@chakra-ui/react';
import { SIdebarDrawerProvider } from 'context/SidebarDrawerContext';
import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { makeServer } from 'services/miragejs';
import { client } from 'services/react-query';
import { theme } from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SIdebarDrawerProvider>
          <Component {...pageProps} />
        </SIdebarDrawerProvider>
      </ChakraProvider>

      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp;
