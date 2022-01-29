import { css } from '@emotion/react';
import { tokens } from 'src/design-system';

const headerHeight = '6rem';
const footerHeight = '4rem';

export const container = css`
  min-height: 100vh;
  padding: 0 2rem;
`;

export const header = css`
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const main = css`
  min-height: calc(100vh - ${headerHeight} - ${footerHeight});
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const footer = css`
  height: ${footerHeight};
  display: flex;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
