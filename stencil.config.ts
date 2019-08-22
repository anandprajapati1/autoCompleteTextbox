import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: 'autocompletetextbox',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/variable.scss',
        'src/globals/mixin.scss'
      ]
    }),
    nodePolyfills(),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  // testing: {
  //   testPathIgnorePatterns: [...]
  // }
};
