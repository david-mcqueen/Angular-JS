/**
 * Created by Dave on 29/06/2014.
 */

var app = angular.module('myApp', []);

app.run(function($rootScope, $timeout){
    $rootScope.isDisabled = true;
    $timeout(function(){
        $rootScope.isDisabled = false;
        $rootScope.myHref = 'http://google.com';
        $rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
    }, 5000);
});

app.controller('SomeController', function($scope) {
    //Best practice, always use a model.
    $scope.someModel = {
        //with a property
        someValue: 'hello computer'
    }
    $scope.someAction = function() {
        $scope.someModel.someValue = 'hello human, from parent';
    };
})
.controller('ChildController', function($scope){
        $scope.childAction = function(){
            $scope.someModel.someValue = 'hello human, from child';
        };
});


function Ctrl($scope) {
    $scope.items = ['settings', 'home', 'other'];
    $scope.selection = $scope.items[0];
}
