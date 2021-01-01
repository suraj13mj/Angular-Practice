var app = angular
                .module("myModule", [])

                //Using $scope 

                .controller("scope_Country", function($scope){
                    $scope.name = "India"
                })
                .controller("scope_State", function($scope){
                    $scope.name = "Karnataka"
                })
                .controller("scope_City", function($scope){
                    $scope.name = "Hubli"
                })

                //Using Controller As

                .controller("ctrlAs_Country", function(){
                    this.name = "India"
                })
                .controller("ctrlAs_State", function(){
                    this.name = "Maharashtra"
                })
                .controller("ctrlAs_City", function(){
                    this.name = "Pune"
                })