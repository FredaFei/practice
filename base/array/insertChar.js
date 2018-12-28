/***
 * insertChar 函数接受两个参数，类型分别为数组和字符串
 * 处理如下 arr [0, 1, 2] => [0, "A", 1, "A", 2]
 * @param arr<Array>,split<str>
 * @returns Array
 */
// 粗俗版
function insertChar(arr, split) {
  var temp = []
  for (var i = 0; i < arr.length; i++) {
    temp.push(arr[i])
    if ((i + 1) % 2 === 1) {
      temp.splice(i + 1, 0, split)
    }
  }
  return temp
}
// 升级版
function insertChar(arr, split) {
  var temp = arr.reduce((sum, next) => {
    return [...sum, next, split]
  }, [])
  temp.pop()
  return temp
}
// 高级版
function insertChar(arr, split) {
  return arr.reduce(
    (sum, next, index) => sum.concat(arr[index + 1] ? [next, split] : [next]),
    []
  )
}
// 终极版
function insertChar(arr, split) {
  return arr.reduce(
    (sum, next, index) =>
      sum.concat(index + 1 <= arr.length ? [next, split] : [next]),
    []
  )
}
var a = [0, 1, 2, 0, '0', null, false, undefined]
insertChar(a, 'A')
