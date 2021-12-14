const compareVersion = (version1, version2) => {
    let LargerArray
    let SmallerArray
    if (version1.length > version2.length) {
        LargerArray = version1.split('.')
        SmallerArray = version2.split('.')
        let length = (LargerArray.length - SmallerArray.length)

        for (let i = 0; i < length; i++) {
            SmallerArray.push('0')
        }

        for (let i = 0; i < LargerArray.length; i++) {
            //v2>v1
            if (parseInt(SmallerArray[i]) > parseInt(LargerArray[i])) {
                return -1

            }
            //v2<v1 
            else if (parseInt(SmallerArray[i]) < parseInt(LargerArray[i])) {
                return 1
            }
        }
        return 0
    } else {
        LargerArray = version2.split('.')
        SmallerArray = version1.split('.')
        let length = (LargerArray.length - SmallerArray.length)

        for (let i = 0; i < length; i++) {
            SmallerArray.push('0')
        }

        for (let i = 0; i < LargerArray.length; i++) {
            //v1>v2
            if (parseInt(SmallerArray[i]) > parseInt(LargerArray[i])) {
                return 1

            }
            //v1<v2 
            else if (parseInt(SmallerArray[i]) < parseInt(LargerArray[i])) {
                return -1
            }
        }
        return 0
    }







}



console.log(compareVersion("7.5.2.4", "7.5.3"))