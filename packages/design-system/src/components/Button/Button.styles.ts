import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import type { ButtonProps } from './Button';

export const variantStyles: {
  [variant in NonNullable<ButtonProps['variant']>]: CSSObject;
} = {
  primary: {
    backgroundColor: tokens.colors.primaryBase,
    color: tokens.colors.textAlternate,
    ':hover': {
      backgroundColor: tokens.colors.primary400,
    },
  },
  secondary: {
    backgroundColor: tokens.colors.secondaryBase,
    color: tokens.colors.textAlternate,
    ':hover': {
      backgroundColor: tokens.colors.secondary400,
    },
  },
};

export const sizeStyles: {
  [variant in NonNullable<ButtonProps['size']>]: CSSObject;
} = {
  small: {
    minWidth: 80,
  },
  medium: {
    minWidth: 120,
    lineHeight: tokens.lineHeights.base,
  },
  large: {
    minWidth: 148,
    lineHeight: tokens.lineHeights.body,
  },
};

const baseStyles: CSSObject = {
  border: 0,
  borderRadius: tokens.radii.medium,
  fontSize: tokens.fontSizes.small,
  fontWeight: tokens.fontWeights.semibold,
  padding: '0.75rem 1rem',
  textAlign: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  touchAction: 'manipulation',

  ':active': {
    transform: 'scale(0.96)',
  },
};

export const getStyles = ({
  variant,
  size,
}: Pick<ButtonProps, 'variant' | 'size'>): ReturnType<typeof css> => {
  const styles = {
    ...baseStyles,
    ...(variant && variantStyles[variant]),
    ...(size && sizeStyles[size]),
  };

  return css(styles);
};
