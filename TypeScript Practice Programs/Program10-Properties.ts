//Inorder to access private fields from outside the class we have to provide getter and setter methods

class Box {

    constructor(private length:number, private breadth:number, private height:number){
    }

    getLength(){
        return this.length;
    }

    setLength(value){
        if(value<0){
            throw new Error("Value cannot be 0.")
        }
    }

    getVolume(){
        console.log("The Volume of the Box is "+ this.length * this.breadth * this.height);
    }
}

let box_obj = new Box(10,20,30);

box_obj.setLength(50);
let l = box_obj.getLength();

box_obj.getVolume();




//Instead of getter and setter methods, we can do the above using Properties

class Box1 {

    constructor(private length:number, private breadth:number, private height:number){
    }

    get Length(){                                                   //we use the get keyword
        return this.breadth;
    }

    set Length(value){                                              //we use the set keyword
        if(value<0){
            throw new Error("Value cannot be 0.")
        }
    }

    getVolume(){
        console.log("The Volume of the Box is "+ this.breadth * this.breadth * this.height);
    }
}

let box_obj1 = new Box1(10,20,30);

box_obj1.Length = 50;                                               //we can use the Properties similar to fields
let l1 = box_obj1.Length;                                           //Properties are like fields from outside, but internally they are internally functions

box_obj1.getVolume();





//Above we use the Pascal case for property names i.e "Length" 
//We can use Camel case for property names i.e "length" , but then we have set the actual field names as _fieldname i.e "_length"


class Box2 {

    constructor(private _length:number, private _breadth:number, private _height:number){
    }

    get length(){                                                   
        return this._length;
    }

    set length(value){                                     
        if(value<0){
            throw new Error("Value cannot be 0.")
        }
        this._length = value;
    }

    getVolume(){
        console.log("The Volume of the Box is "+ this._length * this._breadth * this._height);
    }
}

let box_obj2 = new Box2(10,20,30);

box_obj2.length = 50;                                               
let l2 = box_obj2.length;                                           

box_obj2.getVolume();