/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { Box, Callout } from 'src/design-system';
import { Layout } from 'src/components/layout';
import { Page } from 'src/components/page';
import { Header } from 'src/components/header';
import { Footer } from 'src/components/footer';
import { Intro } from 'src/components/intro';
import { About } from 'src/components/about';
import { ExampleComponents } from 'src/components/example-components';

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

const BrokenNote = () => {
  return (
    <Callout variant="secondary">
      Emotion critical style extraction is broken at the moment!
    </Callout>
  );
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Box css={styles.homePage}>
        <Header />
        <Page>
          <main css={styles.main}>
            <BrokenNote />
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
