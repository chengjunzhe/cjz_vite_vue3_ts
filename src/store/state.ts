//vuex-state数据接口
export interface StateIterface {
  siderCollapsed: boolean
  routerSelectedKey: Array<string>
  theme: string
}

//vuex-state数据
export const state: StateIterface = {
  siderCollapsed: false,
  routerSelectedKey: ['HomeOne'],
  theme: 'dark'
}
