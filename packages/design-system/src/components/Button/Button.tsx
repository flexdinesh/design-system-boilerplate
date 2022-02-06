/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';
import { Box } from '../Box/Box';
import type { BoxProps } from '../Box/Box';
import { getStyles } from './Button.styles';

export type ButtonProps = Omit<BoxProps, 'size'> & {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'primary', size = 'medium', ...rest } = props;

  const styles = useMemo(() => {
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
