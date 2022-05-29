/*
 * @Author: hy
 * @Date: 2022-05-28 12:44:23
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-29 23:03:27
 * @FilePath: /resume-cook/apps/lowcode/src/stores/material.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { RMaterial } from '@resume-cook/shared'
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
        cols: 12
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
        cols: 12
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
  const showList = ref<{ id: string; isShow: boolean }[]>()
  /**
   * Current name of the user.
   */
  // const savedName = ref('')
  // const previousNames = ref(new Set<string>())

  // const _materials = computed(() => TempMaterial('id,type,category,version,source,name,title,description,tags,thumbnail,data'))
  // const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  // function TempMaterial(argus: string) {
  //   const _ele = argus.split(',')

  //   const material = {
  //     isShow: false,
  //   }
  //   return material
  // }

  /**
   *
   * @param list - new material to set
   */
  function setMaterialList(list: TempMaterial[]): void {
    // list.forEach(item => {
    //   showList.value?.push({
    //     id: item.id,
    //     isShow: false
    //   })
    // })
    // materials.value?.push(...list)
    list.forEach(item => {
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
    // if (showList.value)
    //   showList.value.forEach(item => {
    //     if (item.id === id) {
    //       item.isShow = !item.isShow
    //     }
    //   });
    // if (showList.value)
    // showList.value.forEach(item => {
    materials.value.forEach(item => {
      if (item.id === id) {
        item.isShow = !item.isShow
      }
    });


  }

  return {
    materials,
    showList,
    setMaterialList,
    setShowAction
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMaterialStore, import.meta.hot))
