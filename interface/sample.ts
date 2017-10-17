// interface
interface ClockInterface {
    currentTime: Date;

    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;

    constructor(h: number,m: number) {}

    setTime(d: Date) {
        this.currentTime = d;
    }

    printTime() {
        console.log("The time is: " + this.currentTime);
    }
}

let myClock = new Clock(12,60);
myClock.setTime(new Date());
myClock.printTime();

// interface
interface Action {
    type: string;
}

let a: Action = {type:"literal"};

class NotAnAction {
    type: string;

    constructor() {
        this.type = "construct function(class)";
    }
}

a = new NotAnAction();
console.log(a.type);

// function arguments
interface IPerson{
	name: string;
	age: number;
}

function showPerson(person: IPerson) {
    console.log("name: ", person.name, " age:", person.age);
}

let person = {name:"Bob", age:30};
showPerson(person);