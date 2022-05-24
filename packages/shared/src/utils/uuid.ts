/*
 * @Author: hy
 * @Date: 2022-05-18 23:11:59
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-24 21:09:58
 * @FilePath: /resume-cook/packages/shared/src/utils/uuid.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { customAlphabet } from 'nanoid'

export function uuid() { return customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz*$@^&*_+=', 36)() }

// import { customAlphabet } from 'nanoid/async'
// const _nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz*$@^&*_+=', 16)
// export async function uuid() { return await _nanoid() }
//  ERROR: Top-level await is not available in the configured target environment ("es2020")