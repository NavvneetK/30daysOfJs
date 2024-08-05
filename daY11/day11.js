// Activity 1: Understanding Promises
// Task 1
const resolvePromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

resolvePromise.then((message) => {
    console.log(message);
});

// Task 2
const rejectPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 seconds");
    }, 2000);
});

rejectPromise.catch((error) => {
    console.error(error);
});

// Activity 2: Chaining Promises
// Task 3
const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First promise resolved");
    }, 1000);
});

const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second promise resolved");
    }, 2000);
});

const thirdPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Third promise resolved");
    }, 3000);
});

firstPromise
    .then((message) => {
        console.log(message);
        return secondPromise;
    })
    .then((message) => {
        console.log(message);
        return thirdPromise;
    })
    .then((message) => {
        console.log(message);
    });

// Activity 3: Using Async/Await
// Task 4
async function asyncFunction() {
    const message = await resolvePromise;
    console.log(message);
}

asyncFunction();

// Task 5
async function asyncFunctionWithErrorHandling() {
    try {
        const message = await rejectPromise;
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

asyncFunctionWithErrorHandling();

// Activity 4: Fetching Data from an API
// Task 6
function fetchDataUsingPromises() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

fetchDataUsingPromises();

// Task 7
async function fetchDataUsingAsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchDataUsingAsyncAwait();

// Activity 5: Concurrent Promises
// Task 8
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 2000);
});

Promise.all([promise1, promise2]).then((messages) => {
    console.log(messages);
});

// Task 9
Promise.race([promise1, promise2]).then((message) => {
    console.log(message);
});
