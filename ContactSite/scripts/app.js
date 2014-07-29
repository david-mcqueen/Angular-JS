var app = angular.module('ngRouteExample', ['ngRoute'])



    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            })
            .when('/Company/:bookId', {
                templateUrl: 'templates/company.html',
                controller: 'CompanyController',
//                resolve: {
//                    // I will cause a 1 second delay
//                    delay: function($q, $timeout) {
//                        var delay = $q.defer();
//                        $timeout(delay.resolve, 1000);
//                        return delay.promise;
//                    }
//                }
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