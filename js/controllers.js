/**
 * Created by tibus on 08/05/15.
 */

var tounControllers = angular.module('tounControllers', []);

/**
 * Home Controller
 */
tounControllers.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.app = {};
    $scope.skills = {};
    $scope.portfolio = {};
    $scope.clients = {};

    $http.get('data/app.json').success(function (app) {
        $scope.app = app;
    });

    $http.get('data/skills.json').success(function (skills) {
        $scope.skills = skills;
    });

    $http.get('data/portfolio.json').success(function (portfolio) {
        $scope.portfolio = portfolio;
    });

    $http.get('data/clients.json').success(function (clients) {
        $scope.clients = clients;
    });

}]);

/**
 * Portfolio Controller
 */
tounControllers.controller('PortfolioCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

}]);