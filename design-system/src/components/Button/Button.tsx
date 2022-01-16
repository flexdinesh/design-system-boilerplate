import React from 'react';
import Box from 'components/Box';
import type { BoxProps } from 'components/Box';
import { getStyles } from './Button.styles';

export type ButtonProps = Omit<BoxProps, 'size'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'primary', size = 'medium', ...rest } = props;

  const styles = React.useMemo(() => {
    return getStyles({
      variant,
      size,
    });
  }, [variant, size]);

  return (
    <Box as={'button'} css={styles} {...rest}>
      {children}
    </Box>
  );
};

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = 'Button';
}

export default Button;
