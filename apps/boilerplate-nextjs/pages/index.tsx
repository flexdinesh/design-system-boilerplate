/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { NextPage } from 'next';
import { About } from '../src/components/about';
import { ExampleComponents } from '../src/components/example-components';
import { Footer } from '../src/components/footer';
import { Header } from '../src/components/header';
import { Intro } from '../src/components/intro';
import { Layout } from '../src/components/layout';
import { Page } from '../src/components/page';
import { Box } from '../src/design-system';

const styles = {
  homePage: css`
    min-height: 100vh;
  `,
  main: css`
    height: 100%;
    padding: 0 2rem;
    margin: 4rem 0 2rem;
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
