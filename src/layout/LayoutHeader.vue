<template>
  <a-layout-header
    :style="{ margin: baseLayoutData.isCollapse ? '0 0 0 80px' : '0 0 0 200px', background: '#fff', padding: '0' }"
  >
    <a-row type="flex" justify="space-between">
      <a-col :span="4">
        <menu-unfold-outlined v-if="baseLayoutData.isCollapse" class="trigger" @click="ChangeSiderCollapsed" />
        <menu-fold-outlined v-else class="trigger" @click="ChangeSiderCollapsed" />
      </a-col>
      <a-col :span="4">
        <a-row type="flex" justify="space-between">
          <a-col :span="4" offset="19">
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="加载失败"
              :size="40"
              :style="{ padding: '2px', border: '1px solid rgba(0, 0, 0, 0.1)' }"
            />
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script lang="ts">
//头部布局组件

import { defineComponent, inject } from 'vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'LayoutHeader',
  setup(): object {
    const baseLayoutData = inject('baseLayoutData')
    const ChangeSiderCollapsed = inject('ChangeSiderCollapsed')

    return { baseLayoutData, ChangeSiderCollapsed }
  },
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  }
})

</script>

<style></style>
