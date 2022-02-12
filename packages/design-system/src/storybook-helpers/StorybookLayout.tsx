import React from 'react';
import { Box } from '../components/Box';
import { CSSReset } from '../components/CSSReset';
import { ThemeProvider } from '../components/ThemeProvider';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { themes } from '../core/theme';

export const StorybookLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <ThemeProvider themes={themes} defaultTheme="light">
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