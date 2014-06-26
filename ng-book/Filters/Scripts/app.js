/**
 * Created by Dave on 26/06/2014.
 */

var app = angular.module('myApp.filters', []);

app.filter('capitalise', function(){
    return function(input) {
        //input will be the string we pass in
        if (input){
            return input[0].toUpperCase() + input.slice(1);
        }
    }
});