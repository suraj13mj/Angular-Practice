/// <reference path="node_modules/angular/angular.js"

/* 
   1. AngularJS provides several built-in http services. $http service is one of them.
   2. $http service is used to make HTTP requests to a remote server (i.e AJAX calls to the server)
   3. $http service is a function that takes single input paramater i.e Configuration object

*/
var app = angular
                .module("module",[])
                .controller("emp_controller", function($scope, $http, $log){
                    $http({                                                         //$http service is passed config object, with properties method and url
                       method : "GET",                                              //There are many other properties of this config object
                       url: 'https://localhost:44347/api/employees'
                    })
                    .then(function(response){                                  
                     $scope.Employee = response.data;
                     $log.info(response);
                     }); 

                     //OR

                    $http.get('https://localhost:44347/api/employees')              //We can also use http service using the shortcut methods of $http
                         .then(function(response){                                  //Here we are using .get shortcut method (similarly put, post, delete etc)
                            $scope.Employee = response.data;
                            $log.info(response);
                         }); 

                     //Here we are passing only one Anonymous function i.e what happens .get is successfully executed
                     //We can also pass error function to handle if there is error when fetching data from api

                     $http.get('https://localhost:44347/api/employees')
                          .then(function(response){                                    //Success callback
                             $scope.Employee = response.data;
                             $log.info(response);
                          }, function(response){                                       //Error Callback
                             $scope.Error_msg = response.data;
                             $log.info(response);
                          })


                     //OR

                     var successCallback = function(response){
                        $scope.Employee = response.data;
                        $log.info(response);
                     }

                     var errorCallback = function(response){
                        $scope.Error_msg = response.data;
                        $log.info(response);
                     }

                     $http.get('https://localhost:44347/api/employees')
                          .then(successCallback, errorCallback) 
                });


/* 
   1. The $http service function is executed Asynchronously i.e it doesn't the required values immediately
   2. Instead it returns a promise object

   $scope.employees = $http.get('https://localhost:44347/api/employees')

   3. We can't do the above, thus instead we use .then method which gets executed when the response is received.
   4. For this .then method we pass an anonymous function as parameter, which can used for assigning the value of response object received from api to the scope object.
   
   5. The response object has property data that contains the values.

   6. $log service is used to log the response object to the console. We use .info method to log it to console

   7. Default Transformation provided by $http Service
   - If the config object is a Javascript obj then it automatically converts it to JSON format
   - If the response received from webserver is in JSON format then it automatically converts it to Javascript object form.

*/