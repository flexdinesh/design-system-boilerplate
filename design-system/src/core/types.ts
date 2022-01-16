import type {
  BordersProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  MarginProps,
  OverflowProps,
  PositionProps,
  PaddingProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  ZIndexProps,
} from 'styled-system';
import { themes } from 'core/theme';

/* all themes have the same token keys */
export type Themes = typeof themes;
export type Theme = Themes[number];
export type Tokens = Omit<Theme, 'name' | '__cssVars' | '__definition'>;

export type ThemeBordersProps = BordersProps<Tokens>;
export type ThemeColorProps = ColorProps<Theme>;
export type ThemeDisplayProps = DisplayProps<Tokens>;
export type ThemeFlexboxProps = FlexboxProps<Tokens>;
export type ThemeGridProps = GridProps<Tokens>;
export type ThemeLayoutProps = LayoutProps<Tokens>;
export type ThemeMarginProps = MarginProps<Tokens>;
export type ThemeOverflowProps = OverflowProps<Tokens>;
export type ThemePaddingProps = PaddingProps<Tokens>;
export type ThemePositionProps = PositionProps<Tokens>;
export type ThemeShadowProps = ShadowProps<Tokens>;
export type ThemeSpaceProps = SpaceProps<Tokens>;
export type ThemeTypographyProps = TypographyProps<Tokens>;
export type ThemeZIndexProps = ZIndexProps<Tokens>;
