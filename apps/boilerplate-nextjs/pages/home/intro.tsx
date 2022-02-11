/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text, tokens, mediaQueries } from 'src/design-system';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    margin: 2rem 0 0;
  `,
  title: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid cornflowerblue;
    letter-spacing: -0.05em;
    padding: 1rem;
    border-color: ${tokens.colors.primary600};
    box-shadow: ${tokens.colors.primary600} 4px 4px 0 0;
  `,
};

export const Intro = () => {
  return (
    <Box as="div" css={styles.container}>
      <Text as="h1" css={styles.title}>
        <div>A Design System Template</div>
        <div
          css={css`
            background-image: linear-gradient(
              135deg,
              ${tokens.colors.primary600},
              ${tokens.colors.primary200}
            );
            background-clip: text;
            color: transparent;
          `}
        >
          That Scales.
        </div>
      </Text>
    </Box>
  );
};
