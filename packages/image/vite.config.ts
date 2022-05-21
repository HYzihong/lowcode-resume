/*
 * @Author: hy
 * @Date: 2022-05-21 23:55:27
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-22 00:08:54
 * @FilePath: /resume-cook/packages/image/vite.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { defineConfig } from 'vite'
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: 'RCImage',
      fileName: 'rc-image',
      formats: ['umd']
    }
  }
})

// windows.RCImage