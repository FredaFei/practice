/*
**在一组数据中取最大值
*/
// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 普通版
function max(arr){
  var max = 0;
  for(var i=0;i<arr.length;i++){
    max = Math.max(arr[i],max)
  }
  return max
}

// 升级版
function max(arr){
  return arr.reduce((prev,next)=>{
    return Math.max(prev,next)
  })
}
// es6
function max(arr){
  return Math.max(...arr)
}

var a = [1,2,6,4,1,8,'101','ddd']
max(a)