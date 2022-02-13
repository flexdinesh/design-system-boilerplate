/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Page } from '../../components/page';
import { Box } from '../../design-system';
import { About } from './about';
import { ExampleComponents } from './example-components';
import { Intro } from './intro';

const styles = {
  homePage: css`
    min-height: 100vh;
  `,
  main: css`
    height: 100%;
    padding: 2rem 2rem;
  `,
};

export const Home = () => {
  return (
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
  );
};
