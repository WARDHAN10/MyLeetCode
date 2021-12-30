const isPowerOfThree = (n) => {
    if (n == 1) {
        return true;
    }
    if (n < 1) {
        return false
    }


    return isPowerOfThree(n / 3)




}

console.log(isPowerOfThree(6))