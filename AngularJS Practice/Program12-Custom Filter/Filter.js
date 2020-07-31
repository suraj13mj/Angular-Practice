

app.filter("customfilter_salary", function(){
    return function(item){
        return "Rs " + item 
    }
})