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

const lightOrange = createTheme({
  name: 'light orange',
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

const darkHoney = createTheme({
  name: 'dark honey',
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

const lightYellow = createTheme({
  name: 'light yellow',
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

const darkPink = createTheme({
  name: 'dark pink',
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

const lightBrown = createTheme({
  name: 'light brown',
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

const darkOrange = createTheme({
  name: 'dark orange',
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

const paper = createTheme({
  name: 'paper',
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

/* since we only use css vars as token values - theme keys have the same values across themes */
export const tokens = light;

export const themes = [
  light,
  dark,
  lightOrange,
  darkHoney,
  lightYellow,
  darkPink,
  lightBrown,
  darkOrange,
  paper,
];
