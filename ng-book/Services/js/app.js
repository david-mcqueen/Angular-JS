/**
 * Created by Dave on 29/07/2014.
 */

//var app = angular.module('myApp', ['myApp.services', 'myApp']);


var myApp = angular.module('myApp', [])
    .factory('githubService', function($http) {
        var gitHubUrl = 'https://api.github.com',
            githubUsername = 'david-mcq';

        var runUserRequest = function(path, username) {
            //Return the promise from the $http service
            //that calls the GitHub API JSONP
            return $http({
                method: 'JSONP',
                url: gitHubUrl + '/users/' +
                    username + '/' +
                    path + '?callback=JSON_CALLBACK'
            });
        }
        //return the service object with a sigle function events
        return {
            events: function(username) {
                return runUserRequest('events', username);
            },
            setUsername: function(username){
                githubUsername = username;
            }
        };
    })
    .controller('ServiceController',
        function($scope, $timeout, githubService){

            var timeout;
            //Watch for changes on the username property.
            //If there is a change, run the function
            $scope.$watch('username', function(newUsername){

                if(newUsername){
                    if(timeout) {
                        $timeout.cancel(timeout);
                    }
                    timeout = $timeout(function() {
                        //Use the $http service to call the GitHub API and returns the resulting promise
                        githubService.events(newUsername)
                            .success(function(data, status, headers){

                                $scope.events = data.data;
                            });
                    }, 350); //Timeout of 350ms
                }
            });
        });

