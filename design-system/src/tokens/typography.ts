const fontSizeScale = [12, 14, 16, 20, 24, 32] as const;
const fontWeightScale = [300, 600, 800];

const fontSizes = {
  small: fontSizeScale[1],
  medium: fontSizeScale[2],
  large: fontSizeScale[3],
};

const fontWeights = {
  normal: fontWeightScale[0],
  bold: fontWeightScale[1],
  black: fontWeightScale[2],
};

const fontFamily = {
  body: 'Ivert, sans-serif',
  heading: 'Ivert, sans-serif',
};

export { fontSizes, fontWeights, fontFamily };
