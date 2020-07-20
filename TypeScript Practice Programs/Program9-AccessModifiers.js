//Access Modifiers - public private and protected are available in TS
var Box = /** @class */ (function () {
    function Box(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    Box.prototype.getVolume = function () {
        console.log("Volume of Box is : " + (this.length * this.breadth * this.height));
    };
    return Box;
}());
var box_obj = new Box(10, 15, 20);
//box_obj.length = 20;                //Since the field is private we can't access it from outside
//TS has a special feature where there is no need to declare the field separately and then assign it in constructor.
//We can do this both inside the constructor by assigning accesss modifiers to the fields.
//Thus TSC creates the field and then assigns the values to these fields.
var Box1 = /** @class */ (function () {
    function Box1(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    } // this.length = length
    Box1.prototype.getVolume = function () {
        console.log("Volume of Box is : " + (this.length * this.breadth * this.height));
    };
    return Box1;
}());
var box_obj1 = new Box1(10, 20, 30);
box_obj1.getVolume();
