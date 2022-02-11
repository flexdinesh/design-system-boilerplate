const fontSizeScale = [12, 14, 16, 20, 24, 32] as const;
const fontWeightScale = [400, 600, 700];

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
  body: 'system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  heading:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;',
};

const lineHeights = {
  normal: 'normal',
  none: 1,
  base: 1.5,
  body: 1.7,
};

export { fontSizes, fontWeights, fontFamily, lineHeights };
