/*
 * @Author: hy
 * @Date: 2022-05-15 16:55:51
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-21 22:48:14
 * @FilePath: /resume-cook/packages/shared/vitest.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts']
  },
});