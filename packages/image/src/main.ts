/*
 * @Author: hy
 * @Date: 2022-05-22 00:08:10
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-22 11:32:29
 * @FilePath: /resume-cook/packages/image/src/main.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import App from './index.vue'

export default {
  render: App,
  editorProps: {
    src: {
      type: 'string',
      defaultValue: ''
    },
    des: {
      type: 'string',
      defaultValue: ''
    }
  }
  // 
}