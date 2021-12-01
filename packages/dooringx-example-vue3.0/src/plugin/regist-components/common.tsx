/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 14:15:35
 * @LastEditTime: 2021-12-01 14:15:47
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/plugin/regist-components/common.tsx
 */
import { createPannelOptions } from '@dooring/dooringx-vue-lib/src/core/components/formTypes'

import { FormMap } from '../form-types'

export const CommonStyle = [
  createPannelOptions<FormMap, 'position'>('position', {
    receive: 'position', //用于发送回的props，必传 ,跨组件传递需要指定额外字
    label: '位置',
    data: [0, 0]
  }),
  createPannelOptions<FormMap, 'size'>('size', {
    receive: 'sizeData', //用于发送回的props，必传 ,跨组件传递需要指定额外字
    label: '大小',
    data: [0, 0]
  })
]
