import { walkObject } from '../object';

describe('util/object', () => {
  it('walkObject', () => {
    const theme = {
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

    const results: { value: string | number; location: string[] }[] = [];
    walkObject(theme, ({ value, location, isLeaf }) => {
      if (isLeaf) results.push({ value, location });
    });
    expect(results.length).toBe(7);
    expect(results[0]).toEqual({ value: 'dark', location: ['name'] });
    expect(results[1]).toEqual({
      value: 0,
      location: ['breakpoints', 'small'],
    });
    expect(results[2]).toEqual({
      value: '22em',
      location: ['breakpoints', 'medium'],
    });
  });
});
