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
    })
    .controller('PeopleController', function($scope){
        $scope.people = [
            {name: "Ari", city: "San Francisco"},
            {name: "Erik", city: "Seattle"},
            {name: "Dave", city: "Manchester"},
            {name: "Sophie", city: "Manchester"}
        ];
    })
    .controller('EquationController', function($scope){
        $scope.equation = {};
        $scope.change = function(){
            $scope.equation.output = Number($scope.equation.x) + 2;
        };
    })
    .controller('FormController', function($scope){
        $scope.fields = [
            {placeholder: 'Username', isRequired: true},
            {placeholder: 'Password', isRequired: true},
            {placeholder: 'Email (optional)', isRequired: false}
        ];
        $scope.submitForm = function() {
            alert("It works!");
        };
    }).controller('CounterController', function($scope){
        $scope.decrement = function(){
            $scope.count = $scope.count - 1;
        }
    }).controller('CityController', function($scope){
        $scope.cities = [
            {name: 'Seattle', population: '1000'},
            {name: 'San Francisco', population: '2000'},
            {name: 'Chicargo', population: '3000'},
            {name: 'New York', population: '4000'},
            {name: 'Boston', population: '5000'},
            {name: 'London', population: '6000'},
            {name: 'Manchester', population: '7000'}
        ];
    }).controller('SubmitFormController', function($scope){
        $scope.person = {
            name: null
        };

        $scope.people = [];

        $scope.submit = function() {
            if ($scope.person.name){
                $scope.people.push({name: $scope.person.name});
                $scope.person.name = '';
            }
        };
    }).controller('LotteryController', function($scope) {
        $scope.generateNumber = function() {
            return Math.floor((Math.random()*10)+1);
        };
    });


function Ctrl($scope) {
    $scope.items = ['settings', 'home', 'other'];
    $scope.selection = $scope.items[0];
}

