// class
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return "Hello, " + this.name;
    }

    set Name(name: string) {
        this.name = name;
    }

    get Name(): string {
        return this.name;
    } 
}

class Employee extends Person {
    readonly department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return "Hello, my name is " + this.name + " and I work in "+ this.department + ".";
    }
}

let john = new Person("John");
console.log("class: " + john.getName());
//set get
john.Name = "John1";
console.log("class: " + john.Name);

let howard = new Employee("Howard", "Sales");
console.log("class: " + howard.getName());
console.log("class: " + howard.getElevatorPitch());


// abstract class
abstract class Department {
    constructor(public name: string) {}
    
    printName(): void {
        console.log("Department name: " + this.name);
    }
    
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("ccounting and Auditing");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
}

let department = new AccountingDepartment();
department.printMeeting();  
department.printName();
department.generateReports(); 

// Polymorphism
let department1: Department;
department1 = new AccountingDepartment(); 
department1.printMeeting();
department1.printName();
//department1.generateReports();