// Task 1
function addFunc(a, b) {
    return a + b;
}

let num1 = 5;
let num2 = 3;
let sum = addFunc(num1, num2);
console.log("Sum of given numbers is:", sum);
// Output: Sum of given numbers is: 8

// Task 2
function subtractFunc(a, b) {
    return a - b;
}

num1 = 5;
num2 = 3;
let difference = subtractFunc(num1, num2);
console.log("Difference of given numbers is:", difference);
// Output: Difference of given numbers is: 2

// Task 3
function multiplyFunc(a, b) {
    return a * b;
}

num1 = 5;
num2 = 3;
let product = multiplyFunc(num1, num2);
console.log("Product of given numbers is:", product);
// Output: Product of given numbers is: 15

// Task 4
function divideFunc(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Division by zero is not allowed.");
        return null;
    }
}

num1 = 5;
num2 = 3;
let quotient = divideFunc(num1, num2);
console.log("Quotient of given numbers is:", quotient);
// Output: Quotient of given numbers is: 1.6666666666666667

// Task 5
function remainderFunc(a, b) {
    return a % b;
}

num1 = 5;
num2 = 3;
let remainder = remainderFunc(num1, num2);
console.log("Remainder of given numbers is:", remainder);
// Output: Remainder of given numbers is: 2

// Task 6
function addAssignmentFunc(num, valueToAdd) {
    num += valueToAdd;
    return num;
}

let num = 5;
num = addAssignmentFunc(num, 3);
console.log("Result after using += operator is:", num);
// Output: Result after using += operator is: 8

// Task 7
function subtractAssignmentFunc(num, valueToSubtract) {
    num -= valueToSubtract;
    return num;
}

num = 5;
num = subtractAssignmentFunc(num, 2);
console.log("Result after using -= operator is:", num);
// Output: Result after using -= operator is: 3

// Task 8
function compareGreaterFunc(a, b) {
    return a > b;
}

num1 = 5;
num2 = 3;
let isGreater = compareGreaterFunc(num1, num2);
console.log(`${num1} > ${num2}:`, isGreater);
// Output: 5 > 3: true

// Task 9
function compareGreaterEqualFunc(a, b) {
    return a >= b;
}

num1 = 5;
num2 = 5;
let isGreaterEqual = compareGreaterEqualFunc(num1, num2);
console.log(`${num1} >= ${num2}:`, isGreaterEqual);
// Output: 5 >= 5: true

// Task 10
function compareEqualFunc(a, b) {
    return a === b;
}

num1 = 5;
num2 = 5;
let isEqual = compareEqualFunc(num1, num2);
console.log(`${num1} === ${num2}:`, isEqual);
// Output: 5 === 5: true

// Task 11
function logicalAndFunc(a, b) {
    return a > 0 && b > 0;
}

num1 = 5;
num2 = 3;
let andResult = logicalAndFunc(num1, num2);
console.log(`Both ${num1} > 0 and ${num2} > 0:`, andResult);
// Output: Both 5 > 0 and 3 > 0: true

// Task 12
function logicalOrFunc(a, b) {
    return a > 0 || b > 0;
}

num1 = -1;
num2 = 3;
let orResult = logicalOrFunc(num1, num2);
console.log(`Either ${num1} > 0 or ${num2} > 0:`, orResult);
// Output: Either -1 > 0 or 3 > 0: true

// Task 13
function logicalNotFunc(a) {
    return !(a > 0);
}

num1 = -1;
let notResult = logicalNotFunc(num1);
console.log(`Not ${num1} > 0:`, notResult);
// Output: Not -1 > 0: true

// Task 14
function checkPositiveFunc(a) {
    return (a >= 0) ? 'Positive' : 'Negative';
}

num1 = 5;
let checkResult = checkPositiveFunc(num1);
console.log(`${num1} is`, checkResult);
// Output: 5 is Positive

num1 = -3;
checkResult = checkPositiveFunc(num1);
console.log(`${num1} is`, checkResult);
// Output: -3 is Negative

// FEATURES

// Arithmetic Operations Script

// Function to perform addition
function addFunc(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtractFunc(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiplyFunc(a, b) {
    return a * b;
}

// Function to perform division
function divideFunc(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Division by zero is not allowed.");
        return null;
    }
}

// Function to find the remainder
function remainderFunc(a, b) {
    return a % b;
}

// Test the functions
let n1 = 10;
let n2 = 2;

console.log("Sum:", addFunc(n1, n2)); // Output: Sum: 12
console.log("Difference:", subtractFunc(n1, n2)); // Output: Difference: 8
console.log("Product:", multiplyFunc(n1, n2)); // Output: Product: 20
console.log("Quotient:", divideFunc(n1, n2)); // Output: Quotient: 5
console.log("Remainder:", remainderFunc(n1, n2)); // Output: Remainder: 0


// Comparison and Logical Operators Script

let a = 5;
let b = 10;

// Comparison operators
console.log(`${a} > ${b}:`, a > b); // Output: 5 > 10: false
console.log(`${a} >= ${b}:`, a >= b); // Output: 5 >= 10: false
console.log(`${a} === ${b}:`, a === b); // Output: 5 === 10: false

// Logical operators
console.log(`${a} > 0 && ${b} > 0:`, a > 0 && b > 0); // Output: 5 > 0 && 10 > 0: true
console.log(`${a} > 0 || ${b} < 0:`, a > 0 || b < 0); // Output: 5 > 0 || 10 < 0: true
console.log(`!(${a} > 0):`, !(a > 0)); // Output: !(5 > 0): false


// Ternary Operator Script

let number = 5;
let result = (number >= 0) ? 'Positive' : 'Negative';
console.log(`${number} is`, result); // Output: 5 is Positive

num = -3;
result = (number >= 0) ? 'Positive' : 'Negative';
console.log(`${number} is`, result); // Output: -3 is Negative
