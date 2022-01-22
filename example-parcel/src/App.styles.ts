import { css } from '@emotion/react';
import { tokens } from './design-system';

export const app = css`
  height: 100vh;
  text-align: center;
  background: ${tokens.colors.background};
`;

export const appLink = css`
  color: ${tokens.colors.primary500};
`;
