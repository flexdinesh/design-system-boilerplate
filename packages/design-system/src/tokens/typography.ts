const fontSizeScale = [12, 14, 16, 20, 24, 32] as const;
const fontWeightScale = [400, 600, 800];

const fontSizes = {
  small: fontSizeScale[1],
  medium: fontSizeScale[3],
  large: fontSizeScale[5],
};

const fontWeights = {
  regular: fontWeightScale[0],
  semibold: fontWeightScale[1],
  extrabold: fontWeightScale[2],
};

const fontFamily = {
  body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
  heading:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: 2,
};

export { fontSizes, fontWeights, fontFamily, lineHeights };
