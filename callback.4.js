const promise1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(`PROMISE 1`);
        }, 1000);
    })
}

const promise2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(`PROMISE 2`);
        }, 2000);
    })
}

promise1().then(message => console.log(message));
promise2().then(message => console.log(message));