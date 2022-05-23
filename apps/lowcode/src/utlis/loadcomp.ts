/*
 * @Author: hy
 * @Date: 2022-05-22 11:39:35
 * @LastEditors: hy
 * @Description:
 * @LastEditTime: 2022-05-22 11:57:38
 * @FilePath: /resume-cook/apps/lowcode/src/utlis/loadcomp.ts
 * Copyright 2022 hy, All Rights Reserved.
 * 仅供学习使用~
 */
export function loadCompScript(src: string) {
  return new Promise((resolve, reject) => {
    const _sc = document.createElement('script')
    function onLoad() {
      resolve(src)
      _sc.onload = _sc.onerror = null
    }
    _sc.onload = onLoad
    _sc.onerror = reject
    _sc.src = src
    _sc.crossOrigin = 'anonymous'
    document.head.append(_sc)
  })
}
