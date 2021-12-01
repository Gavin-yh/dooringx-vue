<!--
 * @Author: GeekQiaQia
 * @Date: 2021-11-25 18:05:50
 * @LastEditTime: 2021-12-01 10:23:05
 * @LastEditors: GeekQiaQia
 * @Description:
 * @FilePath: /dooringx-vue/packages/dooringx-example-vue3.0/src/components/header/index.vue
-->
<template>
  <el-row type="flex" class="header">
    <!--    左侧logo start-->
    <el-col :span="6" class="flex items-left">
      <img :src="Logo" style="width: 120px" alt="H5-DooringX | 一款强大的H5页面编辑器" />
    </el-col>
    <!--    左侧logo end-->
    <!--    中间操作页面部分 start-->
    <el-col class="flex items-center" :span="12"> </el-col>
    <!--    中间操作页面部分 end-->
    <!--    右侧工具栏 start-->
    <el-col :span="6" class="right-tools flex flex-row-reverse items-left">
      <el-popover placement="bottom" :width="140" trigger="hover">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="github" placement="bottom">
              <a href="https://github.com/H5-Dooring/dooringx-vue" target="_blank">
                <GithubIcon />
              </a>
            </el-tooltip>
          </el-col>
          <el-col :span="6">
            <el-tooltip class="item" effect="dark" content="gitee" placement="bottom">
              <a href="https://gitee.com/H5-Dooring/dooringx-vue" target="_blank">
                <GiteeIcon />
              </a>
            </el-tooltip>
          </el-col>
        </el-row>
        <template #reference>
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </template>
      </el-popover>
    </el-col>
    <!--    右侧工具栏 end-->
  </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import GithubIcon from '../icons/github.vue'
import GiteeIcon from '../icons/gitee.vue'
import Logo from '../../assets/dooringx.svg'

export default defineComponent({
  name: 'Header',
  components: { GithubIcon, GiteeIcon },
  setup() {
    const state = reactive({
      isShowH5Preview: false
    })

    return {
      ...toRefs(state),
      Logo
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 60px;
  .flex {
    display: flex;
  }
  .items-left {
    justify-content: flex-start;
    align-items: center;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
}
</style>
