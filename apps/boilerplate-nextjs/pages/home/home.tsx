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
            <pre>{`
              <VideoPlayer 
                ref="videoplayer" 
                preload={this.props.preload} 
                classes={this.props.classes} 
                videoID={this.props.videoID}
                controls="controls" 
              />
            `}</pre>
            <code>{`const a === 'aaa`}</code>
          </main>
        </Page>
      </Box>
    </Layout>
  );
};

export default Home;
