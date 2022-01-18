/** @jsxImportSource @emotion/react */
import React from 'react';
import { CSSReset, ThemeProvider, themes } from 'design-system/dist';
import ThemeSwitcher from './ThemeSwitcher';
import logo from './logo.svg';
import * as styles from './App.styles';

function App() {
  return (
    <React.Fragment>
      <CSSReset />
      <ThemeProvider themes={themes} defaultTheme="light">
        <ThemeSwitcher />
        <div css={styles}>
          <header css={styles.appHeader}>
            <img src={logo} css={styles.appLogo} alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              css={styles.appLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
