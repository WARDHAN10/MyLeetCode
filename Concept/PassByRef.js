//javascript pass by reference
function callByReference(varObj) {

    console.log("Inside Call by Reference Method");

    varObj.push(1);

    console.log(varObj);

}

let varObj = [1]

console.log("Before Call by Reference Method");

console.log(varObj);

callByReference(varObj)

console.log("After Call by Reference Method");

console.log(varObj);
