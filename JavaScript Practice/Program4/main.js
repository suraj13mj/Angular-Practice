//Write a program to find area of circle

const pi = 3.142;

function areaOfCircle1 (r){
    area = 2 * pi * (r ** 2);
    return area; 
}

let areaOfCircle2 = function(r){
    area = 2 * pi * (r ** 2);
    return area;
};

let areaOfCircle3 = ( r ) => {
    area = 2 * pi * (r ** 2);
    return area;
};

let areaOfCircle4 = ( r ) => (2 * pi * (r ** 2));



console.log(areaOfCircle1(10));
console.log(areaOfCircle2(20));
console.log(areaOfCircle3(30));
console.log(areaOfCircle4(40));