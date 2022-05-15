<!--
 * @Author: hy
 * @Date: 2022-05-15 16:34:13
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-15 16:46:39
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
  }
}
```
