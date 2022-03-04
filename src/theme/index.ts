import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

import { globalStyles as styles } from './styles';

export const theme = extendTheme({
  fonts: {
    body: `Open Sans, ${baseTheme.fonts?.body}`,
    heading: `Open Sans, ${baseTheme.fonts?.heading}`
  },
  styles
});
