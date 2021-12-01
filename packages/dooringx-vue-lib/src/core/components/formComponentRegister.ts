/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 11:10:18
 * @LastEditTime: 2021-12-01 11:13:13
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-vue-lib/src/core/components/formComponentRegister.ts
 */

import { CreateOptionsRes } from './formTypes'
export interface ContainerConfigItem {
  type: string
  option: CreateOptionsRes<any, any>
}
export const formComponentRegisterFn = (formComponent: FormComponentRegister, modules: Record<string, Function>) => {
  Object.keys(modules).forEach((v) => {
    formComponent.register(v, modules[v])
  })
}

/**
 *
 * 拿到form组件地址和状态
 * 获取配置container配置项和普通组件配置项
 * @export
 * @class FormComponentRegister
 */
export class FormComponentRegister {
  constructor(
    public formMap: Record<string, Function> = {},
    public listener: Function[] = [],
    public eventMap: Record<string, Function[]> = {},
    public containerConfig: Array<ContainerConfigItem> = []
  ) {}
  getMap() {
    return this.formMap
  }
  getComp(name: string) {
    return this.formMap[name]
  }
  getConfig() {
    return this.containerConfig
  }
  setConfig(config: Array<ContainerConfigItem>) {
    this.containerConfig = config
  }
  /**
   *
   *  同步注册方法
   * @memberof FormComponentRegister
   */
  register(name: string, ele: Function) {
    this.formMap[name] = ele
  }

  emit() {
    this.listener.forEach((v) => v())
  }

  on(event: string, fn: Function) {
    if (!this.eventMap[event]) {
      this.eventMap[event] = []
    }
    this.eventMap[event].push(fn)
    return () => this.eventMap[event].filter((v) => v !== fn)
  }
}
