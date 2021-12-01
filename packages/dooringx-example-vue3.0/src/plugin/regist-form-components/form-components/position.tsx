/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 14:22:49
 * @LastEditTime: 2021-12-01 16:05:17
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/plugin/regist-form-components/form-components/position.tsx
 */
import { ref } from 'vue'
import { deepCopy, UserConfig, IBlockType } from '@dooring/dooringx-vue-lib'
import { FormMap } from '../../form-types'
import { CreateOptionsRes } from '../types'

interface MPositionProps {
  data: CreateOptionsRes<FormMap, 'position'>
  current: IBlockType
  config: UserConfig
}

const MPosition = (props: MPositionProps) => {
  const option = props.data?.option || {}
  const store = props.config.getStore()
  const left = ref(props.current.left)
  const top = ref(props.current.top)

  return (
    <el-row style={{ padding: '10px 8px' }}>
      <el-col span={4} style={{ lineHeight: '40px', verticalAlign: 'middle' }}>
        {(option as any)?.label || '位置'}：
      </el-col>
      <el-col span={20} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>X: </span>
          <el-input-number min={1} size="mini" v-model={left.value} controls-position="right" />
        </div>
        <div style={{ marginLeft: 15, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Y: </span>
          <el-input-number min={1} size="mini" v-model={top.value} controls-position="right" />
        </div>
      </el-col>
    </el-row>

    // <Row style={{ padding: '10px 20px' }}>
    //   <Col span={6} style={{ lineHeight: '30px' }}>
    //     {(option as any)?.label || '位置'}：
    //   </Col>
    //   <Col
    //     span={18}
    //     style={{ display: 'flex', justifyContent: 'space-between' }}
    //   >
    //     <div>
    //       <span>X: </span>
    //       <InputNumber
    //         value={props.current.left}
    //         onChange={(e) => {
    //           const clonedata = deepCopy(store.getData());
    //           const newblock = clonedata.block.map((v: IBlockType) => {
    //             if (v.id === props.current.id) {
    //               v.left = e;
    //             }
    //             return v;
    //           });
    //           store.setData({ ...clonedata, block: [...newblock] });
    //         }}
    //       />
    //     </div>
    //     <div style={{ marginLeft: 15 }}>
    //       <span>Y: </span>
    //       <InputNumber
    //         value={props.current.top}
    //         onChange={(e) => {
    //           const clonedata = deepCopy(store.getData());
    //           const newblock = clonedata.block.map((v: IBlockType) => {
    //             if (v.id === props.current.id) {
    //               v.top = e;
    //             }
    //             return v;
    //           });
    //           store.setData({ ...clonedata, block: [...newblock] });
    //         }}
    //       />
    //     </div>
    //   </Col>
    // </Row>
  )
}

export default MPosition
