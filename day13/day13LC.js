// 1
function memoize(fn) {
    
    const memo = {};
   return function(...args) {
     const key = JSON.stringify(args);
   
     if (key in memo) return memo[key]
     
     return (memo[key] = fn.apply(this, args));
   }
}