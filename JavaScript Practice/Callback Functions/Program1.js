// Callback Functions in JavaScript


//Method - 1

function display(interest){
    console.log("Interest :"+interest);
}

function simpleInterest1(p,t,r,disp){
    let i = p * t * r /100;
    disp(i);
}


function main1(){
    let p = 1000, t = 2, r = 14.5;
    simpleInterest(p, t, r, display);
}

main1();




//Method - 2  (Using In-line Function)

function simpleInterest2(p,t,r,disp){
    let i = p * t * r /100;
    disp(i);
}

function main2(){
    let p = 1000, t = 2, r = 14.5;
    simpleInterest2(p, t, r, function(i){
        console.log("Interest : "+i);
    })
}

main2();





//Method - 3 (Using Arrow Function)

function simpleInterest3(p,t,r,disp){
    let i = p * t * r /100;
    disp(i);
}

function main3(){
    let p = 1000, t = 2, r = 14.5;
    simpleInterest3(p, t, r, (i) => console.log("Interest :"+i));
}

main3();

    