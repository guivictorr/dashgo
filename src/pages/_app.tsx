import { ChakraProvider } from '@chakra-ui/react';
import { SIdebarDrawerProvider } from 'context/SidebarDrawerContext';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { makeServer } from 'services/miragejs';
import { theme } from 'styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SIdebarDrawerProvider>
          <Component {...pageProps} />
        </SIdebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
