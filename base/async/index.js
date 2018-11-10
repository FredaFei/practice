function fn() {
    var str = 'a'
    setTimeout(() => {
        console.log(str)
    })
    return function () {
        str = 'b'
        return function () {
            str = 'c'
        }
    }
}
function fn() {
    var timer = setTimeout(console.log('a'))
    return ()=>{
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(console.log('b'))
        return ()=>{
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(console.log('c'))
        }
    }
}

fn()
fn()()
fn()()()



/**
 * 同步输出fn1,fn2,fn3
 */

//回调的形式，弊端：回调地狱 fn1(fn2(fn3...));
function fn1() {
    console.log('fn1')
}

function fn2(cb) {
    setTimeout(() => {
        console.log('fn2')
        cb()
    }, 500)
}

function fn3() {
    console.log('fn3')
}

function operator() {
    fn1();
    fn2(fn3);
}

//事件发布订阅
class AsyncFun {
    constructor(...arr) {
        this.eventArr = [...arr]
    }

    next() {
        const event = this.eventArr.shift();
        if (typeof event === 'function') {
            event()
        }
    }

    run() {
        this.next()
    }
}


function fn1() {
    console.log('fn1')
    asyncFun.next()
}

function fn2() {
    setTimeout(() => {
        console.log('fn2')
        asyncFun.next()
    }, 500)
}

function fn3() {
    console.log('fn3')
    asyncFun.next()
}

let asyncFun = new AsyncFun(fn1,fn2,fn3)
asyncFun.run()


//Promise
function fn1() {
    console.log('fn1')
}

function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn2')
            resolve()
        }, 500)
    })
}

function fn3() {
    console.log('fn3')
}

fn1();
fn2().then(() => {
    fn3()
});

// generator
function fn1() {
    console.log('fn1')
}

function fn2() {
    setTimeout(() => {
        console.log('fn2')
        g.next()
    }, 500)
}

function fn3() {
    console.log('fn3')
}

function* generatorArr(...fn) {
    fn[0]()
    yield fn[1]()
    fn[2]()
}

const g = generatorArr(fn1, fn2, fn3)
g.next()

//async await

function fn1() {
    console.log('fn1')
}

function fn2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fn2')
            resolve()
        }, 500)
    })
}

function fn3() {
    console.log('fn3')
}

async function operator() {
    fn1()
    await fn2()
    fn3()
}

operator()
