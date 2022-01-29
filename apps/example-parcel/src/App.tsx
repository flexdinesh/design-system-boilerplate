/** @jsxImportSource @emotion/react */
import Layout from 'src/components/Layout';
import ThemeSwitcher from 'src/components/ThemeSwitcher';
import Header from 'src/components/Header';
import * as styles from './App.styles';

const App = () => {
  return (
    <Layout>
      <ThemeSwitcher />
      <div css={styles.app}>
        <Header />
        <main css={{ height: '100%' }}></main>
      </div>
    </Layout>
  );
};

export default App;
