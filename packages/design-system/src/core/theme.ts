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

const light = createTheme({
  name: 'Light',
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

const lightOrange = createTheme({
  name: 'Light Orange',
  breakpoints,
  mediaQueries,
  colors: colors.lightOrange,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

const lightYellow = createTheme({
  name: 'Light Yellow',
  breakpoints,
  mediaQueries,
  colors: colors.lightYellow,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

const lightBrown = createTheme({
  name: 'Light Brown',
  breakpoints,
  mediaQueries,
  colors: colors.lightBrown,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

const paper = createTheme({
  name: 'Paper',
  breakpoints,
  mediaQueries,
  colors: colors.paper,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

const dark = createTheme({
  name: 'Dark',
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

const darkHoney = createTheme({
  name: 'Dark Honey',
  breakpoints,
  mediaQueries,
  colors: colors.darkHoney,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

const darkPink = createTheme({
  name: 'Dark Pink',
  breakpoints,
  mediaQueries,
  colors: colors.darkPink,
  space,
  radii,
  fontSizes,
  fontWeights,
  fontFamily,
  lineHeights,
});

const darkOrange = createTheme({
  name: 'Dark Orange',
  breakpoints,
  mediaQueries,
  colors: colors.darkOrange,
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
  lightOrange,
  lightYellow,
  lightBrown,
  paper,
  dark,
  darkHoney,
  darkPink,
  darkOrange,
];
