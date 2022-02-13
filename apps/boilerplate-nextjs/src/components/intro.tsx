/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text, tokens } from '../design-system';

export const styles = {
  intro: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
  `,
  title: css`
    width: 100%;
    line-height: ${tokens.lineHeights.base};
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid;
    letter-spacing: -0.05em;
    padding: 1rem;
    border-color: ${tokens.colors.primaryBase};
    box-shadow: ${tokens.colors.primaryBase} 4px 4px 0 0;
  `,
};

export const Intro = () => {
  return (
    <Box as="div" css={styles.intro}>
      <Text as="h1" css={styles.title}>
        <div>A Design System Template</div>
        <div
          css={css`
            background-image: linear-gradient(
              135deg,
              ${tokens.colors.primaryBase},
              ${tokens.colors.primary200}
            );
            background-clip: text;
            color: transparent;
          `}>
          That Scales.
        </div>
      </Text>
    </Box>
  );
};
