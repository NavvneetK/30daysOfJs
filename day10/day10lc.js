// 1

var createCounter = function(init) {
    let newvalue=init;

    function increment(){
        return ++newvalue;
    }

    function decrement(){
        return --newvalue;
    }
    function reset(){
        return (newvalue=init);
    }
    return {increment,decrement,reset};
};

// 2

var map = function(arr, fn) {
    const newarr=[];
    for(let i=0;i<arr.length;i++){
        newarr[i]=fn(arr[i],i);
    }
    return newarr;
};