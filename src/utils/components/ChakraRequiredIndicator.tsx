import { chakra, useStyles } from '@chakra-ui/react';
import { cx } from '@chakra-ui/utils';

/**
 * This component exists until there'll be a corresponding Chakra component available
 * @see https://github.com/chakra-ui/chakra-ui/issues/4770
 */
export const CbRequiredIndicator = () => {
  const styles = useStyles();
  const className = cx('chakra-form__required-indicator');

  return (
    <chakra.span __css={styles.requiredIndicator} aria-hidden='true' className={className} role='presentation'>
      *
    </chakra.span>
  );
};
