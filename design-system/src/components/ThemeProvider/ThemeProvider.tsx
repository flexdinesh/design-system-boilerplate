import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import React from 'react';
import { themes } from 'core/theme';
import type { Themes } from 'core/types';
import { isBrowser } from 'util/helpers';

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

const ThemeContext = React.createContext<ThemeContext>(
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
  const [theme, setTheme] = React.useState(currentTheme);

  const toggleTheme = React.useCallback(() => {
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

  const _setTheme = React.useCallback(
    ({ themeName }: { themeName: string }) => {
      if (isBrowser) {
        document.body.setAttribute(`data-theme`, themeName);
        setTheme(themeName);
      }
    },
    [setTheme]
  );

  React.useEffect(() => {
    if (isBrowser) {
      const themeAttrInBodyElem = document.body.getAttribute(`data-theme`);
      if (themeAttrInBodyElem) {
        setTheme(themeAttrInBodyElem);
      }
    }
  }, []);

  const contextValue = React.useMemo(() => {
    return { theme, toggleTheme, setTheme: _setTheme };
  }, [theme, toggleTheme, _setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = React.useContext(ThemeContext);
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

  React.useEffect(() => {
    const dataThemeInBodyElem = document.body.getAttribute(`data-theme`);
    if (!dataThemeInBodyElem) {
      document.body.setAttribute(`data-theme`, defaultTheme);
    }
  }, [defaultTheme]);

  const globalCssVariablesForAllThemes = React.useMemo(() => {
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
    <>
      <Global styles={globalCssVariablesForAllThemes} />
      <Global
        styles={`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600;800&display=swap');
      `}
      />
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </>
  );
};

type ThemeProvider = {
  themes: Themes;
  defaultTheme: string;
};

const ThemeProvider: React.FC<ThemeProvider> = ({
  themes,
  defaultTheme,
  children,
}) => {
  return (
    <>
      <ThemeWrapper themes={themes} defaultTheme={defaultTheme}>
        <ContextWrapper defaultTheme={defaultTheme}>{children}</ContextWrapper>
      </ThemeWrapper>
    </>
  );
};
if (process.env.NODE_ENV !== 'production') {
  ThemeProvider.displayName = 'ThemeProvider';
}

export default ThemeProvider;
