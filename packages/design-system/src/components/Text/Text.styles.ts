import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import type { TextProps } from './Text';

const TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'p'];

export const getTagStyles: {
  [key in typeof TAGS[number]]: CSSObject;
} = {
  h1: {
    color: tokens.colors.textHeading,
    // lineHeight: tokens.lineHeights.body,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: '4rem',
    margin: '1.5rem 0 0',
  },
  h2: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.base,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: '2.5rem',
    margin: '1.5rem 0 0',
  },
  h3: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.base,
    fontWeight: tokens.fontWeights.semibold,
    fontSize: '1.75rem',
    margin: '1rem 0 0',
  },
  h4: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.base,
    fontWeight: tokens.fontWeights.semibold,
    fontSize: '1.25rem',
    margin: '1rem 0 0',
  },
  h5: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.base,
    fontWeight: tokens.fontWeights.semibold,
    fontSize: tokens.fontSizes.body,
    margin: '1rem 0 0',
  },
  p: {
    margin: '1rem 0',
  },
};

const baseStyles: CSSObject = {
  lineHeight: tokens.lineHeights.body,
  color: tokens.colors.textBody,
};

export const getStyles = ({
  as,
}: Pick<TextProps, 'as'>): ReturnType<typeof css> => {
  const textStyles = TAGS.includes(as as string) && getTagStyles[as as string];

  const styles = {
    ...baseStyles,
    ...textStyles,
  };

  return css(styles);
};
