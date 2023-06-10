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
        if (y == undefined) {
            x = this.result;
            y = x;
        }

        this.result = x + y;
        return this.result;
    }

    subtract(x, y) {
        if (y == undefined) {
            x = this.result;
            y = x;
        }

        this.result = x - y;
        return this.result;
    }

    multiply(x, y) {
        if (y == undefined) {
            x = this.result;
            y = x;
        }

        this.result = x * y;
        return this.result;
    }

    divide(x, y) {
        if (y == undefined) {
            x = this.result;
            y = x;
        }

        if(y != 0) {
            this.result = x / y;
        }
        else {
            console.log("Cannot divide by 0");
        }
        return this.result;
    }
}

let testCalculator = new Calculator();
console.log(testCalculator.add(2, 5)); // 2 + 5 = 7
console.log(testCalculator.subtract(5, 2)); // 5 - 2 = 3
console.log(testCalculator.multiply(5, 3)); // 5 * 3 = 15
console.log(testCalculator.divide(100, 5)); // 100 / 5 = 20

console.log("\n");
testCalculator.subtract(1, 1); //reset calculator to 0

//test passing only one variable into methods
console.log(testCalculator.add(0, 100)); // 0 + 100 = 100
console.log(testCalculator.subtract(testCalculator.result, 50)); // 100 - 50 = 50
console.log(testCalculator.divide(testCalculator.result, 5)); // 50 / 5 = 10
console.log(testCalculator.multiply(testCalculator.result, 3)); // 10 * 3 = 30