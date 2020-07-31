function delay(ms){
    let d1 = (new Date()).getTime();
    let d2 = d1 + ms;
    while ( d1 < d2 ){
        d1 = (new Date()).getTime();
    }
}


function getUserId(){
    console.log("Fetching User ID");
    delay(2000);
    console.log("Fetched User ID");
    return(1001);
}

function getUSN(uid){
    console.log("Fetching USN");
    delay(3000);
    console.log("Fetched USN");
    return("CS"+uid);
}


function getUserDetails(USN){
    console.log("Fetching User Details");
    delay(3000);
    console.log("Fetched User Details");
    return ("USN : "+ USN + "\nName : Kiran \nBranch : CSE")
}


function main()
{
    let uid = getUserId();
    let usn = getUSN(uid);
    let usrdt = getUserDetails(usn);
    console.log(usrdt);
}


main()