// function
function add(x, y) {
    return x + y;
}
var result1 = add(1, 10);
var result2 = add(1, undefined);
console.log("add: " + result1);
console.log("add: " + result2);
var myadd = function (x, y) { return x + y; };
var result = myadd(1, 10);
console.log("Anonymous add: " + result);
// optional parameter function
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result3 = buildName1("Bob");
var result4 = buildName1("Bob", "Adams");
console.log("optional parameters: " + result3);
console.log("optional parameters: " + result4);
function buildName2(firstName, lastName) {
    return firstName + " " + lastName;
}
var result5 = buildName2("Bob");
var result6 = buildName2("Bob", "Adams");
console.log("optional parameters: " + result5);
console.log("optional parameters: " + result6);
// rest parameters function
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("rest parameters: " + employeeName);
// arrow function
var add1 = function (x, y) { return x + y; };
var args = add1(3, 5);
console.log("arrow: " + args);
//# sourceMappingURL=first.js.map