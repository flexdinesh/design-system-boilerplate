const fontSizeScale = [14, 16, 18, 20] as const;
const fontWeightScale = [400, 600, 700];

// font-size tokens - just demo values - find your right font sizes
const fontSizes = {
  small: fontSizeScale[0],
  base: fontSizeScale[1],
  body: fontSizeScale[2],
  large: fontSizeScale[3],
};

// font-weight tokens - just demo values - find your right font weights
const fontWeights = {
  regular: fontWeightScale[0],
  semibold: fontWeightScale[1],
  extrabold: fontWeightScale[2],
};

// font family tokens - just demo values - find your right font sets
const fontFamily = {
  body: 'system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  heading:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
};

// line height tokens - just demo values - find your right line heights
const lineHeights = {
  normal: 'normal',
  none: 1,
  base: 1.5,
  body: 1.7,
};

export { fontSizes, fontWeights, fontFamily, lineHeights };
