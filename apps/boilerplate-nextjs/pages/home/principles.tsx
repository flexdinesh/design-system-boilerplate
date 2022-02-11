/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text } from 'src/design-system';
import PrinciplesMDX from './principles.mdx';

export const styles = {
  container: css`
    margin-top: 2rem;
  `,
};

export const Principles = () => {
  return (
    <Box as="div" css={styles.container}>
      <Text as="h2">Principles</Text>
      <PrinciplesMDX />
    </Box>
  );
};
