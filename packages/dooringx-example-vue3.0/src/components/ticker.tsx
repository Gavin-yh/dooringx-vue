/*
 * @Author: Gavin
 * @Date: 2021-12-8
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-8
 * @Description: 画布的刻度尺
 * @FilePath: \dooringx\packages\dooringx-vue-lib\src\components\wrapperMove\ticker.ts
 */

import { defineComponent, computed, ref, Ref, nextTick } from 'vue'
import { UserConfig } from '@dooring/dooringx-vue-lib'

const width = '20px'

export default defineComponent({
  name: 'Ticker',
  props: {
    config: { type: UserConfig }
  },
  components: {},
  setup(props) {
    const defaultConfig = computed(() => {
      return props.config || ({} as UserConfig)
    })

    const topRef: Ref<HTMLDivElement> = ref({} as HTMLDivElement)
    const leftRef: Ref<HTMLDivElement> = ref({} as HTMLDivElement)

    const topRender = ref(0)
    const leftRender = ref(0)

    const scale = defaultConfig.value!.getScaleState().value

    nextTick(() => {
      if (topRef.value) {
        const width = topRef.value.getBoundingClientRect().width
        const renderWidth = Math.ceil(width / 10 / scale)

        topRender.value = renderWidth
      }

      // left可以不用放，但为了更新统一
      if (leftRef.value) {
        const height = leftRef.value.getBoundingClientRect().height
        const renderHeight = Math.ceil(height / 10 / scale)

        leftRender.value = renderHeight
      }
    })

    return () => (
      <>
        <div
          ref={topRef}
          style={{
            position: 'absolute',
            top: 0,
            left: '50px',
            width: '100%',
            height: width,
            display: 'flex',
            justifyContent: 'space-between',
            userSelect: 'none'
          }}
        >
          {Array(100)
            .fill(1)
            .map((_, i) => {
              if (i % 10 === 0) {
                return (
                  <div
                    key={i}
                    style={{
                      background: 'rgb(204, 204, 204)',
                      width: '1px',
                      height: '12px',
                      position: 'relative',
                      userSelect: 'none'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '20px',
                        fontSize: '10px',
                        left: '-2px',
                        userSelect: 'none'
                      }}
                    >
                      {i}
                    </div>
                  </div>
                )
              } else {
                return <div key={i} style={{ background: 'rgb(204, 204, 204)', width: '1px', height: '6px' }}></div>
              }
            })}
        </div>

        <div
          ref={leftRef}
          style={{
            position: 'absolute',
            top: '50px',
            left: 0,
            width: width,
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            userSelect: 'none'
          }}
        >
          {Array(100)
            .fill(1)
            .map((_, i) => {
              if (i % 10 === 0) {
                return (
                  <div
                    key={i}
                    style={{
                      background: 'rgb(204, 204, 204)',
                      width: '12px',
                      height: '1px',
                      position: 'relative',
                      userSelect: 'none'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        left: '20px',
                        fontSize: '10px',
                        top: '-2px',
                        userSelect: 'none'
                      }}
                    >
                      {i}
                    </div>
                  </div>
                )
              } else {
                return (
                  <div
                    key={i}
                    style={{
                      background: 'rgb(204, 204, 204)',
                      width: '6px',
                      height: '1px',
                      userSelect: 'none'
                    }}
                  ></div>
                )
              }
            })}
        </div>
      </>
    )
  }
})
