/*
 * @Author: GeekQiaQia
 * @Date: 2021-11-19 18:26:05
 * @LastEditTime: 2021-12-01 17:14:25
 * @LastEditors: GeekQiaQia
 * @Description: 用来渲染block 组件；
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/components/blocks.tsx
 */

import { defineComponent, computed, reactive, inject, watchEffect, ref, CSSProperties } from 'vue'
import { injectKey, UserConfig } from '@dooring/dooringx-vue-lib'
import { innerDrag } from '@dooring/dooringx-vue-lib'
import './index.scss'
export default defineComponent({
  name: 'ContainerWrapper',
  props: {
    data: { type: Object },
    context: { type: String },
    config: { type: UserConfig }
  },
  setup(props) {
    const blockStyles = computed<CSSProperties>((): CSSProperties => {
      return {
        position: props.data!.position,
        top: `${props.data!.top}px`,
        left: `${props.data!.left}px`,
        zIndex: props?.data?.zIndex as number,
        display: props.data!.display,
        transform: `rotate(${props.data!.rotate.value}deg)`
      }
    })

    const defaultConfig = computed(() => {
      return props.config
    })

    const previewState = computed(() => {
      return {
        top: `${props.data!.top}px`,
        left: `${props.data!.left}px`,
        height: `${props.data!.height}px`,
        width: `${props.data!.width}px`
      }
    })

    const block = computed(() => {
      return props.data
    })

    let renderComponent = null
    watchEffect(() => {
      const component = defaultConfig.value.componentRegister.getComp(block.value!.name)
      renderComponent = component.render(props.data!, props.context)
    })

    const blockRef = ref(null)
    const styleDrag: CSSProperties = block.value!.canDrag ? { pointerEvents: 'none' } : {}
    return () => {
      if (renderComponent && props.context === 'edit') {
        return (
          <>
            <div
              class={block.value!.focus && block.value!.position !== 'static' ? 'editor_block dr_block_focus' : 'editor_block'}
              ref={blockRef}
              style={{ ...blockStyles.value }}
              {...innerDrag(block.value!, defaultConfig.value, blockRef.value)}
            >
              {/* 绝对定位元素 */}
              {block.value!.position !== 'static' && <div style={{ ...styleDrag }}>{renderComponent}</div>}
              {/* 静态定位 非行内 这里暂不考虑布局影响 */}
              {block.value!.position === 'static' && block.value!.display !== 'inline' && (
                <div
                  // className={animatecss}
                  style={{
                    pointerEvents: 'none',
                    width: '100%',
                    height: '100%'
                    // ...animateCount,
                  }}
                >
                  {renderComponent}
                </div>
              )}
              {/* 静态定位 行内 这里暂不考虑布局影响 */}
              {block.value!.position === 'static' && block.value!.display === 'inline' && <span style={{ pointerEvents: 'none' }}>{renderComponent}</span>}
            </div>
          </>
        )
      } else {
        return (
          <div
            // className={animatecss}
            style={{
              position: block.value!.fixed ? 'fixed' : block.value!.position,
              top: previewState.value.top,
              left: previewState.value.left,
              width: previewState.value.width,
              height: previewState.value.height,
              zIndex: block.value!.zIndex,
              display: block.value!.display,
              transform: `rotate(${block.value!.rotate.value}deg)`
              // ...animateCount,
            }}
          >
            {renderComponent}
          </div>
        )
      }
    }
  }
})
