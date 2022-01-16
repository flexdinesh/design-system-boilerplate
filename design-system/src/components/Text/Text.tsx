import React from 'react';
import Box from 'components/Box';
import type { BoxProps } from 'components/Box';

export type TextProps = BoxProps;

const Text: React.FC<TextProps> = ({
  as = 'span',
  color = 'body',
  ...props
}) => {
  return (
    <Box as={as} {...props} color={color}>
      {props.children}
    </Box>
  );
};
if (process.env.NODE_ENV !== 'production') {
  Text.displayName = 'Text';
}

export default Text;
