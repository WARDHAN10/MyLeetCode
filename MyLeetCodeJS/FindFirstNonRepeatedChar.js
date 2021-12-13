const Non_repeated = (s) => {

    let obj = {

    }

    for (let j of s) {
        if (obj.hasOwnProperty(j)) {
            return j    
        } else {
            obj[j] = 1
        }
    }

    return -1

}