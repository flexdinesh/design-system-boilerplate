/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ThemeSwitcher } from 'src/components/theme-switcher';
import { Box } from 'src/design-system';

export const styles = {
  header: css`
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 0.5rem;
    backdrop-filter: saturate(200%) blur(1ex);
    background-image: radial-gradient(
      ellipse at 50% 0,
      hsla(210, 18%, 84%, 0.2) 0,
      hsla(210, 18%, 84%, 0) 80%
    );
  `,
  logo: css`
    pointer-events: none;
    justify-self: center;
  `,
};

export const Header = () => {
  return (
    <Box as="header" css={styles.header}>
      <ThemeSwitcher />
    </Box>
  );
};
