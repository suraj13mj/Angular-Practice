
myApp = angular
            .module("myModule",[])
            .controller("myController", function($scope){
                var country = {
                    country_name : "India",
                    country_cap : "New Delhi",
                    flag_path : "Images/indiaflag.jpg"
                };
                $scope.Country = country;
            });