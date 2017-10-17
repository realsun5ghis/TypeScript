/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators1: Validation.StringValidator;
validators1 = new Validation.ZipCodeValidator();
let validators2 = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    console.log( s + (validators1.isAcceptable(s) ? " matches " : " does not match ") + "ZIP code");
}

for (let s of strings) {
    console.log( s + (validators2.isAcceptable(s) ? " matches " : " does not match ") + "Letters Only");
}