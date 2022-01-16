import styled from '@emotion/styled';
import React from 'react';
import {
  border,
  color,
  display,
  flexbox,
  grid,
  layout,
  margin,
  overflow,
  padding,
  position,
  shadow,
  space,
  zIndex,
} from 'styled-system';
import type {
  ThemeBordersProps,
  ThemeColorProps,
  ThemeDisplayProps,
  ThemeFlexboxProps,
  ThemeGridProps,
  ThemeLayoutProps,
  ThemeMarginProps,
  ThemeOverflowProps,
  ThemePaddingProps,
  ThemePositionProps,
  ThemeShadowProps,
  ThemeSpaceProps,
  // ThemeTypographyProps,
  ThemeZIndexProps,
} from 'core/types';

interface Props
  extends ThemeBordersProps,
    ThemeColorProps,
    ThemeDisplayProps,
    ThemeFlexboxProps,
    ThemeGridProps,
    ThemeLayoutProps,
    ThemeMarginProps,
    ThemeOverflowProps,
    ThemePaddingProps,
    ThemePositionProps,
    ThemeShadowProps,
    ThemeSpaceProps,
    ThemeZIndexProps {
  children: React.ReactNode;
}

// const Box = styled.div<Props>`
//   ${space}
//   ${color}
//   ${layout}
// `;

const Box = styled('div')<Props>(
  border,
  color,
  display,
  flexbox,
  grid,
  layout,
  margin,
  overflow,
  padding,
  position,
  shadow,
  space,
  zIndex
);

if (process.env.NODE_ENV !== 'production') {
  Box.displayName = 'Box';
}

export default Box;
