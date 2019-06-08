// const funcA = () => console.log(`HELLO FUNCT A`)
// const funcB = function() {
//     setTimeout(function(){
//         console.log(`HELLO FUNCTION B`)
//     }, 1000);
// }

// funcB();
// funcA();

/**
 * CALLBACK FUNC
 */
const thucDay = (lamgido) => {
    lamgido();
}

const danhRang = (lamgido) => {
    lamgido();
}

const anSang = (lamgido) => {
    lamgido();
}

const main = () => {
    thucDay(function(){
        danhRang(function(){
            anSang(function() {
                console.log(`...OMG`)
            })
        })
    })
}

main();