module.exports = {
  stories: [
    "../stories/components/**/*.stories.@(tsx|ts|mdx|md)",
    "../stories/mixins/**/*.stories.@(tsx|ts|mdx|md)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-viewport",
  ],
};
