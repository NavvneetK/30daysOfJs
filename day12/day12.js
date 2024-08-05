// Activity 1: Basic Error Handling with Try-Catch
// Task 1
function throwError() {
    try {
        throw new Error("Intentional error thrown");
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
}

throwError();

// Task 2
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
}

console.log(divideNumbers(4, 2)); // Should print 2
console.log(divideNumbers(4, 0)); // Should log an error message

// Activity 2: Finally Block
// Task 3
function tryCatchFinally() {
    try {
        console.log("In the try block");
        throw new Error("Error thrown in try block");
    } catch (error) {
        console.error("In the catch block: ", error.message);
    } finally {
        console.log("In the finally block");
    }
}

tryCatchFinally();

// Activity 3: Custom Error Objects
// Task 4
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error");
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

throwCustomError();

// Task 5
function validateInput(input) {
    try {
        if (input.trim() === "") {
            throw new CustomError("Input cannot be empty");
        }
        console.log("Valid input: ", input);
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

validateInput("Valid input"); // Should print the input
validateInput(""); // Should log an error message

// Activity 4: Error Handling in Promises
// Task 6
const promiseWithRandomOutcome = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    setTimeout(() => {
        if (isSuccess) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 2000);
});

promiseWithRandomOutcome
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("Caught in promise: ", error);
    });

// Task 7
async function handlePromiseWithTryCatch() {
    try {
        const message = await promiseWithRandomOutcome;
        console.log(message);
    } catch (error) {
        console.error("Caught in async function: ", error);
    }
}

handlePromiseWithTryCatch();

// Activity 5: Graceful Error Handling in Fetch
// Task 8
function fetchWithErrorHandling() {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error("Fetch error: ", error.message));
}

fetchWithErrorHandling();

// Task 9
async function asyncFetchWithErrorHandling() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Fetch error: ", error.message);
    }
}

asyncFetchWithErrorHandling();
