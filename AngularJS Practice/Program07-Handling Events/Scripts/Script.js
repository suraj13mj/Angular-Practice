/// <reference path="angular.js" />             

var app = angular
                .module("module",[])
                .controller("likes_controller", function($scope){
                    var technologies = [
                        {
                            "name":"C#",
                            "likes":0,
                            "dislikes":0
                        },
                        {
                            "name":"SQL Server",
                            "likes":0,
                            "dislikes":0
                        },
                        {
                            "name":"AngularJS",
                            "likes":0,
                            "dislikes":0
                        },
                        {
                            "name":"ASP.Net",
                            "likes":0,
                            "dislikes":0
                        }
                    ]
                    $scope.Technologies = technologies;

                    $scope.incrementLikes = function(technology){
                        technology.likes++;
                    };

                    $scope.incrementDislikes = function(technology){
                        technology.dislikes++;
                    };
                });