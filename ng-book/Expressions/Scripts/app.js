/**
 * Created by Dave on 22/06/2014.
 */

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $parse){
    $scope.person = {
        name: "David McQueen"
    };

    $scope.$watch('expr', function(newVal, oldVal, scope){
        if(newVal!== oldVal){
            var parseFun = $parse(newVal);
            scope.parsedExpr = parseFun(scope)
        }
    });
});

app.controller('SecondController', function($scope, $interpolate){
    //We have access to both the $scope and $interpolate services

    $scope.to = 'david.mcqueen@gmail.com';
    $scope.from = 'dave.j.mcqueen@gmail.com';
    $scope.emailBody = 'Hello {{ to }}, I am sending this email from {{ from }}';

    //setup a watch
    $scope.$watch('emailBody', function(body){
        if(body){
            var template = $interpolate(body);
            $scope.previewText = template({to: $scope.to, from: $scope.from});
        }
    });
});
