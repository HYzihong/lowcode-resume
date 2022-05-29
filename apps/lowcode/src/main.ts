/*
 * @Author: hy
 * @Date: 2022-05-13 21:59:02
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-29 23:07:26
 * @FilePath: /resume-cook/apps/lowcode/src/main.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import type { RMaterial } from '@resume-cook/shared'
import { Project } from '@resume-cook/shared'
import App from './App.vue'
import { loadCompScript } from './utlis'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { vuetify } from './modules/vuetify'

// import 'vuetify/styles';

// import { createVuetify } from 'vuetify';
// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
// import '@mdi/font/css/materialdesignicons.css';


const materialList: RMaterial[] = [
  {
    id: '',
    type: 'component',
    category: {
      name: '基础组件',
      cols: 6
    },
    // 当前默认版本
    version: '0.0.1',
    source: 'rc-image.0.0.1.umd.js',
    name: 'LcImage',
    title: '图片',
    description: '',
    tags: [],
    // 预览图
    thumbnail: '',
    //
    data: [
      {
        version: '0.0.1',
        source: 'rc-image.0.0.1.umd.js',
      },
    ],
  },
]

// eslint-disable-next-line no-console
console.log(Project.create())

// loadCompScript('rc-image.0.0.1.umd.js').then(() => {
//   // eslint-disable-next-line no-console
//   console.log((window as any).RCImage)
// })

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.use(vuetify)
    // install all modules under `modules/`
    // console.log('ctx ==>', ctx);
    // ctx.app.component('rc-image', (window as any).RCImage.render)

    // eslint-disable-next-line array-callback-return
    Promise.all(materialList.map((m: RMaterial) => {
      loadCompScript(m.source).then(() => {
        const { render } = (window as any).RCImage
        ctx.app.component('rc-image', render)
      })
    }))

    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
