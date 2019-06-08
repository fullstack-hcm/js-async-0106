/**
 * convert callback -> promise
 */
const printStringPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        if ((a + b) % 2 == 0) 
        {
            console.log('EVEN NUMBER')
            return resolve('EVEN NUMBER');
        }
        console.log('ODD NUMBER')
        return reject('ODD NUMBER');
    });
}

const callAllPrintString = () => {
    printStringPromise(2, 2)
        .then(() => printStringPromise(2, 2))
        .then(() => printStringPromise(2, 2))
        .then(() => printStringPromise(2, 2))
        .then(() => printStringPromise(2, 4))
        .catch(err => console.log({ err }))
}

callAllPrintString();