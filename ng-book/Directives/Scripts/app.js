/**
 * Created by Dave on 29/06/2014.
 */

var app = angular.module('myApp', []);


//This links to the <my-directive> tags
app.directive('myDirective', function(){
    return {
        restrict: 'A', //See below for explanation (1.a)
        template: '<a href="http://www.google.com">' +
            'Click me to go to Google</a>',
        replace: true //Replace will remove the directive tags from the HTML source. False will cause it to wrap.
    }
});

app.directive('newDirective', function(){
    return {
        restrict: 'A',
        replace: true,
        scope: {
            newUrl: '@', //binding stratergy
            newText: '@' //binding stratergy
        },
        template: '<a href="{{newUrl}}">' +
            '{{newText}}</a>'
    }
});



app.run(function($rootScope){
    //use .run to access $rootScope
    $rootScope.rootProperty = 'root scope';
})
.controller('ParentController', function($scope){
    //use .controller to access properties inside ng-controller
    //in the DOM omit $scope, it is inferred based on the current controller
    $scope.parentProperty = 'parent scope';
})
.controller('ChildController', function($scope){
    $scope.childProperty = 'child scope';
    //Just like in the DOM, we can access any of the properties in the
    // prototype chain directly from the current $scope
    $scope.fullSentenceFromChild = 'Same $scope: We can access: ' +
        $scope.rootProperty + ' and ' +
        $scope.parentProperty + ' and ' +
        $scope.childProperty;
});


app.directive('anotherDirective', function(){
    return {
        restrict: 'A',
        replace: true,
        scope: {
            myUrl: '=someAttr', //MODIFIED
            myLinkText: '@'
        },
        template: '\
        <div>\
            <label>My Url Field:</label>\
            <input type="text"\
            ng-model="myUrl" />\
            <a href="{{myUrl}}">{{myLinkText}}</a>\
            </div>\
            '
    }
});

/*
 1.a:

 Directives can be declared in multiple formats and as such have a corresponding 'Restrict' value
 <my-directive></my-directive>       Element (E)
 <div my-directive></div>            Attribute(A) //This is the best for cross browser support
 div class="my-directive"></div>     Class(C)
 <!-- directive: my-directive -->    Comment(M)


 */