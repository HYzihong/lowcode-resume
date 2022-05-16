/*
 * @Author: hy
 * @Date: 2022-05-16 22:29:34
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-16 22:31:42
 * @FilePath: /resume-cook/packages/shared/src/material/index.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */

// 物料分类
export interface RCategory {
  // 基础组件 业务组件 高级组件 
  // 基础模板 高级模板
  // 数据模块
  name: string
}

export interface RMaterialData {
  // 版本
  version: string
  // 物料cdn源
  source: string
}

// 物料
export interface RMaterial extends RMaterialData {
  // 类型 组件？模块？模板？
  type: string
  // 分类
  category: RCategory
  // 数据
  date: RMaterialData[]
  // // default版本
  // version: string
}

// 对于物料的操作
// 怎么样去加载，怎么样去运用 这个物料
export interface RMaterialLoader {
  type: string
  load(material: RMaterial): Promise<any>
}