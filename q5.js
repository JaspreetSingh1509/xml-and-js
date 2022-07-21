function returnPromise(...args) {
    const N = args.length;
    return new Promise(function(resolve, reject) {
        if (N > 0){
            resolve(args);
        } else{
            reject('No arguments were passed');
        }
    
    });
}

console.log(returnPromise(4,8,1))
console.log(returnPromise())