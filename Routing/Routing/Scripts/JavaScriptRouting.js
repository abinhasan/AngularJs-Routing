

var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Partial/home.html',
            controller: 'MainController'
        })

        .when('/about', {
            templateUrl: 'Partial/about.html',
            controller: 'AboutController'
        })

        .when('/contact', {
            templateUrl: 'Partial/contact.html',
            controller: 'ContactController'
        })

        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode(true);
});



testApp.controller('MainController', function ($scope) {
    $scope.message = 'This our home page, have a fun!';
});

testApp.controller('AboutController', function ($scope) {
    $scope.message = 'This our about page, have a fun!';
});

testApp.controller('ContactController', function ($scope) {
    $scope.message = 'This our contact page, have a fun!';
});