/**
 * Created by tibus on 08/05/15.
 */

var tounControllers = angular.module('tounControllers', []);

/**
 * Home Controller
 */
tounControllers.controller('HomeCtrl', ['$scope', 'App', 'Skills', 'Clients', 'Portfolio',
function ($scope, App, Skills, Clients, Portfolio) {

    $scope.app = App.get();
    $scope.skills = Skills.query();
    $scope.portfolio = Portfolio.all();
    $scope.clients = Clients.get();
}]);

/**
 * Portfolio Controller
 */
tounControllers.controller('PortfolioCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

    $scope.title = 'Mairie de Locronan';
    $scope.details = 'détails des travaux réalisés';
}]);