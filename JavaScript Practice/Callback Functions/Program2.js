//Method - 1 

function areaRectangle(l, b){
    let area = l * b;
    return area;
}

function areaTriangle(b, h){
    let area = 0.5 * b * h;
    return area;
}

function display(area){
    console.log("Area1 :" + area);
}

function area1(dim1, dim2, findArea){
    let a = findArea(dim1,dim2);
    display(a);
}


function main1(){
    area1(3, 5, areaRectangle);
    area1(5, 8, areaTriangle);
}

main1();



/*---------------------------------------------------------------*/

//Method - 2 (Using In-line Function)

function area2(dim1, dim2, findArea, disp){
    let a = findArea(dim1,dim2);  
    disp(a);
}


function main2(){
    area2(3, 5, function(length, breadth){
        return length * breadth; 
    }, function(area){
        console.log("Area2 of Rectangle :" + area);
    })
    area2(5, 8, function(height, breadth){
        return 0.5 * height * breadth;
    }, function(area){
        console.log("Area2 of Triange :" + area);
    })
}

main2()


/*---------------------------------------------------------------*/

//Method - 3 (Using Arrow Function)

function area3(dim1, dim2, findArea, disp){
    let a = findArea(dim1,dim2);
    disp(a);
}


function main3(){
    area3(3, 5, (length, breadth) => length * breadth, (area) => console.log("Area3 of Rectangle :"+area));
    area3(5, 8, (height, breadth) => 0.5 * height * breadth, (area) => console.log("Area3 of Traingle :"+area));
}

main3()