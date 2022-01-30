import { createTheme } from '../create-theme';

describe('util/theme', () => {
  it('createTheme', () => {
    const themeDefinition = {
      name: 'dark',
      breakpoints: {
        small: 0,
        medium: '22em',
      },
      colors: { primary00: '#aaa', white: 'white' },
      space: {
        small: 0,
        large: 12,
      },
    };

    const createdTheme = createTheme(themeDefinition);
    expect(createdTheme).toEqual({
      name: 'dark',
      breakpoints: {
        small: 'var(--theme-breakpoints-small)',
        medium: 'var(--theme-breakpoints-medium)',
      },
      colors: {
        primary00: 'var(--theme-colors-primary00)',
        white: 'var(--theme-colors-white)',
      },
      space: {
        small: 'var(--theme-space-small)',
        large: 'var(--theme-space-large)',
      },

      __definition: {
        name: 'dark',
        breakpoints: {
          small: 0,
          medium: '22em',
        },
        colors: { primary00: '#aaa', white: 'white' },
        space: {
          small: 0,
          large: 12,
        },
      },

      __cssVars: {
        '--theme-breakpoints-small': '0px',
        '--theme-breakpoints-medium': '22em',
        '--theme-colors-primary00': '#aaa',
        '--theme-colors-white': 'white',

        '--theme-space-small': '0px',
        '--theme-space-large': '12px',
      },
    });
  });
});
