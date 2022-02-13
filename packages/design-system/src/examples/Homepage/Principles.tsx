/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text } from '../../';

export const styles = {
  container: css`
    margin-top: 2rem;
  `,
};

export const Principles = () => {
  return (
    <Box as="div" css={styles.container}>
      <Text as="h2" css={{}}>
        Principles
      </Text>
    </Box>
  );
};
