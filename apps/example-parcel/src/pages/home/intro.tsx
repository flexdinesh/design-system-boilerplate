/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text, tokens, mediaQueries } from '../../design-system';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
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
            font-size: 48px;
            font-weight: ${tokens.fontWeights.semibold};
            ${mediaQueries.medium} {
              font-size: 64px;
            }
          `}
        >
          A design system template
        </Text>
        <Text
          as="div"
          css={css`
            font-size: 48px;
            font-weight: ${tokens.fontWeights.extrabold};
            color: ${tokens.colors.primary500};
            ${mediaQueries.medium} {
              font-size: 64px;
            }
          `}
        >
          that scales
        </Text>
      </Box>
    </Box>
  );
};
