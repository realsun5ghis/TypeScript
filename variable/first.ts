let index: number = 120;
console.log("number: " + index);

let isdone: boolean = false;
console.log("boolean: " + isdone);

let color: string = "blue";
color = 'red';
console.log("string: " + color);

let sentence: string = "Boolean is " + isdone + " " + "number is " + index + " " + "color is " + color + "\n";
console.log("string: " + sentence);
// Template Strings
var name1 = 'Sam';
var age = 42;
console.log(`hello my name is ${name1}, and I am ${age} years old`);


let list: number[] = [1, 2, 3];
console.log("array: " + list);

let stringList: Array<string> = ["my", "his", "her"];
console.log("generic array: " + stringList);

let note: any = 4;
note = "test";
note = true;
console.log("any: " + note);

let unusable: void = null;
unusable = undefined;
console.log("void: " + unusable);

let tuple: [string, number];
tuple = ["10", 10];
console.log("tuple[0]: " + tuple[0] + " tuple[1]: " + tuple[1]);

enum colors {red, blue, yellow};
let c: colors = colors.yellow;
console.log("enum: " + c);

// constants
const myName = "pat";
//myName = "jan" // error
console.log("const: " + myName);

// constant object literal
const person = {name:"Tammy"};
person.name = "Pushpa";
//person = null; // error
console.log("const: " + person.name);

// constant reference to an object
let person1 = {name:"Tammy"};
const p = person1;
p.name = "Pushpa";
//p = null; // error
console.log("const: " + p.name);

// Destructuring
let foo = ["one", "two", "three"];
console.log(foo[0], foo[1], foo[2]); 
let [one, two, three] = foo;
console.log("Destructuring: " + one); 
console.log("Destructuring: " + two); 
console.log("Destructuring: " + three); 

let {a, b, ...rest} = {a:10, b:20, C:30, d:40};
console.log("Destructuring: " + a);
console.log("Destructuring: " + b);
//console.log("Destructuring: " + rest);