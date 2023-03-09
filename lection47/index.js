console.log('//////////////////////////////////OLD METHOD FOR ERROR/////////////////////////////////////////////')

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection47JS/lection47/' + src;

    script.onload = () => callback(script);
    script.onerror = () => callback(new Error(`Script load error for: ${src}`));

    document.head.append(script);
}

loadScript('script.js', (error, script) => {

})

console.log('///////////////////////////////////////////////////////////////////////////////');

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection47JS/lection47/' + src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for: ${src}`));

    document.head.append(script);
}

loadScript('script.js', (error, script) => {
    if(error) {
        console.log(error);
    } else {
        console.log(script.src);
    }
})

console.log('///////////////////////////////PROMISE////////////////////////////////////////////////');

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
});
console.log(promise);

let promise1 = new Promise(function(resolve, reject) {
    // setTimeout(() => reject('Hello Simeon'), 1000);
});
console.log(promise1);

let promise2 = new Promise(function(resolve, reject) {
    resolve('done');
    reject('Hello Valeriq')
});
console.log(promise2);

let promise3 = new Promise(function(resolve, reject) {
    if(false)
        resolve('done');
    else
    reject('Hello Caloyan')
});
console.log(promise3);

let promise4 = new Promise(function(resolve, reject) {
    resolve('done')
    setTimeout(() => resolve('done agains'), 1000);
});
console.log(promise4);

let promise5 = new Promise(function(resolve, reject) {
    
    reject(new Error('Something went wrong'))
});
console.log(promise5);

let promise6 = new Promise(function(resolve, reject) {
    
    resolve(1234);
});
console.log(promise6);

console.log('///////////////////////////////////////////////////////////////////////////////');

let promise7 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
})

promise7.then(result => console.log(result), error => console.log(error));

let promise8 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('OPPPAAAA!')), 1000);
})

promise8.then(result => console.log(result), error => console.log(error));

let promise9 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('OPPPAAAA!')), 1000);
})

promise9.then(result => console.log('then: ' + result));
promise9.catch(err => console.log('catch: ' + err))

console.log('///////////////////////////////////////////////////////////////////////////////');

promise9.finally(() => console.log('Hello SUN'))


