const FindConsectiveNumber = (s) => {
    let count = 1,
        MAX = 1
  
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == s[i + 1]) {
            count += 1

        } else {
            if (MAX <= count) {
                MAX = count
            }
            count = 0
        }
    }
    if (MAX <= count) {
        MAX = count
    }

    return MAX




}



console.log(FindConsectiveNumber("11,0"))