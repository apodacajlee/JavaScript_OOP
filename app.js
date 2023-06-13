console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies) {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    };

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    removeHobby(hobby) {
        let update = this.hobbies.filter(x => {
            return x != hobby; //remove item(s) from array matching specified hobby
        });
        this.hobbies = update //update the original array
    }

    greeting() {
        console.log("Hello there!");
    }
}

// Exercise 2 Section
class Coder extends Person {
    constructor(name, pets, residence, hobbies) {
        super(name, pets, residence, hobbies);

        this.occupation = "Full Stack Web Developer";
    }

    greeting() {
        console.log("Hi there, fellow coder!");
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let bob = new Person("Bob", 1, "Apartment", ["Eating", "Sleeping", "Fortnite"]);
bob.addHobby("Repeating");
bob.removeHobby("Fortnite");
bob.greeting();
console.log(`Name: ${bob.name} \nPets: ${bob.pets} \nResidence: ${bob.residence} \nHobbies: ${bob.hobbies} \n`);

let joshua = new Coder("Joshua", 3, "House", ["Gaming", "Biking", "Coding", "Drawing"]);
joshua.addHobby("Voice Acting");
joshua.removeHobby("Biking");
joshua.greeting();
console.log(`Name: ${joshua.name} \nPets: ${joshua.pets} \nResidence: ${joshua.residence} \nHobbies: ${joshua.hobbies} \n`);




// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator {
    constructor() {
        this.result = 0;
    }

    add(x, y) {
        if(arguments.length == 1) {
            this.result += x;
            
        }

        else {
            this.result = x + y;
        }

        return this.result;
    }

    subtract(x, y) {
        if(arguments.length == 1) {
            this.result -= x;
        }

        else {
            this.result = x - y;
        }

        return this.result;
    }

    multiply(x, y) {
        if(arguments.length == 1) {
            this.result *= x;
        }

        else {
            this.result = x * y;
            return this.result;
        }

    }

    divide(x, y) {
        if(arguments.length == 1) {
            if(x != 0) {
                this.result /= x;
            }
            else {
                console.log("Cannot divide by 0");
            }
        }

        else {
            if(y != 0) {
                this.result = x / y;
            }
            else {
                console.log("Cannot divide by 0");
            }
        }

        return this.result;
    }

    displayResult() {
        console.log(this.result);
    }
}

let testCalculator1 = new Calculator();
testCalculator1.add(2, 5); // 2 + 5 = 7
testCalculator1.displayResult();

testCalculator1.subtract(5, 2); // 5 - 2 = 3
testCalculator1.displayResult();

testCalculator1.multiply(5, 3); // 5 * 3 = 15
testCalculator1.displayResult();

testCalculator1.divide(100, 5); // 100 / 5 = 20
testCalculator1.displayResult();

console.log("\n");

//test passing only one variable into methods
let testCalculator2 = new Calculator();
testCalculator2.add(8); // 0 + 8 = 8
testCalculator2.displayResult();

testCalculator2.subtract(2); // 8 - 2 = 6
testCalculator2.displayResult();

testCalculator2.divide(3); // 6 / 3 = 2
testCalculator2.displayResult();

testCalculator2.multiply(5); // 2 * 5 = 10
testCalculator2.displayResult();