/**
 * Created by Dave on 08/08/2014.
 */

angular.module('myApp', ['ngResource']);

var User = $resource('/api/users/:userId.json',
    {
        userId: '@id'
    }
);






//angular.module('myApp')
//.factory('myInterceptor',
//    function($q){
//        var interceptor = {
//            'request': function(config) {
//                //successful request method
//                return config; //or $q.when(config)
//            },
//            'response': function(response){
//                //successful response
//                return response; //or $q.when(config)
//            },
//            'requestError': function(rejection){
//                //An error happened on the request
//                //if we can recover from the error we can return a new request or promise
//                return response; //or new promise
//                //Otherwise, we can reject the next by returning a rejection
//                //return $q.reject(rejection);
//            },
//            'responseError': function(rejection){
//                //An error happened on the request
//                //if we can recover from the error we can return a new request or promise
//                return rejection; //or new promise
//                //Otherwise, we can reject the next by returning a rejection
//                //return $q.reject(rejection);
//            }
//        };
//        return interceptos;
//    });
//
//angular.module('myApp')
//    .config(function($httpProvider) {
//    $httpProvider.interceptors.push('myInterceptor');
//});