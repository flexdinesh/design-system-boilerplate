import { css, CSSObject } from '@emotion/react';
import { tokens } from '../../core/theme';
import type { TextProps } from './Text';

const HEADING_TAGS = ['h1', 'h2'];

export const mapHeadingToHeadingStyles: {
  [key in typeof HEADING_TAGS[number]]: CSSObject;
} = {
  h1: {
    color: tokens.colors.textHeading,
    fontSize: tokens.fontSizes.large,
    fontWeight: tokens.fontWeights.extrabold,
  },
};

const baseStyles: CSSObject = {
  lineHeight: tokens.lineHeights.base,
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
