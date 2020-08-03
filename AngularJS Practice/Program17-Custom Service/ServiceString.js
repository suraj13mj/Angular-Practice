
app.factory("serviceString", function(){
    return {
        processString : function(input){
            if(!input){
                return input;
            }

            var output_string = "";
            for(i = 0; i < input.length ; i++){
                if(i > 0 && input[i] == input[i].toUpperCase()){
                    output_string = output_string + " ";                              //Append empty space
                }
                output_string = output_string + input[i];
            }

            return output_string;
        }
    }
})


/* 
    1. factory method of angular is used to create custom service.
    2. A Service in AngularJS is a Javascript object with some properties and functions.
    3. Therefore the anonymous function returns a Javascript object which has a function processString in it.
*/
