
class Point{
    x : number;
    y : number;

    draw_point() {
        console.log("X co-ordinate : " + this.x + " \nY co-ordinate : " + this.y);
    }

    getDistance(anotherPoint : Point) {
        //...
    }
}

/*
let point : Point;     //We get error for this, we have explicitly allocate memory using new keyword for the point object
point.x = 10;
point.y = 20;
point.draw_point();
*/


let point : Point = new Point();       //or  let point = new Point()
point.x = 10;
point.y = 20;
point.draw_point();
