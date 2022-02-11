/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import { reset } from './reset';

export const CSSReset = () => {
  return <Global styles={reset} />;
};

if (process.env.NODE_ENV !== 'production') {
  CSSReset.displayName = 'CSSReset';
}
