/**
 * Created by Dave on 21/07/2014.
 */

angular.module('myApp', [])
    .directive('pane', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: { title:'@' },
            template: '<div style="border: 1px solid black;">' +
                '<div style="background-color: gray">{{title}}</div>' +
                '<ng-transclude></ng-transclude>' +
                '</div>'
        };
    })
    .controller('ExampleController', ['$scope', function($scope) {
        $scope.title = 'Lorem Ipsum';
        $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
    }])
    .directive('sidebox', function(){
        return {
            restrict: 'EA',
            scope: {
                title: '@'
            },
            transclude: true,
            template:
                '<div class="sidebox">' +
                    '<div class="content">' +
                        '<h2 class="header"> {{title}} </h2>' +
                        '<span class="content" ng-transclude></span>' +
                    '</div>' +
                '</div>'
        }

    })
    .controller('MainController', function(){
        this.name = "Dave";
    });