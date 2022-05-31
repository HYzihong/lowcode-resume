/**
 * @Author: hy
 * @Date: 2022-05-26 11:16:43
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-06-01 02:03:04
 * @FilePath: /resume-cook/.eslintrc.js
 * @Copyright 2022 hy, All Rights Reserved.
 * @仅供学习使用~
 **/
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
    quotes: [0, "single"],
    "@typescript-eslint/quotes": [0, "single"],
    semi: [0, "never"],
    "@typescript-eslint/semi": [0, "never"],
  },
});
