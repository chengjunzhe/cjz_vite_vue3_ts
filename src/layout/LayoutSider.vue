<template>
  <a-layout-sider
    v-model:collapsed="baseLayoutData.isCollapse"
    :trigger="null"
    collapsible
    :style="{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
      left: 0
    }"
  >
    <div class="logo" />
    <a-menu
      :theme="baseLayoutData.theme"
      mode="inline"
      v-model:openKeys="baseLayoutData.openKeys"
      v-model:selectedKeys="baseLayoutData.selectedKeys"
      @click="ChangeItemKeys"
      @openChange="onOpenChange"
    >
      <template v-for="item in baseLayoutData.Routes" :key="item.name">
        <template v-if="item.hidden === false">
          <template v-if="!item.children">
            <a-menu-item :key="item.name">
              <router-link :to="item.path">
                <SVG :svgName="item.meta.icon" /><span>{{ item.meta.title }}</span>
              </router-link>
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :menu-info="item" :key="item.name" />
          </template>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
//菜单栏布局组件

import { defineComponent, inject } from 'vue'
import SubMenu from './SubMenu.vue'
import SVG from '../components/svg/IconSVG'

export default defineComponent({
  name: 'LayoutSider',
  setup(): object {
    const baseLayoutData = inject('baseLayoutData')
    const ChangeItemKeys = inject('ChangeItemKeys')
    const onOpenChange = inject('onOpenChange')

    return { baseLayoutData, ChangeItemKeys, onOpenChange }
  },
  components: {
    SubMenu,
    SVG
  }
})

</script>

<style></style>
