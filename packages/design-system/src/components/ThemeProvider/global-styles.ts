import { tokens } from '../../core/theme';

export const globalBaseStyles = {
  '*, ::before, ::after': {
    boxSizing: 'border-box',
  },
  'html, body': {
    background: tokens.colors.background,
    color: tokens.colors.textBody,
    height: '100%',
    fontFamily: tokens.fontFamily.body,
    padding: 0,
    margin: 0,
    textRendering: 'geometricPrecision',
    WebkitTextSizeAdjust: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  a: {
    textDecoration: 'none',
    color: tokens.colors.link,
  },
  '::selection': {
    textShadow: 'none',
    // color: 'var(--selection-text)',
    // backgroundColor: 'var(--selection)',
  },
  pre: {
    lineHeight: 1.4,
  },
  img: {
    height: 'auto',
    maxWidth: '100%',
  },
  button: {
    color: 'inherit',
  },
  'a, button': {
    /* Anchors and buttons don't want double-tap on mobile to zoom */
    touchAction: 'manipulation',
  },
  ':focus:not(:focus-visible)': {
    outline: 'none',
  },
  '*:focus-visible, input:focus-visible, button:focus-visible, [type="submit"]:focus-visible':
    {
      //   outline: '1px dashed var(--focus)',
      outlineOffset: '3px',
    },
  'input:focus-visible': {
    outlineStyle: 'solid',
    outlineWidth: '3px',
    outlineOffset: 0,
  },
} as const;
