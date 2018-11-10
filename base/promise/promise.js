/**
 * 参考： 
 * http://hao.jser.com/archive/23343/
 * https://github.com/xieranmaya/blog/issues/3
 * 
 * PROMISEA+规范 
 * 1. Promise是一个状态机，有三种状态pending，fulfilled，rejected。
 * 只能从pending状态，转换为fulfilled或者rejected，不可逆转且无第三种状态转换方式。
 * 2. 必须提供一个then方法用以处理当前值：终值和据因。then接收两个参数onFufilled，onRejected分别处理fulfilled和reject的结果。
 * 3. then方法必须返回一个新的Promise , 便于链式调用。
 * 4. Promise中必须包含一个resolve方法，能够接受各种类型的值，将其处理成普通值fulfilled或者直接rejected
 * 
 */

function Promise(executor) {
    if(typeof executor !== 'function'){throw new Error('Promise executor is not a function')}
    if(!this instanceof Promise){return new Promise(executor)}
    
    var self = this
    self.status = 'pending'
    self.data = ''
    self.resolveArr = []
    self.rejectArr = []
    function resolve(value) {
        if(value instanceof Promise){
            return value.then(resolve,reject)
        } 
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'resolved'
                self.data = value
                self.resolveArr.forEach(itemFn => {
                    itemFn(value)
                })
            }
        });
    }
    function reject(reason) {
        setTimeout(() => {
            if (self.status === 'pending') {
                self.status = 'rejected'
                self.data = value
                self.rejectArr.forEach(itemFn => {
                    itemFn(reason)
                })
            }
        });
    }
    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }
}

Promise.prototype.then = function(onResolve, onReject) {
    onResolve = typeof onResolve === 'function' ? onResolve : function(val) {return val}
    onReject = typeof onReject === 'function' ? onReject : function(val) {throw val}
    var self = this
    var newPromise

    if (self.status === 'resolved') {
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    var result = onResolve(self.data)
                    result instanceof Promise && result.then(resolve, reject)
                    return resolve(result)
                } catch (reason) {
                    return reject(reason)
                }
            });
        })
    }
    if (self.status === 'rejected') {
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    var result = onReject(self.data)
                    result instanceof Promise && result.then(resolve, reject)
                    return resolve(result)
                } catch (reason) {
                    return reject(reason)
                }
            });
        })
    }
    if (self.status === 'pending') {
        return newPromise = new Promise((resolve, reject) => {
            self.resolveArr.push(value => {
                try {
                    var result = onResolve(self.data)
                    result instanceof Promise && result.then(resolve, reject)
                    return resolve(result)
                } catch (reason) {
                    return reject(reason)
                }
            })
            self.rejectArr.push(value => {
                try {
                    var result = onResolve(self.data)
                    result instanceof Promise && result.then(resolve, reject)
                    return resolve(result)
                } catch (reason) {
                    return reject(reason)
                }
            })
        })
        
    }
}

Promise.prototype.catch = function(onReject) {
    return this.then(null, onReject)
}

console.log(1)
var p = new Promise((resolve, reject) => {
    resolve(42)
})
p.then()
.then()
.catch(()=>{return 'error test'})
.then(val => {
    console.log(val)
},err=>{
    console.log(err)
})
console.log(2)
