/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import { Box } from '../Box/Box';
import type { BoxProps } from '../Box/Box';
import { getStyles } from './Text.styles';

export type TextProps = BoxProps;

export const Text: React.FC<TextProps> = ({
  as = 'span',
  color = 'textBody',
  ...props
}) => {
  const styles = useMemo(() => {
    return getStyles({
      as,
    });
  }, [as]);

  return (
    <Box as={as} color={color} css={styles} {...props}>
      {props.children}
    </Box>
  );
};
if (process.env.NODE_ENV !== 'production') {
  Text.displayName = 'Text';
}
