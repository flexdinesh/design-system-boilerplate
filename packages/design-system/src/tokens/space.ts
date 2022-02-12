const spaceScale = [0, 4, 8, 16, 32] as const;

// space tokens - just demo values - find your right spacing
const space = {
  small: spaceScale[1],
  medium: spaceScale[2],
  large: spaceScale[3],
};

export { space };
