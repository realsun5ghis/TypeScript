/// <reference path="Validation.ts" />

namespace Validation {
    const numberRegexp = /^[0-9]+$/;
    
    export class ZipCodeValidator implements StringValidator {
        public isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}