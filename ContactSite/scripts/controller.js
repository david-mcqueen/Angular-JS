/**
 * Created by Dave on 27/07/2014.
 */

app.controller('ContactsController', function($scope, $route, $routeParams, $location, CompanyList){
    $scope.CompanyList = CompanyList;
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    })

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
        console.log("MainController");
    })

    .controller('CompanyController', function($scope, $routeParams) {
        $scope.name = "CompanyController";
        $scope.params = $routeParams;
        console.log("CompanyController");
    })

    .controller('HomeController', function($scope, $routeParams) {
        $scope.name = "HomeController";
        $scope.params = $routeParams;
        console.log("HomeController");
    })

    .controller('ChapterController', function($scope, $routeParams) {
        $scope.name = "ChapterController";
        $scope.params = $routeParams;
    })

    . controller('ParagraphController', function($scope, $routeParams){
        $scope.name = "ParagraphController";
        $scope.params = $routeParams;
    });
