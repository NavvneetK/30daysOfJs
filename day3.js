// ACTIVITY:1

// Task1
// Number Check Script

let number = 10; 

if (number > 0) {
    console.log(number + " is positive."); // Output: 10 is positive.
} else if (number < 0) {
    console.log(number + " is negative.");
} else {
    console.log(number + " is zero.");
}


// Task2
// Voting Eligibility Script

let age = 20; 

if (age > 18) {
    console.log("You are eligible to vote."); // Output: You are eligible to vote.
} else {
    console.log("You are not eligible to vote.");
}

// ACTIVITY2
// TASK 3

let a = 10, b = 20, c = 30; 

if (a >= b && a >= c) {
    console.log(a + " is the largest."); 
} else {
    if (b >= a && b >= c) {
        console.log(b + " is the largest."); // Output: 30 is the largest.
    } else {
        console.log(c + " is the largest."); 
    }
}

// ACTIVITY3
// TASK 4
// Day of the Week Script

let dayNumber = 3; 

switch(dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday"); // Output: Tuesday
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

// TASK 5
// Grade Assignment Script

let score = 85; 

switch(true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B"); // Output: Grade: B
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    case (score >= 60):
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}

// ACTIVITY 4
// TASK 6

let num = 7; 

let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // Output: Odd


// ACTIVITY 5
// TASK 7
// Leap Year Check Script
let year = 2024; // Example year

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year."); // Output: 2024 is a leap year.
} else {
    console.log(year + " is not a leap year.");
}






