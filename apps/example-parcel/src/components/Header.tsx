/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Text } from 'src/design-system';
import logo from 'src/images/logo.svg';

export const styles = {
  header: css`
    height: 6rem;
    display: grid;
    grid-template-columns: 8rem 1fr 8rem;
    align-items: center;
    justify-content: center;
  `,
  logo: css`
    height: 4rem;
    pointer-events: none;
    justify-self: center;
  `,
};

const Header = () => {
  return (
    <Box as="header" css={styles.header}>
      <img src={logo} css={styles.logo} alt="logo" />
      <Text as="h1" css={{ textAlign: 'center' }}>
        Design System Boilerplate
      </Text>
    </Box>
  );
};

export default Header;
