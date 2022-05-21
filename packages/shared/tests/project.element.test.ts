/*
 * @Author: hy
 * @Date: 2022-05-21 22:31:57
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-21 23:21:18
 * @FilePath: /resume-cook/packages/shared/tests/project.element.test.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */

import { describe, expect, test } from 'vitest'
import { PageElement } from '../src/project/element'

describe('project element ==>', () => {
  const element = PageElement.create()
  test('element create :', () => {
    expect(element.name).toBe('New Element Item')
  })
  test('element getJson', () => {
    // expect(element.getJson()).toMatchInlineSnapshot() // 抛出执行的快照
    expect(element.getJson()).toMatchObject(
      {
        "id": "",
        "mId": "",
        "mVersion": "",
        "name": "New Element Item",
        "props": {},
        "style": {},
      }
    )
  })

})
