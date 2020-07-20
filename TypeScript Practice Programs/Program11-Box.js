"use strict";
exports.__esModule = true;
exports.Box = void 0;
var Box = /** @class */ (function () {
    function Box(_length, _breadth, _height) {
        this._length = _length;
        this._breadth = _breadth;
        this._height = _height;
    }
    Object.defineProperty(Box.prototype, "length", {
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
    Object.defineProperty(Box.prototype, "breadth", {
        get: function () {
            return this._breadth;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be 0.");
            }
            this._breadth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value cannot be 0.");
            }
            this._height = value;
        },
        enumerable: false,
        configurable: true
    });
    Box.prototype.getVolume = function () {
        console.log("The Volume of the Box is " + this._length * this._breadth * this._height);
    };
    return Box;
}());
exports.Box = Box;
//Whenever a file has import or export keyword in the file then the Typescript considers it as a Module.
