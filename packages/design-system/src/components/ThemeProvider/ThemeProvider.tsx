/** @jsxImportSource @emotion/react */
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import { themes } from '../../core/theme';
import type { Themes } from '../../core/types';
import { isBrowser } from '../../util/helpers';
import { globalBaseStyles } from './global-styles';

/* just the theme name is enough since all theme css vars are already inserted into stylesheet */
const themeNames = themes.map((t) => t.name);

type ThemeContext = {
  theme: string;
  setTheme: ({ themeName }: { themeName: string }) => void;
  toggleTheme: () => void;
};

const defaultContext = {
  theme: themeNames[0],
};

const ThemeContext = createContext<ThemeContext>(
  defaultContext as ThemeContext
);

type ContextWrapperProps = {
  defaultTheme: string;
};

const ContextWrapper: React.FC<ContextWrapperProps> = ({
  children,
  defaultTheme,
}) => {
  let currentTheme = defaultTheme;
  if (isBrowser) {
    const themeAttrInBodyElem = document.body.getAttribute(`data-theme`);
    if (themeAttrInBodyElem) {
      currentTheme = themeAttrInBodyElem;
    }
  }
  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = useCallback(() => {
    const index = themeNames.indexOf(theme);
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

  const _setTheme = useCallback(
    ({ themeName }: { themeName: string }) => {
      if (isBrowser) {
        document.body.setAttribute(`data-theme`, themeName);
        setTheme(themeName);
      }
    },
    [setTheme]
  );

  useEffect(() => {
    if (isBrowser) {
      const themeAttrInBodyElem = document.body.getAttribute(`data-theme`);
      if (themeAttrInBodyElem) {
        setTheme(themeAttrInBodyElem);
      }
    }
  }, []);

  const contextValue = useMemo(() => {
    return { theme, toggleTheme, setTheme: _setTheme };
  }, [theme, toggleTheme, _setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext.setTheme || !themeContext.toggleTheme) {
    throw new Error('Please setup ThemeProvider');
  }

  return themeContext;
};

type ThemeWrapperProps = {
  themes: Themes;
  defaultTheme: string;
};

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({
  themes,
  defaultTheme,
  children,
}) => {
  if (!themes?.length) {
    throw new Error('You forgot to setup ThemeProvider');
  }

  if (!themes.find((t) => t.name === defaultTheme)) {
    throw new Error(`There's no theme with name: ${defaultTheme}`);
  }

  useEffect(() => {
    const dataThemeInBodyElem = document.body.getAttribute(`data-theme`);
    if (!dataThemeInBodyElem) {
      document.body.setAttribute(`data-theme`, defaultTheme);
    }
  }, [defaultTheme]);

  const globalCssVariablesForAllThemes = useMemo(() => {
    const globalStyles = themes.reduce<{
      [key: string]: Record<string, string | number>;
    }>((styleObject, theme) => {
      styleObject[`body[data-theme='${theme.name}']`] = theme.__cssVars;
      return styleObject;
    }, {});
    return globalStyles;
  }, [themes]);

  // all themes have the same tokens and values are same css variables
  // so it doesnt' really matter which theme we pass to emotion
  const theme = themes[0];

  return (
    <React.Fragment>
      <Global styles={globalCssVariablesForAllThemes} />
      {/* This is where we'd import CDN fonts */}
      {/* <Global
        styles={`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
      `}
      /> */}
      <Global styles={globalBaseStyles} />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </React.Fragment>
  );
};

type ThemeProviderProps = {
  themes: Themes;
  defaultTheme: string;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themes,
  defaultTheme,
  children,
}) => {
  return (
    <React.Fragment>
      <ThemeWrapper themes={themes} defaultTheme={defaultTheme}>
        <ContextWrapper defaultTheme={defaultTheme}>{children}</ContextWrapper>
      </ThemeWrapper>
    </React.Fragment>
  );
};
if (process.env.NODE_ENV !== 'production') {
  ThemeProvider.displayName = 'ThemeProvider';
}
