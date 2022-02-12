const radiiScale = [2, 4, 8] as const;

// radii tokens - just demo values - find your right radius
const radii = {
  small: radiiScale[0],
  medium: radiiScale[1],
  large: radiiScale[2],
};

export { radii };
