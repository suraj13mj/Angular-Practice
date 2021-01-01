"use strict";
//Files help us organise our code into a number of different files instead of writing all the code into a single file.
exports.__esModule = true;
//Here the Box class is defined in Program11-Box.ts. We import that class
var Program11_Box_1 = require("./Program11-Box");
var box_obj = new Program11_Box_1.Box();
box_obj.length = 50;
box_obj.breadth = 20;
box_obj.height = 40;
box_obj.getVolume();
console.log("Hello");
//Whenever a file has import or export keyword in the file then the Typescript considers it as a Module.
