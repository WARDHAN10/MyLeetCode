var myPow = function (x, n) {

    if (n >= 0) {
        if (n == 0) return 1
        if (n % 2 == 0) {
            return myPow(x * x, n / 2)
        } else return myPow(x, n - 1) * x
    } else {
        n = n*-1
        if (n   == 0) return 1
        if (n % 2 == 0) {
            return myPow(1 / x * 1 / x, n / 2)
        } else return myPow(1 / x, n - 1) * 1 / x
    }
};

console.log(myPow(2.10000,3))