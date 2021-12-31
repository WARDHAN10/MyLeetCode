var isLongPressedName =  (name, typed) => {
    let i = 0,
        j = 0
    //corner case 
    if (name[0] != typed[0]) {
        return false
    }
    if (name.length > typed.length) {
        return false
    }

    while(j!=typed.length && i!=name.length){
        if (name[i] == typed[j]) {
            if(i!=name.length-1){
                i++
            }
            if(j!=typed.length-1){
                j++
            }
            console.log("if",name[i],typed[j],i,j)

        } else {
            if (typed[j] == typed[j - 1]) {

                j++
                console.log("else if",name[i],typed[j])

            } else {
                console.log("else else",name[i],typed[j])
                return false
            }
    
        }
    }

    return true
};


console.log(isLongPressedName("pyplrz","ppyypllr"))
