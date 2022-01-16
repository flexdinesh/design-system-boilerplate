import { breakpoints, mediaQueries } from 'tokens/breakpoints';
import * as colors from 'tokens/colors';
import { space } from 'tokens/space';
import { fontSizes } from 'tokens/typography';
import { createTheme } from 'util/create-theme';

/* light mode - default */
export const light = createTheme({
  name: 'light',
  breakpoints,
  mediaQueries,
  colors: colors.light,
  space,
  fontSizes,
});

/* dark mode */
export const dark = createTheme({
  name: 'dark',
  breakpoints,
  mediaQueries,
  colors: colors.dark,
  space,
  fontSizes,
});

export const themes = [light, dark];
