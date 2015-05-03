/**
 * Created by tibus on 03/05/15.
 */

/**
 * FullPage.js initialization
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['home', 'skills', 'portfolio', 'clients', 'contact'],
        menu: '#mainMenu',
        showActiveTooltips: true
    });
});

/**
 * AngularJS initialization
 */
var app = angular.module('tounApp', ['ngSanitize']);

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.title = '';
    $scope.skills = {};

    $http.get('data/app.json').success(function(app) {
        $scope.title = app.title;
    });

    $http.get('data/skills.json').success(function(skills) {
        $scope.skills = skills;
    });

}]);