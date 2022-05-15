/*
 * @Author: hy
 * @Date: 2022-05-15 16:14:06
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-15 16:32:03
 * @FilePath: /resume-cook/packages/shared/build.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  // 打包 ts 声明文件
  declaration: true,
  rollup: {
    // 输出cjs文件
    emitCJS: true,
  },
});