/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 10:52:03
 * @LastEditTime: 2021-12-01 10:52:03
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/plugin/regist-form-components/types.ts
 */

export interface CreateOptionsResAll {
  type: string
  option: any
}
export interface CreateOptionsRes<T, K extends keyof T> {
  type: keyof T
  option: T[K]
}
export declare function createPannelOptions<T, K extends keyof T>(type: K, option: T[K]): CreateOptionsRes<T, K>
