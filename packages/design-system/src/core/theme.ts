import { breakpoints, mediaQueries } from '../tokens/breakpoints';
import * as colors from '../tokens/colors';
import { space } from '../tokens/space';
import {
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
} from '../tokens/typography';
import { createTheme } from '../util/theme';

/* light mode - default */
const light = createTheme({
  name: 'light',
  breakpoints,
  mediaQueries,
  colors: colors.light,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* dark mode */
const dark = createTheme({
  name: 'dark',
  breakpoints,
  mediaQueries,
  colors: colors.dark,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* yellow mode */
const yellow = createTheme({
  name: 'yellow',
  breakpoints,
  mediaQueries,
  colors: colors.yellow,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* brown mode */
const brown = createTheme({
  name: 'brown',
  breakpoints,
  mediaQueries,
  colors: colors.brown,
  space,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* since we only use css vars as token values - theme keys have the same values across themes */
export const tokens = light;

export const themes = [light, dark, yellow, brown];
