/**
 * Created by tibus on 08/05/15.
 */

var tounControllers = angular.module('tounControllers', []);

/**
 * Home Controller
 */
tounControllers.controller('HomeCtrl', ['$scope', '$routeParams', 'App', 'Skills', 'Clients', 'Portfolio',
function ($scope, $routeParams, App, Skills, Clients, Portfolio) {

    $scope.isLoading = true;

    $scope.app = App.get();
    $scope.skills = Skills.all();
    $scope.portfolio = Portfolio.all();
    $scope.clients = Clients.get();
    $scope.isLoading = false;
}]);

/**
 * Portfolio Controller
 */
tounControllers.controller('PortfolioCtrl', ['$scope', '$routeParams', 'Portfolio',
function ($scope, $routeParams, Portfolio) {

    $scope.title = '';
    $scope.details = '';
    $scope.images = [];
    $scope.next = '';
    $scope.prev = '';
    $scope.layout = '';

    Portfolio.findById($routeParams.portfolioId, function(data, next, prev) {
        $scope.title = data.title;
        $scope.details = data.description;
        $scope.images = data.image;
        $scope.layout = data.layout;
        $scope.next = next;
        $scope.prev = prev;
    });
}]);