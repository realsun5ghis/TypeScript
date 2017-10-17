var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return "Hello, " + this.name;
    };
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var john = new Person("John");
console.log("class: " + john.getName());
//set get
john.Name = "John1";
console.log("class: " + john.Name);
var howard = new Employee("Howard", "Sales");
console.log("class: " + howard.getName());
console.log("class: " + howard.getElevatorPitch());
// abstract class
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "ccounting and Auditing") || this;
    }
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    return AccountingDepartment;
}(Department));
var department = new AccountingDepartment();
department.printMeeting();
department.printName();
department.generateReports();
// Polymorphism
var department1;
department1 = new AccountingDepartment();
department1.printMeeting();
department1.printName();
//department1.generateReports(); 
//# sourceMappingURL=sample.js.map