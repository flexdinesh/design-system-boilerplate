/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { Box, Text } from 'src/design-system';
import Layout from 'src/components/Layout';
import ThemeSwitcher from 'src/components/ThemeSwitcher';
import Header from 'src/components/Header';
import * as styles from './index.styles';

const Home: NextPage = () => {
  return (
    <Layout>
      <ThemeSwitcher />
      <Box css={styles.container}>
        <Header />
        <main css={styles.main}></main>

        <Box as="footer" css={styles.footer}>
          <Text>footer: design system boilerplate</Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
