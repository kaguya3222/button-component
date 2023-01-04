const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../public/fonts"),
            to: "fonts",
          },
        ],
      })
    );

    return config;
  },
};
