import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config?.resolve?.alias,
        assets: path.resolve(__dirname, "../src/assets"),
        components: path.resolve(__dirname, "../src/components"),
        constants: path.resolve(__dirname, "../src/constants"),
        hooks: path.resolve(__dirname, "../src/hooks"),
        utils: path.resolve(__dirname, "../src/utils"),
        styles: path.resolve(__dirname, "../src/styles")
      }
    };

    return config;
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
    // "@storybook/preset-scss"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};
export default config;
