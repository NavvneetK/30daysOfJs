// Task 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hi there, how are you?`;
    }
}

const person1 = new Person('Navi', 18);
console.log(person1.greet());

// Task 2
Person.prototype.updateAge = function(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
};

person1.updateAge(20);

// Task 3
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }
}

// Task 4
Student.prototype.greet = function() {
    return `Hi there, how are you? My student ID is ${this.studentId}.`;
};

const student1 = new Student('Navi', 18, 'S123456');
console.log(student1.greet());

// Task 5
Person.genericGreet = function() {
    return 'Hello from Person class!';
};

console.log(Person.genericGreet());

// Task 6
Student.numberOfStudents = 0;

Student.prototype.constructor = function(name, age, studentId) {
    this.name = name;
    this.age = age;
    this.studentId = studentId;
    Student.numberOfStudents++;
    console.log(`Total number of students: ${Student.numberOfStudents}`);
};

const student2 = new Student('Shelly', 26, '1654321');
console.log(`Total number of students: ${Student.numberOfStudents}`);

// Task 7
class PersonWithFullName {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person2 = new PersonWithFullName('Navi', 'Kaur', 18);
console.log(person2.fullName);

// Task 8
PersonWithFullName.prototype.setFullName = function(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(`Updated full name: ${this.fullName}`);
};

person2.setFullName('Vikramjeet Singh');

// Task 9
class Account {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
            this.logBalance();
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
            this.logBalance();
        } else {
            console.log('Insufficient balance or invalid amount.');
        }
    }

    logBalance() {
        console.log(`Balance: $${this.#balance}`);
    }
}

// Task 10
const account1 = new Account();
account1.deposit(10000);
account1.withdraw(1000);
account1.withdraw(20);
