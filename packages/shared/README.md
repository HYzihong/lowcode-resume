<!--
 * @Author: hy
 * @Date: 2022-05-15 16:34:13
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-15 16:58:06
 * @FilePath: /resume-cook/packages/shared/README.md
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
-->

# resume-cook shared

```json
{
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs", // import {} form 'shared'
      "require": "./dist/index.cjs" // const {} = require('shared')
    },
    "./a": {
      "import": "./dist/index.mjs", // import {} form 'shared/a'
      "require": "./dist/index.cjs" // const {} = require('shared/a')
    }
  },
  "scripts": {
    "build": "unbuild",
    "stub": "unbuild --stub", // 在开发模式下我们用这个打包我们直接改源码就好了，这时我们项目用到的当前插件就自动改变了
    "test": "vitest"
  }
}
```
