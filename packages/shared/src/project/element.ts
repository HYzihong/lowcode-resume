/*
 * @Author: hy
 * @Date: 2022-05-17 01:31:20
 * @LastEditors: hy
 * @Description: 
 * @LastEditTime: 2022-05-18 23:04:21
 * @FilePath: /resume-cook/packages/shared/src/project/element.ts
 * Copyright 2022 hy, All Rights Reserved. 
 * 仅供学习使用~
 */


export interface IElementStyle {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  zIndex?: number;
}

export interface RElement {
  id: string;
  name: string;
  // 物料ID
  mId: string;
  // 物料版本
  mVersion: string;
  // 元素样式
  style: IElementStyle;
  // 元素的属性
  props: Record<string, any>;
}

export class PageElement implements RElement {
  public static create(e?: RElement) {
    const element = new PageElement();
    if (e) {
      const { id, name, mId, mVersion, props, style } = e
      element.id = id;
      element.name = name;
      element.mId = mId;
      element.mVersion = mVersion;
      element.style = style;
      element.props = props;
    }
    return element;
  }

  public id: string = '';

  public name = 'New Element Item';

  public mId: string = '';

  public mVersion: string = '';

  public style: IElementStyle = {};

  public props: Record<string, any> = {};


  /**
   * getJson 序列化
   */
  public getJson(): RElement {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion,
      style: this.style,
      props: this.props,
    };
  }
}