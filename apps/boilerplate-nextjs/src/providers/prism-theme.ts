import { tokens } from '../design-system';

export const theme = {
  plain: {
    color: tokens.colors.textHeading,
    backgroundColor: '#f6f7f9',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: tokens.colors.textBody,
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#eC1337',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#94A3B8',
      },
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted',
      ],
      style: {
        color: '#04865d',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#0080A8',
      },
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: tokens.colors.textHeading,
      },
    },
    {
      types: ['function-variable'],
      style: {
        color: '#7f54e0',
      },
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#037dbb',
      },
    },
  ],
};
