function delay(ms){
    let d1 = (new Date()).getTime();
    let d2 = d1 + ms;
    while ( d1 < d2 ){
        d1 = (new Date()).getTime();
    }
}


start = new Date().getTime();
console.log("Start time :"+start);

delay(5000);

end = new Date().getTime();
console.log("End Time :"+end);


console.log("Difference :"+(end-start));