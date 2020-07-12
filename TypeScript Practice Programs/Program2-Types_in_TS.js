// In JavaScript we can assign different types values to variables on the go
// TypeScript has following types
var num = 5;
num = "Hello"; //Gives Error in TS but compiles into JS as JavaScript supports it
// Types in TS
var a; //Type Anotations
var b;
var c;
var d;
var num1; //Considered as "any" type
num1 = 5;
num1 = "Hello";
num1 = true;
var Colors;
(function (Colors) {
    Colors[Colors["Blue"] = 0] = "Blue";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Yellow"] = 2] = "Yellow";
    Colors[Colors["Green"] = 3] = "Green";
    Colors[Colors["Orange"] = 4] = "Orange";
})(Colors || (Colors = {}));
;
var bgColor = Colors.Blue;
