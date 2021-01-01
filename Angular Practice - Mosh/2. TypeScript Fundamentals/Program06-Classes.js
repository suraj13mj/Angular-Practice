//The concept of OOPs say the properties (fields) and functions (methods) related to object must be grouped together into Classes.
var draw_point = function (point_obj) {
    //...
};
var getDistance = function (point1, point2) {
    //...
};
//Classes group the fields and methods related to a object into a single class.
//Classes have the implementation
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw_point2 = function () {
        //...
    };
    Point2.prototype.getDistance2 = function (anotherPoint) {
        //...
    };
    return Point2;
}());
