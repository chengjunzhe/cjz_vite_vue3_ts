import { createStore } from 'vuex'
import { state } from './state'
import { mutations } from './mutation'

export default createStore({
  //vuex-state:基本状态
  state,
  //vuex-mutations:同步方法
  mutations,
  //vuex-actions:异步方法
  actions: {},
  //vuex-modules:模块
  modules: {}
})
