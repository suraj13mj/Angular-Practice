//Bad Practice to pass all properties of a concept as parameters

let box_func = (length,width,height,area,volume) => {               
    //...
}



//Here we are passing a the properties of Box into box_prop

let box_func1 = (box_prop) => {                                      
}

box_func1({                                           //Passing the properties of Box 
    length : 10,
    width : 20,
    height : 30,
    area : 100,
    volume : 300
})

box_func1({                                           //Even though we give wrong parameters, there is no error being shown
    message : "Hello World",
    name : "Ramesh"
})


//Solution 1
//1.In order to prevent the above from happening we can go for Inline Type Annotation

let box_func2 = (box_prop: {length:number, width:number, height:number, area:number, volume:number}) => {                  //Custom Type Annotation for Box properties
    //...
}

box_func2({                                           //Passing the properties of Box 
    length : 10,
    width : 20,
    height : 30,
    area : 100,
    volume : 300
})

/*
box_func2({                                        //Here it gives as error
     message : "Hello World",
     name : "Ramesh"
})
*/



//Solution 2
//Using Interfaces

interface Box{
    length : number,
    width : number,
    height : number,
    area : number,
    volume : number
}

let box_func3 = (box_obj : Box) => {                //Best solution; It also can be used in multiple places (Code re-usability)
    //...
}

box_func3({                                           
    length : 10,
    width : 20,
    height : 30,
    area : 100,
    volume : 300
})