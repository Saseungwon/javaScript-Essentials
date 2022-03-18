import getType from './getType'     // getType.js에 있는 getType 메서드를 가져올 수 있다.

console.log(typeof 'hello world');  // string  
console.log(typeof 123);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      //undefined
console.log(typeof null);           // object
console.log(typeof []);             // object
console.log(typeof {});             // object

console.log(getType(123))     // number
console.log(getType(false))   // Boolean
console.log(getType(null))    // Null
console.log(getType({}))      // Object
console.log(getType([]))      // Array