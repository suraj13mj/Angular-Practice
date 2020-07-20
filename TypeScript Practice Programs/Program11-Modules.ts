//Files help us organise our code into a number of different files instead of writing all the code into a single file.

//Here the Box class is defined in Program11-Box.ts. We import that class

import {Box} from "./Program11-Box"

let box_obj = new Box();

box_obj.length = 50;  
box_obj.breadth = 20;
box_obj.height = 40;                                           

box_obj.getVolume();


//Whenever a file has import or export keyword in the file then the Typescript considers it as a Module.