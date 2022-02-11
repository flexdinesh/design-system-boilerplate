import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import * as stylePresets from '../../core/style-presets';
import type { TextProps } from './Text';

const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4'];

export const mapHeadingToHeadingStyles: {
  [key in typeof HEADING_TAGS[number]]: CSSObject;
} = {
  h1: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.body,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: '4rem',
  },
  h2: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.body,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: '2.5rem',
  },
  h3: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.body,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: '2rem',
  },
  h4: {
    color: tokens.colors.textHeading,
    lineHeight: tokens.lineHeights.body,
    fontWeight: tokens.fontWeights.semibold,
    fontSize: '1.5rem',
  },
};

const baseStyles: CSSObject = {
  lineHeight: tokens.lineHeights.body,
  color: tokens.colors.textBody,
};

export const getStyles = ({
  as,
}: Pick<TextProps, 'as'>): ReturnType<typeof css> => {
  const textStyles =
    HEADING_TAGS.includes(as as string) &&
    mapHeadingToHeadingStyles[as as string];

  const styles = {
    ...baseStyles,
    ...textStyles,
  };

  return css(styles);
};
