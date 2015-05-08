/**
 * Created by tibus on 03/05/15.
 */

/**
 * jQuery scroll to anchor animation
 */
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                $('a[href*=#]:not([href=#])').parent().removeClass('active');
                $("a[href='" + this.hash + "']").parent().addClass('active');

                return false;
            }
        }
    });
});

/**
 * AngularJS initialization
 */
var tounApp = angular.module('tounApp', [
    'ngRoute',
    'ngSanitize',
    'ngResource',
    'tounControllers',
    'tounServices'
]);

tounApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
        when('/portfolio/:portfolioId', {
            templateUrl: 'views/portfolio.html',
            controller: 'PortfolioCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);