/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Callout } from '../../design-system';

export const styles = {
  about: css`
    margin-top: 3rem;
  `,
};

export const About = () => {
  return (
    <Box as="div" css={styles.about}>
      <Callout>
        About section is written in MDX and MDX parsing is not setup for the
        parcel app yet.
      </Callout>
    </Box>
  );
};
