// ACTIVITY 1

// Task 1
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even."); 
    } else {
        console.log(number + " is odd.");
    }
}

checkEvenOdd(4); // Output: 4 is even.

// Task 2
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5)); // Output: 25

// ACTIVITY 2

// Task 3

const findMax = function(a, b) {
    let max = (a > b) ? a : b;
    console.log("Maximum: " + max); 
};

findMax(10, 5); // Output: Maximum: 10

// Task 4

const concatenateStrings = function(str1, str2) {
    return str1 + " " + str2;
};

console.log(concatenateStrings("Hello", "World")); // Output: Hello World

// ACTIVITY 3

// Task 5

const sum = (a, b) => a + b;

console.log(sum(3, 7)); // Output: 10

// Task 6

const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("JavaScript", "J")); // Output: true

// ACTIVITY 4

// Task 7

function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // Output: 5

// Task 8

function greet(name, age = 18) {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greet("Alice")); // Output: Hello Alice, you are 18 years old.

// ACTIVITY 5

// Task 9

function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

repeatFunction(() => console.log("Hello!"), 3); // Output: Hello! (3 times)

// Task 10

function compose(f, g) {
    return (x) => g(f(x));
}

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(5)); // Output: 100
