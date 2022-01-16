const spaceScale = [0, 4, 8, 16, 32] as const;

// space tokens
const space = {
  small: spaceScale[1],
  medium: spaceScale[2],
  large: spaceScale[3],
};

export { space };
