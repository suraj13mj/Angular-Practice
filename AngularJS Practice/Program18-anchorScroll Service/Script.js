
var app = angular
                .module("myModule", [])
                .controller("myController", function($scope, $location, $anchorScroll){
                    $scope.BrowseTo = function(buttonid){
                        $location.hash(buttonid);
                        $anchorScroll.yOffset = 20;
                        $anchorScroll();
                    }
                });


/*
    1. $anchorScroll service is used to jump ot a specified element on the page
    2. $location service's hash method appends hash fragments to the URL
       Ex: http://localhost:4040/index.html##top
    3. $anchorScroll() reads the hash fragment in the URL and jumps to that element on the page
    4. yOffset property of anchorScroll specifies the vertical scroll-offset from top-margin
*/
