/*
 * @Author: hy
 * @Date: 2022-05-13 21:59:02
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-15 20:30:04
 * @FilePath: /resume-cook/apps/lowcode/src/main.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import sum from '@resume-cook/shared'
import App from './App.vue'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// eslint-disable-next-line no-console
console.log(sum(1, 1))

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
