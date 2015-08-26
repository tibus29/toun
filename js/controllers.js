/**
 * Created by tibus on 08/05/15.
 */

var tounControllers = angular.module('tounControllers', []);

tounControllers.controller('MenuCtrl', ['$rootScope', '$scope', '$window', 'anchorSmoothScroll',
function($rootScope, $scope, $window, anchorSmoothScroll) {

    var menuList = ['home' , 'skills', 'portfolio', 'clients', 'contact'];
    $scope.currentMenu = 'home';

    // user click to change menu
    $scope.onMenu = function(menuId) {
        anchorSmoothScroll.scrollTo(menuId);
        //$scope.currentMenu = menuId;
    };

    // listen to change menu event
    $rootScope.$on('event:gotoMenu', function(event, menuId) {
        $scope.onMenu(menuId);
    });

    $rootScope.$on('event:displayMenu', function(event, menuId) {
        $scope.currentMenu = menuId;
    });

    // listen to page scroll to automatically change displayed menu
    //TODO: place this code in a service
    $(document).scroll(function() {
        angular.forEach(menuList, function(menuId) {

            var menuYOffset = anchorSmoothScroll.elementYPosition(menuId);
            var pageYOffset = $window.pageYOffset;

            if(menuYOffset <= pageYOffset) {
                $scope.currentMenu = menuId;
                $scope.$apply();
                return;
            }
        });
    });
}]);

/**
 * Home Controller
 */
tounControllers.controller('HomeCtrl', ['$rootScope', '$scope', 'App', 'Skills', 'Clients', 'Portfolio',
function ($rootScope, $scope, App, Skills, Clients, Portfolio) {

    $scope.app = App.get();
    $scope.skills = Skills.all();
    $scope.clients = Clients.get();
    $scope.portfolio = {};

    Portfolio.all(function(portfolio) {
        $scope.portfolio = portfolio;
        angular.forEach(portfolio.items, function(item) {
            console.log(item);
        });
    });

    $scope.gotoMenu = function(menuId) {
        $rootScope.$emit('event:gotoMenu', menuId);
    };

    $rootScope.$emit('event:displayMenu', 'home');
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