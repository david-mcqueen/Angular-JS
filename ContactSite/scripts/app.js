/**
 * Created by Dave on 20/06/2014.
 */

var app = angular.module('app', []);

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
