import { ChangeSiderCollapsed, ChangeItemKeys } from './mutation_types'
import { StateIterface } from './state'

//vuex-mutation方法接口
export interface MutationsIterface {
  [propName: string]: (state: StateIterface, e?: Array<string>) => void
}

//vuex-mutation方法
export const mutations: MutationsIterface = {
  [ChangeSiderCollapsed](state) {
    state.siderCollapsed = !state.siderCollapsed
  },
  [ChangeItemKeys](state, e) {
    state.routerSelectedKey = e as Array<string>
  }
}
