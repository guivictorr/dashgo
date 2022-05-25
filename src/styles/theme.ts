import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50'
      }
    }
  },
  colors: {
    gray: {
      "900": '#181823',
      "800": '#1f2029',
      "700": '#353646',
      "600": '#4b4d63',
      "500": '#616480',
      "400": '#797d9a',
      "300": '#9699b0',
      "200": '#b3b5bc',
      "100": '#d1d2dc',
      "50": '#eeeef2',
    }
  },
  fonts: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
  }
})
