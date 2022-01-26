import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import type { ButtonProps } from './Button';

export const variantStyles: {
  [variant in NonNullable<ButtonProps['variant']>]: CSSObject;
} = {
  primary: {
    backgroundColor: tokens.colors.primary500,
    color: tokens.colors.textAlternate,
  },
  secondary: {
    backgroundColor: tokens.colors.secondary500,
    color: tokens.colors.textAlternate,
  },
  outline: {
    backgroundColor: 'transparent',
    color: tokens.colors.primary500,
    border: `1px solid ${tokens.colors.primary500}`,
  },
};

export const sizeStyles: {
  [variant in NonNullable<ButtonProps['size']>]: CSSObject;
} = {
  small: {
    padding: tokens.space.small,
  },
  medium: {
    padding: tokens.space.medium,
  },
  large: {
    padding: tokens.space.large,
  },
};

const baseStyles: CSSObject = {
  minWidth: 96,
  borderRadius: 4,
  cursor: 'pointer',
  textAlign: 'center',
  fontSize: tokens.fontSizes.small,
  fontWeight: tokens.fontWeights.semibold,
  lineHeight: tokens.lineHeights.none,
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
