import { tokens } from '../core/theme';

export const args = {
  backgroundColor: {
    options: Object.keys(tokens.colors),
    control: { type: 'select' },
    description: 'Color token',
  },
};
