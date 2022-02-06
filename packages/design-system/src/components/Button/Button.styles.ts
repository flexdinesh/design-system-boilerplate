import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import type { ButtonProps } from './Button';

export const variantStyles: {
  [variant in NonNullable<ButtonProps['variant']>]: CSSObject;
} = {
  primary: {
    backgroundColor: tokens.colors.primary500,
    color: tokens.colors.textAlternate,
    borderColor: tokens.colors.backgroundAlternate,
    boxShadow: `${tokens.colors.backgroundAlternate} 4px 4px 0 0`,
  },
  secondary: {
    backgroundColor: tokens.colors.secondary500,
    color: tokens.colors.textAlternate,
    borderColor: tokens.colors.backgroundAlternate,
    boxShadow: `${tokens.colors.backgroundAlternate} 4px 4px 0 0`,
  },
};

export const sizeStyles: {
  [variant in NonNullable<ButtonProps['size']>]: CSSObject;
} = {
  small: {
    minWidth: 80,
    lineHeight: tokens.lineHeights.base,
    fontSize: 16,
    padding: `2px ${tokens.space.small}`,
  },
  medium: {
    minWidth: 120,
    lineHeight: tokens.lineHeights.tall,
    fontSize: 18,
    padding: `4px ${tokens.space.medium}`,
  },
  large: {
    minWidth: 148,
    lineHeight: tokens.lineHeights.taller,
    fontSize: 20,
    padding: `8px ${tokens.space.large}`,
  },
};

const baseStyles: CSSObject = {
  minWidth: 96,
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: tokens.fontWeights.semibold,
  textAlign: 'center',
  textDecoration: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
  border: '2px solid',

  ':hover': {
    transform: 'scale(1.05)',
  },
  ':active': {
    transform: 'translate(2px, 2px)',
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
