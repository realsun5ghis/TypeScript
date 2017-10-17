// Generic Function
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
console.log("Generic: " + output1);
let output2: number = identity<number>(1000);
console.log("Generic: " + output2);

// Generic Classes
class Shelf<T> {
    private items: Array<T> = new Array<T>();
    
    public add(item: T): void {
        this.items.push(item);
    }

    public get(): T {
        return this.items.pop();
    }
}
let numberArray = new Shelf<number>();
let number1 = 1000;
numberArray.add(number1);
console.log("Generic: " + numberArray.get());

let stringArray: Shelf<string> = new Shelf<string>();
let string1: string = "test";
stringArray.add(string1);
console.log("Generic: " + stringArray.get());

// Generic Interfaces
interface Inventory<T> {
    addItem(item: T): void;
    getAllItem() : Array<T>;
}






