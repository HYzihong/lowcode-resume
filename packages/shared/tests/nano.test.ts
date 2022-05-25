/*
 * @Author: hy
 * @Date: 2022-05-24 15:24:14
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-25 23:18:08
 * @FilePath: /resume-cook/packages/shared/tests/nano.test.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */
import { describe, test, expect } from "vitest"
import { uuid } from '../src/utils/index'

describe('nano ==>', () => {
  test('nano create', () => {
    // test('element create :', async () => {
    // const _uuid = await uuid()
    // expect(_uuid().length).toBe(16)
    expect(uuid().length).toBe(36)

  })
  test('nano only one', () => {
    expect(uuid() == uuid()).toBe(false)
  })
})