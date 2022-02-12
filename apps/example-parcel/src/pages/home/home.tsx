/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box } from '../../design-system';
import { Page } from '../../components/page';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
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
