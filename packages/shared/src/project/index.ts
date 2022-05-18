/*
 * @Author: hy
 * @Date: 2022-05-16 22:30:59
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-18 23:08:10
 * @FilePath: /resume-cook/packages/shared/src/project/index.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */

import { uuid } from "../utils"
// import { RElement, PageElement } from "./element"
import { Page, RPage } from "./page"


// export * from './element'
// export * from './page'

export type projectType = "h5" | "PC" | "wx" | ""

export interface RProject {
  id: string
  name: string
  type: projectType,
  description: string
  // 页面
  pages: RPage[]
}

// export interface RPage {
//   id: string
//   title: string
//   name: string
//   description: string
//   elements: RElement[]
// }

// export interface RElement {
//   id: string
//   name: string
//   // 物料ID
//   mId: string
//   // 物料版本
//   mVersion: string
// }


export class Project implements RProject {
  public static create(p?: RProject) {
    const project = new Project();
    if (p) {
      const { id, name, type, description, pages } = p
      project.id = id;
      project.name = name;
      project.type = type;
      project.description = description;
      project.pages = pages.map(page => Page.create(page));
    } else {
      project.addPage(Page.create());
    }
    // const page = Page.create()
    // project.addPage(page)
    return project
  }
  public id: string = uuid();
  public name: string = 'New Project Item';
  public type: projectType = "h5";
  public description: string = '';
  public pages: RPage[] = []
  // 初始化的时候给一个默认值
  // constructor(name: string = '', description: string = '', _pages: RPage[] = []) {
  constructor() { }

  /**
   * addPage
   */
  public addPage(page: Page) {
    this.pages.push(page)
  }

  /**
   * removePage
   */
  public removePage(page: Page) {
    const index = this.pages.indexOf(page)
    if (index >= 0) {
      this.pages.splice(index, 0)
    }
  }


  /**
   * insertPage
   */
  public insertPage(index: number, page: Page) {
    this.pages.splice(index, 0, page)
  }

  //序列化
  public getJson(): RProject {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      description: this.description,
      pages: this.pages,
      // pages: this.pages,
    };
  }
}


// // page
// export class Page implements RPage {
//   public static create(p?: RPage) {
//     const page = new Page();
//     if (p) {// page 已存在的情况下
//       page.name = p.name;
//       page.description = p.description;
//       page.elements = p.elements.map(element => PageElement.create(element));
//     }
//     return page
//   }
//   public id: string = uuid();
//   public name: string = '';
//   public title: string = '';
//   // public type: string = "";
//   public description: string = '';
//   public elements: RElement[] = []
//   // 初始化的时候给一个默认值
//   // constructor(name: string = '', description: string = '', _pages: RPage[] = []) {
//   constructor() { }

//   /**
//    * addElement
//    */
//   public addElement(elements: RElement) {
//     this.elements.push(elements)
//   }

//   /**
//    * removeElement
//    */
//   public removeElement(elements: RElement) {
//     const index = this.elements.indexOf(elements)
//     if (index >= 0) {
//       this.elements.splice(index, 0)
//     }
//   }

//   /**
//    * insertElement
//    */
//   public insertElement(index: number, element: RElement) {
//     this.elements.splice(index, 0, element)
//   }

//   /**
//    * getJson 序列化
//    */
//   public getJson(): RPage {
//     return {
//       id: this.id,
//       title: this.title,
//       name: this.name,
//       description: this.description,
//       elements: this.elements,
//     };
//   }
// }

