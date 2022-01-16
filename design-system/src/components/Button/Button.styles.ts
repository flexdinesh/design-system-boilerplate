import { css, CSSObject } from '@emotion/react';
import * as CSS from 'csstype';
import { tokens } from 'core/theme';
import type { ColorTokens, SpaceTokens } from 'core/types';
import type { ButtonProps } from './Button';

type Colors = ColorTokens | CSS.Property.Color;
export const mapVariantTobackgroundColor: {
  [variant in NonNullable<ButtonProps['variant']>]: Colors;
} = {
  primary: tokens.colors.primary500,
  secondary: tokens.colors.secondary500,
  outline: 'transparent',
};

export const mapVariantToColor: {
  [variant in NonNullable<ButtonProps['variant']>]: Colors;
} = {
  primary: tokens.colors.alternate,
  secondary: tokens.colors.alternate,
  outline: tokens.colors.primary500,
};

export const mapSizeToPadding: {
  [variant in NonNullable<ButtonProps['size']>]: SpaceTokens;
} = {
  small: tokens.space.small,
  medium: tokens.space.medium,
  large: tokens.space.large,
};

const baseStyles: CSSObject = {
  minWidth: 96,
  borderRadius: 4,
  cursor: 'pointer',
  textAlign: 'center',
};

export const variantStyles: {
  [variant in NonNullable<ButtonProps['variant']>]: CSSObject | undefined;
} = {
  primary: undefined,
  secondary: undefined,
  outline: {
    border: `1px solid ${tokens.colors.primary500}`,
  },
};

export const getStyles = ({
  variant,
  size,
}: Pick<ButtonProps, 'variant' | 'size'>): ReturnType<typeof css> => {
  const backgroundColor = variant && mapVariantTobackgroundColor[variant];
  const color = variant && mapVariantToColor[variant];
  const padding = size && mapSizeToPadding[size];

  const styles = {
    ...baseStyles,
    padding,
    backgroundColor,
    color,
    ...(variant && variantStyles[variant]),
  };
  return css(styles);
};
