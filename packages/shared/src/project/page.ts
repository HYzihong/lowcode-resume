/*
 * @Author: hy
 * @Date: 2022-05-18 23:05:02
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-18 23:07:43
 * @FilePath: /resume-cook/packages/shared/src/project/page.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */

import { uuid } from "../utils"
import { PageElement, RElement } from "./element"

export interface RPage {
  id: string
  title: string
  name: string
  description: string
  elements: RElement[]
}


// page
export class Page implements RPage {
  public static create(p?: RPage) {
    const page = new Page();
    if (p) {// page 已存在的情况下
      page.name = p.name;
      page.description = p.description;
      page.elements = p.elements.map(element => PageElement.create(element));
    }
    return page
  }
  public id: string = uuid();
  public name: string = '';
  public title: string = '';
  // public type: string = "";
  public description: string = '';
  public elements: RElement[] = []
  // 初始化的时候给一个默认值
  // constructor(name: string = '', description: string = '', _pages: RPage[] = []) {
  constructor() { }

  /**
   * addElement
   */
  public addElement(elements: RElement) {
    this.elements.push(elements)
  }

  /**
   * removeElement
   */
  public removeElement(elements: RElement) {
    const index = this.elements.indexOf(elements)
    if (index >= 0) {
      this.elements.splice(index, 0)
    }
  }

  /**
   * insertElement
   */
  public insertElement(index: number, element: RElement) {
    this.elements.splice(index, 0, element)
  }

  /**
   * getJson 序列化
   */
  public getJson(): RPage {
    return {
      id: this.id,
      title: this.title,
      name: this.name,
      description: this.description,
      elements: this.elements,
    };
  }
}