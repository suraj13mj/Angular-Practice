// In JavaScript we can define functions as follow
var func = function (message) {
    console.log("Learner Welcome to " + message + " !!!");
};
func("Angular");
// In TypeScript we can do the above using Arrow Functions (similar to Lambda functions)
var func_ts = function (message) {
    console.log("Learner Welcome to " + message + " !!!");
};
func_ts("Angular 9");
var func_ts1 = function (message) { return console.log("Hello" + message); };
func_ts1("Angular 9");
