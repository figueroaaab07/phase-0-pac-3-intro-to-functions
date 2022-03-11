// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}
function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}
function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

function doSomething(thing) {
    console.log(thing);
}
  
doSomething("anything");
doSomething("Working");
doSomething("Running");
doSomething("Executing");

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
sayHelloTo("Isabel");
sayHelloTo("Sofia");
sayHelloTo("Brenda");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);
// console.log(firstName);
// function say(greeting, firstName) {
//     console.log(`${greeting}, ${firstName}!`);
// }
// say("Goodbye", "Julio");
// say("Julio", "hello");

// function say(greeting, firstName) {
//     console.log("firstName: ", firstName);
//     console.log("greeting: ", greeting);
//     console.log(`${greeting}, ${firstName}!`);
// }
// say("Julio", "hello");

function add(x, y) {
    return x + y;
}
console.log(add(1, 2));

function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
//    console.log("I was called!");
}
console.log(say("Hello", "Sofia"));

function likeFruit(name, fruit) {
    console.log(`${name} likes ${fruit}`);
}
likeFruit("Alex", "kiwi");
likeFruit("Betty", "apple");
likeFruit("Sandra", "peach");

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiply(385, 12));
console.log(multiply(1287, -54));
