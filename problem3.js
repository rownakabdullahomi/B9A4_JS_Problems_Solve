function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    let numArray = [];
    for (let element of array) {
        if(typeof element === "number" && !isNaN(element)){
            numArray.push(element);
        }
    }

    return numArray;
}


//Testing
console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));;
console.log(deleteInvalids(["1" , {num:2} , NaN ]));;
console.log(deleteInvalids([ 1 , 2 , -3 ]));;
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));;