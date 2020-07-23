// In JavaScript we can assign different types values to variables on the go
// TypeScript has following types

let num = 5;
num = "Hello";          //Gives Error in TS but compiles into JS as JavaScript (var) supports it

// Types in TS

let a : number;        //Type Anotations
let b : boolean;
let c : string;
let d : any;

let num1;              //Considered as "any" type
num1 = 5;
num1 = "Hello";
num1 = true;

enum Colors {Blue = 0, Red = 1, Yellow = 2, Green = 3, Orange = 4};
let bgColor = Colors.Blue;
let fgColor = Colors.Yellow;

