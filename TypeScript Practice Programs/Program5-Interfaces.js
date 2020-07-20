//Bad Practice to pass all properties of a concept as parameters
var box_func = function (length, width, height, area, volume) {
    //...
};
//Here we are passing a the properties of Box into box_prop
var box_func1 = function (box_prop) {
};
box_func1({
    length: 10,
    width: 20,
    height: 30,
    area: 100,
    volume: 300
});
box_func1({
    message: "Hello World",
    name: "Ramesh"
});
//Solution 1
//1.In order to prevent the above from happening we can go for Inline Type Annotation
var box_func2 = function (box_prop) {
    //...
};
box_func2({
    length: 10,
    width: 20,
    height: 30,
    area: 100,
    volume: 300
});
var box_func3 = function (box_obj) {
    //...
};
box_func3({
    length: 10,
    width: 20,
    height: 30,
    area: 100,
    volume: 300
});
