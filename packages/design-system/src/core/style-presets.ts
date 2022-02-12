import { tokens } from './theme';

export const stylePreset = {
  textGradient: {
    backgroundImage: `linear-gradient(
      135deg,
      ${tokens.colors.primary300},
      ${tokens.colors.primary200}
    )`,
    backgroundClip: 'text',
    color: 'transparent',
  },
};
