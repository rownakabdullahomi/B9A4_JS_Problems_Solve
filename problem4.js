function password(obj) {
    if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
        return "Invalid";
    }
    let capitalSitename = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passString = capitalSitename + '#' + obj.name + '@' + obj.birthYear; 

    return passString;
}


//Testing
console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }));
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));