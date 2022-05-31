/*
 * @Author: hy
 * @Date: 2022-05-28 12:44:23
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-06-01 01:10:58
 * @FilePath: /resume-cook/apps/lowcode/src/stores/material.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */

import type { RMaterial } from '@resume-cooking/shared'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface TempMaterial extends RMaterial {
  isShow?: boolean
}

export const useMaterialStore = defineStore('material', () => {
  const materials = ref<TempMaterial[]>([
    {
      id: "&8m5*m2jv**_93xpnagpn&vzux*k6&unijv9",
      type: 'component',
      category: {
        name: '基础组件',
        cols: 12,
      },
      // 当前默认版本
      version: '0.0.1',
      source: 'rc-image.0.0.1.umd.js',
      name: 'LcImage',
      title: '基本信息',
      description: "图片图片图片图片图片1",
      tags: [],
      // 预览图
      thumbnail: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      //
      data: [
        {
          version: '0.0.1',
          source: 'rc-image.0.0.1.umd.js',
        },
      ],
    },
    {
      id: "@13qzck26t8p8mb=b2yubfs5xuk2r1q0reuc",
      type: 'component',
      category: {
        name: "基础组件",
        cols: 12,
      },
      // 当前默认版本
      version: '0.0.1',
      source: 'rc-image.0.0.1.umd.js',
      name: 'LcImage',
      title: '教育信息',
      description: "图片图片图片图片2",

      tags: [],

      // 预览图
      thumbnail: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      //
      data: [
        {
          version: '0.0.1',
          source: 'rc-image.0.0.1.umd.js',
        },
      ],
    },
  ])

  /**
   *
   * @param list - new material to set
   */
  function setMaterialList(list: TempMaterial[]): void {
    list.forEach((item) => {
      item.isShow = false
      materials.value?.push(item)
    })
  }

  /**
   * @description: set material is show action
   * @param {string} id
   * @return {*}
   */
  function setShowAction(id: string): void {
    if (materials.value) {
      materials.value.forEach((item) => {
        if (item.id === id)
          item.isShow = !item.isShow
      })
    }
  }

  return {
    materials,
    setMaterialList,
    setShowAction,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMaterialStore, import.meta.hot))
