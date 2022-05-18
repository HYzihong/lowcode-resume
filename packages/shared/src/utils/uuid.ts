/*
 * @Author: hy
 * @Date: 2022-05-18 23:11:59
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-19 00:17:40
 * @FilePath: /resume-cook/packages/shared/src/utils/uuid.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { customAlphabet } from 'nanoid/async'
export const uuid = async () => {
  return await customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz*$@^&*_+=', 10)()
}