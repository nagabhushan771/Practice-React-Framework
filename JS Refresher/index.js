// * const - to define constant variables
// * let to create the variable which keeps changes
// let myName = "Nags";
// console.log(myName);
// myName = "Nagabhushan";
// console.log(myName);

// * Arrow functions
// * 'this' keyword in arrow functions always keep it's context to arrow functions and not change it on the run time
// const myFunc = name => {
//     console.log(name);
// }

// * if we ahve only one parameter in the function then we can omit the paranthesis around the parameter
// * if we don't have any parameter in the function then the empty parenthesis is must
// * if we have multiple parameters in the function then those parameters should me wrapped inside the parenthesis

// * in function body if we have only the return statement we can omit the flower braces and the return keyword
// * and write only the value that we need to return

// myFunc('Nags')

// ? Exports and Imports
// * Default exports and named exports and in the same way default imports and named imports
// * in default export we need to explicitly specify the default password ad for named exports it is not needed
// * in default imports we can assign any name we want while importing
// * in named imports we need to use the same name inside the flower braces as we used in the exports,
// * and we can import multiple things by specifying thier comma seperated names inside the flower braces
// * if we want all the components in the same import then we can use * in the place of the names
// * if we wan't to changes the name of the named imports then we can use the as keyword
// * while using the * in import then we need to use the as keyword give the name to the package

// ? Classes
// * Classes will have the properties and methods
// class human { // Creating the class
//     constructor() {
//         this.gender = 'Male';
//     }

//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends human { // Creating the class by extending another calss
//     constructor() {
//         super();// whenever we extend the calsses we need to call the parent class constructor so we are calling the super method
//         this.name = "Nags";
//         this.gender = 'Female'; // We can change the values of the parent variable in the child when extend them
//     }

//     printMyName() {
//         console.log(this.name);
//     }

// }

// // * Creating the object of the class
// const person = new Person();
// person.printMyName();
// person.printGender();

// class human { // Creating the class
//         gender = 'Male';

//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends human { // Creating the class by extending another calss
//     name = "Nags";
//     gender = 'Female'; // Since we are not using the constructor no need to call the super it will be  called internally

//     printMyName = () => {
//         console.log(this.name);
//     }

// }

// // Creating the object of the class
// const person = new Person();
// person.printMyName();
// person.printGender();
// ? Spread operator
// * Spread operator in the arrays
// const number = [1, 2, 3];
// const newNumber = [...number, 4, 5]; // opens the array

// console.log(newNumber);

// // * Spread operator in the object
// const person = {
//     name: "Nags",
//     gender: "female",
// };

// const newPerson = { ...person, gender: "Male", age: 24 }; // Add the props of the other object and adds if any thing new is specified
// // if there is already the property of the same name that is mentioned as the new input
// // then the old value will be replaced with new values provided eg.: gender in this example

// console.log(newPerson.name, newPerson.age, newPerson.gender);

// * Rest Operator - it will group the arguments of the function into the array
// const filter = (...args) => {
//     return args.filter(el => el%2 === 1);
// };

// console.log(filter(1, 2, 3, 4, 5));/

// ? Destructuring
// * Destricturing - it allows us to get the single element from the arrays and store them in the variables 
// * where as the spread operator will do this for all the elements in the array

// * Array Destructuring
// const numbers = [1, 2, 3];
// [num1, num2] = numbers;
// console.log(num1, num2); // here the order will decide which value will get assigned to which variable

// const person = {
//     name: 'Nags',
//     age: 24
// };

// {age} = person;

// console.log(age);


