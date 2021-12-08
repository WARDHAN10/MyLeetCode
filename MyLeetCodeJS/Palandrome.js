const palan = (str) =>{

    let newString = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~' ']/g,"")
    return newString.toLowerCase() == newString.split('').reverse().join('').toLowerCase()
}



console.log(palan("A man, a plan, a canal: Panama"))