/**
 * curry(fn,parms)
*/
function curry(fn,params) {
    if(!Array.isArray(params)){
        params = []
    }
    return function () {
        var newParams = [].slice.call(arguments)
        if(params.length + newParams.length < fn.length){
            return curry(fn, params.concat(newParams))
        }else{
            return fn.apply(null, params.concat(newParams))
        }
    }
}
function add(x,y,z) {
    return x+y+z
}
var curried = curry(add)

curried(1)(2)(3)
curried(1)(2,3)
curried(1,2,3)