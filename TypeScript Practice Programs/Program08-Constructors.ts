class Point4{
    x : number;
    y : number;

    constructor( x:number, y:number){                   //Constructor is a reserve keyword in TS
        this.x = x;
        this.y = y;
    }

    draw_point() {
        console.log("X co-ordinate : " + this.x + " \nY co-ordinate : " + this.y);
    }
}


let point4 = new Point4(10,20);
point4.draw_point();


//Suppose we want to define the x and y later and not while creating a object
//In Typescript we cannot create multiple constructors like in Java, C#.
//Therefore the solution to this is to make the constructor parameter optional using '?' symbol


class Point5{
    x : number;
    y : number;

    constructor( x ?: number, y ?: number){                   //Optional Parameters in TS
        this.x = x;
        this.y = y;
    }

    draw_point() {
        console.log("X co-ordinate : " + this.x + " \nY co-ordinate : " + this.y);
    }
}


let point5 = new Point5();
point5.x = 10;
point5.y = 20;
point5.draw_point();