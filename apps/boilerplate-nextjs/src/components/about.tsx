/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box } from '../design-system';
import AboutMDX from './about.mdx';

export const styles = {
  about: css`
    margin-top: 3rem;
  `,
};

export const About = () => {
  return (
    <Box as="div" css={styles.about}>
      <AboutMDX />
    </Box>
  );
};
