/*
 * @Author: hy
 * @Date: 2022-05-18 23:11:59
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-18 23:12:55
 * @FilePath: /resume-cook/packages/shared/src/utils/uuid.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */

/**
 * 基于时间的UUID
 * @description: 基于时间的UUID通过计算当前时间戳、随机数和机器MAC地址得到。
 * 由于在算法中使用了MAC地址，这个版本的UUID可以保证在全球范围的唯一性。
 * 但与此同时，使用MAC地址会带来安全性问题，这就是这个版本UUID受到批评的地方。
 * 如果应用只是在局域网中使用，也可以使用退化的算法，以IP地址来代替MAC地址－－Java的UUID往往是这样实现的（当然也考虑了获取MAC的难度）。
 * 但由于时间因素的顺序为时间低位在前，高位在后，不适合做主键，可以组合。
 */
function uuid1(): string {
  let uArr: string[] = [];
  const hexDigits: string = "0123456789abcdef";
  for (var i = 0; i < 36; i++) { uArr[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1); }
  uArr[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  uArr[19] = hexDigits.substring((Number(uArr[19]) & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  uArr[8] = uArr[13] = uArr[18] = uArr[23] = "-";
  return uArr.join("");

}
/*

*/
/**
 * @description: 基于名字的UUID（MD5）
 * 基于名字的UUID通过计算名字和名字空间的MD5散列值得到。
 * 这个版本的UUID保证了：
 *  相同名字空间中不同名字生成的UUID的唯一性
 *  不同名字空间中的UUID的唯一性
 *  相同名字空间中相同名字的UUID重复生成是相同的
 * @return {*}
 */
function uuid2(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    console.log(c);
    const r = Math.random() * 16 | 0;
    console.log(r);
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    console.log(v);
    return v.toString(16);
  });
}

export function uuid(): string {
  // 1~4
  const key = Math.floor(Math.random() * 4) + 1
  let res = ''
  switch (key) {
    case 1:
      res = uuid1()
      break;
    case 2:
      res = uuid2()
      break;
    default:
      console.log(key, res);
      break;
  }
  return res
}