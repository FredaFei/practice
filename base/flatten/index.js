/*
**数组扁平化
** [1, [2, [3, 4]]]=>[1, 2, 3, 4]
*/
// 普通版
function flatten(arr){
  var result = []
  for(var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result
}

//reduce
function flatten(arr){
  return arr.reduce((prev,next)=>{
    return prev.concat(Array.isArray(next)?flatten(next):next)
  },[])
}

//ES6
function flatten(arr){
  while(arr.some(item=>Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}

var a = [1, [2, [3, 4,[{123,name:[123]]]]];
flatten(a)