function monthlySavings(arr , livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'invalid input';
    }
    
    let totalIncome = 0;
    let tax = 0;

    for (const payment of arr) {
        if (payment >= 3000) {
            tax = payment * 0.2
            totalIncome += totalIncome - tax
        }
        else{
            totalIncome += payment
        }
    }
    let savings = totalIncome - livingCost;

    return savings >= 0 ? savings : "earn more";
    
}


// Testing
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));