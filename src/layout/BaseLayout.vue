<template>
  <a-layout id="Base-layout">
    <layout-sider></layout-sider>
    <a-layout>
      <layout-header></layout-header>
      <layout-content></layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import baseLayoutComAPI from './baseLayoutComAPI'
import LayoutSider from './LayoutSider.vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutContent from './LayoutContent.vue'

export default defineComponent({
  //整体布局组件

  name: 'BaseLayout',
  setup(): object {
    //组合API数据和功能分发地
    const { baseLayoutData, ChangeItemKeys, ChangeSiderCollapsed, onOpenChange } = baseLayoutComAPI()
    provide('baseLayoutData', baseLayoutData)
    provide('ChangeItemKeys', ChangeItemKeys)
    provide('ChangeSiderCollapsed', ChangeSiderCollapsed)
    provide('onOpenChange', onOpenChange)
    return {}
  },
  components: {
    LayoutSider,
    LayoutHeader,
    LayoutContent
  }
})

</script>
<style></style>
