// function
function add (x: number, y: number): number {
    return x + y ;
}
let result1 = add(1, 10);
let result2 = add(1, undefined);
console.log("add: " + result1);
console.log("add: " + result2);

let myadd = function(x: number, y:number): number {return x + y};
let result = myadd(1, 10);
console.log("Anonymous add: " + result);

// optional parameter function
function buildName1(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result3 = buildName1("Bob"); 
let result4 = buildName1("Bob", "Adams");
console.log("optional parameters: " + result3);
console.log("optional parameters: " + result4);

function buildName2(firstName: string, lastName?: string) {
    return firstName + " " + lastName;
}
let result5 = buildName2("Bob"); 
let result6 = buildName2("Bob", "Adams");
console.log("optional parameters: " + result5);
console.log("optional parameters: " + result6);

// rest parameters function
function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("rest parameters: " + employeeName);

// arrow function
const add1 = (x, y) => x + y;
let args = add1(3, 5);
console.log("arrow: " + args);
