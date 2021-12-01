<!--
 * @Author: GeekQiaQia
 * @Date: 2021-11-11 16:29:01
 * @LastEditTime: 2021-12-01 16:04:36
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/layout/index.vue
-->
<template>
  <el-container @mouseup="onMouseUp">
    <el-header height="80px" class="flex items-center shadow-md">
      <Header />
    </el-header>
    <el-container class="layout-container">
      <el-aside width="380px">
        <Left />
      </el-aside>
      <el-main>
        <container-wrapper :config="config">
          <Container :store-state="storeState" :config="config" context="edit"></Container>
        </container-wrapper>
      </el-main>
      <el-aside width="380px">
        <RightConfig :store-state="storeState" :config="config"></RightConfig>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref, watchEffect, inject } from 'vue'

import Left from '../components/left/index'
import RightConfig from '../components/right-config/index'
import Header from '../components/header/index'
import ContainerWrapper from '../components/container-wrapper/index'
import { injectKey, UserConfig, innerContainerDragUp, useStoreState } from '@dooring/dooringx-vue-lib'
import Container from '../components/container'
export default defineComponent({
  name: 'Layout',
  components: {
    Header,
    Left,
    RightConfig,
    ContainerWrapper,
    Container
  },
  setup() {
    const config: UserConfig = inject(injectKey)
    const state = reactive({
      config
    })

    // const [storeState]=useStoreState(defaultConfig.value);
    // state.value=storeState
    const storeState = ref(null)
    watchEffect(() => {
      storeState.value = useStoreState(state.config)
    })

    console.log('storeState.value', state)

    const { onMouseUp } = innerContainerDragUp(state.config)
    return {
      ...toRefs(state),
      onMouseUp,
      storeState
    }
  }
})
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  position: relative;
  z-index: 99;
  background-color: white;
}

.el-aside {
  background-color: white;
}

.layout-container {
  height: calc(100vh - 80px);
}

.el-main {
  position: relative;
  padding: 12px;
  background-color: #f5f5f5;
  @media (min-width: 1111px) {
    overflow-x: hidden;
  }
}

.shadow-md {
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.12);
}
</style>
