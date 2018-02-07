// 1.普通版1 for+indexOf
function unique(a){
	var result = []
	for(var i=0; i<a.length;i++){
		if(result.indexOf(a[i])==-1){
			result.push(a[i])
		}
	}
	return result
}

// 2.普通版2 filter+indexOf
function unique(a){
    return a.filter((item,index,arr)=>{
      return arr.indexOf(item) === index 
    })
}
// 3.普通版3 filter+sort
function unique(a){
    return a.sort().filter((item,index,arr)=>{
      return item !== arr[index+1]
    })
}
// ES6 Array.from()+Set
function unique(a){
    return Array.from(new Set(a))
}
//简化
function unique(a){
    return [...new Set(a)]
}



// 哈希
function unique(a){
    var hashTable = {}
    return a.filter((item)=>{
      var key = JSON.stringify(item)
      var match = !!(hashTable[key])
      return match ? false : (hashTable[key] = true)
    })
}

var a = [1,2,'6',1,[1,2],'2',[1,3],{name: 'haha'}]
unique(a)