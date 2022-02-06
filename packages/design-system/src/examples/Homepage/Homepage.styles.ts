import { css } from '@emotion/react';

const footerHeight = '10rem';
export const container = css`
  min-height: 100vh;
  padding: 0 2rem;
`;

export const main = css`
  min-height: calc(100vh - ${footerHeight});
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
