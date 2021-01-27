import { useStore } from 'vuex'

//存储vuex数据到session
export default function storeSession(): void {
  const store = useStore()
  if (sessionStorage.getItem('store')) {
    store.replaceState({ ...JSON.parse(sessionStorage.getItem('store') as string) })
    sessionStorage.removeItem('store')
  }

  // 在页面刷新时将vuex里的信息保存到sessionStorage里
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('store', JSON.stringify(store.state))
  })
}
