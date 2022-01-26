/** @jsxImportSource @emotion/react */
import {  Global } from '@emotion/react';
import { CSSReset, ThemeProvider, themes, tokens } from './design-system';
import ThemeSwitcher from './ThemeSwitcher';
import Header from './Header';
import * as styles from './App.styles';

const App = () => {
  return (
    <div css={styles.app}>
      <CSSReset />
      <Global
        styles={`
          body {
            background: ${tokens.colors.background};
            transition: background 0.5s ease-out;
          }
      `}
      />
      <ThemeProvider themes={themes} defaultTheme="light">
        <ThemeSwitcher />
        <Header />
        <main css={{ height: '100%' }}></main>
      </ThemeProvider>
    </div>
  );
};

export default App;
