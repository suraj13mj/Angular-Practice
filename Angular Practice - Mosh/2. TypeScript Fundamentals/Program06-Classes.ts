//The concept of OOPs say the properties (fields) and functions (methods) related to object must be grouped together into Classes.

//But Interfaces are only for declaration of field and method signatures and not for implementation.

interface Point{
    x : number,
    y : number,
}

let draw_point = (point_obj : Point) => {              
    //...
}

let getDistance = (point1 : Point, point2 : Point) => {
    //...
}




//Interfaces are only for declaration of signatures

interface Point1{
    x : number,
    y : number,
    draw_point1 : () => void,                                               // Here there is no need to pass parameters (x,y) 
    getDistance1 : () => number                                             // As they are accessible inside the class
}

//Classes group the fields and methods related to a object into a single class.
//Classes have the implementation

class Point2{
    x : number = 5;
    y : number;

    draw_point2() {
        //...
    }

    getDistance2(anotherPoint : Point) {
        //...
    }
}