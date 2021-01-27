<template>
  <div id="loginBackground">
    <a-card
      style="width:500px"
      title="Card title"
      :tab-list="tableList"
      :active-tab-key="tableKey"
      @tabChange="(key) => onTabChange(key)"
    >
      <template #customRender="item">
        <span> <home-outlined />{{ item.key }} </span>
      </template>
      <login></login>
    </a-card>
  </div>
</template>

<script lang="ts">
import { HomeOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
import login from '../views/login.vue'
export default defineComponent({
  name: 'LoginLayout',
  components: {
    HomeOutlined,
    login
  },
  setup(): object {
    const tableList = [
      {
        key: 'tab1',
        slots: { tab: 'customRender' }
      },
      {
        key: 'tab2',
        slots: { tab: 'customRender' }
      }
    ]
    const tableKey = ref('tab1')
    const onTabChange = (key: string): void => {
      tableKey.value = key
    }
    return { tableList, tableKey, onTabChange }
  }
})

</script>
