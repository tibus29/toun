/**
 * Created by tibus on 08/05/15.
 */

var tounControllers = angular.module('tounControllers', []);

/**
 * Home Controller
 */
tounControllers.controller('HomeCtrl', ['$scope', 'App', 'Skills', 'Clients', 'Portfolio',
function ($scope, App, Skills, Clients, Portfolio) {

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
tounControllers.controller('PortfolioCtrl', ['$scope', '$routeParams', 'Portfolio', function ($scope, $routeParams, Portfolio) {

    $scope.isLoading = true;

    $scope.title = '';
    $scope.details = '';
    $scope.images = [];
    $scope.next = '';
    $scope.prev = '';

    Portfolio.findById($routeParams.portfolioId, function(data, next, prev) {
        $scope.title = data.title;
        $scope.details = data.description;
        $scope.images = data.image;
        $scope.next = next;
        $scope.prev = prev;

        $scope.isLoading = false;
    });
}]);