/** @jsxImportSource @emotion/react */
import { CSSReset, ThemeProvider, themes } from './design-system';
import ThemeSwitcher from './ThemeSwitcher';
import Header from './Header';
import * as styles from './App.styles';

const App = () => {
  return (
    <div css={styles.app}>
      <CSSReset />
      <ThemeProvider themes={themes} defaultTheme="light">
        <ThemeSwitcher />
        <Header />
        <main css={{ height: '100%' }}></main>
      </ThemeProvider>
    </div>
  );
};

export default App;
