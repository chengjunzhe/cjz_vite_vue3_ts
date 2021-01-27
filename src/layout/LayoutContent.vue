<template>
  <a-layout-content
    :style="{
      margin: baseLayoutData.isCollapse ? '24px 16px 24px 96px' : '24px 16px 24px 216px',
      padding: '24px'
    }"
  >
    <blank-view />
  </a-layout-content>
</template>

<script lang="ts">
//内容布局组件

import { defineComponent, inject } from 'vue'
import BlankView from './BlankView.vue'

export default defineComponent({
  name: 'LayoutContent',
  setup(): object {
    const baseLayoutData = inject('baseLayoutData')

    return { baseLayoutData }
  },
  components: {
    BlankView
  }
})

</script>

<style></style>
