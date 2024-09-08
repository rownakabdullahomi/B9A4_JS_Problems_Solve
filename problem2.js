function checkName(name) {
    if (typeof name !== 'string' || name.length === 0) {
        return 'invalid';
    }
    let lastLetter = name.slice(-1).toLowerCase();
    // let lastLetter = name[name.length - 1];
    let checkArray = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
    // for (const letter of checkArray) {
    //     if(letter === lastLetter){
    //         return "Good Name";
    //     }
    // }
    // return "Bad Name";

    let result = checkArray.includes(lastLetter);
    return result ? "Good Name" : "Bad Name";
}


//Testing
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(""));
console.log(checkName(199));
console.log(checkName(["Rashed"]));