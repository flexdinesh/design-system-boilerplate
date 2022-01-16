import { light } from 'core/theme';

export const args = {
  backgroundColor: {
    options: Object.keys(light.colors),
    control: { type: 'select' },
    description: 'Color token',
  },
};
