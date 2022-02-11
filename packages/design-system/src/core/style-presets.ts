import { tokens } from './theme';

export const textGradient = {
  backgroundImage: `linear-gradient(
    135deg,
    ${tokens.colors.primary500},
    ${tokens.colors.primary200}
  )`,
  backgroundClip: 'text',
  color: 'transparent',
};
