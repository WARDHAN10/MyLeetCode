const FindSmallesNo = (n) =>{
    for(let i = n ;i<)
    return 
}







const DecimailToBinary = (n) => {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (n != 0) {
        rem = n % 2;
        n = parseInt(n / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
return bin
}