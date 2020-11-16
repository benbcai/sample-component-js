const merge = require('webpack-merge');
const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');
const {
  DirectorySwitcherPlugin,
  LocalPackageAliasPlugin,
  TerraDevSiteEntrypoints,
  TerraDevSite,
} = require('terra-dev-site');

const { OrionDevSitePlugin } = require('orion-dev-site-plugin');

/**
* Generates the file representing app name configuration.
*/
const devSiteConfig = (env = {}, argv = {}) => {
  const production = argv.p;

  return {
    entry: TerraDevSiteEntrypoints,
    plugins: [
      new TerraDevSite({
        env,
        sites: [OrionDevSitePlugin],
      }),
    ],
    resolve: {
      plugins: [
        new DirectorySwitcherPlugin({
          shouldSwitch: !production,
        }),
        new LocalPackageAliasPlugin(),
      ],
    },
  };
};

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), devSiteConfig(env, argv))
);

module.exports = mergedConfig;
