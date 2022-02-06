/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const pageWrapper = css`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Page: React.FC = ({ children }) => {
  return <div css={pageWrapper}>{children}</div>;
};
