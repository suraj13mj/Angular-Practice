

var app = angular
                .module("myModule", [])
                .controller("myController", function($scope, serviceString){            //inject the custom service : serviceString
                    $scope.transformString1 = function(input){
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

                        $scope.output1 = output_string;
                    }

                    //OR

                    $scope.transformString2 = function(input){
                        $scope.output2 = serviceString.processString(input);
                    }
                })