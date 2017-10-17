// Iterators
var mixedArray = [1, "string", false];
for (var _i = 0, mixedArray_1 = mixedArray; _i < mixedArray_1.length; _i++) {
    var item = mixedArray_1[_i];
    console.log(item); // 1, "string", false
}
var list = [4, 5, 6];
for (var i in list) {
    console.log(i); // "0", "1", "2",
}
for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
    var i = list_1[_a];
    console.log(i); // "4", "5", "6"
}
//# sourceMappingURL=sample.js.map