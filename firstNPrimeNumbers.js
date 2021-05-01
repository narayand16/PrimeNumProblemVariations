function isPrime(num) {
    if(num === 1 || num === 0) {
        return false;
    }
    else {
        for(let i=2; i<= num/2; i++) {
            if(num%i === 0) {
                return false;
            }
        }
        return true;
    }
}

function generatePrimeNumbers(num) {
    let primeList = [];
    let i= 2;
    while(primeList.length < num) {
        if(isPrime(i)) {
            primeList.push(i)
        }
        i = i === 2 ? i+1 : i+2;
    }
    return primeList;
}
console.log(generatePrimeNumbers(5));
// [ 2, 3, 5, 7, 11 ]
console.log(generatePrimeNumbers(8));
// [
//     2,  3,  5,  7,
//     11, 13, 17, 19
//   ]