// 1

var compose = function(functions) {
    
return function (x) {
    let resultOfFun = x;

    for (let i = functions.length - 1; i >= 0; i--) {
        resultOfFun = functions[i](resultOfFun);
    }
    return resultOfFun;
}
};

// 2
var once = function(fn) {
    
    let counter = 0
    return function (...args) {
        counter++
        if (counter === 1) return fn(...args)
    }
};