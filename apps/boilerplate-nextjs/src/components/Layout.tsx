/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import React from 'react';
import Meta from '../components/meta';
import { CSSReset, tokens } from '../design-system';
import Providers from '../providers';

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
