var Point4 = /** @class */ (function () {
    function Point4(x, y) {
        this.x = x;
        this.y = y;
    }
    Point4.prototype.draw_point = function () {
        console.log("X co-ordinate : " + this.x + " \nY co-ordinate : " + this.y);
    };
    return Point4;
}());
var point4 = new Point4(10, 20);
point4.draw_point();
//Suppose we want to define the x and y later and not while creating a object
//In Typescript we cannot create multiple constructors like in Java, C#.
//Therefore the solution to this is to make the constructor parameter optional using '?' symbol
var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.draw_point = function () {
        console.log("X co-ordinate : " + this.x + " \nY co-ordinate : " + this.y);
    };
    return Point5;
}());
var point5 = new Point5();
point5.x = 10;
point5.y = 20;
point5.draw_point();
