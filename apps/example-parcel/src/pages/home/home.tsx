/** @jsxImportSource @emotion/react */
import { Box } from '../../design-system';
import { Page } from '../../components/page';
import { Header } from '../../components/header';
import { Intro } from './intro';
import { Principles } from './principles';
import * as styles from './home.styles';

export const Home = () => {
  return (
    <Box css={styles.container}>
      <Header />
      <Page>
        <main css={styles.main}>
          <Intro />
          <Principles />
        </main>
      </Page>
    </Box>
  );
};
