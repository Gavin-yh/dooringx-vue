<!--
 * @Author: GeekQiaQia
 * @Date: 2021-11-25 18:05:50
 * @LastEditTime: 2021-12-02 11:15:04
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
    <el-col :span="6" class="right-tools flex flex-row items-right">
      <div class="margin flex flex-row items-right">
        <el-button :icon="Minus" type="text" circle></el-button>
        <span>100%</span>
        <el-button :icon="Plus" type="text" circle></el-button>
      </div>
      <div class="margin">
        <el-divider direction="vertical"></el-divider>
        <el-button type="text">教程</el-button>
        <el-divider direction="vertical"></el-divider>
      </div>

      <div class="margin">
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
            <el-col :span="6">
              <el-tooltip class="item" effect="dark" content="feecback" placement="bottom">
                <a href="https://github.com/H5-Dooring/dooringx-vue/issues" target="_blank">
                  <FeedBack />
                </a>
              </el-tooltip>
            </el-col>
          </el-row>
          <template #reference>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </template>
        </el-popover>
      </div>
    </el-col>
    <!--    右侧工具栏 end-->
  </el-row>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import GithubIcon from '../icons/github.vue'
import GiteeIcon from '../icons/gitee.vue'
import FeedBack from '../icons/feedback.vue'
import Logo from '../../assets/dooringx.svg'
import { Minus, Plus } from '@element-plus/icons'

export default defineComponent({
  name: 'Header',
  components: { GithubIcon, GiteeIcon, FeedBack },
  setup() {
    const state = reactive({
      isShowH5Preview: false
    })

    return {
      Minus,
      Plus,
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
  margin: 10px 0px;
  .flex {
    display: flex;
  }
  .items-right {
    justify-content: flex-end;
    align-items: center;
  }
  .flex-row {
    flex-direction: row;
  }
  .margin {
    margin: 0 5px;
  }
}
</style>
