// Type Assertions 

let message;                        //message is 'any' type
message = "Hello World";


//To tell TSC compiler that 'message' is a string type we use Type Assertions so that we get the intellisense of string type

//Type Assertion - Method 1
let bool_var = (<string>message).endsWith("d");

//Type Assertion - Method 2
let bool_var1 = (message as string).endsWith("D");

console.log(bool_var);
console.log(bool_var1);

