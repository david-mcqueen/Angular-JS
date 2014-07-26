angular.module('ngRouteExample', ['ngRoute'])

    .controller('MainController', function($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    .controller('BookController', function($scope, $routeParams) {
        $scope.name = "BookController";
        $scope.params = $routeParams;
    })

    .controller('ChapterController', function($scope, $routeParams) {
        $scope.name = "ChapterController";
        $scope.params = $routeParams;
    })

    . controller('ParagraphController', function($scope, $routeParams){
        $scope.name = "ParagraphController";
        $scope.params = $routeParams;
    })

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Book/:bookId', {
                templateUrl: 'templates/book.html',
                controller: 'BookController',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'templates/chapter.html',
                controller: 'ChapterController'
            })
            .when('/Book/:bookId/ch/:chapterId/Paragraph/:paragraphId', {
                templateUrl: 'templates/paragraph.html',
                controller: 'ParagraphController'
            })
            .otherwise({redirectTo: '/'});

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });