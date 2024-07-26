// Task 1
let array = [1, 2, 3, 4, 5];
console.log(array);

// Task 2
console.log(array[0]); // First element
console.log(array[array.length - 1]); // Last element

// Task 3
array.push(6);
console.log(array);

// Task 4
array.pop();
console.log(array);

// Task 5
array.shift();
console.log(array);

// Task 6
array.unshift(0);
console.log(array);

// Task 7
let doubledArray = array.map(num => num * 2);
console.log(doubledArray);

// Task 8
let evenArray = array.filter(num => num % 2 === 0);
console.log(evenArray);

// Task 9
let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

// Task 10
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Task 11
array.forEach(element => console.log(element));

// Task 12
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13
console.log(matrix[2][1]); 
