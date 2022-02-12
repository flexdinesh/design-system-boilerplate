/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text, tokens } from '../../';

export const styles = {
  container: css`
    // height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    // border: 1px solid yellow;
  `,
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid cornflowerblue;
  `,
};

export const Intro = () => {
  return (
    <Box as="div" css={styles.container}>
      <Box as="div" css={styles.wrapper}>
        <Text
          as="div"
          css={css`
            font-size: 80px;
            font-weight: ${tokens.fontWeights.semibold};
          `}>
          A design system template
        </Text>
        <Text
          as="div"
          css={css`
            font-size: 80px;
            font-weight: ${tokens.fontWeights.extrabold};
            color: ${tokens.colors.primary300};
          `}>
          that scales
        </Text>
      </Box>
    </Box>
  );
};
