//Inorder to access private fields from outside the class we have to provide getter and setter methods
var Box = /** @class */ (function () {
    function Box(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    Box.prototype.getLength = function () {
        return this.length;
    };
    Box.prototype.setLength = function (value) {
        if (value < 0) {
            throw new Error("Value cannot be 0.");
        }
        //this.length = value;
    };
    Box.prototype.getVolume = function () {
        console.log("The Volume of the Box is " + this.length * this.breadth * this.height);
    };
    return Box;
}());
var box_obj = new Box(10, 20, 30);
box_obj.setLength(50);
var l = box_obj.getLength();
box_obj.getVolume();
//Instead of getter and setter methods, we can do the above using Properties
var Box1 = /** @class */ (function () {
    function Box1(length, breadth, height) {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
    Object.defineProperty(Box1.prototype, "Length", {
        get: function () {
            return this.breadth;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be 0.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Box1.prototype.getVolume = function () {
        console.log("The Volume of the Box is " + this.breadth * this.breadth * this.height);
    };
    return Box1;
}());
var box_obj1 = new Box1(10, 20, 30);
box_obj1.Length = 50; //we can use the Properties similar to fields
var l1 = box_obj1.Length; //Properties are like fields from outside, but internally they are internally functions
box_obj1.getVolume();
//Above we use the Pascal case for property names i.e "Length" 
//We can use Camel case for property names i.e "length" , but then we have set the actual field names as _fieldname i.e "_length"
var Box2 = /** @class */ (function () {
    function Box2(_length, _breadth, _height) {
        this._length = _length;
        this._breadth = _breadth;
        this._height = _height;
    }
    Object.defineProperty(Box2.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be 0.");
            }
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Box2.prototype.getVolume = function () {
        console.log("The Volume of the Box is " + this._length * this._breadth * this._height);
    };
    return Box2;
}());
var box_obj2 = new Box2(10, 20, 30);
box_obj2.length = 50;
var l2 = box_obj2.length;
box_obj2.getVolume();
