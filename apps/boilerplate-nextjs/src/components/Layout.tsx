/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { CSSReset, ThemeProvider, themes, tokens } from 'src/design-system';
import Providers from 'src/providers';
import Meta from 'src/components/Meta';

const Layout: React.FC = ({ children }) => {
  return (
    <>
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
    </>
  );
};

export default Layout;
