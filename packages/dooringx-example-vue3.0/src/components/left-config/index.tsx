/*
 * @Author: GeekQiaQia
 * @Date: 2021-11-25 18:05:50
 * @LastEditTime: 2021-12-02 13:42:44
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/components/left-config/index.tsx
 */
import { defineComponent, reactive, computed, ref, inject } from 'vue'
import { injectKey, UserConfig } from '@dooring/dooringx-vue-lib'
import './index.scss'
import { dragEventResolve } from '@dooring/dooringx-vue-lib'
import { Search } from '@element-plus/icons'

export default defineComponent({
  name: 'LeftConfig',
  setup() {
    const config: UserConfig = inject(injectKey)
    const tabs = config.initConfig.leftRenderListCategory
    const state = reactive({
      activeName: tabs[0].displayName,
      activeType: tabs[0].type
    })
    // 从用户注册的config中获取所有注册的组件map；
    const leftAllRegistMap = ref(config.initConfig.leftAllRegistMap)
    // 懒加载选中tab对应的component list
    const checkList = computed(() => {
      return leftAllRegistMap.value.filter((item) => {
        return item.type == state.activeType
      })
    })

    const handleClick = (tab: any, event: any) => {
      state.activeType = tab.instance.attrs.type
    }

    return () => (
      <>
        <el-tabs v-model={state.activeName} tab-position="left" class="leftConfig" onTabClick={handleClick}>
          {tabs.map((tabItem) => (
            <el-tab-pane
              name={tabItem.displayName}
              type={tabItem.type}
              lazy
              v-slots={{
                label: (item = tabItem) => (
                  <>
                    <div class={'tabItem'}>
                      <i style="font-size:22px" class={`icon iconfont ${item.icon}`}></i>
                      {item.displayName}
                    </div>
                  </>
                )
              }}
            >
              <el-row justify="center" align="middle" style={{ marginTop: '10px', marginBottom: '10px', marginRight: '5px' }}>
                <el-col span={6}>
                  <span class="displayName">{state.activeName}</span>
                </el-col>
                <el-col span={18}>
                  <el-input placeholder="Type for search" prefix-icon={Search} />
                </el-col>
              </el-row>
              <div class="leftco">
                {checkList.value.map((list) => (
                  <>
                    <div class="coitem" {...dragEventResolve(list)}>
                      <div class="redbox">
                        <i class={` icon iconfont ${list.img}`}></i>
                      </div>
                      <div class="displayName">{list.displayName}</div>
                    </div>
                  </>
                ))}
              </div>
            </el-tab-pane>
          ))}
        </el-tabs>
      </>
    )
  }
})
