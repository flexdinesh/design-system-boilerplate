import { breakpoints, mediaQueries } from '../tokens/breakpoints';
import * as colors from '../tokens/colors';
import { radii } from '../tokens/radii';
import { space } from '../tokens/space';
import {
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
} from '../tokens/typography';
import { createTheme } from '../util/create-theme';

/* light mode - default */
const light = createTheme({
  name: 'light',
  breakpoints,
  mediaQueries,
  colors: colors.light,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* orange mode  */
const orange = createTheme({
  name: 'orange',
  breakpoints,
  mediaQueries,
  colors: colors.orange,
  space,
  radii,
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
  radii,
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
  radii,
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
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* dark - pale orange mode */
const paleOrange = createTheme({
  name: 'pale orange',
  breakpoints,
  mediaQueries,
  colors: colors.paleOrange,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* dark - pale pink mode */
const palePink = createTheme({
  name: 'pale pink',
  breakpoints,
  mediaQueries,
  colors: colors.palePink,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* dark - bright orange mode */
const brightOrange = createTheme({
  name: 'bright orange',
  breakpoints,
  mediaQueries,
  colors: colors.brightOrange,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

/* since we only use css vars as token values - theme keys have the same values across themes */
export const tokens = light;

export const themes = [
  light,
  dark,
  orange,
  yellow,
  paleOrange,
  brown,
  palePink,
  brightOrange,
];
