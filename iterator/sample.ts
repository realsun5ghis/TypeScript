// Iterators
let mixedArray = [1, "string", false];
for (let item of mixedArray) {
    console.log(item);// 1, "string", false
}

let list = [4, 5, 6];
for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}