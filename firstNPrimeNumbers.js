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

console.log(generatePrimeNumbers(8));