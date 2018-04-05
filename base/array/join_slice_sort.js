Array.prototype._join = function(char){
    // this=>arr
    let result = this[0]||''
    let length = this.length
    for(let i=1;i<length;i++){
        result += char+this[i]
    }
    return result
}

var a = [3,4,1,2]
a._join.call(a,'-')


Array.prototype._slice = function(start,end){
    let result = []
    var start = start || 0
    var end = end || this.length
    for(let i=start;i<end;i++){
        result.push(this[i])
    }
    return result
}

a._slice.call(a,1,2)

//快速排序算法
Array.prototype._sort = function(fn){
    var fn = fn || ((a,b)=>a-b)
    let roundCount = this.length-1
    for(let i=0;i<roundCount;i++){
        let minIndex = this[i]
        for(let k = i+1;k<this.length;k++){
            if(fn.call(null,this[k],this[i])<0){
                [this[i],this[k]] = [this[k],this[i]]
            }
        }
    }
}

Array.prototype._splice = function(start,deleteCount,item){
    let result = this || []
    let length = this.length
    // let rest = [...item]
    var start = start || 0
    var end
    if(deleteCount){
        end = start + deleteCount
        for(let i=start;i<end;i++){
            result.shift(this[i])
        }
    }else{
        end = length
        for(let i=start;i<end;i++){
            result.slice(i)
        }
    }
    if(item){
        for(let i=start;i<end;i++){
            result.unshift(i)
        }
    }
    // this = result
    return result
}