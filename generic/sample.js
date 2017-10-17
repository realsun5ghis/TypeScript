// Generic Function
function identity(arg) {
    return arg;
}
var output1 = identity("myString");
console.log("Generic: " + output1);
var output2 = identity(1000);
console.log("Generic: " + output2);
// Generic Classes
var Shelf = /** @class */ (function () {
    function Shelf() {
        this.items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this.items.push(item);
    };
    Shelf.prototype.get = function () {
        return this.items.pop();
    };
    return Shelf;
}());
var numberArray = new Shelf();
var number1 = 1000;
numberArray.add(number1);
console.log("Generic: " + numberArray.get());
var stringArray = new Shelf();
var string1 = "test";
stringArray.add(string1);
console.log("Generic: " + stringArray.get());
//# sourceMappingURL=sample.js.map