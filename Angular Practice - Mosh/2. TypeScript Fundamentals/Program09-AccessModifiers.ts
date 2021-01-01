//Access Modifiers - public private and protected are available in TS

class Box {
    private length : number;
    private breadth : number;
    private height : number;

    constructor(length ?: number, breadth ?: number, height?:number){
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }

    getVolume() {
        console.log("Volume of Box is : "+(this.length * this.breadth * this.height));
    }
}

let box_obj = new Box(10,15,20);
//box_obj.length = 20;                //Since the field is private we can't access it from outside






//TS has a special feature where there is no need to declare the field separately and then assign it in constructor.
//We can do this both inside the constructor by assigning accesss modifiers to the fields.
//Thus TSC creates the field and then assigns the values to these fields.

class Box1 {

    constructor(private length?:number, private breadth?:number, public height?:number){           //There is no need to even explicitly assign
    }                                                                                               // this.length = length

    getVolume() {
        console.log("Volume of Box is : "+(this.length * this.breadth * this.height));
    }

}

let box_obj1 = new Box1(10,20,30);
box_obj1.getVolume();