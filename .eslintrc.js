const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  rules: {
    quotes: ["never"],
    "@typescript-eslint/quotes": ["never"],
  },
});
