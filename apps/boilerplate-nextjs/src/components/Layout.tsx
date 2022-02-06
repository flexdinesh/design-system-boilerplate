/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { CSSReset, tokens } from 'src/design-system';
import Providers from 'src/providers';
import Meta from 'src/components/meta';
import React from 'react';

export const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Meta />
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
