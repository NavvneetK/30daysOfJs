// 1
async function sleep(millis) {
    let t = Date.now();
    await new Promise(resolve => setTimeout(resolve, millis));
    console.log(Date.now() - t);
}

// 2
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve,reject) => {
            setTimeout(() => reject("Time Limit Exceeded"),t);
            fn(...args).then(resolve).catch(reject)
        })
    }
};