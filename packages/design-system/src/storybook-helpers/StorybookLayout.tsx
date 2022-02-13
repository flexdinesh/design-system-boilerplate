/** @jsxImportSource @emotion/react */
import React from 'react';
import type { FC } from 'react';
import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { CSSReset } from '../components/CSSReset';
import { ThemeProvider } from '../components/ThemeProvider';
import { themes } from '../core/theme';
import { useToggleTheme } from '../hooks/useToggleTheme';

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div
      css={{
        position: 'fixed',
        top: 0,
        right: 0,
      }}>
      <Button size="small" margin="medium" onClick={toggleTheme}>
        {theme}
      </Button>
    </div>
  );
};

if (process.env.NODE_ENV !== 'production') {
  ThemeSwitcher.displayName = 'ThemeSwitcher';
}

export const StorybookLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <ThemeProvider themes={themes} defaultTheme="Light">
        <ThemeSwitcher />
        <Box
          width="100%"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundColor={'background'}>
          {children}
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};
