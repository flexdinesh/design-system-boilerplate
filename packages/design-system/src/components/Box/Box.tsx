/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import type { ComponentProps } from 'react';
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
import { tokens } from '../../core/theme';
import type {
  ThemeBordersProps,
  ThemeColorProps,
  ThemeDisplayProps,
  ThemeFlexboxProps,
  ThemeGridProps,
  ThemeLayoutProps,
  ThemeOverflowProps,
  ThemePositionProps,
  ThemeShadowProps,
  ThemeSpaceProps,
  ThemeZIndexProps,
} from '../../core/types';

interface Props
  extends ThemeBordersProps,
    ThemeColorProps,
    ThemeDisplayProps,
    ThemeFlexboxProps,
    ThemeGridProps,
    ThemeLayoutProps,
    ThemeOverflowProps,
    ThemePositionProps,
    ThemeShadowProps,
    ThemeSpaceProps,
    ThemeZIndexProps {
  children: React.ReactNode;
}

export const Box = styled('div')<Props>(
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
  {
    fontFamily: tokens.fontFamily.body,
    color: tokens.colors.textBody,
  }
);

if (process.env.NODE_ENV !== 'production') {
  Box.displayName = 'Box';
}

export type BoxProps = ComponentProps<typeof Box>;
