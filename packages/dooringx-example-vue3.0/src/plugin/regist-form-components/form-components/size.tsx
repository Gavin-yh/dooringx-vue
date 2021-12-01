/*
 * @Author: GeekQiaQia
 * @Date: 2021-12-01 14:31:37
 * @LastEditTime: 2021-12-01 15:54:00
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/plugin/regist-form-components/form-components/size.tsx
 */
import { ref } from 'vue'
import { deepCopy, UserConfig, IBlockType } from '@dooring/dooringx-vue-lib'
import { FormMap } from '../../form-types'
import { CreateOptionsRes } from '../types'

interface MSizeProps {
  data: CreateOptionsRes<FormMap, 'size'>
  current: IBlockType
  config: UserConfig
}

const MPosition = (props: MSizeProps) => {
  const option = props.data?.option || {}
  const store = props.config.getStore()
  const width = ref(props.current.width || props.current.props[(option as any).receive][0])
  const height = ref(props.current.height || props.current.props[(option as any).receive][1])

  return (
    <el-row style={{ padding: '10px 8px' }}>
      <el-col span={4} style={{ lineHeight: '40px', verticalAlign: 'middle' }}>
        {(option as any)?.label || '大小'}：
      </el-col>
      <el-col span={20} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-betwee', alignItems: 'center' }}>
          <span>W:</span>
          <el-input-number min={1} size="mini" v-model={width.value} controls-position="right" />
        </div>
        <div style={{ marginLeft: 15, display: 'flex', justifyContent: 'space-betwee', alignItems: 'center' }}>
          <span>H:</span>
          <el-input-number min={1} size="mini" v-model={height.value} controls-position="right" />
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
