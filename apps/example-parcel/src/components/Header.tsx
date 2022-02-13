/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, mediaQueries } from '../design-system';
import { ThemeSwitcher } from './theme-switcher';

export const styles = {
  header: css`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1rem;
    backdrop-filter: blur(1px);
    ${mediaQueries.medium} {
      backdrop-filter: none;
    }
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
