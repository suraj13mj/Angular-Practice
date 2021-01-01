var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw_point = function () {
        console.log("X co-ordinate : " + this.x + " Y co-ordinate : " + this.y);
    };
    Point.prototype.getDistance = function (anotherPoint) {
        //...
    };
    return Point;
}());
/*
let point : Point;     //We get error for this, we have explicitly allocate memory using new keyword for the point object
point.x = 10;
point.y = 20;
point.draw_point();
*/
var point = new Point();
point.x = 10;
point.y = 20;
point.draw_point();
