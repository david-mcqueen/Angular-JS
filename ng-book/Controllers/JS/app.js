/**
 * Created by Dave on 10/06/2014.
 */

var app = angular.module('app', []);
    app.controller('FirstController', function($scope){
    $scope.message = {
        test: "Hello, this is a Controller"
    };
});

app.controller('SecondController', function($scope){
    $scope.message = {
        test: "This is a test"
    };
});

app.controller('CalcController', function($scope){
    $scope.counter = 0;
    $scope.add = function(amount){
        $scope.counter += amount;
    };
    $scope.subtract = function(amount){
        $scope.counter -= amount;
    };
});

app.controller('MyController', function($scope){
    $scope.person = {
        name: "David McQueen"
    };
});

app.controller('ParentController', function($scope){
    $scope.person = {
        greeted: false
    };
});

app.controller('ChildController', function($scope){
    $scope.sayHello = function(){
        $scope.person.name = "David McQueen";
        $scope.person.greeted = true;
    };
});

app.factory('ContactList', function(){
    var ContactList = {};
    ContactList.contact = [
        {
            name:"Robert Downey Jr.",
            character:"Tony Stark / Iron Man"
        },
        {
            name:"David McQueen",
            character:"Student"
        },
        {
            name:"Craig Foden",
            character:"Student"
        },
        {
            name:"Craig Roddy",
            character:"Student"
        },
        {
            name:"Paul Lombard",
            character:"Cat"
        },
        {
            name:"Bruce",
            character:"Dog"
        }
    ];
    return ContactList;
})

app.controller('ContactsController', function($scope, ContactList){
    $scope.contactList = ContactList;
});

