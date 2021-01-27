import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { findRoutePNameObj } from '../utils/utils'

//布局组件组合API集中营接口
interface IbaseLayoutComAPI {
  baseLayoutData: object
  ChangeItemKeys: (item: object, key: string) => void
  ChangeSiderCollapsed: () => void
  onOpenChange: (openKeys: Array<string>) => void
}

//布局组件组合API集中营
export default function baseLayoutComAPI(): IbaseLayoutComAPI {
  //布局组件组合API集中营基础数据接口
  interface IbaseLayoutData {
    selectedKeys: any
    isCollapse: any
    Routes: any
    openKeys: any
    theme: any
  }

  const router = useRouter()
  const store = useStore()

  //布局组件组合API集中营基础数据
  const baseLayoutData: IbaseLayoutData = reactive({
    selectedKeys: store.state.routerSelectedKey,
    isCollapse: store.state.siderCollapsed,
    Routes: router.options.routes,
    openKeys: ['Home'],
    theme: store.state.theme
  })
  baseLayoutData.selectedKeys.value = computed(() => store.state.routerSelectedKey.value)
  baseLayoutData.isCollapse = computed(() => store.state.siderCollapsed)

  //收起其他展开的所有菜单方法
  const resetOpenKeys: (value: string | number) => void = (value) => {
    const targetRouteOrigin = findRoutePNameObj(baseLayoutData.Routes, 'name', value) as any
    if (targetRouteOrigin.meta) {
      baseLayoutData.openKeys = targetRouteOrigin.meta.pName
    } else {
      baseLayoutData.openKeys = []
    }
  }
  resetOpenKeys(baseLayoutData.selectedKeys[0])

  //改变菜单选项时
  const ChangeItemKeys = ({ key }: any): void => {
    store.commit('ChangeItemKeys', [key])
    resetOpenKeys(key)
  }

  //展开收缩菜单选项时
  const onOpenChange = (openKeys: Array<string>): void => {
    baseLayoutData.openKeys = openKeys
  }

  //展开收缩菜单组件时
  const ChangeSiderCollapsed = (): void => {
    store.commit('ChangeSiderCollapsed')
  }

  return { baseLayoutData, ChangeItemKeys, ChangeSiderCollapsed, onOpenChange }
}
