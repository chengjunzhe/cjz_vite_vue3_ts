<template>
  <a-sub-menu :key="menuInfo.name" v-bind="$attrs">
    <template #title>
      <span>
        <SVG :svgName="menuInfo.meta.icon" /><span>{{ menuInfo.meta.title }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.name">
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
  </a-sub-menu>
</template>

<script lang="ts">
//递归子菜单组件

import SVG from '../components/svg/IconSVG'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: (): object => ({})
    }
  },
  components: {
    SVG
  }
})

</script>

<style></style>
