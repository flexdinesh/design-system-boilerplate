import React, { ComponentProps } from 'react';
import Box from '../Box';

type Props = ComponentProps<typeof Box>;

const Text: React.FC<Props> = ({ as = 'span', color = 'body', ...props }) => {
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
