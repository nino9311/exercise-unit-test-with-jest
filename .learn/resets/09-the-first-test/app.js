// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
// We include fromEuroToDollar here as well because it needs to be exported


const fromDollarToYen = (valueInDollars) => {
    let valueInYens = (valueInDollars / 1.07) * 156.5;
    return valueInYens;
}

const fromYenToPound = (valuesinYens) => {
    let valueInPound = (valuesinYens / 156.5) * .87;
    return valueInPound;


}

module.exports = { sum, fromYenToPound }
module.exports = { sum, fromDollarToYen }
module.exports = { sum, fromEuroToDollar }