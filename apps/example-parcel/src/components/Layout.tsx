/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { CSSReset, tokens } from 'src/design-system';
import Providers from 'src/providers';

const Layout: React.FC = ({ children }) => {
  return (
    <>
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
