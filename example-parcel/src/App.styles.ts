import { css, keyframes } from '@emotion/react';
import {tokens} from 'design-system/dist'

export const app = css`
  text-align: center;
`;

const appLogoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const appLogo = css`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoSpin} infinite 20s linear;
  }
`;

export const appHeader = css`
  background-color: ${tokens.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${tokens.colors.body};
`;

export const appLink = css`
  color: ${tokens.colors.primary500};
`;
