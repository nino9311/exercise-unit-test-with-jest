// Import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
  

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be Yens", function() {
  

    // Use the function like its supposed to be used
    const Yens = fromDollarToYen(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected2 = (3.5 / 1.07) * 156.5; 
    
    // This is the comparison for the unit test
     expect(Yens).toBe(expected2); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Yen should be Pounds", function() {
  

    // Use the function like its supposed to be used
    const Pounds = fromYenToPound(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected3 = (3.5 / 156.5) * 0.87; 
    
    // This is the comparison for the unit test
     expect(Pounds).toBe(expected3); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})