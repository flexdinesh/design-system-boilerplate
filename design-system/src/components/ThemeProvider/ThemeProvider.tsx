import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';
import React from 'react';
import { Themes } from 'core/types';

type Props = {
  themes: Themes;
  defaultTheme: string;
};

const ThemeProvider: React.FC<Props> = ({ themes, defaultTheme, children }) => {
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

if (process.env.NODE_ENV !== 'production') {
  ThemeProvider.displayName = 'ThemeProvider';
}

export default ThemeProvider;
