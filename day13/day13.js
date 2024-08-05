// Task 1
export function add(a, b) {
    return a + b;
}

// Task 2
export const person = {
    name: 'Navi',
    age: 18,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Task 3:
export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// Task 4
export default function subtract(a, b) {
    return a - b;
}
