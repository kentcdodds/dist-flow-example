const rollupBabel = require('rollup-plugin-babel')

module.exports = {
  input: './src/browser-module/index.js',
  output: {
    file: './dist/browser-module/my-lib.js',
    format: 'es',
  },
  exports: 'named',
  external: ['react'],
  plugins: [
    rollupBabel({
      babelrc: false,
      presets: [
        [
          'env',
          {
            targets: {
              browsers: ['ie 10', 'ios 7'],
            },
            modules: false,
          },
        ],
        'flow',
      ],
      plugins: ['transform-class-properties'],
    }),
  ],
}
