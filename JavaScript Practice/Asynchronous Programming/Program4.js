function delay(ms){
    let d1 = (new Date()).getTime();
    let d2 = d1 + ms;
    while ( d1 < d2 ){
        d1 = (new Date()).getTime();
    }
}


function getUserId(consume){
    console.log("Fetching User ID");
    delay(2000);
    console.log("Fetched User ID");
    consume(1001);
}

function getUSN(uid, consume){
    console.log("Fetching USN");
    delay(3000);
    console.log("Fetched USN");
    consume("CS"+uid);
}


function getUserDetails(USN, consume){
    console.log("Fetching User Details");
    delay(3000);
    console.log("Fetched User Details");
    consume("USN : "+ USN + "\nName : Kiran \nBranch : CSE")
}


function main()
{
    getUserId((uid) => {
        getUSN(uid, (usn) => {
            getUserDetails(usn, (usrdt) => {
                console.log(usrdt);
            })
        })
    })
}

main()