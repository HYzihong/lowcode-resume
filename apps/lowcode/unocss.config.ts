/*
 * @Author: hy
 * @Date: 2022-05-24 12:29:51
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-27 23:06:59
 * @FilePath: /resume-cook/apps/lowcode/unocss.config.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  rules: [
    // min-w-1/3 
    // ['min-w-31', { 'min-width': `${1 / 3}vw` }]
    // @ts-ignore
    // [/^min-w-(\d+)$/, ([, d]) => ({ 'min-width': `${d / 3}vw` })],
    // @ts-ignore
    // [/^min-h-(\d+)$/, ([, d]) => ({ 'min-height': `${d / 3}vh` })],
  ],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
