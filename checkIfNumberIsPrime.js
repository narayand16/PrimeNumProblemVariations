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
module.exports = isPrime;
// console.log(isPrime(20));