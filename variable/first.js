var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var index = 120;
console.log("number: " + index);
var isdone = false;
console.log("boolean: " + isdone);
var color = "blue";
color = 'red';
console.log("string: " + color);
var sentence = "Boolean is " + isdone + " " + "number is " + index + " " + "color is " + color + "\n";
console.log("string: " + sentence);
// Template Strings
var name1 = 'Sam';
var age = 42;
console.log("hello my name is " + name1 + ", and I am " + age + " years old");
var list = [1, 2, 3];
console.log("array: " + list);
var stringList = ["my", "his", "her"];
console.log("generic array: " + stringList);
var note = 4;
note = "test";
note = true;
console.log("any: " + note);
var unusable = null;
unusable = undefined;
console.log("void: " + unusable);
var tuple;
tuple = ["10", 10];
console.log("tuple[0]: " + tuple[0] + " tuple[1]: " + tuple[1]);
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["yellow"] = 2] = "yellow";
})(colors || (colors = {}));
;
var c = colors.yellow;
console.log("enum: " + c);
// constants
var myName = "pat";
//myName = "jan" // error
console.log("const: " + myName);
// constant object literal
var person = { name: "Tammy" };
person.name = "Pushpa";
//person = null; // error
console.log("const: " + person.name);
// constant reference to an object
var person1 = { name: "Tammy" };
var p = person1;
p.name = "Pushpa";
//p = null; // error
console.log("const: " + p.name);
// Destructuring
var foo = ["one", "two", "three"];
console.log(foo[0], foo[1], foo[2]);
var one = foo[0], two = foo[1], three = foo[2];
console.log("Destructuring: " + one);
console.log("Destructuring: " + two);
console.log("Destructuring: " + three);
var _a = { a: 10, b: 20, C: 30, d: 40 }, a = _a.a, b = _a.b, rest = __rest(_a, ["a", "b"]);
console.log("Destructuring: " + a);
console.log("Destructuring: " + b);
//console.log("Destructuring: " + rest); 
//# sourceMappingURL=first.js.map