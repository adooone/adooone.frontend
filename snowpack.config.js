// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/dist',
    public: { url: '/', static: true, resolve: false },
  },
  alias: {
    '~': './src',
  },
  plugins: [
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-sass',
      {
        native: true,
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // fallback: 'index.html',
  },
  buildOptions: {
    /* ... */
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
};
