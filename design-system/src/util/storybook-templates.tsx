import React from 'react';
import CSSReset from 'components/CSSReset';
import ThemeProvider from 'components/ThemeProvider';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { themes } from 'core/theme';

('components/ThemeSwitcher');
export const StorybookThemeWrapper: React.FC = ({ children }) => {
  return (
    <>
      <CSSReset />
      <ThemeProvider themes={themes} defaultTheme="light">
        <ThemeSwitcher />
        {children}
      </ThemeProvider>
    </>
  );
};
