var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    Clock.prototype.printTime = function () {
        console.log("The time is: " + this.currentTime);
    };
    return Clock;
}());
var myClock = new Clock(12, 60);
myClock.setTime(new Date());
myClock.printTime();
var a = { type: "literal" };
var NotAnAction = /** @class */ (function () {
    function NotAnAction() {
        this.type = "construct function(class)";
    }
    return NotAnAction;
}());
a = new NotAnAction();
console.log(a.type);
function showPerson(person) {
    console.log("name: ", person.name, " age:", person.age);
}
var person = { name: "Bob", age: 30 };
showPerson(person);
//# sourceMappingURL=sample.js.map