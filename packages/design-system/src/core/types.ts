import type {
  BordersProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  OverflowProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  ZIndexProps,
} from 'styled-system';
import { themes, tokens } from './theme';

/* all themes have the same token keys */
export type Themes = typeof themes;
export type Theme = Themes[number];
export type Tokens = Omit<typeof tokens, 'name' | '__cssVars' | '__definition'>;
export type ColorTokens = Tokens['colors'][keyof Tokens['colors']];
export type SpaceTokens = Tokens['space'][keyof Tokens['space']];

export type ThemeBordersProps = BordersProps<Tokens>;
export type ThemeColorProps = ColorProps<Tokens>;
export type ThemeDisplayProps = DisplayProps;
export type ThemeFlexboxProps = FlexboxProps;
export type ThemeGridProps = GridProps;
export type ThemeLayoutProps = LayoutProps;
export type ThemeOverflowProps = OverflowProps;
export type ThemePositionProps = PositionProps;
export type ThemeShadowProps = ShadowProps;
export type ThemeSpaceProps = SpaceProps<Tokens>;
export type ThemeTypographyProps = TypographyProps<Tokens>;
export type ThemeZIndexProps = ZIndexProps;
