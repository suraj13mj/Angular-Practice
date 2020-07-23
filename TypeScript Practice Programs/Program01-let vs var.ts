function log(message)
{
    console.log(message);
}


function doSomething(){
    for (let i = 0; i < 5; i++)
    {
        console.log(i);
    }

    console.log("Finally :"+i);
}



var message = "Hello World..Welcome to TypeScript...!!!";
log(message);

doSomething();


//variables declared with var keyword have scope to the nearest function.
//i.e var i declared inside for block is even accessible outside the for block i.e within the function

//variables declared with let keyword have scope within the code block