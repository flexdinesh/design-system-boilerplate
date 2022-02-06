import { Box, Text } from '../../';
import { Layout } from './Layout';
import { Page } from './Page';
import { Header } from './Header';
import { Intro } from './Intro';
import { Principles } from './Principles';

import * as styles from './Homepage.styles';

export const Homepage = () => {
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
