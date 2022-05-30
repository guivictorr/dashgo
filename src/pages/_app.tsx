import { ChakraProvider } from '@chakra-ui/react'
import { SIdebarDrawerProvider } from 'context/SidebarDrawerContext'
import { AppProps } from 'next/app'
import { theme } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SIdebarDrawerProvider>
        <Component {...pageProps} />
      </SIdebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp