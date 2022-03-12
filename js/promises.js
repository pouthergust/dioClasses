// Promises
const doSomethingPromise = () => new Promise((resolve, reject) => {
    // throw new Error('Something Wrong');
    setTimeout(function() {
    resolve('First Data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second Data');
    }, 1000);
});

// doSomethingPromise.then(data => console.log(data));
doSomethingPromise()
    .then(data => {
        console.log(data);
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Ops', error));

/* // Resolvendo ambas ao mesmo tempo (com race ou all)
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
}).catch(err => { console.log(err) }); */