/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { Box } from 'src/design-system';
import { Layout } from 'src/components/layout';
import { Page } from 'src/components/page';
import { Header } from 'src/components/header';
import { Intro } from './intro';
import { Principles } from './principles';
import * as styles from './home.styles';

const Home: NextPage = () => {
  return (
    <Layout>
      <Box css={styles.container}>
        <Header />
        <Page>
          <main css={styles.main}>
            <Intro />
            <Principles />
          </main>
        </Page>
      </Box>
    </Layout>
  );
};

export default Home;
