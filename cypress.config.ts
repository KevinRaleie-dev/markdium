import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'x82tar',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
