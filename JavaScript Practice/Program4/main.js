//Write a Program to find the Area of Circle

const pi = 3.142;

function areaOfCircle1 (r){
    area = 2 * pi * (r ** 2);
    return area; 
}

let areaOfCircle2 = function(r){
    area = 2 * pi * (r ** 2);
    return area;
};


//Arrow Function

let areaOfCircle3 = ( r ) => {
    area = 2 * pi * (r ** 2);
    return area;
};

let areaOfCircle4 = ( r ) => (2 * pi * (r ** 2));




function testing(task){
    task();
}


// testing()

// testing(areaOfCircle1(10));
// testing(areaOfCircle2(20));
// testing(areaOfCircle3(30));
// testing(areaOfCircle4(40));

// testing(function(radius){
//     area = 2 * pi * (radius ** 2);
//     return area;
// })

testing( (radius) => area = 2 * pi * (radius ** 2));
console.log(area)

