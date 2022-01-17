import { breakpoints, mediaQueries } from 'tokens/breakpoints';
import * as colors from 'tokens/colors';
import { space } from 'tokens/space';
import { fontSizes, fontWeights, fontFamily } from 'tokens/typography';
import { createTheme } from 'util/theme';

/* light mode - default */
export const light = createTheme({
  name: 'light',
  breakpoints,
  mediaQueries,
  colors: colors.light,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
});

/* dark mode */
export const dark = createTheme({
  name: 'dark',
  breakpoints,
  mediaQueries,
  colors: colors.dark,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
});

/* yellow mode */
export const yellow = createTheme({
  name: 'yellow',
  breakpoints,
  mediaQueries,
  colors: colors.yellow,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
});

/* brown mode */
export const brown = createTheme({
  name: 'brown',
  breakpoints,
  mediaQueries,
  colors: colors.brown,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
});

/* since we only use css vars as token values - all theme keys have the same values */
export const tokens = light;

export const themes = [light, dark, yellow, brown];
