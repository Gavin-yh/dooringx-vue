/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 10:44:59
 * @LastEditTime: 2021-12-01 14:55:15
 * @LastEditors: GeekQiaQia
 * @Description:  通过 initFormRegist 注册form 表单组件；
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/plugin/regist-form-components/index.ts
 */

import input from './form-components/input'
import position from './form-components/position'
import size from './form-components/size'

/**
 * @description for test temp  any type
 */
export const Formmodules: Record<string, Function> = {
  input,
  position,
  size
}
