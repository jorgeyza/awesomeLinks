import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import PageLoader from 'components/PageLoader';

import { theme } from 'theme';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PageLoader />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
