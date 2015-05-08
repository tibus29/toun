/**
 * Created by tibus on 03/05/15.
 */

/**
 * jQuery scroll to anchor animation
 */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
var app = angular.module('tounApp', ['ngSanitize']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.app = {};
    $scope.skills = {};
    $scope.portfolio = {};
    $scope.clients = {};

    $http.get('data/app.json').success(function(app) {
        $scope.app = app;
    });

    $http.get('data/skills.json').success(function(skills) {
        $scope.skills = skills;
    });

    $http.get('data/portfolio.json').success(function(portfolio) {
        $scope.portfolio = portfolio;
    });

    $http.get('data/clients.json').success(function(clients) {
        $scope.clients = clients;
    });

}]);