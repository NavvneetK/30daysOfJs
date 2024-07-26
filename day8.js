// Task 1
let name = "Navi";
let age = 18;
let greeting = `My name is ${name}, ${age} years old.`;
console.log(greeting);
// Output: My name is Navi, 18 years old.

// Task 2
let String = `I am Navi.
My Name is Navneet.
I am a sophomore.`;
console.log(String);
// Output:
// I am Navi.
// My Name is Navneet.
// I am a sophomore.

// Task 3
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second);
// Output: 1 2

// Task 4
let book = {
    title: "My Life",
    author: "Navneet Kaur",
    year: 2024
};
let { title, author } = book;
console.log(title, author);

// Task 5
let oldArray = [1, 2, 3];
let newArray = [...oldArray, 4, 5, 6];
console.log(newArray);
// Output: [1, 2, 3, 4, 5, 6]

// Task 6
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5));
// Output: 15

// Task 7
function multiply(a, b = 0) {
    return a * b;
}
console.log(multiply(6, 6)); // Output: 36
console.log(multiply(5));    // Output: 0

// Task 8
let person = {
    name: "Navi",
    age: 18,
    greet() {
        return `Hi, I am ${this.name}, ${this.age} years old.`;
    }
};
console.log(person);
console.log(person.greet());
// Output:
// { name: 'Navi', age: 18, greet: [Function: greet] }
// Hi,I am Navi, 18 years old.

// Task 9
let exercise = "Yes";
let health = {
    name: "Navi",
    age: 18,
    [exercise]: "No"
};
console.log(health);
// Output: { name: 'Navi', age: 18, exercise:"No" }




