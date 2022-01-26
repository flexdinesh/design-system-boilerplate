module.export = {
  extends: '@parcel/config-default',
  transformers: {
    '*.svg': ['...', '@parcel/transformer-svg-react'],
    '*.{js,mjs,jsx,cjs,ts,tsx}': [
      '@parcel/transformer-js',
      '@parcel/transformer-react-refresh-wrap',
    ],
  },
};
