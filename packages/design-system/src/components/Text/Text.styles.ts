import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import type { TextProps } from './Text';

const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4'];

export const mapHeadingToHeadingStyles: {
  [key in typeof HEADING_TAGS[number]]: CSSObject;
} = {
  h1: {
    lineHeight: tokens.lineHeights.tall,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: 36,
  },
  h2: {
    lineHeight: tokens.lineHeights.tall,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: 32,
  },
  h3: {
    lineHeight: tokens.lineHeights.tall,
    fontWeight: tokens.fontWeights.extrabold,
    fontSize: 28,
  },
  h4: {
    lineHeight: tokens.lineHeights.tall,
    fontWeight: tokens.fontWeights.semibold,
    fontSize: 24,
  },
};

const baseStyles: CSSObject = {
  lineHeight: tokens.lineHeights.base,
  color: tokens.colors.textHeading,
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
