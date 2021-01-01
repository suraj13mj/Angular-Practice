var app = angular
                .module("myModule", [])
                
                .controller("redColorController", function($scope, $rootScope){
                    $scope.redColor = "I am Red Color Controller";
                    $rootScope.rootColor = "I am Root Color Controller";
                })

                .controller("greenColorController", function($scope){
                    $scope.greenColor = "I am Green Color Controller";
                })



/*
    $scope vs $rootScope
    1. properties defined using $scope are only available in that controller scope
    2. properties defined using $rootScope are available to all controllers in that module.

    3. Here $rootScope.rootColor defined in redColorController is even available in greenColorController

*/