import React from 'react';
import { themes } from '../core/theme';
import { isBrowser } from '../util/helpers';

/* just the theme name is enough since all theme css vars are already inserted into stylesheet */
const themeNames = themes.map((t) => t.name);

const getLatestThemeFromBodyElem = (defaultTheme: string) => {
  if (isBrowser) {
    const themeAttrInBodyElem = document.body.getAttribute(`data-theme`);
    if (themeAttrInBodyElem) {
      return themeAttrInBodyElem;
    }
  }
  return defaultTheme;
};

/* This hook won't re-render the entire React tree when the theme changes */
export const useToggleTheme = (defaultTheme = themeNames[0]) => {
  const currentTheme = getLatestThemeFromBodyElem(defaultTheme);
  const [theme, setTheme] = React.useState(currentTheme);

  const toggleTheme = React.useCallback(() => {
    const currentTheme = getLatestThemeFromBodyElem(theme);

    const index = themeNames.indexOf(currentTheme);
    let nextTheme = theme;
    if (index >= 0 && index < themeNames.length - 1) {
      nextTheme = themeNames[index + 1];
    } else {
      nextTheme = themeNames[0];
    }
    if (isBrowser) {
      document.body.setAttribute(`data-theme`, nextTheme);
      setTheme(nextTheme);
    }
  }, [theme, setTheme]);

  return { theme, toggleTheme };
};
