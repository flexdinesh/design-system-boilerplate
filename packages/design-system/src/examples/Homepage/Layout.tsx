/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import React from 'react';
import { CSSReset, ThemeProvider, themes, tokens } from '../../';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider themes={themes} defaultTheme="Light">
      {children}
    </ThemeProvider>
  );
};

export const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <Global
        styles={`
          body {
            background: ${tokens.colors.background};
            transition: background 0.5s ease-out;
          }
      `}
      />
      <Providers>{children}</Providers>
    </React.Fragment>
  );
};
