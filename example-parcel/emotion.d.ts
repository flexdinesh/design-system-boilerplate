import '@emotion/react';
import type { Tokens } from './src/design-system';

declare module '@emotion/react' {
  export interface Theme extends Tokens {}
}
