/*
 * @Author: hy
 * @Date: 2022-05-21 23:55:27
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-22 11:31:03
 * @FilePath: /resume-cook/packages/image/vite.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/main.ts",
      name: 'RCImage',
      fileName: `rc-image.${pkg.version}`,
      formats: ['umd']
    }
  }
})

// windows.RCImage