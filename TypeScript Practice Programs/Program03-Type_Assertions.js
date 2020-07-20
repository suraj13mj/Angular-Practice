// Type Assertions 
var message; //message is 'any' type
message = "Hello World";
//To tell TSC compiler that 'message' is a string type we use Type Assertions so that we get the intellisense of string type
//Type Assertion - Method 1
var bool_var = message.endsWith("d");
//Type Assertion - Method 2
var bool_var1 = message.endsWith("D");
console.log(bool_var);
console.log(bool_var1);
