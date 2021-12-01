/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 10:46:28
 * @LastEditTime: 2021-12-01 15:43:46
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/plugin/regist-form-components/form-components/input.tsx
 */
import { deepCopy, UserConfig, IBlockType } from '@dooring/dooringx-vue-lib'
import { ref } from 'vue'
import { FormMap } from '../../form-types'
import { CreateOptionsRes } from '../types'

interface MInputProps {
  data: CreateOptionsRes<FormMap, 'input'>
  current: IBlockType
  config: UserConfig
}

function MInput(props: MInputProps) {
  const option = props.data?.option || {}
  const store = props.config.getStore()
  const handleChange = (e) => {
    const receive = (option as any).receive
    const clonedata = deepCopy(store.getData())
    const newblock = clonedata.block.map((v: IBlockType) => {
      if (v.id === props.current.id) {
        v.props[receive] = e
      }
      return v
    })
    store.setData({ ...clonedata, block: [...newblock] })
  }
  const inputVal = ref(props.current.props[(option as any).receive] || '')

  return (
    <el-row style={{ padding: '10px 8px' }}>
      <el-col span={4} style={{ lineHeight: '40px', verticalAlign: 'middle' }}>
        {(option as any)?.label || '文字'}：
      </el-col>
      <el-col span={20} style={{ display: 'flex', alignItems: 'center' }}>
        <el-input
          placeholder="Please input"
          v-model={inputVal.value}
          clearable
          onInput={(e) => {
            handleChange(e)
          }}
        />
      </el-col>
    </el-row>
  )
}

export default MInput
