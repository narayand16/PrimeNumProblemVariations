const isPrime = require('./checkIfNumberIsPrime');

function getPrimeNumbersTillN(num) {
    let primeList = []
    for(let i=1; i<=num; i++) {
        if(isPrime(i)) {
            primeList.push(i)
        }
    }
    return primeList;
}

console.log(getPrimeNumbersTillN(8));
// [ 2, 3, 5, 7 ]