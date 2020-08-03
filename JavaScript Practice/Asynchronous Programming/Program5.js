function display(){
    console.log("Hello World");
}


function main1(){
    console.log("Synchronous Programming")
    console.log("Start of Main1");
    display();
    console.log("End of Main1");
}


main1();




function main2(){
    console.log("\nAsynchronous Programming")
    console.log("Start of Main2");
    setTimeout(display, 5000);
    console.log("End of Main2");
}


main2()
