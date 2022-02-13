/*
  0em = 0px
  40em = 640px
  52em = 832px
  64em = 1024px
  75em = 1200px
*/
const breakpointScale = ['0em', '40em', '52em', '64em', '75em'] as const;

// breakpoint tokens - just demo values - find your right breakpoint
const breakpoints = {
  // not having 'small' breakpoint forces us to build
  // for mobile devices and scale for bigger devices
  default: breakpointScale[0], // mobile phones and higher 0-639px
  medium: breakpointScale[1], // tablets and higher 640px-832px
  large: breakpointScale[2], // laptops and higher >832px
};

// media queries
const mediaQueries = {
  medium: `@media screen and (min-width: ${breakpointScale[1]})`,
  large: `@media screen and (min-width: ${breakpointScale[2]})`,
};

export { breakpoints, mediaQueries };
