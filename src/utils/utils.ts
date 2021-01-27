//根据键值对遍历路由数组返回符合要求的对象
const findRoutePNameObj: (arr: Array<any>, keyName: string, value: string | number) => object = (
  arr,
  keyName,
  value
) => {
  let targetObj: object = {}
  for (const item in arr) {
    if (arr[item][keyName] === value) {
      if (arr[item].meta.pName) {
        return (targetObj = arr[item])
      }
    } else if (arr[item].children) {
      targetObj = findRoutePNameObj(arr[item].children, keyName, value)
    }
  }
  return targetObj
}

export { findRoutePNameObj }
