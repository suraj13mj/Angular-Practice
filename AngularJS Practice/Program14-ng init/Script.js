var app = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var countries = [
                        {
                            "countryName" : "USA",
                            "countryCities" : ["New York","SanFrancisco","Houstan"]
                        },
                        {
                            "countryName": "Britain",
                            "countryCities" : ["London","Manchester","Bristol"]
                        },
                        {
                            "countryName" : "Australia",
                            "countryCities" : ["Melbourne","Sydney","Adelaide"]
                        }
                    ]

                    $scope.Countries = countries;
                })