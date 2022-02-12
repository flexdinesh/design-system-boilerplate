/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { Box } from 'src/design-system';
import { Layout } from 'src/components/layout';
import { Page } from 'src/components/page';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { Intro } from './intro';
import { About } from './about';
import { ExampleComponents } from './example-components';

const styles = {
  homePage: css`
    min-height: 100vh;
  `,
  main: css`
    height: 100%;
    padding: 2rem 2rem;
  `,
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Box css={styles.homePage}>
        <Header />
        <Page>
          <main css={styles.main}>
            <Intro />
            <About />
            <ExampleComponents />
          </main>
        </Page>
        <Footer />
      </Box>
    </Layout>
  );
};

export default Home;
