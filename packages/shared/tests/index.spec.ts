/*
 * @Author: hy
 * @Date: 2022-05-15 17:03:09
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-15 17:16:29
 * @FilePath: /resume-cook/packages/shared/tests/index.spec.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { describe, expect, test } from 'vitest';
import { sum } from '../src'

describe('shard:', () => {
  test('happy path', () => {
    expect(sum(1, 1)).toBe(2)
  })
})